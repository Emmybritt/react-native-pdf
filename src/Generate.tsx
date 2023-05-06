import {View, Button, Alert, StyleSheet, Dimensions} from 'react-native';
import React, {FC, useState} from 'react';
import RNHTMLtoPDF, {Options} from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';

import {template, TemplateProp} from './pdfTemplate';

const Generate: FC<any> = ({}) => {
  const [pdfUrl, setPdfUrl] = useState<string | undefined>('');
  const templateData: TemplateProp = {
    formattedTotalCost: 3000,
    formattedCost: 5000,
    baseJobPrice: 500,
    proposalName: 'ABC Proposal',
    proposalDate: 'Wednesday, April 19, 2023',
    name: 'TroutHouseTech Inc',
    address: 'ABC THT, STREET TWO ABC, AL 12312',
  };
  const options: Options = {
    html: template(templateData),
    fileName: 'MyPDFDocument',
    base64: true,
    directory: 'Documents',
    height: 800,
    width: 595,
    padding: 0,
  };

  const generatePdf = async () => {
    await RNHTMLtoPDF.convert(options).then(() => {
      Alert.alert('Pdf Generated successfully');
    });
  };

  const closePdf = async () => {
    setPdfUrl('');
  };

  console.log(pdfUrl, 'This is the base64');

  const previewPdf = async () => {
    const filePath = await RNHTMLtoPDF.convert(options);
    const base64String = filePath.base64;
    setPdfUrl(base64String);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {pdfUrl ? (
          <Button onPress={closePdf} title="Close Pdf" />
        ) : (
          <Button onPress={previewPdf} title="Preview Pdf" />
        )}
        <Button onPress={generatePdf} title="Download PDf" />
      </View>

      {pdfUrl && (
        <View>
          <Pdf
            style={styles.pdf}
            source={{uri: `data:application/pdf;base64,${pdfUrl}`}}
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
        </View>
      )}
    </View>
  );
};

export default Generate;

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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
});
