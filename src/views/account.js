import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';

export default Account = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_left}>
                    <Text style={styles.header_left_text}>Hoạt động</Text>
                </View>
                <View style={styles.header_right}>
                    <Text style={styles.header_right_text}>Lịch sử</Text>
                </View>
            </View>
        </View>
    );
}