

const API_LOGIN_URL = "http://localhost:8080/login";
const API_SESSION_URL = "http://localhost:8080/session/create";

class AuthService {
    login(credentials) {

    let username = credentials.username;
    let password = credentials.password;

    return(

       fetch(API_LOGIN_URL, { method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "username": username,
                                "password": password
                              })
       })

    );
    }
}

export default new AuthService();
