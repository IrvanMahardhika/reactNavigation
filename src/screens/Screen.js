import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';

const Screen = props => {
    return (
        <View style={styles.screen} >
            <SafeAreaView style={{ flex: 1 }} >
                <TouchableOpacity
                    style={{ alignItems: 'flex-end', margin: 16 }}
                    onPress={props.navigation.openDrawer}
                >
                    <Icon name="bars" type="font-awesome" size={30} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={styles.text} >{props.name} screen</Text>
                </View>
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500'
    }
});

export default Screen;
