import { CurrentCylceInfo } from "@/components/CurrentCylceInfo";
import { IExercise, IWeek, useCycleStore } from "@/stores/cycle";
import { globalStyle } from "@/styles/global";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  const {} = useCycleStore();

  const activeCycle = useCycleStore((state) =>
    state.cycles.find((i) => i.cycleStatus === "active"),
  );

  const activeWeek =
    activeCycle?.weeks.find((i) => i.weekId == activeCycle.activeWeek) ?? null;

  const statusHighliter = (status: String) => {
    if (status == "active") return "#0c7eafff";
    if (status == "not_started") return "#c12828ff";
    if (status == "finished") return "#0dd932ff";
  };

  const getLastSet = (exercise: IExercise) => {
    let lastIndex = exercise.sets.length - 1;

    return exercise.sets[lastIndex]
      ? `${exercise.sets[lastIndex].weight}kg x ${exercise.sets[lastIndex].reps} -  RPE: ${exercise.sets[lastIndex].rpe}`
      : "Not performed";
  };
  
  const exercisePressHandler = (exercies: IExercise) => {
    router.navigate({
      pathname: "/exercise",
      params: {
        name: exercies.name,
        id: exercies.id,
      },
    });
  };

  return (
    <View style={globalStyle.container}>
      <CurrentCylceInfo />
      {activeWeek?.exercises.map((i: IExercise) => (
        <Pressable
          style={globalStyle.exercise}
          key={i.id}
          onPress={() => exercisePressHandler(i)}
        >
          <View style={globalStyle.exercise_link}>
            <View>
              <Text style={globalStyle.title}>{i.name}</Text>
              <Text style={globalStyle.info}>Last: {getLastSet(i)}</Text>
            </View>
            <View style={globalStyle.exercise_block}>
              <Text style={globalStyle.past_info}>
                Planned: {i.plannedSets.weight}x{i.plannedSets.reps}x
                {i.plannedSets.sets}
              </Text>
              <Text
                style={{
                  color: statusHighliter(i.status),
                  textAlign: "end",
                }}
              >
                {i.status}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
