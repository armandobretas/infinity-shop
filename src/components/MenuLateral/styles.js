import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenHeight = Math.round(Dimensions.get("window").height);

export default StyleSheet.create({
  menuHeader: {
    backgroundColor: "#7159c1",
    alignContent: "center",
    height: 190,
    alignItems: "center",
  },
  menuAvatar: {
    marginTop: 25,
    alignItems: "center",
    alignContent: "center",
  },
  userName: {
    marginTop: 20,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  userEmail: {
    color: "#fff",
    fontSize: 14,
  },
  iconSubmenu: {
    width: 30,
    textAlign: "center",
  },
});
