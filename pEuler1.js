function pEone (num) {
    var a = [];
    var total = 0;
    while (num > 0) {
        num--;
        if (num % 3 === 0 || num % 5 === 0) {
            a.push(num);
        }
    }
    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    return total;
}