import { useCycleStore } from "@/stores/cycle";
import { CycleInfoStyles } from "@/styles/cycleInfo";
import { Text, View } from "react-native";

export const CurrentCylceInfo = () => {
  const currentCycle = useCycleStore((state) =>
    state.cycles.find((i) => i.cycleStatus === "active"),
  );

  return (
    <View style={CycleInfoStyles.cylce_info}>
      <View>
        <Text style={CycleInfoStyles.cycle_info_title}>
          {currentCycle?.name}
        </Text>
        <Text style={CycleInfoStyles.cycle_info_p}>
          Duration: {currentCycle?.weeks.length}
        </Text>
      </View>
      <View style={CycleInfoStyles.cycle_info_sub}>
        <Text style={CycleInfoStyles.cycle_info_p_sub}>Current Cycle</Text>
        <Text style={CycleInfoStyles.cycle_info_p_sub}>
          Week: {currentCycle?.activeWeek}/{currentCycle?.weeks.length}
        </Text>
      </View>
    </View>
  );
};
