const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

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

app.use(todoRoutes)

async function start() {
    try {
        // await mongoose.connect('mongodb+srv://localhost:27017/ltmo6llg//Zavadskiy:@cluster0.usaau.mongodb.net/todos', {
            await mongoose.connect('mongodb+srv://Zavadskiy:g@cluster0.usaau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
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
