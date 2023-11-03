import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import 'express-async-errors'
import {connect} from 'mongoose'
import postRoutes from './src/routes/post.js'
import errorHandler from './src/middlewares/errorHandler.js';


/* -------------------------------------------------------------------- */
const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())




// ROUTES
app.use('/posts', postRoutes)





// errorHandler
app.use(errorHandler)

/* ---------------------------------------------------------------------- */
const PORT = process.env.PORT  || 5000
connect(process.env.MONGODB, )
.then(() => app.listen(PORT, console.log(`* Serving running on port ${PORT} *`)))
.catch((err) => console.log('not connected'));







