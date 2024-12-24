import PostComponent from './PostComponent';
import NavbarComponent from './NavbarComponent';

const HomepageComponent = () => {
    return(
        <>
        <div>
          <NavbarComponent/>
        </div>
        <div style={{textAlign: "center"}}>
            <h1>Welcome to Dash Galaxy!!</h1>
            <PostComponent/>
        </div>
        </>
    );
}

export default HomepageComponent;
