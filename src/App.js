import { Provider } from "react-redux";
import CakeCom from "./components/CakeCom";
import { store } from "./redux/store";
import "./App.css";
import IceCom from "./components/IceReducer";
import UserCom from "./components/UserCom";
import PostCom from "./components/PsotCom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostCom />
        <CakeCom />
        <IceCom />
        <UserCom />
      </div>
    </Provider>
  );
}

export default App;
