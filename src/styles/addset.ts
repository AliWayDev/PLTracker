import { StyleSheet } from "react-native";

export const AddSetStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#00000095"
  },
  modalView: {
    width: "100%",
    height: "40%",
    backgroundColor: 'white',
    paddingTop: 18,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginBottom: 44
  },
  button: {
    borderRadius: 6,
    paddingLeft: 14,
    paddingRight: 14,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonCancle: {
    backgroundColor: '#4a4a4aff',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inout: {
    width: 120,
    padding: 10,
    margin: 'auto',
    backgroundColor: "#f0f0f0ff",
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center'
  },
  inputText: {
    paddingBottom: 2
  },
  previousData: {
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 10
  },
  previousDataItem: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",

    height: 45,
    width: 45,
    backgroundColor: "#3b9eeeff",
    borderRadius: 100
  }
});