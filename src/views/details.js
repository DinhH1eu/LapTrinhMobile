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
  ScrollView,
} from 'react-native';

export default Details = () => {
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../images/back.png')}
                            style={{width: 30, height: 30}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <View style={styles.time}>
                        <Text style={styles.time_title}>Thời lượng</Text>
                        <Text style={styles.time_subtitle}>Vui lòng ước tính chính xác diện tích cần dọn dẹp</Text>
                        <View style={{gap: 15}}>
                            <TouchableOpacity style={styles.time_item}>
                                <Text style={styles.time_item_title}>2 giờ</Text>
                                <Text style={styles.time_item_subtitle}>55m2 / 2 phòng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.time_item}>
                                <Text style={styles.time_item_title}>3 giờ</Text>
                                <Text style={styles.time_item_subtitle}>85m2 / 3 phòng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.time_item}>
                                <Text style={styles.time_item_title}>4 giờ</Text>
                                <Text style={styles.time_item_subtitle}>105m2 / 4 phòng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.service}>
                        <View style={styles.premium_service}>
                            <Text style={styles.premium_service_title}>Chọn dịch vụ Premium</Text>
                            <View style={styles.premium_service_detail}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Dịch vụ Premium</Text>
                            </View>
                        </View>
                        <View style={styles.extra_service}>
                            <Text style={styles.extra_service_title}>Dịch vụ thêm</Text>
                            <Text style={styles.extra_service_subtitle}>Bạn có thể chọn thêm dịch vụ.</Text>
                            <View style={styles.extra_service_detail}>
                                <TouchableOpacity style={styles.extra_service_detail_item}>
                                    <View style={styles.extra_service_detail_item_img}>
                                        <Image 
                                            source={require('../images/cook.png')}
                                            style={{width: 60, height: 60}}
                                        />
                                    </View>
                                    <View style={styles.extra_service_detail_item_text}>
                                        <Text style={styles.extra_service_detail_title}>Nấu ăn</Text>
                                        <Text style={styles.extra_service_detail_subtitle}>+1h</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.extra_service_detail_item}>
                                    <View style={styles.extra_service_detail_item_img}>
                                        <Image 
                                            source={require('../images/iron.jpg')}
                                            style={{width: 60, height: 60}}
                                        />
                                    </View>
                                    <View style={styles.extra_service_detail_item_text}>
                                        <Text style={styles.extra_service_detail_title}>Ủi đồ</Text>
                                        <Text style={styles.extra_service_detail_subtitle}>+1h</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.extra_service_detail_item}>
                                    <View style={styles.extra_service_detail_item_img}>
                                        <Image 
                                            source={require('../images/cleaning.png')}
                                            style={{width: 60, height: 60}}
                                        />
                                    </View>
                                    <View style={styles.extra_service_detail_item_text}>
                                        <Text style={styles.extra_service_detail_title}>Mang theo dụng cụ</Text>
                                        <Text style={styles.extra_service_detail_subtitle}>+30,000 VND</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>             
                        </View>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.option_title}>Tùy chọn</Text>
                        <View style={styles.option_item}>
                            <Image 
                                source={require('../images/select.png')}
                                style={{width: 50, height: 50}}
                            />
                            <Text style={{fontSize: 17}}>Bạn tự chọn người làm</Text>
                        </View>
                        <View style={styles.option_item}>
                            <Image 
                                source={require('../images/dog.png')}
                                style={{width: 50, height: 50}}
                            />
                            <Text style={{fontSize: 17}}>Nhà có vật nuôi</Text>
                        </View>
                        <View style={styles.option_item}>
                            <Image 
                                source={require('../images/favorite.jpg')}
                                style={{width: 50, height: 50}}
                            />
                            <Text style={{fontSize: 17}}>Ưu tiên người làm yêu thích</Text>
                        </View>
                        <Text style={styles.option_note}>*Lưu ý: Dịch vụ chỉ hỗ trợ tối đa 4h. Nếu bạn muốn đặt thêm, vui lòng chọn <Text style={{fontWeight: 'bold', color: '#00d300'}}>dịch vụ Tổng Vệ Sinh</Text> hoặc đặt 2 công việc có khung thời gian gần nhau</Text>
                    </View>
                </View>
                <View style={styles.btnBuy}>
                    <TouchableOpacity style={styles.btnBuy_text}>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>266.000 VND/4h</Text>
                        <Text style={{fontSize: 18, color: '#fff'}}>Tiếp theo</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    main: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },

    time_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    time_subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },

    time_item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 5,    
        borderWidth: 1,
        borderRadius: 10,
    },

    time_item_title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    time_item_subtitle: {
        fontSize: 16,
    },

    premium_service_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    premium_service_detail: {
        padding: 10,
        backgroundColor: '#ff852d',
        borderRadius: 8,
    },

    extra_service_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    extra_service_subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },

    extra_service_detail: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 20,
    },

    extra_service_detail_item: {
        flex: 1,
        gap: 10,
    },

    extra_service_detail_item_img: {
        paddingLeft: 20,
        paddingVertical: 20,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
    },

    extra_service_detail_item_text: {
        gap: 5,
    },

    extra_service_detail_title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },

    extra_service_detail_subtitle: {
        textAlign: 'center',
    },

    option: {
        gap: 5,
    },

    option_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    option_item: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
    },

    btnBuy:{
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    btnBuy_text: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#00d300',
        borderRadius: 10,
    }
});