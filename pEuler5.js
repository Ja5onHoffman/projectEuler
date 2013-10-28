var smallestMultiple = function() {
	var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	var i = 21;
	var j = 0;
	while (j < nums.length) {
		if (i % nums[j] === 0) {
		j++;
	} else {
		i++
		j = 0;
	}
 }
 return i;
}