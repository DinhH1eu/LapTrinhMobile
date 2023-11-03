import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  AppRegistry,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SlideshowApp from './SlideshowApp';

export default Home = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/background.jpg')}
      resizeMode="stretch">
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.header_title}>Xin chào Đinh Hiếu</Text>
          </View>
          <View style={styles.poster}>
            <Text style={styles.poster_title}>
              Hãy khám phá và trải nghiệm các dịch vụ gia đình ngay hôm nay.
            </Text>
            <View style={styles.pay}>
              <TouchableOpacity style={styles.poster_pay1}>
                <Text style={{fontSize: 16}}s>0 đ</Text>
                <Image 
                  source={require('../images/next.png')}
                  style={{width: 10, height: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.poster_pay2}>
                <Text style={{fontSize: 16}}>0 bPoints</Text>
                <Image 
                  source={require('../images/next.png')}
                  style={{width: 10, height: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.banner}>
            <SlideshowApp />
          </View>
          <View style={styles.categories_featured}>
            <Text style={styles.categories_featured_title}>Dịch vụ</Text>
            <View style={styles.categories_featured_wrapper}>
              <View style={styles.categories_featured_row}>
                <TouchableOpacity style={styles.categories_featured_item}>
                  <Image
                    style={styles.categories_featured_item_img}
                    source={require('../images/item1.png')}
                  />
                  <Text style={styles.categories_featured_item_detail}>
                    Dọn dẹp nhà
                  </Text>
                  <Text style={styles.categories_featured_item_detail_shift}>
                    (ca lẻ)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categories_featured_item}>
                  <Image
                    style={styles.categories_featured_item_img}
                    source={require('../images/item2.png')}
                  />
                  <Text style={styles.categories_featured_item_detail}>
                    Tổng vệ sinh
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categories_featured_item}>
                  <Image
                    style={styles.categories_featured_item_img}
                    source={require('../images/item3.png')}
                  />
                  <Text style={styles.categories_featured_item_detail}>
                    Vệ sinh máy lạnh
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categories_featured_item}>
                  <Image
                    style={styles.categories_featured_item_img}
                    source={require('../images/item4.png')}
                  />
                  <Text style={styles.categories_featured_item_detail}>
                    Vệ sinh Sofa - Đệm - Rèm
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.categories_featured_row}>
                <TouchableOpacity style={styles.categories_featured_item}>
                  <Image
                    style={styles.categories_featured_item_img}
                    source={require('../images/item5.png')}
                  />
                  <Text style={styles.categories_featured_item_detail}>
                    Dọn dẹp nhà
                  </Text>
                  <Text style={styles.categories_featured_item_detail_shift}>
                    (gói cố định)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categories_featured_item}>
                  <Image
                    style={styles.categories_featured_item_img}
                    source={require('../images/item6.png')}
                  />
                  <Text style={styles.categories_featured_item_detail}>
                    Dọn dẹp văn phòng
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categories_featured_item}>
                  <Image
                    style={styles.categories_featured_item_img}
                    source={require('../images/item7.png')}
                  />
                  <Text style={styles.categories_featured_item_detail}>
                    Vệ sinh máy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categories_featured_item}>
                  <Image
                    style={styles.categories_featured_item_img}
                    source={require('../images/item8.png')}
                  />
                  <Text style={styles.categories_featured_item_detail}>
                    Xem thêm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
AppRegistry.registerComponent('SlideshowApp', () => Home);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  background: {
    flex: 1,
    width: '100%',
    height: '15%',
  },

  header_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  poster: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: '#fff',
    gap: 10,
    marginVertical: 10,
    borderRadius: 10,
  },

  poster_title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ff5f00',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  pay: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#dadada',
  },

  poster_pay1: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 11,
  },

  poster_pay2: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 11,
    borderLeftWidth: 1,
    borderLeftColor: '#dadada',
  },

  header: {
    marginTop: 50,
  },

  banner: {
    width: '100%',
    height: 310,
    marginTop: 10,
  },

  categories_featured_title: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  categories_featured_row: {
    flexDirection: 'row',
    gap: 10,
    display: 'flex',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  categories_featured_item: {
    flex: 1,
  },

  categories_featured_item_img: {
    borderRadius: 15,
    width: '90%',
    height: 70,
  },

  categories_featured_item_detail: {
    marginTop: 10,
    textAlign: 'center',
  },

  categories_featured_item_detail_shift: {
    color: '#fe8228',
    textAlign: 'center',
  },
});
