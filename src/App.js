import "./App.css";
import Auth from "./components/Auth/Auth";
import SignUp from './components/SignUp/SignUp.jsx'
const App=()=>{
  return (
    <div className="App">
       <SignUp/>
       <Auth/>
    </div>
  );
}

export default App;
