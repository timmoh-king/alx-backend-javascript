const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('should resolve with the correct response for success using done', (done) => {
    getPaymentTokenFromAPI('True')
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });
});
