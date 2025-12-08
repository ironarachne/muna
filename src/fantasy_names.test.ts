import { describe, it, expect } from 'vitest';
import { getNames } from './fantasy_names';

describe('getNames', () => {
  it('should return correct count and names for valid race and type', () => {
    const result = getNames('elf', 'male', 5);
    expect(result).toHaveProperty('count', 5);
    expect(Array.isArray(result.names)).toBe(true);
    expect(result.names.length).toBe(5);
    result.names.forEach(name => {
      expect(typeof name).toBe('string');
      expect(name.length).toBeGreaterThan(0);
    });
  });

  it('should throw error for invalid count', () => {
    expect(() => getNames('elf', 'male', 0)).toThrow('invalid count');
  });

  it('should throw error for bad name type', () => {
    expect(() => getNames('elf', 'unknown', 3)).toThrow('bad name type');
  });
});
