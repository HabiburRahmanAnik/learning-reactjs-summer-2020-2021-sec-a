import { Link } from "react-router-dom";


const Navbar = ()=>{

    return (
        <div>
            <Link to="/create">Create New Employee</Link> | 
            <Link to="/userlist">Employee List</Link> | 
            <Link to="/addProduct">Add Product</Link> | 
            <Link to="/productList">Product List</Link> | 
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default Navbar;