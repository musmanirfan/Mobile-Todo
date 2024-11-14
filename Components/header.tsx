import React from 'react'
import { Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={{
            backgroundColor: '#EDF6FF',
            paddingTop: 40,
            paddingBottom: 10,
            borderRadius: 500,
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center'
            }}>List Todo</Text>
        </View>
    )
}
