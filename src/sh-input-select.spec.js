var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');

var ShInputSelect = require('./sh-input-select').default;

describe('root', function() {
    it('should be happy', function() {
        expect(1).toBe(1);
    });

    it('renders without problems', function() {
        let options = [
            {name: '1'},
            {name: '2'},
            {name: '3'},
        ];
        let value = options[0];
        var root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);
        expect(root != null).toBeTruthy();
    });
});
