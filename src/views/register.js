import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

// eslint-disable-next-line no-undef
export default Register = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../images/prev.png')}
            style={styles.prev}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.textLogin}>Đăng ký</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.mainTitle}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            Rất vui được gặp bạn !
          </Text>
          <Text>Tạo ngay tài khoản để trải nghiệm dịch vụ.</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.name}>
            <Text style={styles.formText}>Họ và tên</Text>
            {/* <button>+84</button> */}
            <TextInput style={styles.input} placeholder="Đinh Hiếu" />
          </View>
          <View style={styles.phone}>
            <Text style={styles.formText}>Số điện thoại</Text>
            {/* <button>+84</button> */}
            <TextInput style={styles.input} placeholder="Nhập số điện thoại" />
          </View>
          <View style={styles.password}>
            <Text style={styles.formText}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true} // Ẩn mật khẩu
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.btnLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.register}>
          <Text>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity>
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
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 40,
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
