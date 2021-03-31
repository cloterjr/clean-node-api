import { HttpRequest, Validation } from './add-survey-controller-protocols'
import { AddSurveyController } from './add-survey-controller'

describe('AddSurvey Controller', () => {
  const makeFakeRequest = (): HttpRequest => ({
    body: {
      question: 'any_question',
      answer: [{
        image: 'ay_image',
        answer: 'any_answer'
      }]
    }
  })

  const makeValidation = (): Validation => {
    class ValidationStub implements Validation {
      validate (input: any): Error | null {
        return null
      }
    }

    return new ValidationStub()
  }

  interface SutTypes {
    sut: AddSurveyController
    validationStub: Validation
  }

  const makeSut = (): SutTypes => {
    const validationStub = makeValidation()
    const sut = new AddSurveyController(validationStub)
    return {
      sut,
      validationStub
    }
  }

  test('Should call Validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)

    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })
})
