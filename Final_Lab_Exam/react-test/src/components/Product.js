import { Link } from 'react-router-dom';
import './user.css';

const Product = ({id,name, quantity,price, callback,})=>{

    return (
        
        <div className= 'std'>
            
            <h3>Name: {name}</h3>
            <p>Username: {quantity} </p> 
            <p>Contact No: {price}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/editProduct/${id}`}> EDIT</Link>
        </div>

    );
}
export default Product;