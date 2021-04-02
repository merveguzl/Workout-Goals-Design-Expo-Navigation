import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import styles from '../style/container'
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("window").width;

const MyBody = () => {
    const navigation = useNavigation();

    const onBack = () =>{
        navigation.goBack();
    }

    return (
        <ScrollView style={{backgroundColor:'#fff'}} >
        <View style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity onPress={onBack}>
                    <Image 
                        style={styles.imageTwo}
                        source={require("../assets/left.png")} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.back, {backgroundColor:'#2EB7F5'}]} >
                    <Image 
                        source={require("../assets/chat.png")}
                        style={styles.imageThree}
                    />
                </TouchableOpacity>
            </View>
            <Text style={[styles.name, styles.lineHeader]} > 
                My Body
            </Text>
            <Text style={styles.subHeader} >
                Basics
            </Text>
            <View style={{flexDirection:"row", width:'85%', justifyContent:'space-around', marginTop:'5%'}} >
                <View style={[{backgroundColor:"#FB5F28"}, styles.bodyBox]} >
                    <Text style={[styles.font40, {color:'#fff'}]} >
                        72<Text style={{fontSize:10}} >kg</Text>
                    </Text>
                    <Text style={{color:"#fff", fontSize:12}} >
                        Weight
                    </Text>
                </View>
                <View style={[{backgroundColor:"#4A37F5"}, styles.bodyBox]} >
                    <Text style={[styles.font40, {color:'#fff'}]} >
                        175<Text style={{fontSize:10}}>cm</Text>
                    </Text>
                    <Text style={{color:"#fff", fontSize:12}} >
                        Height
                    </Text>
                </View>
            </View>
            <View style={styles.tabBox} >
                <Text style={{fontSize:22, color:'#fff'}} >Boxing, Gym, Running...</Text>
                <Text style={{fontSize:11, color:'#fff'}} >Experience</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:"center", marginTop:'10%', width:'80%'}}>
                <Image
                    source={require("../assets/lock.png")}
                    style={styles.imageThree}
                />
                <Text style={[styles.subHeader,{marginTop:0, marginLeft:'3%'}]} >
                    Advenced
                </Text>
            </View>
            <View style={{flexDirection:"row", width:'85%', justifyContent:'space-around', marginTop:'5%'}} >
                <View style={[{backgroundColor:"#FB5F28"}, styles.bodyBox]} >
                   
                </View>
                <View style={[{backgroundColor:"#4A37F5"}, styles.bodyBox]} >
                    
                </View>
            </View>
            <View style={styles.tabBox} >
            </View>

        </View>
        </ScrollView>
    )
}

export default MyBody
