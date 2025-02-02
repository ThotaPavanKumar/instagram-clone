import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SignUp.css";
import {isLoading,isSignup,isError} from "../../features/signup/actions";
import {  Navigate } from "react-router-dom";


function SignUpForm(){
    let [formData,setFormData] = useState({});
    const { isloading, signup, iserror } = useSelector((state)=>({
        isloading: state.signup.isloading,
        signup: state.signup.signup,
        iserror: state.signup.iserror
    }));
    const dispatch = useDispatch();
    const handlechange = (e)=>{
        const {name,value} = e.target;

        formData[name] = value;
        setFormData({...formData});
        console.log(formData)

    }
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("aaaaaa")
        dispatch(isLoading());
        console.log(isloading);
        fetch("http://localhost:3005/signup",{
            
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                
                
            }
        })
        .then(res => res.json())
        .then(data =>{
            
            if(data.status==="failed"){
                dispatch(isError(true));
                console.log("d",data);
            }else{
                 dispatch(isSignup(true));
                
                
            }
        })
        .catch(()=>{
            dispatch(isError(true));
        })

    }
    if(signup){
        return < Navigate to={"/"} />;
    }
    return (
        <div className="signup-box">
            <h1>Instagram</h1>
            <h4>Sign up to see photos and videos from your friends.</h4>
            <button>Sign Up with Google</button>
            <div className="or">
                <div>
                    <hr />
                </div>
                <div>
                    <p>OR</p>
                </div>
                <div>
                    <hr />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Mobile Number or Email"onChange={handlechange} />
                <input type="text" name="full_name" placeholder="Full Name" onChange={handlechange}/>
                <input type="text" name="username" placeholder="Username" onChange={handlechange}/>
                <input type="password" name="password" placeholder="Password" onChange={handlechange}/>
                  
                <input type="submit" value={isloading?"loading...":"Sign Up"}  ></input>
            </form>
            {iserror?<p>email or phone already esits</p>:null}
            
            <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        </div>
    )
}

export default SignUpForm;