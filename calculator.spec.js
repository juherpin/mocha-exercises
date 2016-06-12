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

    var wrapper;

    afterEach(() => {
      if(wrapper) wrapper.restore();
    });

    it('should be able to add two integers', () => {
      expect(Calculator.add(2, 2)).to.equal(4);
    });

    it('should be able to add negative numbers', () => {
      expect(Calculator.add(-1, 0)).to.equal(-1);
    });

    it('should be able to add floats', () => {
      expect(Calculator.add(1.5, 1.7)).to.equal(3.2);
    });

    it('should work only with numbers', () => {
      expect(() => { Calculator.add(2, 'a') }).to.throw();
      expect(() => { Calculator.add(null, 1) }).to.throw();
      expect(() => { Calculator.add(undefined, null) }).to.throw();
    });

    it('should call the checkNumbers method', () => {
      wrapper = sinon.spy(Calculator, 'checkNumbers');
      Calculator.add(1, 1);
      expect(wrapper.callCount).to.equal(1);
    });

    it('should throw an error if the checkNumbers method returns false', () => {
      wrapper = sinon.stub(Calculator, 'checkNumbers').returns(false);
      expect(() => { Calculator.add(1, 1) }).to.throw();
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
