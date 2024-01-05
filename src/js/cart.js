
$(document).ready(function () {
    // Khi checkbox trong th được click
    $('#checkAll').click(function () {
        // Lấy trạng thái check của checkbox này
        var checkedStatus = this.checked;
        // Thay đổi trạng thái của tất cả checkbox có class 'checkItem' theo trạng thái đã lấy được
        $('.checkItem').each(function () {
            $(this).prop('checked', checkedStatus);
        });
    });
});

const checkoutForm = document.getElementById('btn-checkout');
checkoutForm.addEventListener('click', function() {
    window.location.href = '/checkout.html';
})


let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
function getToTable() {
    let data = '';
    productInCart.map((value, index) => {
        data += `
        <tr>
        <td>
            <input type="checkbox" name="" id="" class="checkItem">
        </td>
        <td class="product">
            <div class="img-product-card">
                <img src="${value.img_product}" alt="">
            </div>
            <div class="product-name">
                ${value.name_product}
            </div>
        </td>
        <td>
            ${value.price}
        </td>
        <td>
            <div class="quantity-product-wrapper">
                <span class="minus" onclick="minusQuantity(${index}, ${value.quantity})">-</span>
                <span class="num">${value.quantity}</span>
                <span class="plus" onclick="plusQuantity(${index})">+</span>
            </div>
        </td>
        <td>
            ${(value.quantity * value.price.replace(/\./g,'')).toLocaleString()}
        </td>
        <td class="remove-item" onclick="deleteProductInCart(${index})"><i class="fa-solid fa-trash"></i></td>
    </tr>
        `;
    })
    document.getElementById('product-cart').innerHTML = data
}
function saveToLocal(){
    localStorage.setItem('products', JSON.stringify(productInCart));
}

function minusQuantity(index, quantity){
    if(quantity > 1) {
        productInCart[index] = {
            ...productInCart[index],
            quantity: --productInCart[index].quantity
        };
        saveToLocal();
        getToTable();
    } else {
        alert('Số lượng không được thấp hơn 1');
    }
}

function plusQuantity(index){
    productInCart[index] = {
        ...productInCart[index],
        quantity: ++productInCart[index].quantity
    };
    saveToLocal();
    getToTable();
}
function cartLoadPage(){
    getToTable();
}

function deleteProductInCart(index){
    productInCart.splice(index, 1);
    saveToLocal();
    getToTable();
}