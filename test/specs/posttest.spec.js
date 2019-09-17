
 import { request } from 'https';

describe('dummy restapi', () => {

    it('post to', function()  {
        request.post('https://dummy.restapiexample.com/create')
        .send({"name":"tester","salary":"114","age":"22"})
        .expect(200)
        .expect('Content-Type', /json/)
        done();
    });
});

    it('should get from', function(done) {
        request.get('https://dummy.restapiexample.com/employee')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function(err, res) {
            if (err) return done(err);
            res.body.should.be.instanceof(Array);
            done();
          });
      });
