const RegistrationComponent = () => {
    return(
        <>
            <p>Username field cannot be left blank.</p>
            <p>Password must have more than 4 characters</p>
            <label for="username">Choose a username: </label>
             <input type="text" id="username" name="username"/>
             <br/>
            <label for="password">Choose a password: </label>
             <input type="text" id="password" name="password"/>
             <br/>
             <button>Register Profile</button>
        </>
    );
}

export default RegistrationComponent;