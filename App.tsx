import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './Components/header';

export default function App() {
  const [text, setText] = useState("")
  const [arr, setArr] = useState<string[]>([])

  useEffect(() => {
    console.log(text);
  }, [])

  const addItem = () => {
    if (text.trim() !== "") {
      setArr([...arr, text]);
      setText("");
    }
  }

  return (
    <>
      <Header />
      <ScrollView>
        <TextInput
          style={{
            marginLeft: 15,
            borderWidth: 2,
            width: 330,
            borderColor: '#000000',
            marginTop: 15
          }}
          value={text}
          onChangeText={setText}
          placeholder='Enter Text'
        />
        <TouchableOpacity
          onPress={addItem}
          style={{
            width: 330,
            borderWidth: 2,
            borderColor: 'black',
            backgroundColor: 'black',
            marginVertical: 10,
            marginLeft: 15,
            paddingVertical: 5,
            borderRadius: 500,
          }}>
          <Text style={{
            textAlign: 'center',
            color: 'white',
          }}>Add</Text>
        </TouchableOpacity>
        {
          <FlatList
            data={arr}
            renderItem={({ item }) => (
              <Text style={{ textAlign: 'center', backgroundColor: '#EDF6FF', marginTop: 5, paddingTop: 5, paddingBottom: 5, }}>{item}</Text>
            )}
            keyExtractor={(item) => item} />
        }

        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
}


