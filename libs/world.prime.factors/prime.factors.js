var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {

	var number = parseInt(request.query['number']);
	var pesan;
	var decomposition;
	if(Number.isInteger(number)){
			decomposition = primeFactorsOf(number);
			pesan = { number: number, decomposition: decomposition };
	} else {
			decomposition = request.query['number'];
			pesan  = {number:decomposition , "error" : "not a number"};
	}


	response.setHeader('Content-Type', 'application/json');
    response.send(pesan);
};

module.exports = primeFactors;
