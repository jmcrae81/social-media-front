import PostComponent from './PostComponent';
import NavbarComponent from './NavbarComponent';
import DisplayPostComponent from './DisplayPostComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useState, useEffect} from "react";

const HomepageComponent = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{axios.get("http://localhost:8080/accounts/9996/messages")
      .then(res=>{setPosts(res.data)
      })
    }, [])

    const createNewPost = () => {

    }

    return(
        <>
        <div style={{textAlign: "center"}}>
          <h1>Welcome to Dash Galaxy!!</h1>
          <br/>
           <div name="post box">
            <p>What is on your mind?</p>
            <input type="text" id="newPostBox"/>
            <br/>
            <button type="button" class="btn btn-primary" onClick={createNewPost}>Post</button>
            <DisplayPostComponent posts={posts}/>
           </div>

        </div>
        </>
    );
}

export default HomepageComponent;
