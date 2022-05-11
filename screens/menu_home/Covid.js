import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default function Covid() {
    return (
        <>
            <ScrollView>
                <View style={styles.cardWarn}>
                    <Text style={{ 
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000',
                        margin: 10,
                     }}>
                        案子
                    </Text>
                    <Text style={{ 
                        fontSize: 50,
                        fontWeight: 'bold',
                        color: '#000',
                        margin: 15,
                     }}>
                        ± 1.844.922
                    </Text>
                </View> 

                <View style={styles.cardSucc}>
                    <Text style={{ 
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000',
                        margin: 10,
                     }}>
                        痊愈
                    </Text>
                    <Text style={{ 
                        fontSize: 50,
                        fontWeight: 'bold',
                        color: '#000',
                        margin: 15,
                     }}>
                        ± 1.524.765
                    </Text>
                </View>

                <View style={styles.cardDang}>
                    <Text style={{ 
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000',
                        margin: 10,
                     }}>
                        死
                    </Text>
                    <Text style={{ 
                        fontSize: 50,
                        fontWeight: 'bold',
                        color: '#000',
                        margin: 15,
                     }}>
                        ± 1.128.322
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    cardWarn: {
        width: "90%",
        marginVertical: "5%",
        marginHorizontal: "5%", 
        height:220,
        borderRadius: 12,
        backgroundColor: 'orange',
        elevation: 5,
    },

    cardSucc: {
        width: "90%",
        marginVertical: "5%",
        marginHorizontal: "5%", 
        height:220,
        borderRadius: 12,
        backgroundColor: 'green',
        elevation: 5,
    },
    cardDang: {
        width: "90%",
        marginVertical: "5%",
        marginHorizontal: "5%", 
        height:220,
        borderRadius: 12,
        backgroundColor: 'crimson',
        elevation: 5,
    }
})