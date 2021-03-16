const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

// const PORT = process.evn.PORT || 5000
const PORT = 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('servr up...');
        })
    } catch(e){
        console.log(e);
    }
}

start()
