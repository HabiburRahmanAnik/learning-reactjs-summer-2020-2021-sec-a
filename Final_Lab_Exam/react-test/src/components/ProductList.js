import Product from './Product';


const ProductList = ({list, deleteCallback})=>{
   
    return (
        <div>
            <h1>All Product List</h1>
            {
                list.map((u)=>{
                   return  <Product key={u.id} {...u} callback={deleteCallback}/>
                })
            }
        </div>
    );
}

export default ProductList;