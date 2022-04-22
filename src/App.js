import { Provider } from "react-redux";
import CakeCom from "./components/CakeCom";
import {store} from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCom />
      </div>
    </Provider>
  );
}

export default App;
