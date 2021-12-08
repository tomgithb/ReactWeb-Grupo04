/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  HandleNavigation
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from "./Styles"

//({handleNavigation, iconName, screenTitle}

//handleNavigation = ''; iconName = ''; screenTitle = '';

const Header = () => {
    return (

        
        <View style={styles.headercontainer}>
            <View>

                <TouchableOpacity 
                    style={styles.headericonButton}
                 //  onPress={handleNavigation}
                >
                   <FontAwesome name={'map-pin'} size={25} />
                </TouchableOpacity>
            </View>
  
            <View style={styles.headerborderContainer}>
               <View style={styles.headertitleContainer}>

                 <Text style={styles.headertitle}>Galeria</Text>      

               </View>

            </View>
        </View>
    )
};

export default Header

