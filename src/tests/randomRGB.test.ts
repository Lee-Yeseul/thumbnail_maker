import { randomRGB } from '../utils/index';

describe('randomRGB', () => {
  test('returns a valid RGB color string', () => {
    const rgb = randomRGB();
    const regex = /^#[a-fA-F0-9]{6}$/;
    expect(regex.test(rgb)).toBe(true);
  });
});
