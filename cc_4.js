// Step 1 is to create the .js and html file

// Step 2 building the array
let products = [{
    name: "Speakers",
    category: "electronics",
    price: 49.99,
    inventory: 25,
},
{
    name: "T-Shirt",
    category: "apparel",
    price: 9.99,
    inventory: 30,
},
{
    name: "Milk",
    category: "groceries",
    price: 3.99,
    inventory: 120,
},
{
    name: "Lamp",
    category: "household",
    price: 29.99,
    inventory: 20,
},
{
    name: "Advil",
    category: "medical",
    price: 11.99,
    inventory: 20,
},
]
console.log("__________Products__________")
console.log(products)

// step 3 the for...of loop

for(let product of products){
    let discount =0

switch(product.category){
    case "electronics":
        discount = 0.20
    break
    case "apparel":
        discount = 0.15
        break
    case "grocery":
    case "household":
        discount = 0.10
        break
    default:
        discount = 0;
}

let promoPrice = product.price - (product.price * discount);

product.promoPrice = promoPrice.toFixed(2);

}

// step 4 customerType discount

let customerType = ["regular","student","senior"]

if (customerType == "student"){
    products.product * 0.95
} else if(customerType == "senior"){
    products.price * 0.93
} else{
    products.price * 1
}

// step 5 simulating checkout process for 3 customers


let customers = [
    {
        customerId: 1001,
        customerType: "regular",
        cart:{name: "Speakers", count: 2} 

    },
    {
        customerId: 1002,
        customerType: "student",
        cart:{name: "T-shirt", count: 5} 

    },
    {
        customerId: 1003,
        customerType: "senior",
        cart:{name: "milk", count: 10} 

    }

]

console.log(customers)