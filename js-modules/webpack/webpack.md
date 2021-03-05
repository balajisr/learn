## Webpack Basics

At it's core webpack is a module bundler. It examines all of your modules in your application, creates a dependency graph and then intelligently puts all of them together into one or more bundles that your ```index.html``` can reference to.

### What problem is webpack solving?

JS Scripts | Webpack
--- | ---
Multiple scripts included in ```index.html``` | Including bundle file is enough
Dependency scripts should be in order | Dependency scripts can be a single bundle file
Can face namespacing conflicts | No need to worry on namespacing
Other toolings need to be handled separately | Toolings like SCSS, Babel can be handled

### Installing webpack

```npm install webpack webpack-cli --save-dev```