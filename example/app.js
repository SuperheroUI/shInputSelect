import React from 'react'
import ReactDOM from 'react-dom';

import ShInputSelect from '../bin/sh-input-select';

var config2 = {
    getDisplay: (option) => {
        return option.name + ' - ' + option.desc;
    },
    type: 'multi',
    idField: 'id',
};

class App extends React.Component {
    constructor() {
        super();

        this.options = [
            {name: 'New', desc: 'New Contact', id: 1},
            {name: 'Contact', desc: 'Contact already established', id: 2},
            {name: 'Customer', desc: 'Bought Already', id: 3},
        ];

        this.state = {
            value1: null,
            value2: [2],
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.update2 = this.update2.bind(this);
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
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
