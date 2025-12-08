import { describe, it, expect } from 'vitest';
import app from './index';

describe('API root', () => {
  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});

