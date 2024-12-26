import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FriendsComponent = () => {
   return(

          <div style={{textAlign: "center", position: 'absolute'
                        , top: '150px', right: '300px'}}>
              <h1>Will the hero go alone?</h1>
              <p>The hero is never alone!!!</p>
              <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="holder.js/100px180" />
                 <Card.Body>
                 <Card.Title>Example Friend</Card.Title>
                 <Card.Text>
                 This will be simple info on friend
                </Card.Text>
                <Button variant="primary">Unfriend?</Button>
                </Card.Body>
              </Card>
          </div>
      );
}

export default FriendsComponent;
