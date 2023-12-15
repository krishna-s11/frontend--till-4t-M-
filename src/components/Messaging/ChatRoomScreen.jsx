import React from 'react'
import 'stream-chat-react/dist/css/v2/index.css';
import "./styles/chatRoomScreen.css";
import {
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from 'stream-chat-react';

const ChatRoomScreen = () => {
  return (
    <div className='chatroomscreen'>
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
    </div>
  )
}

export default ChatRoomScreen