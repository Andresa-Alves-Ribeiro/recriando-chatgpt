import axios from "axios"

const URL_API = 'https://recriando-chatgpt-server.onrender.com/api/prompt'

export const makeRequest = async (message) => {
    const {data} = await axios.post(URL_API, message)

    return data
}