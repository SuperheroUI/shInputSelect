var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');

var ShInputSelect = require('./sh-input-select').default;

describe('ShInputSelect', function() {
    describe('single select ', function() {
        it('loads default', function() {
            let options = [
                {name: 'item1'},
                {title: 'item2'},
                'item3',
            ];
            let value = null;
            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);
            let rootNode = ReactDOM.findDOMNode(root);
            let selectedNode = rootNode.getElementsByClassName('input-selected')[0];
            let dropdownNode = rootNode.getElementsByClassName('dropdown-wrapper')[0];

            expect(selectedNode.textContent).toBe('Select');
            expect(dropdownNode.innerHTML).toContain(options[0].name);
            expect(dropdownNode.innerHTML).toContain(options[1].title);
            expect(dropdownNode.innerHTML).toContain(options[2]);
        });

        it('handles click', function() {
            let options = [
                {name: 'item1'},
                {name: 'item2'},
                {name: 'item3'},
            ];
            let value = options[1];
            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);
            let rootNode = ReactDOM.findDOMNode(root);

            expect(root.state.value).toBe(options[1]);
            expect(rootNode.classList).not.toContain('opened');
            expect(rootNode.classList).toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('input')[0]);

            expect(root.state.value).toBe(options[1]);
            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('input')[0]);

            expect(root.state.value).toBe(options[1]);
            expect(rootNode.classList).not.toContain('opened');
            expect(rootNode.classList).toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('input')[0]);

            expect(root.state.value).toBe(options[1]);
            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[0]);

            expect(root.state.value).toBe(options[0]);
            expect(rootNode.classList).not.toContain('opened');
            expect(rootNode.classList).toContain('closed');
        });

        it('updates when props change', function() {
            let options = [
                {name: 'item1'},
                {name: 'item2'},
                {name: 'item3'},
            ];
            let value = options[1];
            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);
            expect(root.state.value).toBe(options[1]);

            root.componentWillReceiveProps({
                value: options[2]
            });

            expect(root.state.value).toBe(options[2]);
        });

        it('select proper using idField', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let config = {
                idField: 'fff'
            };
            let value = 3;
            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config} />);
            let rootNode = ReactDOM.findDOMNode(root);

            expect(root.state.value).toBe(options[1]);

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[2]);

            expect(root.state.value).toBe(options[2]);
        });
    });

    describe('multi select', function() {
        it('should handles clicks properly', function() {
            let options = [
                {name: 'item1'},
                {name: 'item2'},
                {name: 'item3'},
            ];
            let config = {
                multiselect: true
            };
            let value = [options[0]];
            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config} />);
            let rootNode = ReactDOM.findDOMNode(root);

            expect(root.state.value.length).toBe(1);
            expect(rootNode.getElementsByClassName('input-selected')[0].textContent).toBe('item1');
            expect(rootNode.classList).not.toContain('opened');
            expect(rootNode.classList).toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('input')[0]);

            expect(root.state.value.length).toBe(1);
            expect(rootNode.getElementsByClassName('input-selected')[0].textContent).toBe('item1');
            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[0]);

            expect(root.state.value.length).toBe(0);
            expect(rootNode.getElementsByClassName('input-selected')[0].textContent).toBe('Select');
            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[1]);

            expect(root.state.value.length).toBe(1);
            expect(rootNode.getElementsByClassName('input-selected')[0].textContent).toBe('item2');
            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[2]);

            expect(root.state.value.length).toBe(2);
            expect(rootNode.getElementsByClassName('input-selected')[0].textContent).toBe('2 Selected');
            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[0]);

            expect(root.state.value.length).toBe(3);
            expect(rootNode.getElementsByClassName('input-selected')[0].textContent).toBe('All Selected');
            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');
        });
    });

    describe('tree select', function() {
        it('should handles clicks properly', function() {
            let options = [
                {name: 'item1', id: 1, parentId: 4},
                {name: 'item2', id: 2, parentId: 4},
                {name: 'item3', id: 3, parentId: 5},
                {name: 'item4', id: 4, parentId: 6},
                {name: 'item5', id: 5, parentId: 6},
                {name: 'item6', id: 6, parentId: null},
                {name: 'item7', id: 7, parentId: null},
            ];
            let config = {
                tree: true
            };
            let value = null;
            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config} />);
            let rootNode = ReactDOM.findDOMNode(root);

            TestUtils.Simulate.click(rootNode.getElementsByClassName('input')[0]);

            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');
            expect(rootNode.getElementsByClassName('option').length).toBe(2);

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[0]);

            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');
            expect(rootNode.getElementsByClassName('option').length).toBe(5);

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[3]);

            expect(rootNode.classList).toContain('opened');
            expect(rootNode.classList).not.toContain('closed');
            expect(rootNode.getElementsByClassName('option').length).toBe(8);

            TestUtils.Simulate.click(rootNode.getElementsByClassName('option')[7]);

            expect(rootNode.classList).not.toContain('opened');
            expect(rootNode.classList).toContain('closed');
            expect(root.state.value).toBe(options[1]);
        });
    });
});
