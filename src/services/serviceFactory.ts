import ValueService from './valueService'
import OrganizationService from './organizationService'

const services: any = {    
    value: new ValueService(),
    organization: new OrganizationService(),
};

export const ServiceFactory = {
    get: (name: string) => {
        return services[name];
    }
};
