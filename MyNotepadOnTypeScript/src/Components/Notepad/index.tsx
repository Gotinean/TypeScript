import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from './styles'

interface INote {
    text: string;
}

const Main = () => {
    const [value, setValue] = useState<string>('');
    const [noteList, setNoteList] = useState<INote[]>([]);

    const handleAddNote = (): void => {
        if(value.trim()){
            setNoteList([...noteList, {text: value}]);
        } else {}
        setValue('')
    };

    const handleRemoveNote = (index: number): void => {
        const newNoteList = [...noteList];
        newNoteList.splice(index, 1);
        setNoteList(newNoteList);
    };


    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notepad</Text>
            <View style={styles.inputWrapper}> 
                <TextInput
                placeholder='Enter your note...'
                value={value}
                onChangeText={e => {
                    setValue(e);
                }} />
                <Button mode='contained' onPress={handleAddNote} >Add Note</Button>
            </View>
            <Text style={styles.subtitle}>Your Tasks</Text>
            {noteList.length === 0 && <Text>You haven't notes</Text>}
            {noteList.map((Note: INote, index: number) => (
                <View style={styles.listItem} key={`${index}_${Note.text}`}>
                    <Text style={styles.task}>{Note.text}</Text>
                    <Button
                    onPress={() => {
                        handleRemoveNote(index) 
                    }} mode='outlined' color='red'>Delete</Button>
                </View>
            ))}
            </View>
    )
}
export default Main;