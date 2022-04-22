import { Provider } from "react-redux";
import CakeCom from "./components/CakeCom";
import { store } from "./redux/store";
import "./App.css";
import IceCom from "./components/IceReducer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCom />
        <IceCom />
      </div>
    </Provider>
  );
}

export default App;
