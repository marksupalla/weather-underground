/*jshint expr:true*/
/*global describe, it*/

'use strict';

var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe ('Weather', function(){
  describe('.high' ,function(){
    it('should return the high temp for today', function(done){
      Weather.high(37203, function(temp){
      expect(temp).to.be.ok;
      expect(temp.length).to.be.at.least(2);
      done();
      });
    });
  });

  describe('.low' ,function(){
    it('should return the high temp for today', function(done){
      Weather.low(37203, function(temp){
      expect(temp).to.be.ok;
      expect(temp.length).to.be.at.least(2);
      done();
      });
    });
  });
  
  describe('.avghigh' , function(){
    it('should return the avg high for last 10 days', function(done){
      Weather.avghigh(37203, function(avg){
      expect(avg).to.be.ok;
      expect(avg.length).to.be.at.least(2);
      done();
      });
    });
  });
  describe('.avglow' , function(){
    it('should return the avg low for last 10 days', function(done){
      Weather.avglow(37203, function(avg){
      expect(avg).to.be.ok;
      expect(avg.length).to.be.at.least(2);
      done();
      });
    });
  });

  describe('.highs' , function(){
    it('should return list of high temps for last ten days',function(done){
      Weather.highs(37201, function(list){
      expect(list.length).to.equal(10);
      expect(list[0]).to.be.within(-50,150);
      done();
      });
    });
  });

  describe('.lows' , function(){
    it('should return list of low temps for last ten days',function(done){
      Weather.lows(37201, function(list){
      expect(list.length).to.equal(10);
      expect(list[0]).to.be.within(-50,150);
      done();
      });
    });
  });

  describe('.deltas' , function(){
    it('should return list of delta temps for last ten days',function(done){
      Weather.deltas(37201, function(list){
      expect(list.length).to.equal(10);
      expect(list[0]).to.be.within(-50,150);
      done();
      });
    });
  });
  describe('.moons' , function(){
    it('should give us the current phase of the moon', function(done){
      Weather.moons(37201, function(phase){
      expect(phase).to.equal('Crescent');
      done();
      });
    });
  });

});

