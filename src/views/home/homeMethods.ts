import { ServiceFactory } from '../../services/serviceFactory'
const HomeService = ServiceFactory.get('home')

export default class HomeMethods {
    public get(): number[] {
        return HomeService.get()
    }

    public getHome(homeId: number): number {
        return HomeService.getHome(homeId)
    }

    public addHome(homes: number[]): void {
        HomeService.postHomes(homes)
    }
}