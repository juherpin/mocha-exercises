import sinon from 'sinon';
import chai from 'chai';
import Calculator from './calculator';

const expect = chai.expect;

describe('some tests', function() {

  describe('initialisation tests', function() {
    it('should be true', () => {
      expect(true).to.equal(true);
    });
  });

  describe('chai assertions', function() {
    it('should be an empty array', () => {
      expect([]).to.be.empty;
    });
    it('should be a string', () => {
      expect('foo').to.be.a.string;
    });
    it('should be similar objects', () => {
      expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
    });
    it('should have foo as key', () => {
      expect({ foo: 'bar' }).to.have.key('foo');
    });
  });

});

describe('calculator class', function() {

  describe('add() method', function() {

    it('should be able to add two integers', () => {
      // Use Calculator "add" method to check that 2+2=4
    });

    it('should be able to add negative numbers', () => {
      // Use Calculator "add" method to check that (-1)+0=-1
    });

    it('should be able to add floats', () => {
      // Use Calculator "add" method to check that 1.5+1.7=3.2
    });

    it('should work only with numbers', () => {
      // 1) Test that 2+'a' throws an exception
      // 2) Test that null + 1 throws an exception
      // 3) Test that undefined + null throws an exception
    });

    it('should call the checkNumbers method', () => {
      // Spy the checkNumbers method to check it's called when doing
      // an addition like 1+1
      // checkNumbers method should be called only once
    });

    it('should throw an error if the checkNumbers method returns false', () => {
      // Stub checkNumbers method to return FALSE
      // Test that an exception is triggered when calling an addition like 1+1
    });

  });

  describe('addVerbose() method', function() {

    it('should return a string', () => {
      expect(Calculator.verboseAdd(2, 2)).to.equal('2 + 2 = 4');
    });

    it('should generate the operation as a string', () => {
      expect(Calculator.verboseAdd(2, 2)).to.be.a('string');
    });

  });

});
