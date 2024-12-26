import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import {useState} from "react";
import axios from "axios";

const FindFriendsComponent = () => {

    const [friend, findFriend] = useState("firstFriend");
    const search = () => {
        let URL = "http://localhost:8080/findFriend/" + friend;
        const foundFriend = axios.get(URL).then(response =>{console.log(response)});

    }
    return(
        <div style={{textAlign: "center", position: 'static', top: '150px', right: '300px'}}>
           <h1>Search on this page </h1>
           <input type="text" value={friend} onChange={ (e)=>findFriend(e.target.value)} />
           <button type="button" className="btn btn-primary" onClick={ ()=>search()}>Search</button>
            <Toast >
                  <Toast.Header >
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Friend</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body></Toast.Body>
                </Toast>
        </div>
    );
}

export default FindFriendsComponent;