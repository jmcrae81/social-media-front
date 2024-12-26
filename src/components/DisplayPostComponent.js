const DisplayPostComponent = ({posts}) => {
  return(
          posts.map((post)=>(
              <div key={post.messageId}>
                <p>{post.messageText}</p>
                <br/>
              </div>
          ))
      );
}

export default DisplayPostComponent;
