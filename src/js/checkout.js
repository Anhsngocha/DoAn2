document.getElementById('numInput').addEventListener('keypress', function(e) {
    if(e.key < '0' || e.key > '9') {
        e.preventDefault();
    }
});

const submit = document.getElementById('button-success');
submit.addEventListener('click', function(){
    alert('Đặt hàng thành công');
})