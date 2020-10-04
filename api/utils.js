const utils = {
	gw2ApiUrl: 'https://api.guildwars2.com/v2',
	accountParser: (account, inverse) => (inverse ? account.replace('-', '.') : account.replace('.', '-'))
};

module.exports = utils;
