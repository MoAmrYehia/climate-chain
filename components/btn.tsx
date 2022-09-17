import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface iButton {
    handlePress: () => void;
    text: string
}
const Btn = (props: iButton) => {
    const {handlePress, text} = props;
    
    return (
        <View style={{
            backgroundColor: 'dodgerblue',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            borderRadius: 18}}>
            <Pressable onPress={handlePress}>
                <Text 
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 14
                    }}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

export default Btn;