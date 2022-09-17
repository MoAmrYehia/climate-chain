import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, useColorScheme, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Btn from '../components/btn';
import Crd from '../components/crd';
import Dropdown from '../components/dropdown';
import MapChart from '../components/mapChart';
import { Cities } from '../data/cities';
import { TempYearData } from '../data/data';
import { Foods } from '../data/foods';
import { Hobbies } from '../data/hobbies';

import Svg, {
    Circle,
} from 'react-native-svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faEye,
    faEyeSlash,
    faAddressBook,
    faAnchor,
} from '@fortawesome/free-solid-svg-icons';


function HomeScreen(props:any) {
    const {navigation} = props;
    const [selectedYear, setSelectedYear] = useState(2022);

    const isDarkMode = false;//useColorScheme() === 'dark';
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
    
    return (
        <View style={[styles.container, backgroundStyle]}>
            <View style={[
                { 
                    backgroundColor: '#E5EFFE',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: 220
                }, 
                styles.center,
                styles.shadowProp]}>
                <Slider
                    onValueChange={(e) => setSelectedYear(e)}
                    style={{
                        width: '90%', 
                        height: 20
                    }}
                    step={1}
                    minimumValue={2022}
                    maximumValue={2080}
                    minimumTrackTintColor='#457FF7'
                    maximumTrackTintColor='#457FF7'
                />
                <View style={{
                    width: "100%",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginTop: 10
                    }}>
                    <View>
                        <Text style={{color: 'darkgray'}}>2022</Text>
                    </View>
                    <View>
                        <Text style={{color: 'darkgray'}}>2080</Text>
                    </View>
                </View>
                <Text style={[{
                    fontSize: 25, 
                    fontWeight: "700", 
                    color: '#000',
                    marginTop: 10
                }]}>{selectedYear}</Text>
            </View>
            {/* <Text style={[styles.title, textColor()]}> 👋 Hi</Text> */}
            {/* <View style={[{flex: 1, paddingHorizontal: 20}, styles.center]}>
                <MapChart />
            </View> */}
            <View style={{margin: 10}}>
                {
                    TempYearData.get(`${selectedYear}`).cards.map((d) => {
                        return (
                            <Crd key={d.id} mode={d.styleMode}>
                                <View style={{margin: 10}}>
                                    <View style={{
                                            flexDirection: 'row',
                                            marginVertical: 5
                                        }}>
                                        <View style={{paddingHorizontal: 15}}>
                                            <FontAwesomeIcon 
                                                icon={d.icon}
                                                color={'#939393'} 
                                                size={ 15 }/>
                                        </View>
                                        <View><Text style={{color: '#333'}}>{d.title}</Text></View>
                                    </View>
                                    <View style={{
                                            flexDirection: 'row', 
                                            justifyContent: 'space-between',
                                            marginVertical: 5
                                        }}>
                                        <View><Text style={{fontSize: 16, fontWeight: '500'}}>{d.leftDesc}</Text></View>
                                        <View><Text style={{fontSize: 12, color: 'crimson'}}>{d.rightDesc}</Text></View>
                                    </View>
                                </View>
                            </Crd>
                        )
                    })
                }
            </View>
            {/* <View style={{flex: 1, paddingHorizontal: 20}}>
                <Text style={[{textAlign: 'center', marginVertical: 10}, textColor()]}>Where do you live ?</Text>
                <Dropdown options={Cities}/>
            </View>
            <View style={[{flex: 1, paddingHorizontal: 20}]}>
                <Text style={[{textAlign: 'center', marginVertical: 10}, textColor()]}>What is your favourite food ?</Text>
                <Dropdown options={Foods}/>
            </View>
            <View style={[{flex: 1, paddingHorizontal: 20}]}>
                <Text style={[{textAlign: 'center', marginVertical: 10}, textColor()]}>What is your hobby ?</Text>
                <Dropdown options={Hobbies}/>
            </View>
            <View style={[{flex:2, paddingHorizontal: 20
}, styles.center]}>
                    <Btn 
                        handlePress={() => navigation.navigate("Results")} 
                        text='How the future will loke like?'
                    />
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '700'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

export default HomeScreen;