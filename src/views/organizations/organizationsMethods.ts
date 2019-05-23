import { ServiceFactory } from '../../services/serviceFactory'
const OrganizationsService = ServiceFactory.get('organization')

export default class OrganizationsMethods {
    public get(): number[] {
        return OrganizationsService.get()
    }

    public getOrganization(organizationId: number): number {
        return OrganizationsService.getOrganization(organizationId)
    }

    public createOrganization(organizations: number[]): void {
        OrganizationsService.createOrganization(organizations)
    }
}