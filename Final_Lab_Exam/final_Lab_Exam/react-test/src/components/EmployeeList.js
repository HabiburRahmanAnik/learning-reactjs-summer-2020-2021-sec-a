import User from './Employee';

const UserList = ({list, deleteCallback,editUser})=>{
   
    return (
        <div>
            <h1>All Employee List</h1>
            {
                list.map((u)=>{
                   return  <User key={u.id} {...u} callback={deleteCallback} editUser = {editUser}/>
                })
            }
        </div>
    );
}

export default UserList;