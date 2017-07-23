/**
 * Created by manit on 23/7/17.
 */
const express = require('express')

const app = express()

app.get('/',(r,s) => s.send("hello"));

app.listen(process.env.PORT, function () {
    console.log(`server started`)
})