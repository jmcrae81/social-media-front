import axios from "axios";

const AddPostComponent = (props) => {
  let userId = "9996";
  let messageId = "9050";
  let messageText = "Hardcoded message";
  let tpEpoch = 1679947799;
    alert("Made it to AddPostComponent")
  let messageBody = {"messageId": messageId, "postedBy": userId, "messageText": messageText
                        , "timePostedEpoch": tpEpoch}

   return axios.post("http://localhost:8080/messages", messageBody)
                    .then(response=>{
                    console.log(response)}
                    );

}

export default AddPostComponent;
