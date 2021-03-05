## Webpack Basics

At it's core webpack is a module bundler. It examines all of your modules in your application, creates a dependency graph and then intelligently puts all of them together into one or more bundles that your ```index.html``` can reference to.

### What problem is webpack solving?

- Including all the script tags in ```index.html```.
- The scripts should be placed in certain order because of dependencies.

JS Scripts | Webpack
--- | ---
Multiple scripts included in ```index.html``` | Including bundle file is enough
Dependency scripts should be in order | Dependency scripts can be a single bundle file
