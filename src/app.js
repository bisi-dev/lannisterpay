import { isCelebrateError } from 'celebrate'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { errorResponse, successResponse } from './helpers/response'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'LannisterPay TPSS NodeJs API service',
  })
})

app.post('/split-payments/compute', (req, res) => {
  const result = req.body
  return successResponse(res, result)
})

app.use('*', (req, res) => {
  return errorResponse(res, 'Route / Method not supported', 404)
})

app.use((error, _req, res, next) => {
  if (isCelebrateError(error)) {
    const errorMessage = error.details.get('body') || error.details.get('query') || error.details.get('params')

    const message = errorMessage?.message.replace(/"/g, '')
    return errorResponse(res, message)
  }
  next()
})

export default app
