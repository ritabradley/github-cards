import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    state = { userName: '' };
    handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className='focus:ring-0 text-indigo-400 placeholder-indigo-200 border-0 border-b-2 border-indigo-400'
                    style={{ caretColor: '#818cf8' }}
                    type='text'
                    value={this.state.userName}
                    onChange={(e) => this.setState({ userName: e.target.value })}
                    placeholder='GitHub username'
                    required
                />
                <button className='bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 text-indigo-50 hover:shadow-md px-4 py-2 ml-4 uppercase transition-all duration-700 ease-in rounded-sm shadow-sm'>
                    Add card
                </button>
            </form>
        );
    }
}

export default Form;
