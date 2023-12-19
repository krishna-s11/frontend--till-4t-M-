import React, { useEffect, useState } from 'react'
import "./comments.css";
import {FaStar} from "react-icons/fa";
import { IoMdSend } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";
import api from '../../utils/api';
import Replies from './Replies';

const Comments = ({productId, userInfo, product}) => {
    const [rating,setRating] = useState(null);
    const [comment,setComment] = useState();
    const [starHover,setStarHover] = useState();
    const [commentRender,setCommentRender] = useState(true);

    console.log(rating, comment);

    const postComment = async() => {
        const data = {
            productId: productId,
            userId: userInfo._id,
            comment: comment,
            rating: rating,
            userPhoto: userInfo.image,
            username: userInfo.username,
        }
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        await api.post(`/clubs/comment`,data, config);
        setCommentRender(!commentRender)
    } 

    useEffect(() => {
        
    },[commentRender])

    console.log(product.comments)


  return (
    <div className="my-5 w-full p-5 bg-light-grey rounded-lg">
          <p className="text-lg text-orange font-semibold mb-3">Comments</p>
          <div className="rating_container">
              {
                [...Array(5)].map((star,index) => {
                  const currentRating = index + 1;
                  return(
                    <label>
                      <input 
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => {setRating(currentRating)}}
                      />
                      <FaStar 
                        className='rating_star' 
                        color={currentRating <= (starHover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size={20}
                        onMouseEnter={() => {setStarHover(currentRating)}}
                        onMouseLeave={() => {setStarHover(null)}}
                        />
                    </label>
                  )
                })
              }
          </div>
          <input type="text" placeholder="Write a comment" onChange={(e) => {setComment(e.target.value)}} id="comment_box"/>
          <button id="btn_post" onClick={postComment}><IoMdSend /></button>
          <div className='comments_container'>
          {
            product.comments && product.comments.map((comment,i) => {
                return(
                    <div className="main_comment">
                        <div className="comment_head">
                            <div>
                            <img src="/images/boy-avatar.jpg" width="50px" height="50px"/>
                            </div>
                            <div>
                                <div className="rating_container">
                                    {
                                        [...Array(5)].map((star,index) => {
                                        const currentRating = index + 1;
                                        return(
                                            <FaStar 
                                                className='rating_star cm' 
                                                color={currentRating <= (comment.rating) ? "#ffc107" : "#e4e5e9"} 
                                                size={15}
                                            />
                                        )
                                        })
                                    }
                                </div>
                                <p className="comment_username">{comment.username}</p>
                                <div>
                                    <p className="comment_text">{comment.comment}</p>
                                    {/* <Replies /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
          }
          </div>
      </div>
  )
}

export default Comments