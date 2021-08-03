import Product from './Product';

const ProductList = ({productlist,deleteCallback})=>{
    return(
        <div>
            <h1>All Product List</h1>
            {
                productlist.map((product)=>{
                    return <Product key={product.id} {...Product} callback={deleteCallback}/>
                })
            }
        </div>
    );
}

export default ProductList;