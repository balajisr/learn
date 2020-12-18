class UserService {
    sayHi() {
        console.log('hi')
    }
}
class Component {
    constructor(private user: UserService) {}
}

// Angular DI

class Injector {
    private _container = new Map();

    constructor(private _providers: any[] = []) {
        this._providers.forEach(service => this._container.set(service, new service()));
    }

    get(service: any) {
        const serviceInstance = this._container.get(service);
        if(!serviceInstance) {
            throw Error('No provider found');
        }
        return serviceInstance;
    }
}

// Somewhere in application

const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));
console.log(component.user.sayHi());