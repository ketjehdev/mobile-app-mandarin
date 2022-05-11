import * as React from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
    Linking,
} from 'react-native'
import moment from 'moment';
import 'moment/locale/zh-cn';
const _width = Dimensions.get('window').width; 

const News = () => {
    const date = new Date()
    return (    
        <ScrollView style={{ backgroundColor: '#fff' }}>
            {/* date */}
            <View style={styles.dateContainer}> 
                <Text style={styles.dateText}>{moment(date).format('LL')}</Text>
            </View>

            {/* banner news */}
            <View style={styles.banner}>
                <Image 
                    source={require('../img/banner.jpg')}
                    resizeMode='cover'
                    style={{
                        height:"100%",
                        width:"100%",
                    }}
                />
            </View>

            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: 8,
                marginTop: 20,
                color: '#05626F',
            }}>
                热点新闻
            </Text>

        <TouchableOpacity onPress={() => Linking.openURL("https://kesehatan.kontan.co.id/news/apa-itu-omicron-ini-6-hal-tentang-varian-omicron-masuk-indonesia-dan-gejalanya?page=all")}>
            <View style={styles.cardNews}>
                <View style={{ width: "100%", height: "75%" }}>
                    <Image 
                        source={require('../img/omicron.jpg')}
                        style={{ 
                            width: "100%",
                            height: "100%"
                        }}

                        resizeMode='cover'
                    />
                </View>

                <Text style={{ 
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginVertical: 18,
                    textAlign: 'center',
                 }}>
                    什么是欧姆病毒？识别症状。
                </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL("https://www.republika.co.id/berita/r4vipl425/tujuh-penyakit-paling-mematikan-sepanjang-sejarah-selain-covid19")}>
            <View style={styles.cardNews}>
                <View style={{ width: "100%", height: "75%" }}>
                    <Image 
                        source={require('../img/news2.jpg')}
                        style={{ 
                            width: "100%",
                            height: "100%"
                        }}

                        resizeMode='cover'
                    />
                </View>

                <Text style={{ 
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginVertical: 15,
                    textAlign: 'center',
                 }}>
                    历史上除 Covid-19 外最致命的疾病。
                </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL("https://katadata.co.id/safrezi/berita/619b753b64215/cara-mengatasi-insomnia-4-tips-tidur-nyenyak-yang-patut-dicoba")}>
            <View style={styles.cardNews}>
                <View style={{ width: "100%", height: "75%" }}>
                    <Image 
                        source={require('../img/news3.jpg')}
                        style={{ 
                            width: "100%",
                            height: "100%"
                        }}

                        resizeMode='cover'
                    />
                </View>

                <Text style={{ 
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginVertical: 18,
                    textAlign: 'center',
                 }}>
                    如何应对失眠
                </Text>
            </View>
            </TouchableOpacity>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    dateContainer: {
        width: _width,
        height: 60,
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#fff',        
    },  
    dateText: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
    },
    banner: {
        width: _width,
        height: 250,
    },
    cardNews: {
        width: "90%",
        height: 280,
        marginVertical: "5%",
        marginHorizontal: "5%",
        backgroundColor: '#fff',
        elevation: 5,
    }
}); 

export default News;