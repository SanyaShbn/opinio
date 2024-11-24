import { background, defaultGrey } from "./Colors";

export const styles = {
  container: {
    width: 362,
    height: 50,
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 10,
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
    width: "80%",
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
