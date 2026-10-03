import { AddSetStyles } from '@/styles/addset';
import React, { useState } from 'react'
import { Alert, Modal, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

export const AddSet = ({ modalVisible, setModalVisible }: { modalVisible: boolean, setModalVisible: (modalState: boolean) => void }) => {
    const [data, setData] = useState({
        weight: 80,
        reps: 4,
        rpe: 7.5,
    });

    const onChangeHandler = ({ name, value }: { name: string, value: any }) => {
        setData({ ...data, [name]: value })
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={AddSetStyles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={AddSetStyles.centeredView}>
                        <View style={AddSetStyles.modalView}>
                            <View style={AddSetStyles.button_wrapper}>
                                <Pressable
                                    style={[AddSetStyles.button, AddSetStyles.buttonCancle]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={AddSetStyles.textStyle}>Cancel</Text>
                                </Pressable>
                                <Pressable
                                    style={[AddSetStyles.button, AddSetStyles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={AddSetStyles.textStyle}>Add Set</Text>
                                </Pressable>
                            </View>
                            <View>
                                <View style={AddSetStyles.previousData}>
                                    <Pressable onPress={() => onChangeHandler({ name: "weight", value: data.weight - 2.5 })} style={AddSetStyles.previousDataItem}>
                                        <Text style={{ color: '#fff', fontSize: 18 }}>- 2.5 KG</Text>
                                    </Pressable>
                                    <TextInput
                                        placeholder="Weight"
                                        keyboardType="numeric"
                                        style={AddSetStyles.inout}
                                        placeholderTextColor="#8f8f8fff"
                                        returnKeyType="done"
                                        value={data.weight.toString()}
                                        onChangeText={(e) => onChangeHandler({ name: "weight", value: e })}
                                    />
                                    <Pressable onPress={() => onChangeHandler({ name: "weight", value: data.weight + 2.5 })} style={AddSetStyles.previousDataItem}>
                                        <Text style={{ color: '#fff', fontSize: 18 }}>+ 2.5 KG</Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View>
                                <View style={AddSetStyles.previousData}>
                                    <Pressable onPress={() => onChangeHandler({ name: "reps", value: data.reps - 1 })} style={AddSetStyles.previousDataItem}>
                                        <Text style={{ color: '#fff' }}>
                                            <AntDesign name="minus" size={22} color="white" />
                                        </Text>
                                    </Pressable>
                                    <TextInput
                                        placeholder="Reps"
                                        keyboardType="numeric"
                                        value={data.reps.toString()}
                                        style={AddSetStyles.inout}
                                        maxLength={10}
                                        placeholderTextColor="#8f8f8fff"
                                        returnKeyType="done"
                                        onChangeText={(e) => onChangeHandler({ name: "reps", value: e })}
                                    />
                                    <Pressable onPress={() => onChangeHandler({ name: "reps", value: data.reps + 1 })} style={AddSetStyles.previousDataItem}>
                                        <Text style={{ color: '#fff' }}>
                                            <AntDesign name="plus" size={22} color="white" />
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View>
                                <View style={AddSetStyles.previousData}>
                                    <Pressable onPress={() => onChangeHandler({ name: "rpe", value: data.rpe - 0.5 })} style={AddSetStyles.previousDataItem}>
                                        <Text style={{ color: '#fff', fontSize: 18 }}>
                                            - 0.5
                                        </Text>
                                    </Pressable>
                                    <TextInput
                                        placeholder="RPE 1-10"
                                        keyboardType="numeric"
                                        value={data.rpe.toString()}
                                        style={AddSetStyles.inout}
                                        maxLength={10}
                                        placeholderTextColor="#8f8f8fff"
                                        returnKeyType="done"
                                        onChangeText={(e) => onChangeHandler({ name: "rpe", value: e })}
                                    />
                                    <Pressable onPress={() => onChangeHandler({ name: "rpe", value: data.rpe + 0.5 })} style={AddSetStyles.previousDataItem}>
                                        <Text style={{ color: '#fff', fontSize: 18 }}>
                                            + 0.5
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
