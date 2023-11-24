import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
const [credentials, setCredentials] = useState({
  emailId: "",
  password: "",
});

const submitHandler = () => {
  console.log(credentials)
  axios
    .post("http://localhost:80/user/login", credentials)
    .then((result) => {
      setCredentials({ emailId: "", password: "" });
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const handleChange = (event) => {
  setCredentials({
    ...credentials,
    [event.target.name]: event.target.value,
  });
};
  return (
    <>
      <div>
        <label htmlFor="emailId">Email id</label>
        <input
          type="email"
          id="emailId"
          onChange={handleChange}
          name="emailId"
          placeholder="emailid"
          value={credentials.emailId}
        />
        <label htmlFor="password">Password</label>
        <input
          value={credentials.password}
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="*****"
        />
      </div>
      <button onClick={submitHandler}>Submit</button>
    </>
  );
}

export default App
