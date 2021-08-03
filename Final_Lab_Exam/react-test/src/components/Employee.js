import { Link } from 'react-router-dom';
import './user.css';

const User = ({id,name, username,contactno, callback,})=>{

    return (
        
        <div className= 'std'>
            
            <h3>Name: {name}</h3>
            <p>Username: {username} </p> 
            <p>Contact No: {contactno}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`edit/${id}`}> EDIT</Link>
        </div>

        // <table>
        //     <thead>
        //     <tr>
        //         <th>Id</th>
        //         <th>Name</th>
        //         <th>Username</th>
        //         <th>Conatct no</th>
        //         <th>Action</th>
        //     </tr>
        //     </thead>
            
        //     <tbody>
                
        //     <tr>
        //         <td>{id}</td>
        //         <td>{name}</td>
        //         <td>{username}</td>
        //         <td>{contactno}</td>
        //         <td>
        //             <button >Edit</button>
        //             <button >Delete</button>
        //         </td>
        //     </tr>

        //     </tbody>
        // </table>
    );
}

export default User;