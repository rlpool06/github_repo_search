import React, { Component, Fragment } from  'react';
import ListComponent from './ListComponent';

class GithubSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            repos: [],
            userInfo: {}
        }
    };

    handleChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = (e) => {
        fetch(`https://api.github.com/users/${this.state.username}/repos`, {
            headers: {
                'Authorization': 'token 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'
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log('data',data)
            this.setState({repos:data})
            this.setState({ username: e.target.value })
        })
        .catch(err => {
            this.setState({
                repos: [],
                apiMsg: err.message
            })
        })
    }

    render() {
        console.log('render', this.state.repos)
        const {
            username,
            repos,
        } = this.state

        return (
            
            <Fragment>
                <div className='header'>Github Search</div>
                    <div className='search'>
                        <input 
                            placeholder='Github user'
                            name='github user' 
                            type='text' 
                            onChange={this.handleChange}
                            value={username}
                        />
                        <button onClick={this.handleSubmit} >Search</button>
                    </div>
        {
            repos.length > 0 &&
                <Fragment>
                    <div className='list-container'>
                        <div className='col'>
                            {this.state.repos.map(repo => !repo.fork && <ListComponent key={repo.id} {...repo} />)}                        
                        </div>
                    </div>
                </Fragment>
        }
            </Fragment>
            
        )
    }
}

export default GithubSearch;