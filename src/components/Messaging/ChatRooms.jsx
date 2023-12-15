import React,{useContext, useEffect, useState} from 'react'
import { ChatContext, useChatContext } from '../../Context/ChatContext'
import "./styles/chatRoom.css"
import { ChannelList } from 'stream-chat-react'
import FriendsList from './FriendsList'
import { MdAddComment } from "react-icons/md";
import { IoArrowBackSharp } from "react-icons/io5";

const ChatRooms = () => {
  const options = { state: true, presence: true};
  const sort = { last_message_at: -1 };
  const [friends,setFriends] = useState(0);

  return (
    <div className='chatroom'>
      <div className='chatroom_header'>
          <h1>Chats</h1>
          {
            friends?
            <IoArrowBackSharp onClick={() => {setFriends(0)}} style={{cursor: "pointer"}}/>
            :
            <MdAddComment onClick={() => {setFriends(1)}} style={{cursor: "pointer"}}/>
          }
      </div>
      {
        friends?<FriendsList back={() => {setFriends(0)}}/>
        :
        <ChannelList  />
      }
    </div>
  )
}

export default ChatRooms