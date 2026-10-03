import { CurrentCylceInfo } from "@/components/CurrentCylceInfo";
import { globalStyle } from "@/styles/global";
import { Link, router, useRoute } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";

interface IExercise {
  id: number,
  name: string,
  last: string,
  status: string,
  planned: string
}

export default function HomeScreen() {
  const [exercies, setExercises] = useState<IExercise[]>([
    {
      id: 0,
      name: "Bench Press",
      last: "80x5x3",
      status: "Active",
      planned: "82.5x5x3"
    },
    {
      id: 1,
      name: "Deadlift",
      last: "110x3x3",
      status: "Finished",
      planned: "115x5x3"
    },
    {
      id: 2,
      name: "Squat",
      last: "90x4x3",
      status: "Not Started",
      planned: "92.5x4x3"
    }
  ])

  const statusHighliter = (status: String) => {
    if (status == 'Active') return '#0c7eafff'
    if (status == 'Not Started') return '#c12828ff'
    if (status == 'Finished') return '#0dd932ff'
  }

  const exercisePressHandler = (exercies: IExercise) => {
    router.navigate({
      pathname: "/exercise",
      params: {
        name: exercies.name,
        id: exercies.id
      }
    })
  }

  return (
    <View style={globalStyle.container}>
      <CurrentCylceInfo />
      {exercies.map((i: IExercise) => (
        <Pressable style={globalStyle.exercise} key={i.id} onPress={() => exercisePressHandler(i)}>
          <View style={globalStyle.exercise_link}>
            <View>
              <Text style={globalStyle.title}>{i.name}</Text>
              <Text style={globalStyle.info}>Last: {i.last}</Text>
              <Text style={{
                color: statusHighliter(i.status)
              }}>{i.status}</Text>
            </View>
            <View>
              <Text style={globalStyle.past_info}>Planned: {i.planned}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

