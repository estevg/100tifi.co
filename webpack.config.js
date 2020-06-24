//permite hacia donde estamos dentro del directorio (l;ocal o nube)
const path = require('path')
// Permite trabajar en el HTML
const HtmlWepackPlugin = require('html-webpack-plugin')
/// Hacer referencia al paqueta
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    //punto de entrada, aqui vivira todo el codigo inicial
    entry: './src/index.js',
     //Donde se va a poner todo este poryecto compuilado listo para enviar a produccion. 
    output: {
        //Se encargara identificar donde se encuentre la carpeta y ahi poner otra carpeta 
        path: path.resolve(__dirname, 'dist'),
        //permite darle nombre al archivo que se va a generar una vez se compile el proyecto
        filename: 'main.js'
    },
    resolve: {
         //usaran todas las extensiones que terminen en js
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                //Reject
                test: /\.js?$/,
                //Exluir la carpeta de node_modules
                exclude: /node_modules/,
                //indicar que se va a utilizar una configuracion prestablecida
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        // se establece el template principal
        new HtmlWepackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: './src/styles/styles.css', to: ''}
                ]
            }
        )
    ]

}