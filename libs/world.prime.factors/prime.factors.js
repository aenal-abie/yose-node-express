var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {

	var number = parseInt(request.query['number']);
	var decomposition;
	if(Number.isInteger(number)){
			decomposition = primeFactorsOf(number);
	} else {
			decomposition = request.query['number'];
	}


	response.setHeader('Content-Type', 'application/json');
    response.send({ number: number, decomposition: decomposition });
};

module.exports = primeFactors;
