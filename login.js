// Hàm kiểm tra đăng nhập
function checkLogin(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

// Export module để Jest (chạy trên Node.js) có thể import và test được.
// Kiểm tra điều kiện để không bị lỗi khi chạy trực tiếp trên trình duyệt.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = checkLogin;
}
