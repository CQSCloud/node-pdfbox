var scope = {
	pdfbox : __dirname + "/bin/pdfbox-app-1.8.9.jar"
}

module.exports.PDFSplit = function(){
	console.trace('pdfbox: PDFSplit is deprecated, please use pdfSplit instead');
	return require('./lib/PDFSplit').apply(scope, arguments);
};

module.exports.PDFMerger = function(){
	console.trace('pdfbox: PDFMerger is deprecated, please use pdfMerger instead');
	return require('./lib/PDFMerger').apply(scope, arguments);
};

module.exports.pdfSplit = function(){
	return require('./lib/PDFSplit').apply(scope, arguments);
};

module.exports.pdfMerger = function(){
	return require('./lib/PDFMerger').apply(scope, arguments);
};
