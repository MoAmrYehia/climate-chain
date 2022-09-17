import React, { useEffect, useState } from 'react';
import { Pressable, View, Text, StyleSheet, Modal, Alert, ScrollView, useColorScheme } from 'react-native';
import { iOption } from '../interfaces/iOption';
import Svg, {
    Circle,
} from 'react-native-svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faEye,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Dropdown = (props: any) => {
    const {onPress, value, options} = props;

    const _options: Array<iOption> = options ? [{key: 0, description: "Select.."}, ...options] : [
        {key: 0, description: "Select.."}, 
    ];
    const [selected, setSelected] = useState(0);
    const [visible, setVisible] = useState(false);

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const textColor = () => {
        if(isDarkMode){
            return {
                color: '#F2F2F2'
            }
        } else {
            return {
                color: '#7C7D7E'
            }
        }
    }


    // layout modal 
    const [x, setX] = useState(0);
    const [height, setHeight] = useState(0);
    const [y, setY] = useState(0);
    const [width, setWidth] = useState(0);
    
    const position = () => {
        return {
            top: height + 70
        }
    }
    
    return (
        <View 
            onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                setX(layout.x);
                setHeight(layout.height);
                setY(layout.y);
                setWidth(layout.width)
            }}>
            <Pressable onPress={() => {
                    props.onPress; 
                    setVisible(true)
                }}>
                <View style={styles.button}>
                    <View style={[styles.textContainer, {flex:9}]}>
                        <Text style={[textColor()]}>{_options[selected]?.description}</Text>
                    </View>
                    <View style={[styles.textContainer]}>
                        <FontAwesomeIcon
                            icon={ faChevronDown } 
                            color={'#939393'} 
                            size={ 15 }/>
                    </View>
                </View>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setVisible(!visible);
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                    }}>
                        <View style={{
                            margin: 10,
                            borderWidth: 0.5,
                            borderRadius: 28,
                            padding: 10,
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                            marginVertical: 50,
                            height: 400}}>
                            <ScrollView>
                                {_options.map((o: iOption, index: number)  => {
                                    return <View 
                                                key={index} 
                                                style={{
                                                    marginVertical: 5,
                                                }}>
                                                <Pressable onPress={() => {
                                                    setSelected(o.key);
                                                    setVisible(false);
                                                }}>
                                                    <Text style={{color: '#FFF'}}>{o.description}</Text>
                                                </Pressable>
                                        </View>
                                })}
                            </ScrollView>
                        </View>
                        
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        borderColor: '#939393',
        borderWidth: 1,
        height: 35,
        borderRadius: 28,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 15
    },
    textContainer: {
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    dropdownChevron: {
        textAlign: 'right'
    }
    
})

export default Dropdown;