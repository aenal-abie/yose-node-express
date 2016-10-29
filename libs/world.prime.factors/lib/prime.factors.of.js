primeFactorsOf = function(number) {
	var factors = [];
	var fac=2;
	while (number>=2) {
		while (number%fac===0) {
			factors.push(fac);
			number = number / fac;
		}
		fac++;
	}
	return factors;
};

module.exports = primeFactorsOf;
