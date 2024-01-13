var containsDuplicate = function(nums) {
    const numbersSet = new Set(); 

    nums.forEach(num=>{
        numbersSet.add(num)
    });


return nums.length > numbersSet.size

};


