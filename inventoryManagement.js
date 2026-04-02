// //create an array called products
const products= ["Laptop","Phone","Headphones","Monitor"]

// //a function called logFirstProduct to console log the details of the first product in the array.

// function logFirstProduct(productOne){ {return productOne[0]}
// }
// console.log(logFirstProduct(products))

// a function called addProduct to add a new product to the array. This function should take the product name as an argument.

function addProduct(productName){ return

}

// a function called updateProductName to change the name of a product. This function should take the product's position in the array and the new name as arguments.

function updateProductName(){


}
//Write a function called removeLastProduct to remove the last product from the array.

function removeLastProduct(){

}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
