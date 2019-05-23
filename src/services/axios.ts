import axios from "axios"

const baseDomain = 'https://randomuser.me/api/'
const baseURL = `${baseDomain}/api`

export default axios.create({
    baseURL
})