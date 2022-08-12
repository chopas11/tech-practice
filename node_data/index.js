const express = require('express')
const userRouter = require('./routes/user.routes')
const coordsRouter = require('./routes/coords.routes')

const PORT = process.env.PORT || 8000

const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello express-postgres')
// })


app.use(express.json())
app.use('/api', userRouter)
app.use('/api', coordsRouter)

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
