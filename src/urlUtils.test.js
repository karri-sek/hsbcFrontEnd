import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
describe('urlUtils ', () => {
    const mockAdapter = new MockAdapter(axios)
    test('should be able to get a response', async () => {
        mockAdapter
            .onGet('/getCities', { params: { letter: 'J' } })
            .reply(200, { noOfCitiesMatched: 4 })
        const axiosResponse = await axios.get('/getCities', {
            params: { letter: 'J' },
        })
        expect(axiosResponse.status).toEqual(200)
        expect(axiosResponse.data.noOfCitiesMatched).toEqual(4)
    })
})
