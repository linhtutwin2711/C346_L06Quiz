import React from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Create custom component Question to display each question
const Question = ({image, question, option1, option2, option3, onValueChange}) => {
    return (
        <View style={{marginBottom: 20}}>
            <Image source={{uri: image}} style={{width: '100%', height: 400}} resizeMode='contain'/>
            <Text style={{color: 'white', fontSize: 16}}>{question}</Text>
            <Picker onValueChange={onValueChange}
                    style={{color: 'white', backgroundColor: '#333333'}}
                    dropdownIconColor='white'>
                <Picker.Item label='Select an answer...' value=''/>
                <Picker.Item label={option1} value={option1}/>
                <Picker.Item label={option2} value={option2}/>
                <Picker.Item label={option3} value={option3}/>
            </Picker>
        </View>
    );
};

export default Question;