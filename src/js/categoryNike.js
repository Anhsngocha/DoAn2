// script.js
document.addEventListener('DOMContentLoaded', function () {
    const productCategoryNike = document.getElementById('productCategoryNike');

    // Fetch data from products.json
    fetch('src/js/productList.json')
        .then(response => response.json())
        .then(data => {
            // Display products in the list
            
            let dataList = '';
            data.map(value => {
                if(value.category=== "nike") {
                    dataList += `
                    <div class="col-3 mb-3 product-card">
                            <div class="card">
                                <img src="${value.img_product}"
                                    alt="" height="250px">
                                <div class="card-body">
                                    <a href="product_detail.html?id=${value.id}">
                                        <h5 class="card-title">${value.name_product}</h5>
                                    </a>
    
                                    <div class="d-flex card-middle-body">
                                        <div class="product-price">
    
                                            <span class="price"><span class="vnd-price">đ</span>${value.price}</span>
                                        </div>
                                        <div class="sold-number">
                                            <span>Đã bán 100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                
                    }
            });
            productCategoryNike.innerHTML = dataList;
                
        })
        .catch(error => console.error('Error fetching products:', error));
});
