import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/root-navigator";
import { store } from "./src/store/store";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
      <Toast />
    </Provider>
  );
}
