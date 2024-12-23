const LoginComponent = () =>{
    return(
        <>
            <h1>Opposite of Fancy Media</h1>
            <label for="username">Username: </label>
            <input type="text" id="username" name="username"/>
            <br/>
            <label for="password">Password: </label>
            <input type="text" id="password" name="password"/>
            <br/>
            <button>Submit</button>
            <br/>
            <h2>New here? Register now</h2>
            <button>Register</button>

        </>
    );
}

export default LoginComponent;