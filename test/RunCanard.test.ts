import { RunCanard } from '../src/RunCanard';
describe('Run Canard', () => {
  it('should be return "glouglou"', () => {
    let runCanard = new RunCanard()
    const result = runCanard.main()
    expect(result).toBe('glouglou')
  })
  it('should be return "coincoin"', () => {
    let runCanard = new RunCanard()
    const result = runCanard.main2()
    expect(result).toBe('coincoin')
  })
})