const AddTwo = (x, y) => x+y;

describe('AddTwo Unit Test', () => {

    it('2 + 2 equals 4', () => {
        expect(AddTwo(2,2)).toBe(4)
    })

    it('6 + 4 equals 10', () => {
        expect(AddTwo(6,4)).toBe(10)
    })

    it('500000 + 450000 equals 950000', () => {
        expect(AddTwo(500000, 450000)).toBe(950000);
    })
})