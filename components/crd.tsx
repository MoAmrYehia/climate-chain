import React, { Children } from 'react';
import { View, Text } from 'react-native';
import { StyleModes } from '../consts/styleModes';

export interface iCrd {
    mode: string;
    children: Element
}

const Crd = (props: any) => {

    const {mode} = props;

    const styleMode = () => StyleModes.get(mode);

    return (
        <>
            <View style={[
                StyleModes.get(mode), 
                {
                    borderRadius: 18,
                    marginVertical: 5
                }]}>
                    {props.children}
                    <View style={{
                        backgroundColor: styleMode().borderColor, 
                        paddingLeft: 15,
                        borderBottomLeftRadius: 18,
                        borderBottomRightRadius: 18,
                        paddingVertical: 3
                        }}>
                        <Text style={{color: 'white', fontWeight: '500'}}>See why</Text>
                    </View>
            </View>
        </>
    )
}

export default Crd;