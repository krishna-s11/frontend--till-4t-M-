import React, { useState } from 'react';
import Loading from '../components/M_used/Loading';
import api from '../utils/api';

const AccountPage = () => {
  const [success,setSuccess] = useState(false);
  const [oldPass,setOldPass] = useState();
  const [newPass,setNewPass] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try{
      const {data} = await api.put(`/changePassword`,{old_password: oldPass,new_password: newPass, confirm_password: newPass});
      setSuccess(true);
    }catch(e) {
      setError("Error updating password");
      console.log(e);
    }
    setLoading(false);
  }

  console.log(oldPass, newPass);

    return (
        <div className="home_page bg-black py-8 px-6 rounded-2xl">
          <div className="mb-20">
            <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
              <h3  className="text-2xl sm:text-5xl leading-none font-bold">
                My Account
              </h3>
            </div>
            <div style={{marginTop: "50px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", color: "orange", fontWeight: "600"}}>
                <div>
                  <p style={{marginBottom: "20px"}}>Joined: <span style={{color: "orange", fontWeight: "400"}}>Aug 29, 2023</span></p>
                  <p>Last Payment: <span style={{color: "orange", fontWeight: "400"}}>None</span></p>
                </div>
                <div>
                  <p style={{marginBottom: "20px"}}>Membership: <span style={{color: "orange", fontWeight: "400"}}>Limited access</span></p>
                  <p>Expire/Renew Date: <span style={{color: "orange", fontWeight: "400"}}>Jan 20, 2024</span></p>
                </div>
                <div>
                  <p>Days until expiration: <span style={{color: "orange", fontWeight: "400"}}>14 Days</span></p> 
                </div>
            </div>
            <div className='w-full flex justify-center my-20'>
              <button style={{outline: "2px solid #BA0021", padding: "12px 30px", borderRadius: "10px", color: "#BA0021"}}>Delete account</button>
            </div>
            <div className='w-full my-30 px-5 py-7' style={{backgroundColor: "#2A2D37", borderRadius: "10px"}}>
                <h3 className='text-xl font-bold'>Change Password</h3>
                <div>
                  <input type="password" onChange={(e) => {setOldPass(e.target.value)}} placeholder="Old Password" className='w-200 px-5 py-3 border-2 border-gray-300 rounded-md my-5 text-black' />
                  <input type="password" onChange={(e) => {setNewPass(e.target.value)}} placeholder="New Password" className='w-200 px-5 py-3 border-2 border-gray-300 rounded-md my-5 mx-5 text-black' />
                  <button className='primary_btn text-lg' onClick={handleSubmit}>{loading?<Loading />: "Change Password"}</button>
                </div>
                {
                  success?
                    <p style={{marginLeft: "2px", color:"orange"}}>Password has been changed !</p>
                    :null
                  }
                {
                  error.length>0?
                    <p style={{marginLeft: "2px", color:"orange"}}>{error}</p>
                    :null
                  }
            </div>
        </div>
        </div>
      )
}

export default AccountPage