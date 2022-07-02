import request from 'supertest'
import app from '../src/app'
import { samplePayload, samplePayloadResponse } from './mock/mock'

describe('Test::', function () {
  it('should not process invalid payload', async () => {
    const response = await request(app).post('/split-payments/compute').send({})
    expect(response.statusCode).toBe(400)
  })

  it('should process valid payload', async () => {
    const result = await request(app).post('/split-payments/compute').send(samplePayload)

    expect(result.statusCode).toBe(200)
    expect(result.body).toStrictEqual(samplePayloadResponse)
  })
})
