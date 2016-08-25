import React from 'react'
import ReactDOM from 'react-dom';

import ShInputSelect from '../bin/sh-input-select';

require('./app.scss');

var config2 = {
    getDisplay: (option) => {
        return option.name + ' - ' + option.desc;
    },
    multiselect: true,
    idField: 'id',
    required: true
};

var config3 = {
    tree: true,
    required: true
};

class App extends React.Component {
    constructor() {
        super();

        this.options = [
            {name: 'New', desc: 'New Contact', id: 1},
            {name: 'Contact', desc: 'Contact already established', id: 2},
            {name: 'Customer', desc: 'Bought Already', id: 3},
        ];

        this.options3 = [
            {name: 'Documents', id: 1, parentId: null},
            {name: 'Pictures', id: 2, parentId: null},
            {name: 'budget.xls', id: 3, parentId: null},
            {name: 'resume.doc', id: 4, parentId: 1},
            {name: 'will.doc', id: 5, parentId: 1},
            {name: 'headshot.jpg', id: 6, parentId: 2},
            {name: 'car.jpg', id: 7, parentId: 2},
            {name: 'selfies', id: 8, parentId: 2},
            {name: 'vegas.jpg', id: 9, parentId: 8},
            {name: 'hawii.jpg', id: 10, parentId: 8},
        ];

        this.state = {
            value1: null,
            value2: [2],
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.update2 = this.update2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    handleChange1(newValue) {
        this.setState({
            value1: newValue
        });
    }

    handleChange2(newValue) {
        this.setState({
            value2: newValue
        });
    }

    update2() {
        this.setState({
            value2: [3]
        });
    }

    handleChange3(newValue) {
        this.setState({
            value3: newValue
        });
    }

    render() {
        return (
            <div>
                <div className="label">Input Text Example: {JSON.stringify(this.state)}</div>
                <div>
                    <button onClick={this.update2}>Update Select 2</button>
                </div>
                <div style={{width: '200px'}}>
                    <ShInputSelect value={this.state.value1} options={this.options} onChange={this.handleChange1} />
                </div>
                <div style={{width: '400px'}}>
                    <ShInputSelect value={this.state.value2} options={this.options} onChange={this.handleChange2} config={config2} />
                </div>
                <div style={{width: '300px'}}>
                    <ShInputSelect value={this.state.value3} options={this.options3} onChange={this.handleChange3} config={config3} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
