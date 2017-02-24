import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/lib/ReactTestUtils';

var IconCheckboxSelected = require('./icon-checkbox-selected').default;
var IconCheckboxUnselected = require('./icon-checkbox-unselected').default;
var IconChevronDown = require('./icon-chevron-down').default;
var IconChevronLeft = require('./icon-chevron-left').default;
var IconChevronRight = require('./icon-chevron-right').default;

describe('ShInputSelect - Icons', function() {
    it('IconCheckboxSelected renders', function() {
        var root = TestUtils.renderIntoDocument(<div><IconCheckboxSelected /></div>);
        let rootNode = ReactDOM.findDOMNode(root);
        expect(rootNode.children[0].tagName).toBe('svg');
        expect(rootNode.children[0].classList).toContain('icon-svg');
    });

    it('IconCheckboxUnselected renders', function() {
        var root = TestUtils.renderIntoDocument(<div><IconCheckboxUnselected /></div>);
        let rootNode = ReactDOM.findDOMNode(root);
        expect(rootNode.children[0].tagName).toBe('svg');
        expect(rootNode.children[0].classList).toContain('icon-svg');
    });

    it('IconChevronDown renders', function() {
        var root = TestUtils.renderIntoDocument(<div><IconChevronDown /></div>);
        let rootNode = ReactDOM.findDOMNode(root);
        expect(rootNode.children[0].tagName).toBe('svg');
        expect(rootNode.children[0].classList).toContain('icon-svg');
    });

    it('IconChevronLeft renders', function() {
        var root = TestUtils.renderIntoDocument(<div><IconChevronLeft /></div>);
        let rootNode = ReactDOM.findDOMNode(root);
        expect(rootNode.children[0].tagName).toBe('svg');
        expect(rootNode.children[0].classList).toContain('icon-svg');
    });

    it('IconChevronRight renders', function() {
        var root = TestUtils.renderIntoDocument(<div><IconChevronRight /></div>);
        let rootNode = ReactDOM.findDOMNode(root);
        expect(rootNode.children[0].tagName).toBe('svg');
        expect(rootNode.children[0].classList).toContain('icon-svg');
    });
});
