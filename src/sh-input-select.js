import React from 'react'
import * as _ from 'lodash';

import utilClasses from './util-classes.service.js';

require('./sh-input-select.scss');

class ShInputSelect extends React.Component {
    /** @namespace this.refs.dropdownElement */
    /** @namespace this.refs.mainElement */

    constructor() {
        super();
        this.state = {
            value: null,
            dropdownOpen: false
        };

        this.checkDocumentEvent = this.checkDocumentEvent.bind(this);
        this.inputKeyUp = this.inputKeyUp.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.optionKeyUp = this.optionKeyUp.bind(this);
        this.optionSelect = this.optionSelect.bind(this);
        this.navigateTab = this.navigateTab.bind(this);
    }

    componentWillMount() {
        this.updateState(this.props.value);

        document.addEventListener('click', this.checkDocumentEvent);
        document.addEventListener('keyup', this.checkDocumentEvent);
    }

    componentWillReceiveProps(props) {
        this.updateState(props.value);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.checkDocumentEvent);
        document.removeEventListener('keyup', this.checkDocumentEvent);
    }

    checkDocumentEvent(event) {
        if (this.state.dropdownOpen && !_.includes(event.path, this.refs.mainElement)) {
            this.setState({
                dropdownOpen: false
            });
        }
    }

    updateState(value) {
        if (this.isMulti()) {
            let newValue = this.props.options.filter((option) => {
                return !!_.includes(value, this.getIdField(option));
            });

            this.setState({
                value: newValue
            })
        } else {
            this.setState({
                value: this.getOption(value)
            });
        }
    }

    inputKeyUp(event) {
        console.log('event', event.keyCode);
        switch (event.keyCode) {
            case 32: { // Space
                this.toggleDropdown();
                break;
            }
            case 27: { // Esc
                this.setState({
                    dropdownOpen: false
                });
                break;
            }
            case 40: { // Down Arrow
                this.navigateTab(-1, -1);
            }
        }
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    optionKeyUp(option, index) {
        return (event) => {
            console.log('event', event);
            switch (event.keyCode) {
                case 32: { // Space
                    this.optionSelect(option)();
                    break;
                }
                case 27: { // Esc
                    this.setState({
                        dropdownOpen: false
                    });
                    break;
                }
                case 38: { // Up Arrow
                    this.navigateTab(1, index);
                    break;
                }
                case 40: { // Down Arrow
                    this.navigateTab(-1, index);
                    break;
                }
            }
        }
    }

    navigateTab(direction, index) {
        if (!this.state.dropdownOpen) {
            this.setState({
                dropdownOpen: true
            });
        }

        let currentElement = null;
        if (index < 0) {
            currentElement = this.refs.dropdownElement.lastElementChild;
        } else {
            currentElement = this.refs.dropdownElement.children[index];
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
            if (this.isMulti()) {
                if (_.includes(this.state.value, option)) {
                    let newValue = _.without(this.state.value, option);
                    this.setState({
                        value: newValue
                    });

                    this.props.onChange(newValue.map((value) => {
                        return this.getIdField(value);
                    }));
                } else {
                    let newValue = _.concat(this.state.value, option);
                    this.setState({
                        value: newValue
                    });

                    this.props.onChange(newValue.map((value) => {
                        return this.getIdField(value);
                    }));
                }
            } else {
                let newValue = this.getIdField(option);
                if (!_.isEqual(this.state.value, newValue)) {
                    this.props.onChange(newValue);
                }

                this.setState({
                    dropdownOpen: false,
                    value: newValue
                });
            }
        }
    }

    /**
     * Gets the proper value used to set the value of the select
     * @param option - object to get idField for
     * @returns {*} the value of the idField or the entire object
     */
    getIdField(option) {
        if (this.props.config.idField) {
            return _.get(option, this.props.config.idField);
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
        if (this.props.config.idField) {
            let search = {};
            _.set(search, this.props.config.idField, value);
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
        if (_.isFunction(this.props.config.getDisplay)) {
            return this.props.config.getDisplay(option);
        } else if (_.isString(this.props.config.getDisplay)) {
            return _.get(option, this.props.config.getDisplay);
        } else {
            return JSON.stringify(option);
        }
    }

    isMulti() {
        return this.props.config.type === 'multi';
    }

    render() {
        let mainClasses = {
            shInputSelect: true,
            openDown: true,
            openUp: false,
            closed: !this.state.dropdownOpen,
            opened: this.state.dropdownOpen
        };

        let inputSelected = 'Select';
        if (this.isMulti()) {
            if (this.state.value.length === 0) {
                // Don't do anything
            } else if (this.state.value.length === this.props.options.length) {
                inputSelected = 'All Selected';
            } else if (this.state.value.length === 1) {
                inputSelected = this.getDisplay(this.state.value[0]);
            } else {
                inputSelected = this.state.value.length + ' Selected';
            }
        } else if (this.state.value) {
            inputSelected = this.getDisplay(this.state.value);
        }
        let input = (
            <div className="input" tabIndex="0" onClick={this.toggleDropdown} onKeyUp={this.inputKeyUp}>
                <div className="inputSelected">{inputSelected}</div>
                <i className="icon-chevronDown">V</i>
            </div>
        );

        let options = this.props.options.map((current, index) => {
            let showSelected = null;
            if (this.isMulti()) {
                if (_.includes(this.state.value, current)) {
                    showSelected = <i className="icon-checkboxChecked">X</i>
                } else {
                    showSelected = <i className="icon-checkboxEmpty">O</i>
                }
            }

            return (
                <div key={index} className="option" tabIndex={this.state.dropdownOpen ? 0 : -1} onClick={this.optionSelect(current)} onKeyUp={this.optionKeyUp(current, index)}>
                    {showSelected}
                    <div className="optionDetails">{this.getDisplay(current)}</div>
                </div>
            );
        });

        let dropdownClasses = {
            dropdown: true,
            single: !this.isMulti(),
            multi: this.isMulti()
        };

        let dropdown = (
            <div className="dropdownWrapper">
                <div className={utilClasses.getClassNames(dropdownClasses)} ref="dropdownElement">
                    {options}
                </div>
            </div>
        );

        return (
            <div ref="mainElement" className={utilClasses.getClassNames(mainClasses)}>
                {input}
                {dropdown}
            </div>
        );
    }
}

ShInputSelect.propTypes = {
    value: React.PropTypes.any,
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
    config: React.PropTypes.object
};

ShInputSelect.defaultProps = {
    value: null,
    options: [],
    onChange: _.noop,
    config: {
        getDisplay: (option) => {
            if (_.isObject(option)) {
                if (option.name) {
                    return option.name;
                } else {
                    return JSON.stringify(option);
                }
            } else {
                return option;
            }
        },
        type: 'single',
        idField: null,
    }
};

export default ShInputSelect;
