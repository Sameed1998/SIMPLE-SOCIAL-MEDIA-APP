import React from "react";
import {
    Modal,
    StyleSheet,
    View,
    Text,
    Dimensions
} from "react-native";
import { Circle } from "react-native-animated-spinkit";
import { Colors } from "../styles/Styles";
const height = Dimensions.get('screen').height
const Loader = (props) => {
    return (
        <View style={styles.container}>

            <Modal
                animationType="fade"
                transparent
                visible={props.loading}>
                <View
                    style={styles.loaderBox}
                >
                    <View style={styles.loader}>
                        <Circle size={height / 20} color={Colors.white} />
                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.textStyle}>{props.loadingText || "Please Wait"}</Text>
                    </View>
                </View>
            </Modal>
        </View>


    );
}
export default Loader;
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.black
    },
    loaderBox:{
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: Colors.loaderBgColor,
        alignItems: "center",
        flex: 1,
        width: '100%'
    },
    loader: {
        backgroundColor: Colors.black,
        padding: 30,
        paddingBottom: 15,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: "center",
        zIndex: 2,
        opacity: 1
    },
    textStyle:{ 
        color: Colors.white, 
        marginTop: 20, 
        alignSelf: "center" 
    }

})