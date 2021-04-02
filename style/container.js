import {Dimensions, StyleSheet } from 'react-native'
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      backgroundColor: '#fff',
      alignItems:"center"
    },
    header:{
        width:'150%', 
        justifyContent:'space-around', 
        flexDirection:"row", 
        alignItems:'center', 
        marginTop:'10%'
    },
    imageTwo:{
        width:20, 
        height:20
    },
    buttonTwoPoint:{
        width:'5%', 
        flexDirection:"row", 
        justifyContent:'space-around'
    },
    point:{
        width:5, 
        height:5, 
        borderRadius:2.5, 
        backgroundColor:"#9F9F9F"
    },
    profile:{
        width:'100%', 
        flexDirection:'row', 
        justifyContent:"space-around", 
        marginTop:'5%'
    },
    profileImageContainer:{
        marginLeft:'5%', 
        width:80 
    },
    imageBack:{
        width:80, 
        height:80, 
        borderRadius:40, 
        position:"absolute"
    },
    profileImage:{
        width:65, 
        height:65, 
        borderRadius:32.5, 
        position:"absolute", 
        left:7.5, 
        top:7.5
    },
    line:{
        width:1,
        height:80, 
        backgroundColor:'#9F9F9F'
    },
    nameContainer:{
        width:'80%', 
        marginTop:'5%'
    },
    name:{fontWeight:'600' ,fontSize:40},
    surname:{fontWeight:'200', fontSize:40, color:"#9F9F9F"},
    rowContainer:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        width:'85%',
        marginLeft:'2.5%',
        alignItems:"center",
        height:40,
        marginTop:'10%',

    },
    row:{
        width:'30%', 
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"flex-start",
        height:40
    },
    imageThree:{width:15, height:15},
    iconBackground:{
        width:35, height:35,
        borderRadius:17.5,
        alignItems:"center",
        justifyContent:"center",
        marginRight:'20%',
    },
    back:{
        backgroundColor:"#F4F4F4",
        width:35,
        height:35,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
    },
    signContainer:{
        position:'absolute',
        bottom:'10%',
        left:'5%',
        width:'30%',
        height:50,
        borderRadius:10,
        backgroundColor:'#F4F4F4',
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row"
    },
    lineHeader:{width:'80%', marginTop:'5%'},
    subHeader:{
        fontSize:20, 
        width:'80%', 
        marginTop:'10%'
    },
    rowThree:{
        flexDirection:"row", 
        justifyContent:"space-around", 
        width:'100%', 
        padding:'5%', 
        alignItems:'center'
    },
    quarter:{
        width:'25%',
    },
    font40:{fontSize:40},
    bodyBox:{
        width:width*35/100, 
        height:width*35/100, 
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    tabBox:{
        width:'77%', 
        justifyContent:'space-around', 
        marginTop:'5%', 
        height:width*35/100,
        backgroundColor:'#22B2F8',
        borderRadius:15,
        justifyContent:"space-around",
        padding:'5%',
        paddingVertical:'10%'
    }
  });

  export default styles