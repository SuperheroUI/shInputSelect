import React from 'react';
import * as _ from 'lodash';
import sh from 'sh-core';

import IconCheckboxSelected from './icons/icon-checkbox-selected';
import IconCheckboxUnselected from './icons/icon-checkbox-unselected';
import IconChevronDown from './icons/icon-chevron-down';
import IconChevronLeft from './icons/icon-chevron-left';
import IconChevronRight from './icons/icon-chevron-right';
import  './sh-input-select.scss';

let defaultGetFunction = (option) => {
    if (_.isObject(option)) {
        if (option.name) {
            return option.name;
        } else {
            return JSON.stringify(option);
        }
    } else {
        return option;
    }
};

let defaultConfig = {
    getDisplay: defaultGetFunction,
    getLabelDisplay: defaultGetFunction,
    multiselect: false,
    idField: null,
    tree: false,
    treeHasChildren: (options, option) => {
        return !!_.find(options, {parentId: option.id});
    },
    treeGetChildren: (options, option) => {
        return _.filter(options, {parentId: (option ? option.id : null)});
    },
    required: false,
};

let hotKeys = {
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
};
hotKeys.list = _.values(hotKeys);

class ShInputSelect extends React.Component {
    /** @namespace this.refs.inputElement */
    /** @namespace this.refs.dropdownElement */
    /** @namespace this.refs.mainElement */

    constructor() {
        super();
        this.state = {
            value: null,
            dropdownOpen: false,
            dropdownDirection: 'down',
            config: _.cloneDeep(defaultConfig),
            treePath: [],
            treeCurrentIndex: -1,

            statusValid: false,
            statusTouched: false,
        };

        this.checkDocumentEvent = this.checkDocumentEvent.bind(this);
        this.inputKeyUp = this.inputKeyUp.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.optionKeyUp = this.optionKeyUp.bind(this);
        this.optionSelect = this.optionSelect.bind(this);
        this.navigateTab = this.navigateTab.bind(this);

        this.validate = this.validate.bind(this);
        this.validateAll = this.validateAll.bind(this);
    }

    componentWillMount() {
        if (this.props.validator) {
            this.props.validator.register(this, this.validate);
        }

        this.setState({
            config: _.assign(this.state.config, this.props.config)
        });
        this.updateStateValue(this.props.value);

        document.addEventListener('click', this.checkDocumentEvent);
        document.addEventListener('keyup', this.checkDocumentEvent);
    }

    componentWillReceiveProps(props) {
        this.setState({
            config: _.assign(this.state.config, props.config)
        });
        if (!_.isEqual(this.state.value, props.value)) {
            this.updateStateValue(props.value);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.checkDocumentEvent);
        document.removeEventListener('keyup', this.checkDocumentEvent);

        if (this.props.validator) {
            this.props.validator.unregister(this);
        }
    }

    checkDocumentEvent(event) {
        if (this.state.dropdownOpen && !_.includes(event.path, this.refs.mainElement)) {
            this.closeDropdown();
        }
    }

    updateStateValue(value) {
        if (this.isMulti()) {
            let newValue = this.props.options.filter((option) => {
                return !!_.includes(value, this.getIdField(option));
            });

            this.setState({
                value: newValue
            }, this.validateAll)
        } else {
            this.setState({
                value: this.getOption(value)
            }, this.validateAll);
        }
    }

    checkRequired() {
        if (this.state.config.required) {
            if (this.isMulti()) {
                return !_.isEmpty(this.state.value);
            } else {
                return this.state.value;
            }
        } else {
            return true;
        }
    }

    validate(onSubmit) {
        let rtn = {
            isValid: true
        };


        if (!this.checkRequired()) {
            rtn = {
                isValid: false,
                msg: 'Required'
            };
        }

        this.setState({
            statusValid: rtn.isValid,
            statusTouched: onSubmit || this.state.statusTouched
        });

        return rtn;
    }

    validateAll() {
        if (this.props.validator) {
            this.props.validator.validate();
        } else {
            this.validate();
        }
    }

    inputKeyUp(event) {
        if (_.includes(hotKeys, event.keyCode)) {
            event.preventDefault();
            event.stopPropagation();

            switch (event.keyCode) {
                case hotKeys.space: {
                    this.toggleDropdown();
                    break;
                }
                case hotKeys.esc: {
                    this.closeDropdown();
                    break;
                }
                case hotKeys.down: {
                    this.navigateTab(-1, -2);
                }
            }
        }
    }

