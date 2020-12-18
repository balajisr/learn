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
