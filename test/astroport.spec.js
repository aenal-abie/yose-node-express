var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../libs/server');

describe('Passing the astroport level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    //tambahan mendapatkan file header dengan a#contact-me-link
    it('contain element astroport',function(done){
        request('http://localhost:7000/astroport', function(error,response, body){
            expect(body).to.contain('id="astroport-name"');
            done();
        })
    })

   //tambahan mendapatkan file header dengan a#contact-me-link
    it('contain element input #ship and button #dock',function(done){
        request('http://localhost:7000/astroport', function(error,response, body){
            //expect(document.getElementById("ship")).to.equal('ship');
            expect(body).to.contain('<button id="dock"');
            expect(body).to.contain('id="ship"');
            done();
        })
    })
    
});