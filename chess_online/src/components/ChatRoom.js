import React, {Component} from 'react';


class ChatRoom extends Component {

  constructor (props) {
    super(props)
    this.state = {
      chatLog:[],
      message:'',
      username: this.props.username,
      connectedUsers:[]
    };
    
    this.formChange = this.formChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    
  }
  
  chatSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${this.props.room}/`);
  
  componentDidMount () {

    this.chatSocket.onopen = (e) => {
      this.chatSocket.send(JSON.stringify({
        'type' : 'newUser',
        'user' : this.state.username
      }))
    }

    this.chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var history = data['history'];

      this.setState({
        chatLog:history
      })

      this.scrollBar()
    };

    this.chatSocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
    };
  }

  sendMessage (e) {
    e.preventDefault();

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

  // https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up/18614561
  scrollBar () {
    var out = document.getElementById("chat-log");
    var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 25;
    if(isScrolledToBottom){
      out.scrollTop = out.scrollHeight - out.clientHeight;
    }
  }

  render () {
    let log = this.state.chatLog
    log = log.join('\n')
    return (
      <div id="chat-box">
        <textarea id="chat-log" value={log} readOnly></textarea>
        <form id="message-form">
          <input id="chat-message-input" type="text" value={this.state.message} onChange={this.formChange}/>
          <button onClick={this.sendMessage}>Send</button>
        </form>  
      </div>
    )
  }
}

export default ChatRoom