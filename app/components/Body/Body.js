/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from "./Styles"

export default class Body extends Component {
  render() {
    return (
      <View>
          
      
      <ScrollView>

        <View style={styles.bigview}>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img2.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img3.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img4.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img5.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img6.jpeg')}
               />
          </View>

          
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img2.jpeg')}
               />
          </View>
           <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img3.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img4.jpeg')}
               />
          </View>
              <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img5.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img6.jpeg')}
               />
          </View>      
          
        </View>

      </ScrollView>
    </View>
    );
  }
}


