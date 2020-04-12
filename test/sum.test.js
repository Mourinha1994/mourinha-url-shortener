const sum = require('./sum');

test('adds 1 and 4 and returns 5', () => {
    expect(sum(1, 4)).toBe(5)
});

test('reverse numbers have same result: 5', () => {
    expect(sum(4, 1)).toBe(5);
})