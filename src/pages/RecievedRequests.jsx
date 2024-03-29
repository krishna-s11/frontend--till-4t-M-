import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import api from '../utils/api'
import FriendCard from '../components/Cards/FriendCard';

const RecievedRequests = () => {
  const [users,setUsers] = useState([]);
    const {user} = useSelector((state)=>state.auth);
    const [userInfo,setUserInfo]=useState(user);
    const [friends,setFriends] = useState([]);

    const getFriends = async () => {
      const currentUser = await api.get(`/user_details/${user._id}`);
      currentUser.data.friend_requests.map(async ele => {
        const { data } = await api.get(`/user_details/${ele}`);
        setFriends([...friends,data])
      })
  }

  useEffect(() => {
    getFriends()
  },[userInfo.friend_requests])
    return (
        <div className="home_page bg-black py-8 px-6 rounded-2xl">
          <div className="mb-20">
            <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold">
               Friend Requests
              </h3>
              {/* <Link to="/event-page" className="primary_btn !text-sm sm:!text-xl">
                View More
              </Link> */}
            </div>
            <div style={{display: "flex", flexWrap: "wrap",marginTop: "50px"}}>
              {
                friends.length > 0 ?
              (
                friends?.map((friend,i) => {
                  return(
                    <FriendCard data={friend} key={i} request={true} />
                  )
                })
              ):<p>No friends requests yet !</p>}
            </div>
          </div>
      </div>
      )
}

export default RecievedRequests