import { StyleSheet, StatusBar } from "react-native";

import { isAndroid } from "../../utils/function";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
});