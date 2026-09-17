// Import hàm cần test từ file login.js
const checkLogin = require('./login');

describe('Kiểm tra hàm checkLogin', () => {
    
    test('Nên trả về true khi đăng nhập đúng (admin / 123)', () => {
        expect(checkLogin('admin', '123')).toBe(true);
    });

    test('Nên trả về false khi sai mật khẩu', () => {
        expect(checkLogin('admin', 'wrong_pass')).toBe(false);
    });

    test('Nên trả về false khi sai tài khoản', () => {
        expect(checkLogin('hacker', '123')).toBe(false);
    });

    test('Nên trả về false khi để trống cả hai', () => {
        expect(checkLogin('', '')).toBe(false);
    });

});
