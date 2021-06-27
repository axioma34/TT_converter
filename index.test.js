const convertArrayToString = require("./index")
const chai = require('chai')
const expect = chai.expect

describe('Working of Range function', function() {
    it('should return 1-8', async function() {
        const result = await convertArrayToString([1, 2, 3, 4, 5, 6, 7, 8])
        expect(result).to.equal('1-8')
    })

    it('should return 1,3-8', async function() {
        const result = await convertArrayToString([1, 3, 4, 5, 6, 7, 8])

        expect(result).to.equal('1,3-8')
    })

    it('should return 1,3-8,10-12', async function() {
        const result = await convertArrayToString([1, 3, 4, 5, 6, 7, 8, 10, 11, 12])

        expect(result).to.equal('1,3-8,10-12')
    })

    it('should return 1-3', async function() {
        const result = await convertArrayToString([1, 2, 3])

        expect(result).to.equal('1-3')
    })

    it('should return 1,2', async function() {
        const result = await convertArrayToString([1, 2])

        expect(result).to.equal('1,2')
    })

    it('should return 1,2,4', async function() {
        const result = await convertArrayToString([1, 2, 4])

        expect(result).to.equal('1,2,4')
    })

    it('should return 1,2,4-6', async function() {
        const result = await convertArrayToString([1, 2, 4, 5, 6])

        expect(result).to.equal('1,2,4-6')
    })

    it('should return 1-3,7-9,15,17,19-21', async function() {
        const result = await convertArrayToString([1, 2, 3, 7, 8, 9, 15 ,17, 19, 20, 21])

        expect(result).to.equal('1-3,7-9,15,17,19-21')
    })

    it('should return 1-6,100,1091,1999-2002', async function() {
        const result = await convertArrayToString([1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002])

        expect(result).to.equal('1-6,100,1091,1999-2002')
    })

    it('should return 1', async function() {
        const result = await convertArrayToString([1])

        expect(result).to.equal('1')
    })

    it('should return 1,3,5,7,9,11', async function() {
        const result = await convertArrayToString([1, 3, 5, 7, 9, 11])

        expect(result).to.equal('1,3,5,7,9,11')
    })
})