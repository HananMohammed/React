import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'React'
      }
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleUsernameChange = event=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange = event=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit(event) {
        alert(`username: ${ this.state.username} -- comments: ${ this.state.comments}-- topic: ${ this.state.topic}`);
        event.preventDefault();
    }
render() {
    return (
    <form onSubmit={this.handleSubmit}>
          <div>
              <label>Username</label>
              <input type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}/>
          </div>
          <div>
              <label>Comment</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
          </div>
          <div>
              <label>Topic</label>
              <select value={this.state.topic} onChange={this.handleTopicChange}>
                  <option value="React">React</option>
                  <option value="Angular">Angular</option>
                  <option value="Vue">Vue</option>
              </select>
          </div>
          <button type="submit" value="submit"> Submit </button>
    </form>
    )
}
}

export default Form