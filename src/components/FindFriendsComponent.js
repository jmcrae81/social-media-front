import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import axios from "axios";

const FindFriendsComponent = () => {

    const [friend, findFriend] = useState("firstFriend");
    const search = () => {
        let URL = "http:localhost:8080/findFriend/" + friend;
        const foundFriend = axios.get(URL);
        console.log(foundFriend);
    }
    return(
        <div style={{textAlign: "center"}}>
           <h1>Search on this page </h1>
           <input type="text" value={friend} onChange={ (e)=>findFriend(e.target.value)} />
           <button type="button" className="btn btn-primary" onClick={ ()=>search()}>Search</button>
        </div>
    );
}

export default FindFriendsComponent;