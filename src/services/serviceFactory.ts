import ValueService from "./valueService"

const services: any = {    
    value: new ValueService(),
};

export const ServiceFactory = {
    get: (name: string) => {
        return services[name];
    }
};
