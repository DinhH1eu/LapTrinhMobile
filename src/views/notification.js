import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default Notiofcation = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Tin nhắn</Text>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menu_item}>
                    <Text style={styles.menu_item_text}>Nhắn tin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu_item}>
                    <Text style={styles.menu_item_text}>Thông báo</Text>
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
        paddingHorizontal: 20,
    },

    header_text: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    menu: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around',
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