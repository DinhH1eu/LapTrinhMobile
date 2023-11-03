import React from 'react';
import { StatusBar } from 'react-native';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import ImageSlider from 'react-native-image-slider';

// const images = [
//   require('../images/slider01.jpg'),
//   require('../images/slider02.jpg'),
//   require('../images/slider03.jpg'),
// ];

// export default SlideshowApp = () => {
//   return (
//     <View style={styles.container}>
//       <ImageSlider
//         images={images}
//         style={{borderRadius: 10, with: '100%'}}
//         autoPlayWithInterval={3000} 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#eef6f8',
//         height: 250,
//     },

// });

export default SlideshowApp = () => {
  return(
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Swiper
        loop
        autoplay
        dot={
          <View style={{
            width: 6,
            height: 6,
            borderRadius: 4,
            marginHorizontal: 10,
            backgroundColor: '#ff8700',
          }}
          ></View>
        }
        activeDot={
          <View style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            margin: 5,
            backgroundColor: '#ff5f00',
          }}
          ></View>
        }
      >
        <Image 
          source={require('../images/slider01.jpg')}
          resizeMode='center'
          style={styles.image}
        />
        <Image 
          source={require('../images/slider02.jpg')}
          resizeMode='center'
          style={styles.image}
        />
        <Image 
          source={require('../images/slider06.jpg')}
          resizeMode='center'
          style={styles.image}
        />
        <Image 
          source={require('../images/slider05.jpg')}
          resizeMode='center'
          style={styles.image}
        />
      </Swiper>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  }
});
