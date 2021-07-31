import User from './User';

const UserList = ({list, deleteCallback,editUser})=>{
   
    return (
        <div>
            <h1>All User List</h1>
            {
                list.map((u)=>{
                   return  <User key={u.id} {...u} callback={deleteCallback} editUser = {editUser}/>
                })
            }
        </div>
    );
}

export default UserList;