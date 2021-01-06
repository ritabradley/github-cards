import React, { Component } from 'react';
import Form from '../components/Form';
import List from '../components/List';

class App extends Component {
    state = {
        profiles: [],
    };
    addNewProfile = (profileData) => {
        this.setState((prevState) => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };
    render() {
        return (
            <div className='place-items-center grid p-10'>
                <h1 className='mb-5 text-4xl font-bold'>{this.props.title}</h1>
                <Form onSubmit={this.addNewProfile} />
                <List profiles={this.state.profiles} />
            </div>
        );
    }
}

export default App;
