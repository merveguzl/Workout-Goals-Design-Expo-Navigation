import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from "../style/container";

const Profile = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity>
                    <Image 
                        style={styles.imageTwo}
                        source={require("../assets/left.png")} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTwoPoint} >
                    <View style={styles.point} />
                    <View style={styles.point}/>
                </TouchableOpacity>
            </View>
            <View style={styles.profile} >
                <View style={styles.profileImageContainer} >
                    <Image 
                        source={require("../assets/image_back.png")}
                        style={styles.imageBack}
                    />
                    <Image 
                        source={require("../assets/woman.png")}
                        style={styles.profileImage}
                    />
                </View>
                <View style={styles.line} />
                <View>
                    <Text style={{color:"#9F9F9F"}} >
                        Joined
                    </Text>
                    <Text>
                        mon ago
                    </Text>
                </View>
            </View>
            <View style={styles.nameContainer} >
                <Text style={styles.name} > 
                    David
                </Text>
                <Text style={styles.surname} >
                    Clerisseau
                </Text>
            </View>
            <View style={styles.rowContainer} >
                <View style={styles.row} >
                    <View style={[styles.iconBackground, {backgroundColor:"#FFE6D1"}]} >
                        <Image  
                            source={require("../assets/diana.png")}
                            style={styles.imageThree}
                            resizeMode="contain"
                        />
                    </View>
                    <Text>
                        Goals
                    </Text>
                </View>
                <TouchableOpacity style={styles.back} 
                    onPress={() => {
                        navigation.navigate("Goal");
                      }}
                >
                    <Image 
                        source={require("../assets/right.png")}
                        style={styles.imageThree}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.rowContainer} >
                <View style={styles.row} >
                    <View style={[styles.iconBackground, {backgroundColor:"#F4E5FF"}]} >
                        <Image  
                            source={require("../assets/man.png")}
                            style={styles.imageThree}
                            resizeMode="contain"
                        />
                    </View>
                    <Text>
                        My Body
                    </Text>
                </View>
                <TouchableOpacity style={styles.back} 
                  onPress={() => {
                    navigation.navigate("myBody");
                  }}
                >
                    <Image 
                        source={require("../assets/right.png")}
                        style={styles.imageThree}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.rowContainer} >
                <View style={styles.row} >
                    <View style={[styles.iconBackground, {backgroundColor:"#DEF5FF"}]} >
                        <Image  
                            source={require("../assets/settings.png")}
                            style={styles.imageThree}
                            resizeMode="contain"
                        />
                    </View>
                    <Text>
                        Settings
                    </Text>
                </View>
                <TouchableOpacity style={styles.back} >
                    <Image 
                        source={require("../assets/right.png")}
                        style={styles.imageThree}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signContainer} >
                <Image 
                    source={require("../assets/logout.png")}
                    style={styles.imageThree}
                    resizeMode="contain"
                />
                <Text>
                    Sign Out
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Profile