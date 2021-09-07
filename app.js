function productQuantity(product, isAdd, isPhone) {
    const productQuantityInputFeild = document.getElementById(product+'-quantity');
    let productQuantity = parseInt(productQuantityInputFeild.value);
    if(isAdd){
        productQuantity++;
    }else{
        if(productQuantity > 0){
            productQuantity--;
        }
    } 
    productQuantityInputFeild.value = productQuantity;
   const totalPrice = totalProductPrice(productQuantity, isPhone);
    setTotalPrice(product, totalPrice);
}

function totalProductPrice(quantity, isPhone){
    if(isPhone){
        totalPrice = quantity * 1219;
    }else{
        totalPrice = quantity * 59;
    }
    return totalPrice;
}


// set total price 
function setTotalPrice(product,totalPrice){
   const outputFelid = document.getElementById(product+'-price');
   outputFelid.innerText = totalPrice;
}