import React from 'react';
import { View, StyleSheet, useColorScheme, ScrollView, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Crd from '../components/crd';
import MapChart from '../components/mapChart';

function ResultsScreen() {

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

    return (
        <View style={[styles.container, backgroundStyle]}>
            <ScrollView>
                <View style={{marginVertical:10}}>

                    <Crd mode='warn'>
                        <View style={{margin:10}}>
                            <Text>Hello People</Text>
                        </View>
                    </Crd>

                    <Crd mode='primary'>
                        <View style={{margin:10}}>
                            <Text>Hello People</Text>
                        </View>
                    </Crd>

                    <Crd mode='success'>
                        <View style={{margin:10}}>
                            <Text>Hello People</Text>
                        </View>
                    </Crd>
                </View>

                {/* <View style={{flex:1}}>
                    <MapChart />
                </View> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        paddingHorizontal: 20
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '700'
    }
})

export default ResultsScreen;