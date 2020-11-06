'use strict';

const request = required('supertest');
const app = require('../app').getApp;

describe('GET / ', function() {
    it('expects HTTP response 200', function(done) {
        request(app)
            .get('/')
            .expect(200, done);
    })
});