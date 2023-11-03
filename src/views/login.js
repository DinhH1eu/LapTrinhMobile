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

export default Login = ({navigation}) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <ImageBackground styles={styles.background} source={require('../images/backgroundcolor.jpg')}>
      <View style={styles.Container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../images/prev.png')}
            style={styles.prev}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.textLogin}>Đăng nhập</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.mainTitle}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Mừng trở lại !</Text>
          <Text>Vui lòng đăng nhập để tiếp tục.</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.phone}>
            <Text style={styles.formText}>Số điện thoại</Text>
            <TextInput style={styles.input} placeholder="Nhập số điện thoại" />
          </View>
          <View style={styles.password}>
            <Text style={styles.formText}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={getPasswordVisible ? false : true} // Ẩn mật khẩu
            />
            <TouchableOpacity
              onPress={() => {
                setPasswordVisible(!getPasswordVisible);
              }}>
              {getPasswordVisible ? (
                <Image
                  source={require('../images/passwordhide.png')}
                  style={styles.imgPass}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../images/password.png')}
                  style={styles.imgPass}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeTabs');
            }}
          >
            <Text style={styles.btnLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.register}>
          <Text>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity             
            onPress={() => {
            navigation.navigate('Register')
            }}
          >
            <Text style={styles.link}>Tạo tài khoản</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgetPassword}>
          <TouchableOpacity>
            <Text style={styles.link}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },

  Container: {
    marginTop: 40,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    gap: 20,
    display: 'flex',
    alignItems: 'center',
    borderColor: '#f9f9f9',
    borderBottomWidth: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  textLogin: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  main: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  mainTitle: {
    marginBottom: 20,
    gap: 10,
  },

  formText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  password: {
    marginVertical: 20,
  },

  input: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 17,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  prev: {
    width: 20,
    height: 20,
    aspectRatio: 1,
  },

  imgPass: {
    width: 25,
    height: 20,
    aspectRatio: 1,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },

  btnLogin: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
    color: '#00d300',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 5,
  },

  footer: {
    marginTop: 40,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  register: {
    flexDirection: 'row',
    gap: 10,
  },

  link: {
    fontWeight: 'bold',
    color: '#00d300',
  },
});
