import React from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import styles from "../style/container";
import { useNavigation } from '@react-navigation/native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  
const Goals = () => {
    const navigation = useNavigation();

    const onBack = () =>{
        navigation.goBack();
    }

    return (
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
                Goals
            </Text>
            <Text style={styles.subHeader} >
                Gain Weight
            </Text>
            <View style={styles.rowThree} >  
                <View style={styles.quarter} >
                    <Text style={styles.font40} >
                        72<Text style={{fontSize:10}} >kg</Text>
                    </Text>
                    <Text style={{color:"#9F9F9F", fontSize:12}} >
                        Current
                    </Text>
                </View>
                <Image 
                    source={require("../assets/go.png")}
                    style={styles.imageTwo}
                    resizeMode="contain"
                />
                <View style={styles.quarter} >
                    <Text style={styles.font40} >
                        74<Text style={{fontSize:10}} >kg</Text>
                    </Text>
                    <Text style={{color:"#9F9F9F", fontSize:12}}>
                        Goal
                    </Text>
                </View>
            </View>
            <View style={{width:'100%', alignItems:"center", justifyContent:"center"}} >
                <LineChart
                data={{
                    labels: ["+6.5 kg","2.2 kg"],
                    datasets: [
                    {
                        data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        ]
                    }
                    ]
                }}
                width={Dimensions.get("window").width*80/100} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 108, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 108, 0, ${opacity})`,
                    style: {
                    borderRadius: 0,
                    },
                    propsForDots: {
                    r: "7",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 0,
                    padding:10,
                    borderColor:"#9F9F9F",
                    borderWidth:0.3
                }}
                />
            </View>
        </View>
    )
}

export default Goals
