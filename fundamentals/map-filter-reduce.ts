// Array methods: map, filter, reduce
const arr: number[] = [1, 2, 3];
const mapped = arr.map(x => x * 2);
const filtered = arr.filter(x => x > 1);
const reduced = arr.reduce((acc, x) => acc + x, 0);
