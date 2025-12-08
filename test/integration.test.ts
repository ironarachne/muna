import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { getRequestListener } from '@hono/node-server';
import app from '../src/index';

const server = getRequestListener(app.fetch);

describe('API', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
      expect(res.text).toContain('This is MUNA');
    });
  });

  describe('GET /race/:race/:nameType/:count', () => {
    it('should return names for valid request', async () => {
      const res = await request(server).get('/race/elf/female/5');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('count', 5);
      expect(res.body).toHaveProperty('names');
      expect(res.body.names).toHaveLength(5);
    });

    it('should return 500 for invalid race', async () => {
      const res = await request(server).get('/race/invalid_race/female/5');
      expect(res.status).toBe(500);
    });

    it('should return 500 for invalid name type', async () => {
      const res = await request(server).get('/race/elf/invalid_type/5');
      expect(res.status).toBe(500);
    });

    it('should return 500 for invalid count', async () => {
      const res = await request(server).get('/race/elf/female/0');
      expect(res.status).toBe(500);
    });
  });
});
