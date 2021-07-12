import React, { Component, Fragment } from  'react';
import ListComponent from './ListComponent';

class GithubSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            repos: [],
            apiMsg:'',
            userInfo: {}
        }
    };

    handleChange = (e) => {
        this.setState({ username: e.target.value });
        setTimeout(this.handleSubmit, 1000)
    }

    handleSubmit = (e) => {
        fetch(`https://api.github.com/users/${this.state.username}/repos`)
        .then(res => res.json())
        .then(data => {
            console.log('data',data)
            this.setState({repo:data})
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
        console.log(this.state.repo)
        const {
            username,
            repos,
            apiMsg,
            userInfo: {
                avatar_url,
                login,
                html_url
            }
        } = this.state

        return (
            
            <Fragment>
                <div className='header'>Github Search</div>
                <form className='search'>
                    <input 
                        placeholder='Github user'
                        name='github user' 
                        type='text' 
                        onChange={this.handleChange}
                        value={username}
                    />
                    <button onClick={this.handleSubmit} >Search</button>
                </form>
                <p>{apiMsg}</p>

        {
            repos.length > 0 &&
                <Fragment>
                    <div className='user-info'>
                        <img className='img-responsive center-block' src={avatar_url} alt='avatar'/>
                        <h3>{login}</h3>
                        <h4><a href={html_url} target='_blank' rel="noreferrer">{html_url}</a></h4>
                    </div>
                    <div className='right-container'>
                        {this.state.repos.map(repo => <ListComponent key={repo.id} {...repo}/>)}
                    </div>
                </Fragment>
        }
            </Fragment>
            
        )
    }
}

export default GithubSearch;