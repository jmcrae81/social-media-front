import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

const FindFriendsComponent = () => {

    const [friend, findFriend] = useState("firstFriend");
    const search = () => {
        console.log("clicked search");
    }
    return(
        <div style={{textAlign: "center"}}>
           <h1>Search on this page </h1>
           <input type="text" value={friend} onChange={ (e)=>findFriend(e.target.value)} />
           <button type="button" className="btn btn-primary" onClick={ ()=>search}>Search</button>
        </div>
    );
}

export default FindFriendsComponent;