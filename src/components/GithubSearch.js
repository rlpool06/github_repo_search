import React, { Component, Fragment } from  'react';
import ListComponent from './ListComponent';

class GithubSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            repos: [],
        }
    };

    handleChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = () => {
        fetch(`https://api.github.com/${this.state.username}/repos`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
        }

    render() {
        const {
            username,
            repos,
        } = this.state

        return (
            <Fragment>
                <div className='header'>Github Search</div>
                <form onSubmit={this.handleChange} className='search'>
                    <input 
                        placeholder='Github user'
                        name='github user' 
                        type='text' 
                        onChange={this.handleSubmit}
                        value={username}
                    />
                    <button type='submit'>Search</button>
                </form>

                {
                    <Fragment>
                        <div className='right-container'>
                            {repos.map ((repo) => {
                                return (
                                    <ListComponent 
                                        name={repo.name}
                                        description={repo.description}
                                        language={repo.language}
                                    />)
                                })};
                        </div>
                    </Fragment>
                }

            </Fragment>
        )
    }
}

export default GithubSearch;