import { useState } from "react";

 const Login = ()=>{

    const [user,setUser] = useState({username:'',password:''});

    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;

        setUser({...user,[attr]:val});
    }
     const submit =(e)=>{
        e.preventDefault();

        console.log(user);

     }
     return (
         <div>
             <br /><br />
             <form onSubmit={submit}>
                 username : <input type="text" name="username" onChange={change}/><br /><br />
                 Password: <input type="text" name="password" onChange={change}/><br /><br />
                 <input type="submit" value="login" />
             </form>
         </div>
     );
 }

 export default Login;