import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circular: {
    width: 12,
    height: 12,
    backgroundColor: "#55bcf6",
    borderWidth: 2,
    borderRadius: 5
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  itemText: {
    maxWidth: "80%"
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
  }
});

export default Task;