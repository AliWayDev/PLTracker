import { StyleSheet } from "react-native";

export const ExerciseStyles = StyleSheet.create({
  container: {
    paddingTop: 18,
    backgroundColor: "#0C3E59",
    height: "100%",
  },
  title: {
    fontSize: 22,
    paddingBottom: 8,
  },
  title_block: {
    backgroundColor: "#fff",
    padding: 12,
  },
  sets: {
    marginTop: 9,
  },
  set: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 9,
    marginBottom: 12,

    backgroundColor: "#fff",
    padding: 12,
  },
  set_actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  p: {
    fontSize: 15,
  },
  p1: {
    fontSize: 17,
  }
});
