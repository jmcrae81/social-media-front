import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import React, {useRef} from 'react';


const RegistrationComponent = () => {
    let usernameInput = useRef(null);
    let passwordInput = useRef(null);

    const submitRegistration = () =>{
      const requestedUsername = usernameInput.current.value;
      const requestedPassword = passwordInput.current.value;

     axios.post('http://localhost:8080/register', { username: requestedUsername, password: requestedPassword })
       .then((response) => {
         console.log(response);
       });

    }

    return(
        <>
            <p>Username field cannot be left blank.</p>
            <p>Password must have more than 4 characters</p>
              <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      ref={usernameInput}
                    />
                  </InputGroup>
             <br/>
              <InputGroup size="sm" className="mb-5">
                <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
                <Form.Control type="password"
                 ref={passwordInput}
                />
              </InputGroup>
             <br/>
             <Button variant="primary" onClick={submitRegistration}>Register Profile</Button>
        </>
    );
}

export default RegistrationComponent;
