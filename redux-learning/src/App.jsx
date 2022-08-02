import './App.css'
import CakeView from "./feature/cake/CakeView"
import IcecreamView from "./feature/Icecream/IceCream"
import User from "./feature/user/User";


function App() {

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <User />
    </div>
  );
}

export default App
