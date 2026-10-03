import { CycleInfoStyles } from '@/styles/cycleInfo'
import { globalStyle } from '@/styles/global'
import { useState } from 'react'
import { Text, View } from 'react-native'

interface ICurrentInfo {
    cycleName: string,
    currentWeek: number,
    totalWeeks: number
}

export const CurrentCylceInfo = () => {
    const [currentInfo, setCurrentInfo] = useState<ICurrentInfo>({
        cycleName: "Mission UZB",
        currentWeek: 1,
        totalWeeks: 4
    })

    return (
        <View style={CycleInfoStyles.cylce_info}>
            <View>
                <Text style={CycleInfoStyles.cycle_info_title}>{currentInfo.cycleName}</Text>
                <Text style={CycleInfoStyles.cycle_info_p}>Duration: {currentInfo.totalWeeks}</Text>
            </View>
            <View style={CycleInfoStyles.cycle_info_sub}>
                <Text style={CycleInfoStyles.cycle_info_p_sub}>Current Cycle</Text>
                <Text style={CycleInfoStyles.cycle_info_p_sub}>Week: {currentInfo.currentWeek}/{currentInfo.totalWeeks}</Text>
            </View>
        </View>
    )
}
