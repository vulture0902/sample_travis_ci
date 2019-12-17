var chai = require('chai');
var assert = chai.assert;

var sample = require('../sample');

describe('テストのタイトル', function () {
  it('テスト1 1+2=3 をチェック', function(){ assert.strictEqual(sample(1,2), 3) });
});
