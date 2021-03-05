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

### Webpack config file

1. The entry point of your application
2. Which transformation, if any, to make on your code
3. The location to put the newly formed bundle(s)

**webpack.config.js**
```javascript
module.exports = {
    entry: './app/index.js' //entry point
    module: {
        rules: [ //check loaders below
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader','svg-inline-loader']
            },
            {
                test: /\.{js}$/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
```

## Loaders

Webpack by default can transform only your javascript and json files. It can't handle files like css, svg, etc.. So this is where *loaders* come into play.

For each loader we need to give webpack two types of information,
1. Type of file
2. Loader to use on our file type

So to import svg files, we need to download svg loader
```npm install svg-inline-loader --save-dev```

## Plugins

**Loaders** - Individual files before or while the bundle is being generated
**Plugins** - After the bundle has been created