import request from 'supertest'
import app from '../src/app'
import { rule1, rule1Response, rule2, rule2Response } from './mock/mock'

describe('Test::', function () {
  it('should output accurate splitResponse for rule 1', async () => {
    const result = await request(app).post('/split-payments/compute').send(rule1)

    expect(result.statusCode).toBe(200)
    expect(result.body).toStrictEqual(rule1Response)
  })

  it('should output accurate splitResponse for rule 2', async () => {
    const response = await request(app).post('/split-payments/compute').send(rule2)

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(rule2Response)
  })
})
