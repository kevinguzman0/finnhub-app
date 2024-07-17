import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/root-navigator";
import { persistor, store } from "./src/store/store";
import Toast from "react-native-toast-message";
import { PersistGate } from "redux-persist/integration/react";

if (__DEV__) {
  require("./ReactotronConfig");
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
        <Toast />
      </PersistGate>
    </Provider>
  );
}
