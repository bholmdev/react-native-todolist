import { StyleSheet, Text, View } from 'react-native';
import Task from "./app/components/Task"

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
          <Task text={"Task 3"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed'
  },
  items: {
    marginTop: 30
  },  
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
});
