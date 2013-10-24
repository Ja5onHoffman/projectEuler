var palindromic = function() {
	var a = [];
	var res = [];
	for (var i = 100; i < 999; i++) {
		a.push(i);
	}
	var ar = a.slice(0);
	a.map(function(x) {
		for (var j = 0; j < ar.length; j++) {
			var result = x * ar[j];
			if (result.toString() === result.toString().split("").reverse().join("")) {
				res.push(result);
			}
		}
	})
	var answer = res.sort().pop();
	res.sort();
	return answer;
};