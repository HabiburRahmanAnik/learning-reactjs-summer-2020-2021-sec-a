import { useParams } from "react-router";
import {useState} from 'react';
import {users} from '../usersData';

const CreateUser = ({status})=>{
    const {id:eid} = useParams();
    const usersList = users;
    const [name,setName] = useState();
    const [id,setId] = useState(eid);
    const [dept,setDept] = useState();

    const nameHandler = (e)=>{
        setName(e.target.value);
    }

    const idHandler = (e)=>{
        setId(e.target.value);
    }

    const deptHandler = (e)=>{
        setDept(e.target.value);
    }

    const submitHandeler = (e)=>{
        e.preventDefault();

        const u = {
            name:name,
            id:id,
            dept:dept
        }
        usersList.push(u);
    }

    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={submitHandeler}>
                Name: <input type='text' name='name' value={name} onChange={nameHandler}/> <br/>
                ID: <input type='text' name='id' value={id} onChange={idHandler}/><br/>
                Dept: <input type='text' name='dpet' value={dept} onChange={deptHandler}/><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;