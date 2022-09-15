import logo from './logo.svg';
import './App.css';
import FormControl from './FormControl';

function App() {
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="card shadow-lg o-hidden border-0 my-5 background" style={{height:"600px"}}>
          <h4 className="Entete">Sign in</h4>
          <FormControl/>
          <hr className="ligne_1" />
          <button className="button_login button_styled" type="submit">Login</button>
          <hr className="ligne_2" />
          <button className="button_login_with_google button_styled" type="submit">Connect with Google</button>
          <button className="button_login_with_facebook button_styled" type="submit">Connect with Facebook</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
