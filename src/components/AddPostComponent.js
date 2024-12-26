import axios from "axios";

const AddPostComponent = (props) => {
   let postedBy = props.postedBy;
   let messageId = props.messagedId;
   let messageText = props.messageText;
   let tpEpoch = props.timePosted

   return axios.post("http://localhost:8080/messages", {

   }

   );

}

export default AddPostComponent;
