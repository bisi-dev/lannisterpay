import request from 'supertest'
import app from '../src/app'
import { constraint11, constraint12, constraint2 } from './mock/mockConstraint'

describe('Test::', function () {
  it('should not process empty SplitInfo array', async () => {
    const response = await request(app).post('/split-payments/compute').send(constraint11)
    expect(response.statusCode).toBe(400)
  })

  it('should not process SplitInfo array with 21 objects', async () => {
    const response = await request(app).post('/split-payments/compute').send(constraint12)
    expect(response.statusCode).toBe(400)
  })

  it('should not process with negative balance', async () => {
    const response = await request(app).post('/split-payments/compute').send(constraint2)
    expect(response.statusCode).toBe(400)
  })
})
