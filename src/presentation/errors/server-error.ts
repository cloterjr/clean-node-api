export class ServerError extends Error {
  constructor (stack: string | undefined) {
    super('Internal server error')
    this.name = 'ServerError'
    if (stack) {
      this.stack = stack
    }
  }
}
