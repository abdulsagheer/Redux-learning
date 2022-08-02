import './App.css'
import CakeView from "./feature/cake/CakeView"
import IceCream from "./feature/icecream/IceCream"
import User from "./feature/user/User";


function App() {

  return (
    <div className="App">
      <CakeView />
      <IceCream />
      <User />
    </div>
  );
}

export default App
