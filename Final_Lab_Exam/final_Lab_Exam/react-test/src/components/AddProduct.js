import { useState } from 'react';
import { useHistory, useParams } from "react-router";

const AddProduct = ({status,addNewProduct,updateProductCallBack})=>{
    
    const {id:eid} = useParams();
    const history = useHistory();
    const [product,setUser] = useState({name:'',quantity:'',price:''})


    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;

        setUser({...product,[attr]:val});
    }
    
    const submitHandeler = (e)=>{
        e.preventDefault();
        
        status === 'add'?addNewProduct(product):updateProductCallBack(eid,product);
        history.push('/productlist');
    }
    

    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} Product Page: {eid}</h3>
            <form onSubmit={submitHandeler}>
                Name: <input type='text' name='name' value={product.name} onChange={change}/> <br/>
                Quantity: <input type='text' name='quantity' value={product.quantity} onChange={change}/><br/>
                 Price: <input type='text' name='price' value={product.price} onChange={change}/><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default AddProduct;