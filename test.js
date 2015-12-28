/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var remove = require('./index');

/**
 * Test
 */

describe('whitespace-remove', function() {
  it('should assert argument types', function() {
    remove.bind(remove, 123)
      .should.throw('whitespace-remove: val should be a string');
  });

  it('should strip all whitespace from the string', function() {
    var val = 'foo \n bar \r \n bla bla bla bla';
    remove(val).should.eql('foo\nbar\r\nblablablabla');
  })
});
