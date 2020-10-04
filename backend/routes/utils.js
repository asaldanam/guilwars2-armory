const utils = {
	accountParser: (account, inverse) => (inverse ? account.replace('-', '.') : account.replace('.', '-'))
};

module.exports = utils;
