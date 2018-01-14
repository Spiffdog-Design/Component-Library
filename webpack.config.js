var path = require("path"),
    webpack = require("webpack"),
    plugins = [],
    config = {
        isProduction: (process.env.NODE_ENV === 'production'),
        library: 'component-library',
        paths: {
            output: 'index',
            config: 'tsconfig'
        }
    };

if (config.isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    config.paths.output += '.js';
    config.paths.config += '.build.json';
} else {
    config.paths.output += '.js';
    config.paths.config += '.json';
}

module.exports = {
    /* The entry point of the application. Webpack uses this information to create the dependency tree which is used to bundle the scripts.*/
    entry: ['./src/index.tsx'],

    /* Enable source maps */
    devtool: 'inline-source-map',

    /* This information is used to give the name of the bundled file and the location of the bundled file. */
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: config.paths.output,
        library: config.library,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    /* The extensions which will be imported or required in the application scripts. */
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [{
            enforce: 'pre',
            test: /\.tsx?$/,
            use: 'source-map-loader',
            exclude: [/node_modules/, /test/]
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: [/node_modules/, /test/],
            options: {
                configFile: config.paths.config
            }
        }, {
            test: /\.s?css$/,
            use: [{
                // creates style nodes from JS strings
                loader: 'style-loader'
            }, {
                // translates CSS into CommonJS
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: true
                }
            }, {
                // compiles Sass to CSS
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        }]
        /* Define the loaders to be used. Regex will test the type of files on which the loader is to be applied. The excluded files are also mentioned. Loaders are used mainly to preprocess/transpile the file when imported or required in the scripts before bundling. */
    },
    plugins: plugins,
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'react'
        }
    }
};
