import UserList from './components/UserList';
import {users} from './usersData';
import React, {useState} from 'react';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function  App (){

 const [userlist, setUserList] = useState(users);

 
  const deleteUser = (id)=>{
    const list = userlist.filter((u)=>u.id !== id);
    setUserList(list);
  }
  const UpdateUser = (id,editUser)=>{
    const list = userlist.filter((u)=>u.id !== id);
    setUserList([...list,editUser]);
  }

  const addUser = (user)=>{
      setUserList([...userlist,user]);
  }

  
  
  return (
   
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome Home!</h1>
          </Route>
          <Route path='/userlist'>
            <div>
                <UserList list={userlist} deleteCallback={deleteUser}/>
            </div>
          </Route>
          <Route path='/create'>
              <CreateUser status='add' addNewUser={addUser} />
          </Route>
          <Route path='/edit/:id'>
            <CreateUser status='edit' updateUserCallBack = {UpdateUser}/>
          </Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
