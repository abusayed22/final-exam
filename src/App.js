import Routers from "./routers/Routers"
import { Provider } from "react-redux";
import store from "./features/app/store";
function App() {
  return (
    <Provider store={store}>
     <Routers />
    </Provider>
  );
}

export default App;
