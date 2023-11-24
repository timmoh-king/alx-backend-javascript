const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('app API test cases', () => {
  const url = 'http://localhost:7865';

  it('should return the correct response', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('should check the cart route', (done) => {
    request.get(`${url}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('should check if the id is not a number', (done) => {
    request.get(`${url}/cart/him`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
