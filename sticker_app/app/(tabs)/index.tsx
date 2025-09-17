
import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, Text, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/background-image.png');

const Index = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />r
      </View>
    </View>
    
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
});

export default Index;
