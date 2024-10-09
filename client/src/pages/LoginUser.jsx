import { useState} from "react";
import myAxios from "../services/myAxios";

function LoginUser (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (even) => {
        even.preventDefault();
        try{
            const response = await myAxios.post("/api/login", 
                {email, password},
                { withCredentials: true }
            );
            if(response.status === 200){
                setMessage(response.data.message)
            }else{
                setMessage(response.data)
            }
            
        }catch(error){
            console.error(error)
        }

    }

    return(
        <div>
            <h2> Connexion ! </h2>
            <form onSubmit={handleSubmit} method="post" className="formUser">
                <div>
                    <label htmlFor="email" >Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(even) => setEmail(even.target.value)} required 
                    />
                </div>
                <div>
                    <label htmlFor="password" >Mot de passe</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password}
                        onChange={(even) => setPassword(even.target.value)} 
                        required 
                    />
                </div>
                <div>{message}</div>
                <button type="submit" >Se Connecter</button>
            </form>

        </div>
        
    )

}
export default LoginUser;