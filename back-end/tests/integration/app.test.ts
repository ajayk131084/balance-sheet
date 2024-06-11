import request from 'supertest';
import { app, Shutdown } from '../../src/app';

describe('Application', () => {
    afterAll((done) => {
        Shutdown(done);
    });

    it('Starts and has the proper test environment', async () => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(app).toBeDefined();
    }, 10000);

    it('Returns 404 when the route requested is not found.', async () => {
        const response = await request(app).get('/a/cute/route/that/does/not/exist/');

        expect(response.status).toBe(404);
    }, 10000);
});
