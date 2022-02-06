import React from "react";
import { Text as RNText, StyleSheet } from "react-native";

export default function Text({children}){
    return(
        <RNText style={styles.text}>
            {children}
        </RNText>
    );
}
const styles = StyleSheet.create({
    text:{
        fontFamily: 'Festive Regular'
    }
})