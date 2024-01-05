
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });
});

$(document).ready(function () {
    $(".megamenu").on("click", function (e) {
        e.stopPropagation();
    });
});


$(document).ready(function () {
    // Đặt thời gian kết thúc là 23:59:59 của ngày hiện tại
    var endDate = new Date();
    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);
    // Hàm cập nhật đồng hồ đếm ngược
    function updateCountdown() {
        var now = new Date();
        var remainingTime = endDate.getTime() - now.getTime();
        // Khi chạy hết thời gian, dừng đồng hồ
        if (remainingTime < 0) {
            clearInterval(interval);
            $(".hours").html("00");
            $(".min").html("00");
            $(".sec").html("00");
            return;
        }
        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        // Cập nhật DOM
        $(".hours").html((hours < 10 ? "0" : "") + hours);
        $(".min").html((minutes < 10 ? "0" : "") + minutes);
        $(".sec").html((seconds < 10 ? "0" : "") + seconds);
    }
    // Thiết lập interval để cập nhật đồng hồ mỗi giây
    var interval = setInterval(updateCountdown, 1000);
});



document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra xem có thông tin tài khoản đã đăng nhập hay không
    const loggedInUserString = localStorage.getItem('user');

    if (loggedInUserString) {
        // Nếu có thông tin, chuyển đổi từ chuỗi JSON thành đối tượng JavaScript
        const loggedInUser = JSON.parse(loggedInUserString);

        const userAction = document.querySelectorAll('.text-hidden');

        // Lấy tên tài khoản và hiển thị nó
        const usernameDisplay = document.getElementById('userLogged');
        if (usernameDisplay) {
            usernameDisplay.textContent = `${loggedInUser.username}`;
        }
        
        userAction.forEach(function(userAction) {
            userAction.classList.add('hidden');
        });
        userAction.classList.remove('hidden');
    }

    const productsString = localStorage.getItem('products');

    if (productsString) {
        // Bước 2: Chuyển đổi chuỗi JSON thành một mảng JavaScript
        const productsArray = JSON.parse(productsString);

        // Lấy số lượng đối tượng trong mảng
        const numberOfProducts = productsArray.length;
        document.getElementById('total').innerHTML = numberOfProducts;
    } 
});
