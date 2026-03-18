import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const Body = () => {
    const [radius, setRadius] = useState('');
    const [height, setHeight] = useState('');
    const [volume, setVolume] = useState(null);

    const calcResult = () => {
        const r = parseFloat(radius);
        const h = parseFloat(height);
        if (r > 0 && h > 0) {
            setVolume((Math.PI * r * r * h).toFixed(2));
        } else {
            alert("Hibás adatok!");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Sugár (r) [cm]:</Text>
            <TextInput
                style={styles.input}
                value={radius}
                onChangeText={setRadius}
               
            />

            <Text style={styles.label}>Magasság (h) [cm]:</Text>
            <TextInput
                style={styles.input}
                value={height}
                onChangeText={setHeight}
               
            />

            <TouchableOpacity style={styles.button} onPress={calcResult}>
                <Text style={styles.buttonText}>SZÁMÍTÁS</Text>
            </TouchableOpacity>

            {volume && (
                <View style={styles.resBox}>
                    <Text style={styles.resText}>Eredmény: {volume} cm³</Text>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignSelf: 'center',
        width: Platform.OS === 'web' ? 400 : '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 2, 
        borderColor: '#000',
        padding: 10,
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#000',
        padding: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    resBox: {
        marginTop: 30,
        borderWidth: 4, 
        padding: 20,
        alignItems: 'center',
    },
    resText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Body;