import { Express, Router } from 'express'
// import fg from 'fast-glob'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  // fg.sync('**/src/main/routes/**routes.ts').map(async file => (await import(`../../../${file}`)).default(router))
  readdirSync(`${__dirname}/../routes`).filter(file => !file.includes('.test.')).map(async file => (await import(`../routes/${file}`)).default(router))
}
