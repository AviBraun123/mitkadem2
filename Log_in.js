import { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "./Log_in.css";
import "./Registration.css";
import info from "./Info.js";
import Chat from "./chat.js";

function Log_in() {
  const [error, setError] = useState("");

  let navigate = useNavigate();

  var inputspaces = document.getElementsByTagName("input");
  useEffect (()=>{
    if(error === "success") {
      navigate("/chat?username=" + inputspaces[0].value);
    }
  });

  const func = (event) => {
    event.preventDefault();
    var user, flag=0;
    document.getElementById("loginscreen").style="height: 280px"
    for (user in info) {
      if (info[user].username === inputspaces[0].value) {
        if (info[user].password === inputspaces[1].value) {
          flag=1;
          setError("success");
        }
      }
    }
    if(flag===0) {
      setError("details do not match");
    }
  };

  return (
    <form onSubmit={func}>
      <div className="logscreen border border-success" id="loginscreen">
        {(error!="") ? (<h5 className="error"> {error} </h5>) : "" }
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

        <div>
          
            <input
            type="submit"
            value="Login"
            className="login_button btn btn-secondary"/>
        </div>

        <div className="sign">
          <span>new here? &nbsp;</span>
          <span>
            <Link to="/registration" className="link-success">
              register!
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
}

export default Log_in;
