import React from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const profilePage = () => {
    history.push("/profile");
    handle();
  };

  const handle = () => {
    var firstname = document.getElementById("firstname").value;
    localStorage.setItem("firstname", firstname);
    var lastname = document.getElementById("lastname").value;
    localStorage.setItem("lastname", lastname);
    var aboutMe = document.getElementById("aboutme").value;
    localStorage.setItem("aboutme", aboutMe);
    var age = document.getElementById("age").value;
    localStorage.setItem("age", age);
    var gender = document.getElementById("gender").value;
    localStorage.setItem("gender", gender);
  };

  return (
    <>
      <p className="title">
        <center>Registration Form</center>
      </p>

      <form className="App">
        <div>
          <label>First name : </label>
          <input type="text" id="firstname" />
          <br />
          <br />
          <br />
        </div>
        <div>
          <label>Last name : </label>
          <input type="text" id="lastname" />
          <br />
          <br />
          <br />
        </div>
        <div>
          <label>About yourself : </label>{" "}
          <textarea rows="9" cols="70" id="aboutme" /> <br />
          <br />
          <br />
        </div>
        <label for="avatar">Choose a profile picture: </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <br />
        <br />
        <br />
        <label for="age">Age : </label>
        <select name="age1" id="age">
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="38">38</option>
        </select>
        <br />
        <br />
        <div id="gender">
          <label>Gender : </label>
          <label>Male</label>
          <input type="radio" name="male" />
          <label>Female</label>
          <input type="radio" name="female" />
        </div>
        <br />
        <br />
        <div id="skill">
          <label>Skills : </label>
          <label> React</label>{" "}
          <input type="checkbox" name="field name" value="React" />
          <label> Java</label>{" "}
          <input type="checkbox" name="field name" value="Java" />
          <label> NodeJS</label>{" "}
          <input type="checkbox" name="field name" value="NodeJS" />
          <label> .Net </label>{" "}
          <input type="checkbox" name="field name" value=".Net" />
          <br />
          <br />
          <br />
        </div>

        <div>
          <br />
          <br />
          <br />
          <li>
            {/* Endpoint to route to About component */}
            <Link to="/Login">Already Have an account</Link>
          </li>
          <br />
          <br />
          <br />
          <li>
            {/* Endpoint to route to Contact Us component */}
            <Link to="/ForgotPwd">Forgot Password</Link>
          </li>
        </div>

        <br />
        <br />
        <br />

        <button className="btn btn-success" onClick={profilePage}>
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default App;
