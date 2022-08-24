import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";

import AppNavigator from "./src/navigation/index";
import store from "./src/store/index";

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/font/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/font/Lato-Bold.ttf"),
    "Lato-Light": require("./assets/font/Lato-Light.ttf"),
    "Lato-Black": require("./assets/font/Lato-Black.ttf"),
    "Lato-Thin": require("./assets/font/Lato-Thin.ttf"),
    "Lato-Italic": require("./assets/font/Lato-Italic.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}