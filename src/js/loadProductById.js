// detail-script.js
const productId = new URLSearchParams(window.location.search).get('id');
const productName = document.getElementById('product_detail_name');
const productImg = document.getElementById('detail_product_img');
const productPrice = document.getElementById('detail_price');
const btnAdd = document.getElementById('btn_add');
let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

function saveToLocal(){
    localStorage.setItem('products', JSON.stringify(productInCart));
}
document.addEventListener('DOMContentLoaded', function () {
    
    if (!productId) {
        console.error('Product ID not provided.');
        return;
    }

    // Fetch data from products.json
    fetch('src/js/productList.json')
        .then(response => response.json())
        .then(data => {
            // Find the product with the specified ID
            const product = data.find(p => p.id === parseInt(productId));

            if (product) {
                // Display product details
                productName.textContent = product.name_product;
                productImg.src = product.img_product;
                productPrice.textContent = product.price;


                btnAdd.addEventListener('click', function() {
                    let checkProduct = productInCart.some(p => p.id === product.id);
                    if(!checkProduct) {
                        let product2 = data.find(p => p.id === product.id);
                        productInCart.unshift({
                            ...product2,
                            quantity: 1
                        });
                        saveToLocal();
                        calculatorTotal();
                        alert('Thêm sản phẩm thành công');
                    } else {
                        let getIndex = productInCart.findIndex(p => p.id === product.id);
                        let productUpdateQuantity = productInCart.find(p => p.id === product.id);
                        productInCart[getIndex] = {
                            ...productUpdateQuantity,
                            quantity: ++productUpdateQuantity.quantity
                        };
                        saveToLocal();
                        calculatorTotal();
                        alert('Thêm sản phẩm thành công');

                    }
                })

            } else {
                console.error('Product not found.');
            }
        })
        .catch(error => console.error('Error fetching product details:', error));
});


function calculatorTotal() {
    document.getElementById('total').innerHTML = productInCart.length;
}

function indexLoad() {
    calculatorTotal();
}