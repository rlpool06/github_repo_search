import React, { Component, Fragment } from  'react';
import ListComponent from './ListComponent';

class GithubSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            repos: [],
            apiMsg: '',
            loading: false
        }
    };

    handleChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = (e) => {
        this.setState({loading:true})
        fetch(`https://api.github.com/users/${this.state.username}/repos?per_page=100`, {
            headers: {
                'Authorization': 'token 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'
            },
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                loading: false
            })
            if (data.length) {
                this.setState({
                    repos: data, 
                    username: e.target.value,
                })
            } else {
                this.setState({
                    apiMsg: 'This user has no repos.'
                })
            }
            console.log('data',data)
        })
        .catch(err => {
            this.setState({
                repos: [],
                apiMsg: 'your request is invalid',
                loading: false
            })
        })
    }

    render() {
        const {
            username,
            repos,
            loading,
            apiMsg
        } = this.state

        // const noForks = repos.map(repo => !repo.fork && repo)
        // console.log('noForks', noForks)

        const starCount = repos.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1)
        // console.log('starCount',starCount)

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
                <Fragment>
                    {loading ? <div><h2>...Loading</h2></div> : 
                        apiMsg ? <div><h2>{apiMsg}</h2></div> :
                        (<div className='list-container'>
                            {starCount.map(repo => !repo.fork && <ListComponent key={repo.id} {...repo} />)}                        
                        </div>)
                    }
                </Fragment>
        }
            </Fragment>
            
        )
    }
}

export default GithubSearch;