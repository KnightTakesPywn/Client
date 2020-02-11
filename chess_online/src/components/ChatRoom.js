import React, {Component} from 'react';


class ChatRoom extends Component {
  
  chatSocket = new WebSocket('ws://127.0.0.1:8000/ws/chat/1/');
  
  constructor (props) {
    super(props)
    this.state = {
      chatLog:[],
      message:'',
      username: this.props.username
    };
    
    this.formChange = this.formChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)

  }
  
  componentDidMount () {

    chatSocket.onopen = (e) => {
      console.log(this.state.username)
      chatSocket.send(JSON.stringify({
        'type' : 'newUser',
        'user' : this.state.username
      }))
    }

    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      // var message = data['message'];
      var history = data['history'];
      console.log(history);
      this.setState({
        chatLog:history
      })
    };

    this.chatSocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
    };
  }

  sendMessage () {
    this.chatSocket.send(JSON.stringify({
      'type': 'message',
      'message': this.state.message,
      'user':'React Client'
    }));
    this.setState({
      message:''
    })
  }
    
  formChange (event) {
    const value = event.target.value
    this.setState({
      message:value
    })
  }

  render () {
    let log = this.state.chatLog
    log = log.join('\n')
    return (
      <body>
        <textarea id="chat-log" cols="100" rows="20" value={log}></textarea><br/>
        <input id="chat-message-input" type="text" size="100" value={this.state.message} onChange={this.formChange}/><br/>
        <input id="chat-message-submit" type="button" value="Send" onClick={this.sendMessage}/>
      </body>
    )
  }
}

export default ChatRoom