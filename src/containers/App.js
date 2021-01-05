import React, { Component } from 'react';
import Form from '../components/Form';
import List from '../components/List';

const data = [
    { name: 'Rita Bradley', avatar_url: 'https://avatars3.githubusercontent.com/u/41173740?v=4', company: null },
    {
        name: 'Adam Wathan',
        avatar_url: 'https://avatars2.githubusercontent.com/u/4323180?v=4',
        company: 'Tailwind CSS',
    },
];

class App extends Component {
    state = {
        profiles: data,
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Form />
                <List profiles={this.state.profiles} />
            </div>
        );
    }
}

export default App;
