import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

global.chai = chai;
global.expect = expect;
global.sinon = sinon;

chai.use(sinonChai);
