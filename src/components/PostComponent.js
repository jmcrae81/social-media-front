import CommentComponent from './CommentComponent';
import {useState} from "react";

const PostComponent = (props) => {
     const [comments, addComments] = useState([
        {commentText: "Frozone! You can't escape from The UnderMiner! I am beneath you all! But nothing is beneath me!", commentAuthor: "The UnderMiner"},
        {commentText: "I will exact Justice upon The Underminer!", commentAuthor: "Mr. Incredible"}
        ])

      const addToPost = () => {
        addComments([...comments,
          {commentText: "Be afraid, for I am the mighty Syndrome!", commentAuthor: "Syndrome"}
          ]);
      }

      return(
        <div className="Post" style={{textAlign: "center"}}>
          <CommentComponent comments={comments}></CommentComponent>
          <br/>
          <button onClick = {addToPost}>Add Comment</button>
        </div>
      );
}

export default PostComponent;
