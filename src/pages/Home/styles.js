import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    width: screenWidth,
    height: screenHeight,
  },
  content: {
    padding: 10,
  },
  productActions: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    borderTopColor: "#cecece",
    borderTopWidth: 0.3,
  },
  productsBox: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "48%",
    height: 260,
    marginTop: 10,
    padding: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  productName: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 24,
  },
  option: {
    padding: 15,
    fontSize: 16,
    fontWeight: "bold",
    height: 60,
  },
  optionActive: {
    padding: 15,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#e67e22",
    borderRadius: 20,
    color: "#fff",
  },
  empty: {
    fontSize: 20,
    margin: 5,
  },
});
