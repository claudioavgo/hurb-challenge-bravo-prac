import express from 'express'
import userRoute from './routes/userRoute.js'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})