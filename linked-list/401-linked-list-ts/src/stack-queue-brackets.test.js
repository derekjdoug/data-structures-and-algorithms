import { bracketParser } from "./stack-queue-brackets";

describe('bracketParser', () => {
  it('returns true on valid input', () => {
    const input = '[()]';

    const result = bracketParser(input);

    expect(result).toBe(true);
  })
});
