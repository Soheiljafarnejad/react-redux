import { Provider } from "react-redux";
import CakeCom from "./components/CakeCom";
import { store } from "./redux/store";
import "./App.css";
import IceCom from "./components/IceReducer";
import UserCom from "./components/UserCom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCom />
        <IceCom />
        <UserCom />
      </div>
    </Provider>
  );
}

export default App;
