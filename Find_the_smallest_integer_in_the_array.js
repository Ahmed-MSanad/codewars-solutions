class SmallestIntegerFinder {
    findSmallestInt(args) {
        // return Math.min(...args);

        // return Math.min.apply(null, args);

        // let min = args[0];
        // args.forEach(item => min = item < min ? item : min);
        // return min;

        // return args.reduce((acu,cur) => cur < acu ? cur : acu , args[0]);

        return args.sort((a,b) => a-b).at(0);
    }
}

const obj = new SmallestIntegerFinder();

// console.log(obj.findSmallestInt([2,4,1,6,5,9]));