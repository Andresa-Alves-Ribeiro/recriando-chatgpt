import { useState } from 'react';
import './App.css';
import './styles/reset.css';
import ChatMessage from './components/ChatMessage/ChatMessage'
import SideMenu from './components/SideMenu/Sidemenu'
import { makeRequest } from './api/api'
import { PaperPlaneTilt } from '@phosphor-icons/react'

function App() {
  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "How can I help you today?"
  }])

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await makeRequest({ prompt: input })

    response = response.data.split('\n')
      .map(line => <p>{line}</p>);

    setChatLog([...chatLog, {
      user: 'me',
      message: `${input}`
    }, {
      user: 'gpt',
      message: response
    }])
    setInput("")
  }

  return (
    <div className="App">
      <SideMenu></SideMenu>

      <section className='chatbox'>

        <div className='chat-log'>
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <textarea
              rows='1'
              className='chat-input-textarea'
              value={input}
              onChange={e => setInput(e.target.value)}
            >
            </textarea>
            <button type="submit" className="chat-input-paper-plane" >
              <PaperPlaneTilt size={16} color="#ffffff" weight="bold" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
