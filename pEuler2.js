function fibEvenSum() {
    var a = [1,2];
    var total = 0;
    for (var i = 1; i <= 30; i++) {
    	var j = a[i] + a[i -1];
			a.push(j);
    }
    for (var h = 0; h < a.length; h ++) {
        if (a[h] % 2 === 0) {
            total += a[h];
        }
    }
    return total
}
