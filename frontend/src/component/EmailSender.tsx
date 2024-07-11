import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function EmailSender() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 
    const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/users/email", {
        email,
        message
      });
      navigate('/signin');
    } catch (error) {
        console.log(error);
    }
  };
  return(
    <div>
        <div>
            <input type="email" placeholder="example@gmail.com" className = 'w-48' onChange={(e) => {setEmail(e.target.value)}}></input>
            <input type="textarea" placeholder="Your message over here." className = "w-48" onChange={(e) => {setMessage(e.target.value)}}></input>
            <button onClick={ handleSubmit }>sendEmail</button>
        </div>
    </div>
  )
}