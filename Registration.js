import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Log_in.css';
import './Registration.css';
import './fireworks.css';
import info from "./Info.js";

function Registration() {

  const [error, setError] = useState("");
  const uppercaseRegExp   = /(?=.*?[A-Z])/;
  const lowercaseRegExp   = /(?=.*?[a-z])/;
  const digitsRegExp      = /(?=.*?[0-9])/;
  const minLengthRegExp   = /.{8,}/;

  let navigate = useNavigate();

  var inputspaces = document.getElementsByTagName("input");
  useEffect (()=>{
    if(error === "success") {
      navigate("/chat?username=" + inputspaces[0].value);
    }
  });  
  const register = (event) => {
  
    event.preventDefault();
    const passwordLength =      inputspaces[1].value.length;
    const uppercasePassword =   uppercaseRegExp.test(inputspaces[1].value);
    const lowercasePassword =   lowercaseRegExp.test(inputspaces[1].value);
    const digitsPassword =      digitsRegExp.test(inputspaces[1].value);
    const minLengthPassword =   minLengthRegExp.test(inputspaces[1].value);
    document.getElementById("registerScreen").style="height: 440px"
    var user, flag=1;
    if(!uppercasePassword){
      flag = 0;
      setError("why are you whispering?? MAKE SOME NOISE!!! add some uppercases");
    } else if(!lowercasePassword){
      flag = 0;
      setError("WHY ARE YOU SCREAMING?! relax... add some lowercases");
    } else if(!digitsPassword){
      flag = 0;
      setError("At least one digit");
    } else if(!minLengthPassword){
      flag = 0;
      setError("At least minumum 8 characters");
    } else if (inputspaces[1].value !== inputspaces[2].value) {
      flag = 0;
      setError("Already forgot your password??? Those must be the same");
    } else {
      for (user in info) {
        if (info[user].username === inputspaces[0].value) {
          flag = 0;
          setError("Really? Let's get a little bit MORE creative... this username is already taken");
        }
      }
    }
    if (flag) {
      setError("success");
      let profPick = "./g.png";
      if(file != null) {
        profPick = file;
      }
      info.push({username: inputspaces[0].value, password: inputspaces[1].value, nickname: inputspaces[3].value
                 ,profPic: profPick, chats:[]});
    }
  }

  
  const fileHandler = (e) => {
    e.preventDefault();
    setFile(URL.createObjectURL(e.target.files[0]));
  } 
  const [file, setFile] = useState(null);  
  
  return (
    <form onSubmit={register}>
      <div className="before"/>
      <div className="logscreen border border-success pyro" id="registerScreen">

        {(error.includes("Really?")) ? (<h5 className="error"> {error} </h5>) : "" }
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Username
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        
        {(error.includes("At")) ? (<h5 className="error"> {error} </h5>) : "" }
        {(error.includes("cases")) ? (<h5 className="error"> {error} </h5>) : "" }
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
            Password
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            required
          />
        </div>

        {(error.includes("???")) ? (<h5 className="error"> {error} </h5>) : "" }
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Verify password
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            required
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Nickname
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="People will see you as..."
            aria-label="text"
            aria-describedby="basic-addon1"
            required
          />
        </div>

        <div className="input-group mb-3" id='input_button'>
            <label className="input-group-text" htmlFor="inputGroupFile01">Profile picture (optional)</label>
            <input type="file" accept="image/png, image/jpeg, image/jpg" className="form-control" id="inputGroupFile01" onChange={fileHandler}></input>
        </div>

        <div>
            <input
            type="submit"
            value="Register"
            className="login_button btn btn-secondary"/>
        </div>

        <div className="sign">
          <span>been there done that? &nbsp;</span>
          <span>
            <Link to="/" className="link-success">Login</Link>
          </span>
        </div>
        <div className="after"/>
      </div>
    </form>
  );
}

export default Registration;