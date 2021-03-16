const express = require('express')

// const PORT = process.evn.PORT || 5000
const PORT = 3000

const app = express()

app.listen(PORT, () => {
    console.log('servr up...');
})