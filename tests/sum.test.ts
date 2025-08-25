import { describe, expect, it } from 'vitest';
import { sum } from './sum.js';

describe('Example Test', () => {
  it('test', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
