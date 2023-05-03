import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Pdf from 'react-native-pdf';

const PdfComponent: FC<any> = () => {
  const source = require('./pdf.pdf');
  const [previewPdf, setPreviewPdf] = useState(false);
  function togglePdf() {
    setPreviewPdf(!previewPdf);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={togglePdf} style={styles.prevPdfBtn}>
          <Text style={styles.text}>
            {previewPdf ? 'Hide Pdf' : 'Preview Pdf'}
          </Text>
        </TouchableOpacity>
      </View>

      {previewPdf && (
        <Pdf
          style={styles.pdf}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`, filePath);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`, numberOfPages);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default PdfComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 32,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  prevPdfBtn: {
    backgroundColor: 'purple',
    padding: 6,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
