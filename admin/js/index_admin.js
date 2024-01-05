const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Nike', 11],
        ['Adidas', 2],
        ['Puma', 2],
        ['Converse', 2],
        ['Khác', 7]
    ]);

    var options = {
        title: 'Số lượng sản phẩm thuộc thương hiệu',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra xem có thông tin tài khoản đã đăng nhập hay không
    const loggedInAdminString = localStorage.getItem('admin');

    if (loggedInAdminString) {
        // Nếu có thông tin, chuyển đổi từ chuỗi JSON thành đối tượng JavaScript
        const loggedInUser = JSON.parse(loggedInAdminString);


        // Lấy tên tài khoản và hiển thị nó
        const usernameDisplay = document.getElementById('loggedAdmin');
        if (usernameDisplay) {
            usernameDisplay.textContent = `${loggedInUser.username}`;
        }
    }
});