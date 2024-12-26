import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/login";

class AuthService {
    login(credentials) {
        return axios.post('http://localhost:8080/api/login', credentials, {
                                                                 headers: {
                                                                   'Content-Type': 'application/json', // Ensure headers match server configuration
                                                                 },
                                                                 withCredentials: true, // Only if cookies or authentication are involved
                                                               });
;
    }
}

export default new AuthService();
