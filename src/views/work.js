import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default Work = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_left}>
                    <Text style={styles.header_left_text}>Hoạt động</Text>
                </View>
                <TouchableOpacity style={styles.header_right}>
                    <Text style={styles.header_right_text}>Lịch sử</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menu_item}>
                    <Text style={styles.menu_item_text}>Chờ làm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu_item}>
                    <Text style={styles.menu_item_text}>Lặp lại</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu_item}>
                    <Text style={styles.menu_item_text}>Theo gói</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },

    header: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },

    header_left_text: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    header_right_text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00d300',
    },

    menu: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        gap: 20,
        paddingVertical: 20,
        borderBottomWidth: 3,
        borderBlockColor: '#ececec',
    },

    menu_item_text: {
        fontSize: 15,
    },

});