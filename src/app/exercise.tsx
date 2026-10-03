import { AddSet } from "@/components/AddSet";
import { ExerciseStyles } from "@/styles/exercise";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const mockExerciseData = {
    last: "80x5x3",
    status: "Active",
    planned: "82.5x5x3"
}

export default function ExerciseScreen() {
    const { id, name } = useLocalSearchParams();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={ExerciseStyles.container}>
            <View style={ExerciseStyles.title_block}>
                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: "space-between"
                }}>
                    <Text style={ExerciseStyles.title}>{name}</Text>
                    <Text style={ExerciseStyles.p}>{mockExerciseData.status}</Text>
                </View>
                <Text style={ExerciseStyles.p}>Last: {mockExerciseData.last}</Text>
                <Text style={ExerciseStyles.p}>Planned: {mockExerciseData.planned}</Text>
            </View>

            <View style={ExerciseStyles.sets}>
                <View style={ExerciseStyles.set}>
                    <Text style={ExerciseStyles.p}>80x3</Text>
                    <Text style={ExerciseStyles.p}>RPE: 8</Text>
                    <Text style={ExerciseStyles.p}>Finished</Text>
                </View>
            </View>

            <View>
                <Button
                    color="#fff"
                    onPress={() => setModalVisible(true)}
                    title="Add Set +" />
                <AddSet modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>

        </View>
    );
}

