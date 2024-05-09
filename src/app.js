console.log('Express server started!')

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath =    path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs') // npm i hbs@4.0.1
app.set('views', viewsPath) //const viewsPath = path.join(__dirname, '../templates')
hbs.registerPartials(partialsPath) //use partials

//setup static directory to serve
app.use(express.static(publicDirectoryPath)) 

app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather app',
        name: 'Joseph Castillo',
        footer: 'Weather footer'
    }) //name of the template in the views folder
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About page',
        name: 'Joseph Castillo',
        footer: 'About footer'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Joseph Castillo',
        footer: 'Help footer'
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Joseph Castillo',
        errorMessage: 'Help article not found.'
    })
})

// app.get('', (req, res)=>{
//     res.send('Hello express!')
// })

// app.get('/help', (req, res)=>{
//     res.send([{name: 'joseph'}, {name: 'lanie'}])
// })

// app.get('/about', (req, res)=>{
//     res.send('Help about!')
// })

app.get('*',(req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Joseph Castillo',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, ()=> {
    console.log('Server is up on port 3000')

    console.log(publicDirectoryPath)
});