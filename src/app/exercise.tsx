import { AddSet } from "@/components/AddSet";
import { IExercise, IExerciseSet, useCycleStore } from "@/stores/cycle";
import { ExerciseStyles } from "@/styles/exercise";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const mockExerciseData = {
  last: "80x5x3",
  status: "Active",
  planned: "82.5x5x3",
};

export default function ExerciseScreen() {
  const { id, name } = useLocalSearchParams();
  const { addExerciseSet, deleteExerciseSet } = useCycleStore();
  const activeCycle = useCycleStore((state) =>
    state.cycles.find((i) => i.cycleStatus == "active"),
  );

  const activeWeek =
    activeCycle?.weeks.find((i) => i.weekId == activeCycle.activeWeek) ?? null;

  const selectedExercise = activeWeek?.exercises.find((i) => i.id === id);

  const [modalVisible, setModalVisible] = useState(false);
  const [mockList, setMockList] = useState([
    {
      id: "0",
      finishedSet: "80x3",
      rpe: "8",
      status: "Finished",
    },
  ]);

  const addSetHandler = (data: IExerciseSet) => {
    if (selectedExercise && activeCycle && activeWeek) {
      let temp = {
        exerciseSet: data,
        exerciseId: selectedExercise.id,
        weekId: activeWeek.weekId,
        cycleId: activeCycle.cycleId,
      };
      addExerciseSet(temp);
    }
  };

  const deleteSetHandler = (id: string) => {
    if (selectedExercise && activeCycle && activeWeek) {
      let temp = {
        exerciseId: selectedExercise.id,
        weekId: activeWeek.weekId,
        cycleId: activeCycle.cycleId,
        setId: id,
      };
      deleteExerciseSet(temp);
    }
  };

  const getLastSet = (exercise: IExercise) => {
    let lastIndex = exercise.sets.length - 1;

    return exercise.sets[lastIndex]
      ? `${exercise.sets[lastIndex].weight}kg x ${exercise.sets[lastIndex].reps} -  RPE: ${exercise.sets[lastIndex].rpe}`
      : "Not performed";
  };

  return (
    <View style={ExerciseStyles.container}>
      <View style={ExerciseStyles.title_block}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={ExerciseStyles.title}>{selectedExercise?.name}</Text>
          <Text style={ExerciseStyles.p1}>{selectedExercise?.status}</Text>
        </View>
        <Text style={ExerciseStyles.p1}>
          Last: {selectedExercise && getLastSet(selectedExercise)}
        </Text>
        <Text style={ExerciseStyles.p1}>
          Planned: {selectedExercise?.plannedSets.weight}x
          {selectedExercise?.plannedSets.reps}x
          {selectedExercise?.plannedSets.sets}
        </Text>
      </View>

      <View style={ExerciseStyles.sets}>
        {selectedExercise?.sets.map((i) => {
          return (
            <View key={i.id} style={ExerciseStyles.set}>
              <View style={ExerciseStyles.set_actions}>
                <Text style={ExerciseStyles.p}>
                  {i.weight}x{i.reps}
                </Text>
                <Text style={ExerciseStyles.p}>RPE: {i.rpe}</Text>
              </View>
              <View style={ExerciseStyles.set_actions}>
                <Button
                  color="#df4545"
                  onPress={() => deleteSetHandler(i.id)}
                  title="Delete"
                />
                <Button
                  color="#2296b3"
                  onPress={() => setModalVisible(true)}
                  title="Edit"
                />
              </View>
            </View>
          );
        })}
      </View>

      <View>
        <Button
          color="#fff"
          onPress={() => setModalVisible(true)}
          title="Add Set +"
        />
        <AddSet
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          addSetHandler={addSetHandler}
        />
      </View>
    </View>
  );
}
