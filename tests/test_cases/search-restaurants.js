const { expect } = require('chai')
const { init } = require('../steps/init')
const when = require('../steps/when')

describe(`When we invoke the POST /restaurants/search endpoint with theme 'netflix'`, () => {
    before(async () => await init())

    it(`Should return an array of 2 restaurants`, async () => {
        let res = await when.we_invoke_search_restaurants('netflix')

        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.lengthOf(2)

        for (let restaurant of res.body) {
            expect(restaurant).to.have.property('name')
            expect(restaurant).to.have.property('image')
        }
    })
})