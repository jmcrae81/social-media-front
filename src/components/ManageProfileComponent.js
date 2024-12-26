import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ManageProfileComponent = () => {
    return(
        <>
        <div style={{textAlign: "center"}}>
            <h1>Manage your profile here </h1>
        </div>
        <InputGroup size="sm" className="mb-3">
           <InputGroup.Text id="basic-addon1">Change Username: </InputGroup.Text>
           <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
        <br/>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="basic-addon2">Change Password: </InputGroup.Text>
          <Form.Control
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon2"
          />
        </InputGroup>
        </>
    );
}

export default ManageProfileComponent;