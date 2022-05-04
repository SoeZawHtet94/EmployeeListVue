import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/auth/';
class AuthService {
  login(user) {
      console.log(user);
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password,
        remember_me:true
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    console.log("log out");
    localStorage.removeItem('user');
    // return axios
    // .get(API_URL + 'logout', {});
  }
  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();