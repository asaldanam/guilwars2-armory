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

	const gw2ApiOptions = {
		method: 'get',
		headers: new Headers({ Authorization: 'Bearer ' + token })
	};

	// Obtiene la información de cuenta y token de GW2
	const gw2AccountDataFetch = fetch('https://api.guildwars2.com/v2/account', gw2ApiOptions).then((res) => res.json());
	const gw2TokenInfoFetch = fetch('https://api.guildwars2.com/v2/tokeninfo', gw2ApiOptions).then((res) => res.json());
	const gw2AccountCharactersFetch = fetch('https://api.guildwars2.com/v2/characters', gw2ApiOptions).then((res) =>
		res.json()
	);
	const [ gw2AccountData, gw2TokenInfo, gw2AccountCharacters ] = await Promise.all([
		gw2AccountDataFetch,
		gw2TokenInfoFetch,
		gw2AccountCharactersFetch
	]);

	console.log(gw2AccountData, gw2TokenInfo);

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
			...gw2TokenInfo,
			...gw2AccountData,
			characters: gw2AccountCharacters,
			token: token
		})
	}).then((res) => res.json());

	if (saveToDB.token) {
		response.send({
			status: 'OK',
			msg: `User ${gw2AccountData.name} was updated succesfully`
		});
	} else {
		response.status(500).send({
			status: 'KO',
			msg: 'Unspected server error',
			error: saveToDB
		});
	}
});

module.exports = router;
