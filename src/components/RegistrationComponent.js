import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const RegistrationComponent = () => {
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
                    />
                  </InputGroup>
             <br/>
              <InputGroup size="sm" className="mb-5">
                <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
                <Form.Control type="password"/>
              </InputGroup>
             <br/>
             <Button variant="primary">Register Profile</Button>
        </>
    );
}

export default RegistrationComponent;