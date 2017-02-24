import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/lib/ReactTestUtils';
var _ = require('lodash');

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

            root.componentWillUnmount();
        });

        it('displays getDisplay String value', function() {
            let options = [
                {name: 'item1'},
                {name: 'item2'},
                {name: 'item3'},
            ];
            let config = {
                getDisplay: 'title'
            };
            let value = null;
            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config} />);

            expect(root.getDisplay({title: '11'})).toBe('11');
        });

        it('displays getDisplay JSON value', function() {
            let options = [
                {name: 'item1'},
                {name: 'item2'},
                {name: 'item3'},
            ];
            let config = {
                getDisplay: null
            };
            let value = null;
            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config} />);

            expect(root.getDisplay({title: '11'})).toBe('{"title":"11"}');
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

        it('properly use a validator', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let validator = {
                register: _.noop,
                unregister: _.noop,
                validate: _.noop,
            };
            spyOn(validator, 'register');
            spyOn(validator, 'unregister');
            spyOn(validator, 'validate');
            let value = null;

            expect(validator.register).not.toHaveBeenCalled();
            expect(validator.unregister).not.toHaveBeenCalled();
            expect(validator.validate).not.toHaveBeenCalled();

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} validator={validator}/>);

            expect(validator.register).toHaveBeenCalledTimes(1);
            expect(validator.unregister).not.toHaveBeenCalled();
            expect(validator.validate).toHaveBeenCalledTimes(1);

            root.componentWillUnmount();

            expect(validator.register).toHaveBeenCalledTimes(1);
            expect(validator.unregister).toHaveBeenCalledTimes(1);
            expect(validator.validate).toHaveBeenCalledTimes(1);
        });

        it('properly handle required', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let config = {
                required: true
            };
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config}/>);
            expect(root.validate(false).isValid).toBeFalsy();

            root.optionSelect(options[1])();
            expect(root.validate(false).isValid).toBeTruthy();

            root.optionSelect(options[2])();
            expect(root.validate(false).isValid).toBeTruthy();
        });

        it('closes the dropdown when clicking somewhere else on the document', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let config = {
                required: true
            };
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config}/>);
            let rootNode = ReactDOM.findDOMNode(root);

            expect(root.state.dropdownOpen).toBeFalsy();

            root.openDropdown();
            expect(root.state.dropdownOpen).toBeTruthy();

            root.checkDocumentEvent({
                path: [rootNode]
            });
            expect(root.state.dropdownOpen).toBeTruthy();

            root.checkDocumentEvent({
                path: []
            });
            expect(root.state.dropdownOpen).toBeFalsy();
        });

        it('should set touch flag when the select closes not opens', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);
            let rootNode = ReactDOM.findDOMNode(root);

            expect(root.state.statusTouched).toBeFalsy();

            TestUtils.Simulate.click(rootNode.getElementsByClassName('input')[0]);
            TestUtils.Simulate.click(rootNode.getElementsByClassName('input')[0]);
            expect(root.state.statusTouched).toBeTruthy();
        });

        it('prevents default on input hotkeys on keyDown', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);

            let event = {
                preventDefault: _.noop,
                stopPropagation: _.noop
            };
            spyOn(event, 'preventDefault');
            spyOn(event, 'stopPropagation');

            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(event.stopPropagation).not.toHaveBeenCalled();

            event.keyCode = 1;
            root.inputKeyDown(event);
            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(event.stopPropagation).not.toHaveBeenCalled();

            event.keyCode = 32;
            root.inputKeyDown(event);
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
        });

        it('prevents default on option hotkeys on keyDown', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);

            let event = {
                preventDefault: _.noop,
                stopPropagation: _.noop
            };
            spyOn(event, 'preventDefault');
            spyOn(event, 'stopPropagation');

            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(event.stopPropagation).not.toHaveBeenCalled();

            event.keyCode = 1;
            root.optionKeyDown(event);
            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(event.stopPropagation).not.toHaveBeenCalled();

            event.keyCode = 32;
            root.optionKeyDown(event);
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
        });

        it('input hot keys', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);

            let event = {
                preventDefault: _.noop,
                stopPropagation: _.noop
            };
            spyOn(event, 'preventDefault');
            spyOn(event, 'stopPropagation');

            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(event.stopPropagation).not.toHaveBeenCalled();

            event.keyCode = 1;
            root.inputKeyUp(event);
            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(event.stopPropagation).not.toHaveBeenCalled();
            expect(root.state.dropdownOpen).toBeFalsy();

            event.keyCode = 32;
            root.inputKeyUp(event);
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
            expect(root.state.dropdownOpen).toBeTruthy();

            event.keyCode = 27;
            root.inputKeyUp(event);
            expect(root.state.dropdownOpen).toBeFalsy();

            event.keyCode = 40;
            root.inputKeyUp(event);
            expect(root.state.dropdownOpen).toBeTruthy();
        });

        it('option hot keys', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} />);

            let event = {
                preventDefault: _.noop,
                stopPropagation: _.noop
            };
            spyOn(event, 'preventDefault');
            spyOn(event, 'stopPropagation');

            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(event.stopPropagation).not.toHaveBeenCalled();

            event.keyCode = 1;
            root.optionKeyUp(options[1])(event);
            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(event.stopPropagation).not.toHaveBeenCalled();
            expect(root.state.dropdownOpen).toBeFalsy();

            event.keyCode = 40;
            root.optionKeyUp(options[1], -2)(event);
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
            expect(root.state.dropdownOpen).toBeTruthy();

            event.keyCode = 27;
            root.optionKeyUp(options[1])(event);
            expect(root.state.dropdownOpen).toBeFalsy();

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

        it('properly handle required', function() {
            let options = [
                {name: 'item1', fff: 1},
                {name: 'item2', fff: 3},
                {name: 'item3', fff: 5},
            ];
            let config = {
                multiselect: true,
                required: true
            };
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config} />);
            expect(root.validate(false).isValid).toBeFalsy();

            root.optionSelect(options[1])();
            expect(root.validate(false).isValid).toBeTruthy();

            root.optionSelect(options[2])();
            expect(root.validate(false).isValid).toBeTruthy();

            root.optionSelect(options[1])();
            expect(root.validate(false).isValid).toBeTruthy();

            root.optionSelect(options[2])();
            expect(root.validate(false).isValid).toBeFalsy();
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

        it('properly handle required', function() {
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
                tree: true,
                required: true
            };
            let value = null;

            let root = TestUtils.renderIntoDocument(<ShInputSelect value={value} options={options} config={config} />);
            expect(root.validate(false).isValid).toBeFalsy();

            root.optionSelect(options[5])();
            expect(root.validate(false).isValid).toBeFalsy();

            root.optionSelect(options[0])();
            expect(root.validate(false).isValid).toBeTruthy();
        });
    });
});
