import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => await sut.connect(process.env.MONGO_URL ?? 'mongodb://localhost:27017/clean-node-api'))

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if mongodb is down', async () => {
    let accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
  })
})
