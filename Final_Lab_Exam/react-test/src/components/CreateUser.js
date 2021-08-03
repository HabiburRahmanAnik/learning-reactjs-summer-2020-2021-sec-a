import { useParams } from "react-router";
import {useState} from 'react';
import { useHistory } from "react-router";

const CreateUser = ({status,addNewUser,updateUserCallBack})=>{
    
    const {id:eid} = useParams();
    const history = useHistory();
    const [user,setUser] = useState({name:'',id:'',dept:''})


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
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={submitHandeler}>
                Name: <input type='text' name='name' value={user.name} onChange={change}/> <br/>
                ID: <input type='text' name='id' value={user.id} onChange={change}/><br/>
                Dept: <input type='text' name='dept' value={user.dept} onChange={change}/><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;