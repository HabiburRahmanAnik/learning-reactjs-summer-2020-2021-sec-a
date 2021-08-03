import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import CreateUser from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { useFetch } from './hooks/useFetch';

function  App (){
  const url = `http://localhost:8000/api/list`;
  const url2 = `http://localhost:8000/api/productList`;

  const [userlist, setUserList] = useState([]);
  const [productlist, setProductList] = useState([]);
  const [isLoadding,setLoding] = useState(false);

  useFetch(url, setUserList,setLoding);
  useFetch(url2, setProductList,setLoding);

  // const get = async (url)=>{

  //   const result =  await fetch(url).then(response=>response.json()).then(json=>json);
  //   setProductList(result);
  // }
  // const response = get(url2);

  console.log();
  const deleteUser = async (id)=>{
    const url = `http://localhost:8000/api/delete/${id}`;
    const data =await fetch(url)
                      .then(response=>response.json())
                      .then(json=>json);        
    setUserList(data);
  }
  
  const UpdateUser = async (id,editUser)=>{
    setLoding(true);
    const url = `http://localhost:8000/api/edit/${id}`;
    const result = await fetch(url,{
      method:'post',
      body:JSON.stringify(editUser),
      headers:{
        "Accept":'application/json',
        'Content-Type':'application/json'
      }
    }).then(response=>response.json()).then(json=>json);
    setLoding(false);
    setUserList(result);

  }

  const addUser = async (product)=>{
    setLoding(true);
    const url = `http://localhost:8000/api/add`;
    const result = await fetch(url,{
      method:"post",
      body:JSON.stringify(product),
      headers:{
        "Accept":'application/json',
        "Content-Type":'application/json'
      }
    }).then(response=>response.json()).then(json=>json);
    setLoding(false);
    setUserList(result);
  }



  const addProduct= async (product)=>{
    setLoding(true);
    const url = `http://localhost:8000/api/addProduct`
    const result = await fetch(url,{
      method:"post",
      body:JSON.stringify(product),
      headers:{
        "Accept":'application/json',
        "Content-Type":'application/json'
      }
    }).then(response=>response.json()).then(json=>json);
    setLoding(false);
    setProductList(result);
  }

  const deleteProduct = async(id)=>{
    setLoding(true);
    const url = `http://localhost:8000/api/delete/product/${id}`;
    const data =await fetch(url)
                      .then(response=>response.json())
                      .then(json=>json);  
    setLoding(false);      
    setProductList(data);
  }

  const updateProduct = async (id,editProduct)=>{
    setLoding(true);
    const url = `http://localhost:8000/api/editProduct/${id}`;
    const result = await fetch(url,{
      method:'post',
      body:JSON.stringify(editProduct),
      headers:{
        "Accept":'application/json',
        'Content-Type':'application/json'
      }
    }).then(response=>response.json()).then(json=>json);
    setLoding(false);
    setProductList(result);
  }

  
  return (
    
    <Router>
          <Navbar/>
      <Switch>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/'>
          <h1>Welcome Home</h1>
        </Route>
          <Route path='/userlist'>
            <div>
              {!isLoadding && <EmployeeList list={userlist} deleteCallback={deleteUser} />}
              {isLoadding && <p>Loading...</p>}
            </div>
          </Route>
          <Route path='/create'>
              <CreateUser status='add' addNewUser={addUser} />
          </Route>
          <Route path='/edit/:id'>
            <CreateUser status='edit' updateUserCallBack = {UpdateUser}/>
          </Route>
          <Route exact path = '/productList'>
            <>{!isLoadding && <ProductList list={productlist} deleteCallback={deleteProduct} />}
            {isLoadding && <p>Loading...</p>}</>
          </Route>
          <Route path='/addProduct'>
              <AddProduct status='add' addNewProduct={addProduct} />
          </Route>
          <Route path='/editProduct/:id'>
              <AddProduct status='edit' updateProductCallBack={updateProduct} />
          </Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
