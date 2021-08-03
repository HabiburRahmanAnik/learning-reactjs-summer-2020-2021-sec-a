import User from './Employee';

const UserList = ({list, deleteCallback})=>{
   
    return (
        <div>
            <h1>All Employee List</h1>
            {
                list.map((u)=>{
                   return  <User key={u.id} {...u} callback={deleteCallback}/>
                })
            }
        </div>
    );
}

export default UserList;