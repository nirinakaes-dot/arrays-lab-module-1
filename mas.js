const products= ["Laptop","Phone","Headphones","Monitor"]

function addProduct(productName){ return products.push(productName)
}
console.log(addProduct("Tablet"))
console.log(products)

function removeLastProduct(){ return products.pop()
}
console.log(removeLastProduct(products))
console.log(products)

function updateProductName (index,newName){ return products.with(index,newName)
}
console.log(updateProductName([1],"Motherboard"))
