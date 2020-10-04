const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const utils = require('./utils');
const { Headers } = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/', async function(request, response) {
	let token;
	let gw2Username;

	// Valida el body de la petición
	try {
		token = request.body.token;
	} catch (error) {
		response.status(400).send({
			status: 'KO',
			msg: 'Token not provided correctly',
			error
		});
	}

	// Obtiene la información de cuenta y token de GW2
	const url = utils.gw2ApiUrl;
	const gw2ApiOptions = { method: 'get', headers: new Headers({ Authorization: 'Bearer ' + token }) };

	const gw2AccountDataFetch = fetch(url + '/account', gw2ApiOptions).then((res) => res.json());
	const [ gw2AccountData ] = await Promise.all([ gw2AccountDataFetch ]);

	// Comprueba si el token es válido
	try {
		gw2Username = utils.accountParser(gw2AccountData.name);
	} catch (error) {
		response.status(400).send({
			status: 'KO',
			msg: 'Token is not valid',
			error
		});
	}

	// Guarda en Firebase el usuario asociado al token
	const saveToDB = await fetch('https://guildwars2-armory.firebaseio.com/users/' + gw2Username + '.json', {
		method: 'PUT',
		body: JSON.stringify({
			...gw2AccountData,
			token: token
		})
	}).then((res) => res.json());

	if (saveToDB.token) {
		// Devuelve la respuesta final si se ha guardado correctamente
		response.send({
			status: 'OK',
			msg: `User ${gw2AccountData.name} was updated succesfully`
		});
	} else {
		// Devuelve error en caso contrario
		response.status(500).send({
			status: 'KO',
			msg: 'Unspected server error',
			error: saveToDB
		});
	}
});

module.exports = router;
