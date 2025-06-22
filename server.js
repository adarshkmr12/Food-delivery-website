import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRoutes from './routes/productRoute.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoute.js'

dotenv.config({})

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log('Server started on Port: ' + port))