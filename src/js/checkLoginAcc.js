fetch('src/js/dataAccount.json')
    .then(respone => {
        if (!respone.ok) {
            throw new Error("not ok");
        }
        return respone.json();
    })
    .then(data => {
        const loginButton = document.getElementById('loginBtn');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        loginButton.addEventListener('click', function(event) {
            event.preventDefault();

            const dataUsername = usernameInput.value;
            const dataPassword = passwordInput.value;

            const user = data.find(user => user.username === dataUsername && user.password === dataPassword);

            if(user) {
                if(user.role === "admin") {
                    localStorage.setItem('admin', JSON.stringify(user));
                    window.location.href = '/admin/index_admin.html';
                } else if(user.role === "user") {
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.href = '/index.html';
                }
            } else {
                alert('Invalid username or password');
            }
        });
    })
    .catch(error => {
        console.error("error");
    })