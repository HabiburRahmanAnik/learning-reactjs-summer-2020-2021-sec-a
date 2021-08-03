import { useState } from 'react';
import { useHistory, useParams } from "react-router";

const CreateUser = ({status,addNewUser,updateUserCallBack})=>{
    
    const {id:eid} = useParams();
    const history = useHistory();
    const [user,setUser] = useState({name:'',username:'',contactno:'',password:''})


    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;

        setUser({...user,[attr]:val});
    }
    
    const submitHandeler = (e)=>{
        e.preventDefault();
        
        status === 'add'?addNewUser(user):updateUserCallBack(eid,user);
        history.push('/userlist');
    }
    

    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} Emoloyee Page: {eid}</h3>
            <form onSubmit={submitHandeler}>
                Name: <input type='text' name='name' value={user.name} onChange={change}/> <br/>
                Username: <input type='text' name='username' value={user.id} onChange={change}/><br/>
                Contact No: <input type='text' name='contactno' value={user.dept} onChange={change}/><br/>
                Password: <input type='text' name='password' value={user.dept} onChange={change}/><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;