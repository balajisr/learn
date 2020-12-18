# Dependency Injection
> "DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself"

## Why do we need DI?
The main reason is to avoid hard dependency between classes and avoid tight-coupling.

## Injector
Injector will create an instance of our dependency and provide a constructor parameter for our component.

    //injector example
    @Component({
	    selector: 'your-app',
	    templateUrl: './your-app.html',
	    styleUrls: ['./your-app.scss']
    })
    export class YourComponent {
	    constructor(private user:UserService) {}
	    doSomething() {
		    this.user.getData()
		}
	}
	//under the hood
	const userDependency = new userService();
	return new YourComponent(userDependency);

## Injector Hierarchy & Resolution Rules
There are 2 hierarchy in Angular,
 1. Model Injector
 2. Element Injector
### Model Injector
When angular starts it creates a root injector, where our services will be registered which we provided via @Injectable() annotation and services provided in @NgModule() property called *providers*. This makes available across application.

#### Root Injector
    @Injectable({
	    providedIn: 'root'
	})
	export class UserService {}
	@NgModule({
		providers:[UserService]
	})
	export class AppModule() {}

During application bootstraping, Angular creates few more injectors.
#### Platform Injector
Created when we call method *platformBrowserDynamic()*.

    platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
        //main.ts
        //...

#### Null Injector
It throws error is Angular tries to find service here

#### Child Injector
This injector is created for every lazy-loaded module

So the hierarchy in this model is,
    Child Injector -> Root Injector -> Platform Injector -> Null Injector