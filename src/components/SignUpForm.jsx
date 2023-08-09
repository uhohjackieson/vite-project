import { useEffect, useState } from "react";

export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("async function")
    
    try {

        // if else statement
        if({username}.username.length > 8){
        

            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup", {
                    method: "POST",
                    body: JSON.stringify({username}, {password}),
                    headers: {
                        "Content-type": "application/json"
                    }
                }
            );
            const result = await response.json();
            setToken(result.token);
    //   console.log(result);
            } else {
                alert("username too short");
                setUsername("");
            }

    } catch (error) {
      setError(error.message);
    }
  }
  handleSubmit();
  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username: {""}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />

        <label htmlFor="">
          Password: {""}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
