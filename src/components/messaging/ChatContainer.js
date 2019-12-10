import React, { Component } from 'react'
import ChatInput from "./ChatInput"
import ChatMessage from "./ChatMessage"

export default class ChatContainer extends Component {
    state = {
        name: "",
        messages: []
    }

    ws = new WebSocket("ws://localhost:3030")

    componentDidMount = () => {
        this.ws.onopen = () => {
            console.log("connected")
        }

        this.ws.onmessage = (evt) => {
            const JSONMessage = JSON.parse("evt.data")
            this.addMessage(JSONMessage)
        }

        this.ws.onclose = () => {
            console.log("disconnected")
            this.setState({
                ...this.state,
                ws: new WebSocket(URL)
            })
        }
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    addMessage = (message) => {
        this.setState(state => ({
            ...this.state,
            messages: [message, ...this.state.messages]
        }))
    }

    submitMessage = (messageString) => {
        const message = {
            name: this.state.name,
            message: messageString
        }

        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }

    renderMessages = (messages) => {
        return messages.map((message, index) => {
            return <ChatMessage key={index} message={message.message} name={message.name} />
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="name">
                    Name:&nbsp;
                    <input type="text" id="state" placeholder="Enter your name..."
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                    />
                </label>
                <ChatInput ws={this.ws} onSubmitMessage={(messageString) => this.submitMessage(messageString)}/>
                {this.renderMessages(this.state.messages)}
            </div>
        )
    }
}
