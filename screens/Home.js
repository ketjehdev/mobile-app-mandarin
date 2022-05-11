import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

const _width = Dimensions.get('screen').width;

const Home = ({navigation}) => {
        return (
            <>
                <StatusBar barStyle='default' />
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* header */}
                    <View style={styles.header}>
                        <Image
                            style={{
                                width: _width,
                                height: 250,
                            }}
                            source={require('../img/image1.jpg')}
                         />
                    </View>
                    
                    {/* menu */}
                    <View style={styles.menuContainer}>
                        <View style={styles.menu}>
                            <TouchableOpacity 
                            style={{
                                position: 'relative',
                                width: 60,
                                height: 60,
                                borderRadius: 60,
                                padding: 1,                                
                                backgroundColor: "#FF8B8B",
                            }}

                            onPress = {() => navigation.navigate('Covid Information')}
                            >
                                <Image 
                                    source={require('../assets/covid.jpg')}
                                    resizeMode='cover'
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 100,
                                    }}
                                />
                                <Text style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}>covid-19</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.menu}>
                            <TouchableOpacity style={{
                                position: 'relative',
                                width: 60,
                                height: 60,
                                borderRadius: 60,
                                padding: 1,
                                backgroundColor: "orange",
                            }}
                                onPress={() => navigation.navigate('Pasient')}
                            >
                                <Image 
                                    source={require('../assets/sick.jpg')}
                                    resizeMode='cover'
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 100,
                                    }}
                                />

                                <Text style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}>病人</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.menu}>
                            <TouchableOpacity style={{
                                position: 'relative',
                                width: 60,
                                height: 60,
                                borderRadius: 60,
                                padding: 1,
                                backgroundColor: "#8D97FF",
                            }}
                                onPress={() => navigation.navigate('Penawar')}
                            >
                                <Image 
                                    source={require('../assets/obat.jpg')}
                                    resizeMode='cover'
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 100,
                                    }}
                                />

                                <Text style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}>解毒剂</Text>
                            </TouchableOpacity>    
                        </View>
                    </View>

                    <View style={styles.containerImage}>
                        <Image style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 5,
                        }} 
                        resizeMode='cover'
                        source={require('../assets/bannerCovid.jpg')}
                        />
                    </View>

                        
                    {/* Tips */}
                    <View style={styles.containerTips}>
                        <View style={styles.textTitle}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: '#05626F',}}
                            >
                                遵守健康协议
                            </Text>
                        </View>

                        <View style={styles.cardContainer}>
                            <View style={styles.cardTips}>
                                <Image 
                                    style={{
                                        borderRadius: 8,
                                        width: 90,
                                        height: 90,
                                    }}
                                    source={require('../img/hand.jpg')}
                                />
                                <Text style={{
                                    textAlign: 'center',
                                }}>
                                    洗手
                                </Text>
                            </View>

                            <View style={styles.cardTips}>
                                <Image 
                                    style={{
                                        borderRadius: 8,
                                        width: 90,
                                        height: 90,
                                    }}
                                    source={require('../img/mask.jpg')}
                                />
                                <Text style={{
                                    textAlign: 'center',
                                }}>
                                    戴着面具
                                </Text>
                            </View>

                            <View style={styles.cardTips}>
                                <Image 
                                    style={{
                                        borderRadius: 8,
                                        width: 90,
                                        height: 90,
                                    }}
                                    source={require('../img/distancing.jpg')}
                                />
                                <Text style={{
                                    textAlign: 'center',
                                }}>
                                    保持距离
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                    {/* Dokter */}
                    <View style={{
                        width: _width,
                        backgroundColor: "#fff",
                        bottom: "12.4%",
                    }}>
                        <View style={styles.textTitle}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: '#05626F',}}
                            >
                                我们的医生
                            </Text>
                        </View>

                        <ScrollView showsHorizontalScrollIndicator={false} style={styles.containerDokter} horizontal={true}>
                            <View style={styles.cardDokter}>
                                <View style={styles.profilDokter}>
                                    <Image 
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 100,
                                        }}
                                        source={require('../assets/dokter/alfian.jpeg')}
                                        resizeMode='cover'
                                    />
                                </View>
                                <View style={styles.namaDokter}>
                                    <Text style={styles.textNamaDokter}>
                                        dr. Alfian
                                    </Text>
                                </View>
                                <View style={styles.spesialisDokter}>
                                    <Text style={styles.textSpesialisDokter}>
                                        内科专家
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.cardDokter}>
                                <View style={styles.profilDokter}>
                                    <Image 
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 100,
                                        }}
                                        source={require('../assets/dokter/dicky.jpeg')}
                                        resizeMode='cover'
                                    />
                                </View>
                                <View style={styles.namaDokter}>
                                    <Text style={styles.textNamaDokter}>
                                        dr. Dicky
                                    </Text>
                                </View>
                                <View style={styles.spesialisDokter}>
                                    <Text style={styles.textSpesialisDokter}>
                                        皮肤和生殖专家
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.cardDokter}>
                                <View style={styles.profilDokter}>
                                    <Image 
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 100,
                                        }}
                                        source={require('../assets/dokter/fadhli.jpeg')}
                                        resizeMode='cover'
                                    />
                                </View>
                                <View style={styles.namaDokter}>
                                    <Text style={styles.textNamaDokter}>
                                        dr. Fadhli
                                    </Text>
                                </View>
                                <View style={styles.spesialisDokter}>
                                    <Text style={styles.textSpesialisDokter}>
                                        内科专家
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.cardDokter}>
                                <View style={styles.profilDokter}>
                                    <Image 
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 100,
                                        }}
                                        source={require('../assets/dokter/ryan.jpeg')}
                                        resizeMode='cover'
                                    />
                                </View>
                                <View style={styles.namaDokter}>
                                    <Text style={styles.textNamaDokter}>
                                        dr. Ryan
                                    </Text>
                                </View>
                                <View style={styles.spesialisDokter}>
                                    <Text style={styles.textSpesialisDokter}>
                                        内科专家
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.cardDokter}>
                                <View style={styles.profilDokter}>
                                    <Image 
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 100,
                                        }}
                                        source={require('../assets/dokter/varel.jpeg')}
                                        resizeMode='cover'
                                    />
                                </View>
                                <View style={styles.namaDokter}>
                                    <Text style={styles.textNamaDokter}>
                                        dr. Varel
                                    </Text>
                                </View>
                                <View style={styles.spesialisDokter}>
                                    <Text style={styles.textSpesialisDokter}>
                                        内科专家
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.cardDokter}>
                                <View style={styles.profilDokter}>
                                    <Image 
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 100,
                                        }}
                                        source={require('../assets/dokter/hapis.jpeg')}
                                        resizeMode='cover'
                                    />
                                </View>
                                <View style={styles.namaDokter}>
                                    <Text style={styles.textNamaDokter}>
                                        dr. Hafiz
                                    </Text>
                                </View>
                                <View style={styles.spesialisDokter}>
                                    <Text style={styles.textSpesialisDokter}>
                                        内科专家
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.cardDokter}>
                                <View style={styles.profilDokter}>
                                    <Image 
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 100,
                                        }}
                                        source={require('../assets/dokter/fathur.jpeg')}
                                        resizeMode='cover'
                                    />
                                </View>
                                <View style={styles.namaDokter}>
                                    <Text style={styles.textNamaDokter}>
                                        dr. Fathur
                                    </Text>
                                </View>
                                <View style={styles.spesialisDokter}>
                                    <Text style={styles.textSpesialisDokter}>
                                        内科专家
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.cardDokter}>
                                <View style={styles.profilDokter}>
                                    <Image 
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 100,
                                        }}
                                        source={require('../assets/dokter/zoe.jpeg')}
                                        resizeMode='cover'
                                    />
                                </View>
                                <View style={styles.namaDokter}>
                                    <Text style={styles.textNamaDokter}>
                                        dr. Zoe
                                    </Text>
                                </View>
                                <View style={styles.spesialisDokter}>
                                    <Text style={styles.textSpesialisDokter}>
                                        神经科医生
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>

                    </View>
                </ScrollView>
            </>
        );
    }

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        width: _width,
    },  
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: "3%",
      bottom: "23.5%",
      marginHorizontal: "7%", 
      width:"85%",
      borderRadius: 8,
      backgroundColor: '#FFF',
      elevation: 3
    },
    menu: {
        width: 60,
        height: 80,
    },
    containerImage: {
        bottom: "13%",
        width: _width,
        height: 353,
        backgroundColor: '#fff',
        marginBottom: 6,
        paddingHorizontal: "5%",
        paddingVertical: "5%",
        paddingTop: "15%",
    },
    containerTips: {
        bottom: "13%",
        height: 210,
        backgroundColor: "#fff",
    },  
    textTitle: {
        marginVertical: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 140,
        paddingHorizontal: 25,
        width: _width,
    },
    cardTips: {
        backgroundColor: "#fff",
        height: 110,
        width: 90,
        borderRadius: 8,
        elevation: 3, 
    },
    containerDokter: {
        width: _width,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        marginBottom: "-25%",
        height: "35%",
    },
    cardDokter: {
        width: 125,
        height: 160,
        marginRight: 20,
        borderRadius: 6,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: 'rgb(224,255,255)',
    },
    profilDokter: { 
        width: 80,
        height: 80,
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 100,
    },
    namaDokter: {
        width: "100%",
        alignItems: 'center',
    },
    textNamaDokter: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    spesialisDokter: {
        width: "100%",
        alignItems: 'center',
    },
    textSpesialisDokter: {
        fontStyle: 'italic',
    },
})

export default Home;