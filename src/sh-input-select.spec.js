var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var ShInputSelect = require('./sh-input-select').default; //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('root', function() {
    it('renders without problems', function() {
        let options = [
            {name: '1'},
            {name: '2'},
            {name: '3'},
        ];
        let value = options[0];
        var root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);
        expect(root).toExist();
    });
});
