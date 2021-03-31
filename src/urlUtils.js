// Want to use async/await? Add the `async` keyword to your outer function/method.
import axios from 'axios'

export default async function getCityCount(letter) {
    const getCitiesURL = `${process.env.REACT_APP_BACKEND_URL}/getCities`
    try {
        const response = await axios.get(getCitiesURL, { params: { letter } })
        return response.data
    } catch (error) {
        console.error(error)
    }
}
