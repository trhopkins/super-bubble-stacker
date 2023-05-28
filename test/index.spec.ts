import printMe from '../src/print'

describe('Simple expression tests', () => {
  test('Check literal value', () => {
    expect(printMe(2, 2)).toEqual(4)
  })
})
