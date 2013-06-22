var Rainbow = require('../js/rainbow.js');
require('../js/language/javascript.js')(Rainbow);


var mauve = require('mauve');

mauve.set({

	//generic
	'keyword.operator': 'white',
	'string': 'white',
	'constant.character.escape': 'white',
	'comment': 'white',
	'constant.numeric': 'white',
	'keyword': 'white',
	'constant.language': 'white',
	'keyword.operator': 'white',
	'function.call': '#d7af5f',
	'storage.function': '#d7af5f',
	'entity.name.function': '#d7af5f',
	


	//js specific
	'selector': 'white',
	'support': 'white',
	'support.property': 'white',
	'support.function': 'white',
	'support.method': 'white',
	'support.tag.script': 'white',
	'string': 'white',
	'entity.tag.script': 'white',
	'string.regexp': 'white',
	'string.regexp.open': 'white',
	'contstant.regexp.escape': 'white',
	'string.regexp.close': 'white',
	'string.regexp.modifier': 'white',
	'storage': 'red',
	'entity.function': 'white',
	'keyword': 'white',
	'function.anonymous': '#d7af5f',
	'param': "#6B8E23"
});


var code = 'var x = function(param1,param2) {\n' +
	'\t//Log\n' +
	'\tconsole.log(param1);\n' +
	'};'

Rainbow.highlightBlockForLanguage(code,'javascript',function(res) {
	console.log(res);
});