    inputKeyDown(event) {
        if (_.includes(hotKeys, event.keyCode)) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    toggleDropdown() {
        if (this.state.dropdownOpen) {
            this.closeDropdown();
        } else {
            this.openDropdown();
        }
    }

    closeDropdown() {
        this.validate(true);
        this.setState({
            dropdownOpen: false
        });
    }

    openDropdown() {
        let dropdownDirection = 'down';
        if (this.refs.mainElement && (window.innerHeight - this.refs.mainElement.getBoundingClientRect().bottom < 300)) {
            dropdownDirection = 'up';
        }

        this.setState({
            dropdownOpen: true,
            dropdownDirection: dropdownDirection
        });
    }

    optionKeyUp(option, index) {
        return (event) => {
            if (_.includes(hotKeys, event.keyCode)) {
                event.preventDefault();
                event.stopPropagation();

                switch (event.keyCode) {
                    case hotKeys.space: { // Space
                        this.optionSelect(option)();
                        break;
                    }
                    case hotKeys.esc: { // Esc
                        this.closeDropdown();
                        break;
                    }
                    case hotKeys.up: { // Up Arrow
                        this.navigateTab(1, index);
                        break;
                    }
                    case hotKeys.down: { // Down Arrow
                        this.navigateTab(-1, index);
                        break;
                    }
                }
            }
        }
    }

    optionKeyDown(event) {
        if (_.includes(hotKeys, event.keyCode)) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    navigateTab(direction, index) {
        if (!this.state.dropdownOpen) {
            this.openDropdown();
        }

        let minIndex = 0;
        if (this.state.treePath.length > 0) {
            minIndex = -1;
        }

        let currentElement = null;
        if (index < minIndex) {
            currentElement = this.refs.dropdownElement.lastElementChild.lastElementChild;
        } else {
            currentElement = this.refs.dropdownElement.lastElementChild.children[index + (-1 * minIndex)];
        }

        let nextElement = null;

        if (direction < 0) {
            nextElement = currentElement.nextElementSibling;

            if (!nextElement) {
                nextElement = currentElement.parentElement.firstElementChild;
            }
        } else {
            nextElement = currentElement.previousElementSibling;

            if (!nextElement) {
                nextElement = currentElement.parentElement.lastElementChild;
            }
        }

        if (nextElement) {
            nextElement.focus();
        }
    }

    /**
     * Select this option
     * @param option
     * @returns {function()} this function does the actual work
     */
    optionSelect(option) {
        return () => {
            if (this.checkTree(option)) {
                this.refs.inputElement.focus();
                if (_.last(this.state.treePath) == option) {
                    this.setState({
                        treeCurrentIndex: this.state.treeCurrentIndex - 1
                    });
                    setTimeout(() => {
                        this.setState({
                            treePath: _.dropRight(this.state.treePath)
                        });
                    }, 550);
                } else {
                    this.setState({
                        treePath: _.concat(this.state.treePath, option)
                    });
                    setTimeout(() => {
                        this.setState({
                            treeCurrentIndex: this.state.treeCurrentIndex + 1
                        });
                    }, 50);
                }
            } else if (this.isMulti()) {
                let newValue;
                if (_.includes(this.state.value, option)) {
                    newValue = _.without(this.state.value, option);
                } else {
                    newValue = _.concat(this.state.value, option);
                }

                this.setState({
                    value: newValue
                }, this.validateAll);

                this.props.onChange(newValue.map((value) => {
                    return this.getIdField(value);
                }));
            } else {
                let newValue = this.getIdField(option);
                this.updateStateValue(newValue);
                this.closeDropdown();

                if (!_.isEqual(this.state.value, newValue)) {
                    this.props.onChange(newValue);
                }
            }
        }
    }

    /**
     * Gets the proper value used to set the value of the select
     * @param option - object to get idField for
     * @returns {*} the value of the idField or the entire object
     */
    getIdField(option) {
        if (this.state.config.idField) {
            return _.get(option, this.state.config.idField);
        } else {
            return option;
        }
    }

    /**
     * Get an option based on value and config
     * @param value - value stored and changed
     * @returns {object} Option that matches passed in value
     */
    getOption(value) {
        if (this.state.config.idField) {
            let search = {};
            _.set(search, this.state.config.idField, value);
            return _.find(this.props.options, search);
        } else {
            return value;
        }
    }

    /**
     * Get the proper displayable string for an option
     * @param option - object to get the display for
     * @returns {string} Visual representation of this option
     */
    getDisplay(option) {
        if (_.isFunction(this.state.config.getDisplay)) {
            return this.state.config.getDisplay(option);
        } else if (_.isString(this.state.config.getDisplay)) {
            return _.get(option, this.state.config.getDisplay);
        } else {
            return JSON.stringify(option);
        }
    }
    /**
     * Get the proper displayable string for an label
     * @param option - object to get the display for
     * @returns {string} Visual representation of this option to be used as label
     */
    getLabel(option) {
        if (_.isFunction(this.state.config.getLabelDisplay)) {
            return this.state.config.getLabelDisplay(option);
        } else if (_.isString(this.state.config.getLabelDisplay)) {
            return _.get(option, this.state.config.getLabelDisplay);
        } else {
            return JSON.stringify(option);
        }
    }

    isMulti() {
        return this.state.config.multiselect;
    }

    isTree() {
        return this.state.config.tree;
    }

    checkTree(option) {
        if (!this.isTree()) {
            return false;
        } else {
            return this.state.config.treeHasChildren(this.props.options, option);
        }
    }

    render() {
        //noinspection JSUnusedLocalSymbols
        let {
            value,
            options,
            onChange,
            config,
            classNames,
            validator,
            ...other
        } = this.props;

        let mainClasses = {
            shInputSelect: true,
            openDown: this.state.dropdownDirection === 'down',
            openUp: this.state.dropdownDirection !== 'down',
            closed: !this.state.dropdownOpen,
            opened: this.state.dropdownOpen,

            shValid: this.state.statusValid,
            shInvalid: !this.state.statusValid,
            shTouched: this.state.statusTouched,
            shUntouched: !this.state.statusTouched,
            other: classNames,
        };

        let inputSelected = 'Select';
        if (this.isMulti()) {
            if (this.state.value.length === 0) {
                // Don't do anything
            } else if (this.state.value.length === this.props.options.length) {
                inputSelected = 'All Selected';
            } else if (this.state.value.length === 1) {
                inputSelected = this.getLabel(this.state.value[0]);
            } else {
                inputSelected = this.state.value.length + ' Selected';
            }
        } else if (this.state.value) {
            inputSelected = this.getLabel(this.state.value);
        }
        let input = (
            <div className="input" ref="inputElement" tabIndex="0" onClick={this.toggleDropdown}
                 onKeyUp={this.inputKeyUp} onKeyDown={this.inputKeyDown} onFocus={this.onFocus}>
                <div className="input-selected">{inputSelected}</div>
                <IconChevronDown />
            </div>
        );

        let generateOptions = (tabable, parentOption) => {
            let preOptions = this.props.options;
            if (this.isTree()) {
                preOptions = this.state.config.treeGetChildren(preOptions, parentOption);
            }

            return preOptions.map((current, index) => {
                let showSelected = null;
                if (this.isMulti()) {
                    if (_.includes(this.state.value, current)) {
                        showSelected = <IconCheckboxSelected />
                    } else {
                        showSelected = <IconCheckboxUnselected />
                    }
                }

                let showTree = null;
                if (this.isTree()) {
                    if (this.state.config.treeHasChildren(this.props.options, current)) {
                        showTree = <div className="tree-forward-icon"><IconChevronRight /></div>
                    }
                }

                let optionDisplay = this.getDisplay(current);

                return (
                    <div key={index} className="option" tabIndex={tabable && this.state.dropdownOpen ? 0 : -1}
                         onClick={this.optionSelect(current)} onKeyUp={this.optionKeyUp(current, index)}
                         onKeyDown={this.optionKeyDown}>
                        {showSelected}
                        <div className="option-details" title={optionDisplay}>{optionDisplay}</div>
                        {showTree}
                    </div>
                );
            });
        };

        let generateDropdownClasses = (index) => {
            return sh.getClassNames({
                dropdown: true,
                multi: this.isMulti(),
                tree: this.isTree(),
                left: index < this.state.treeCurrentIndex,
                current: index === this.state.treeCurrentIndex,
                right: index > this.state.treeCurrentIndex
            });
        };

        let dropdownPages = [];
        if (this.isTree()) {
            dropdownPages.push(
                <div key="dropdown-main" className={generateDropdownClasses(-1)}>
                    {generateOptions(this.state.treePath.length === 0)}
                </div>
            );

            for (let i = 0; i < this.state.treePath.length; i++) {
                let parentOption = this.state.treePath[i];
                let tabable = this.state.treePath.length - 1 === i;
                let treeBack = (
                    <div key="back" className="option back" tabIndex={tabable && this.state.dropdownOpen ? 0 : -1}
                         onClick={this.optionSelect(parentOption)} onKeyUp={this.optionKeyUp(parentOption, -1)}
                         onKeyDown={this.optionKeyDown}>
                        <div className="tree-back-icon"><IconChevronLeft /></div>
                        <div className="option-details">{this.getDisplay(parentOption)}</div>
                    </div>
                );

                dropdownPages.push(
                    <div key={'dropdown-' + i} className={generateDropdownClasses(i)}>
                        {treeBack}
                        {generateOptions(tabable, parentOption)}
                    </div>
                );
            }
        } else {
            dropdownPages.push(
                <div key="dropdown-main" className={generateDropdownClasses(-1)}>
                    {generateOptions(true)}
                </div>
            );
        }

        let dropdownWrapper = (
            <div className="dropdown-wrapper" ref="dropdownElement">
                {dropdownPages}
            </div>
        );

        return (
            <div ref="mainElement" {...other} className={sh.getClassNames(mainClasses)}>
                {input}
                {dropdownWrapper}
            </div>
        );
    }
}

ShInputSelect.propTypes = {
    value: React.PropTypes.any,
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
    config: React.PropTypes.object,
    validator: React.PropTypes.object,
};

ShInputSelect.defaultProps = {
    value: null,
    options: [],
    onChange: _.noop,
    config: defaultConfig,
    validator: null,
};

export default ShInputSelect;
