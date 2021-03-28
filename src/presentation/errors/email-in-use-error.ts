export class EmailInUseError extends Error {
  constructor () {
    super('THre received email is already in use')
    this.name = 'EmailInUseError'
  }
}
