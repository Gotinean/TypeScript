import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";

interface INote {
    text: string;
}

function idGenerator() {
    const id: string = Date.now.toString();
}

const Main = () => {
    const [value, setValue] = useState<string>('');
    const [noteList, setNoteList] = useState<INote[]>([]);

    const handleAddNote = (): void => {
        if(value.trim()){
            setNoteList([...noteList, {text: value}]);
        } else {}
    };

    const handleRemoveNote = (index: number): void => {
        const newNoteList = [...noteList];
        newNoteList.splice(index, 1);
        setNoteList(newNoteList);
    }

    

    return (
        <View>
            <Text>Notepad</Text>
        </View>
    )
}