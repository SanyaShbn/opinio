import { background, defaultGrey } from "./Colors";

export const styles = {
  container: {
    width: 300,
    height: 50,
    top: 20,
    left: 20,
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 10,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 0,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
    borderWidth: 2,
    borderColor: defaultGrey,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  containerSelected: {
    backgroundColor: background,
    borderColor: "transparent",
  },
  textContainer: {
    width: 125,
    height: 24,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: "#000000",
  },
  textSelected: {
    color: "#FFFFFF",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: defaultGrey,
    alignItems: "center",
    justifyContent: "center",
  },
  circleSelected: {
    backgroundColor: "#E96AA8",
    borderColor: "#E96AA8",
  },
};
