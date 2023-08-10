import { useState } from "react";

const API_AUTHENTICATE_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"

export default function Authenticate({token}) {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    
    async function handleClick() {

        try{
            const response = await fetch(API_AUTHENTICATE_URL, {
                method: "GET",
                headers: {"Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }

            });
            const result = await response.json();
            console.log(result);
            setSuccessMessage(`${result.data.username} is ${result.message}`);
            console.log()
        } catch(error) {
            setError(error.message)
        }
        }
    return(
        <>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            

            {error && <p>{error}</p>}
            <button className="button" onClick={handleClick
            }>Authenticate Token</button>

        </>
    )
}
