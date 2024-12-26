import PostComponent from './PostComponent';
import NavbarComponent from './NavbarComponent';
import DisplayPostComponent from './DisplayPostComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useState, useEffect} from "react";

const HomepageComponent = () => {

    const [posts, setPosts] = useState([])
    const [postBoxText, setText] = useState("")

    useEffect(()=>{axios.get("http://localhost:8080/accounts/9996/messages")
      .then(res=>{setPosts(res.data)
      })
    }, [])

    const createNewPost = () => {
        let userId = "9996";
        let messageText = "Another Hardcoded message";
        let tpEpoch = 1679955599;

        let messageBody = {"postedBy": userId, "messageText": messageText
                                , "timePostedEpoch": tpEpoch};
        axios.post("http://localhost:8080/messages", messageBody)
                            .then(response=>{
                            console.log(response)});
    }

    return(
        <>render(){
        <div style={{textAlign: "center"}}>
          <h1>Welcome to Dash Galaxy!!</h1>
          <br/>
           <div name="post box">
            <p>What is on your mind?</p>
              <form>
                <input type="text" id="newPostBox" value={postBoxText}
                  onChange={ (e) => setText(e.target.value)}/>
                <br/>
                <button type="button" className="btn btn-primary" onClick={() => createNewPost()}>Post</button>
               </form>
            <DisplayPostComponent posts={posts}/>


           </div>

        </div>
        }
        </>
    );
}

export default HomepageComponent;
