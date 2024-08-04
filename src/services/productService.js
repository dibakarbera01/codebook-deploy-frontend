export async function getProductList(searchTerm){
    const response = await fetch('https://codebook-backend-vjpq.onrender.com/api/products');
    const data = await response.json();
   
    return data;
}

export async function getProduct(id){
    const response = await fetch(`https://codebook-backend-vjpq.onrender.com/api/products/${id}`);
     const data =await response.json();
    return data;
}

export async function getFeaturedList(){
    const response = await fetch("https://codebook-backend-vjpq.onrender.com/api/featured_products");
    const data = await response.json();
    return data;
}