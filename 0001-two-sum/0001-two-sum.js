var twoSum = function (nums, target) {

    const map1 = new Map();

    for (i = 0; i < nums.length; i++) {

        const remaining = target - nums[i];
        if (map1.has(remaining)) {
            return [i, map1.get(remaining)]
        }
        map1.set(nums[i], i);
    }
};

