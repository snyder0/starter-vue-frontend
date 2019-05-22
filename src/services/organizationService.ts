import Axios from "./axios"

const resource = "/organizations"
export default class organizationService {
    createOrganization(organization: object) {
        return Axios.post(`${resource}`, organization)
    }

    get() {
        return Axios.get(`${resource}`)
    }

    getOrganization(organizationId: number) {
        return Axios.get(`${resource}/${organizationId}`)
    }
}