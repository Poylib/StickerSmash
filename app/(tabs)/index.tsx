import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import TextButton from '@/components/Button/TextButton';
import ImageViewer from '@/components/Viewer/ImageViewer';
const placeholderImage = require('@assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <TextButton label="Choose a photo" theme="primary" />
        <TextButton label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
