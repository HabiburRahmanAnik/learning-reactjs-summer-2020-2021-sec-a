import { Link } from 'react-router-dom';
import './user.css';

const Product = ({id,name,quantity,price,callback})=>{
    return (
       <div>
            <p>Name:{name}</p>
            <p>Quantity:{quantity}</p>
            <p>Price:{price}</p>
           
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/editProduct/${id}`}> EDIT</Link>
       </div>
    );
}
export default Product;