import {View, StyleSheet, Button, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {PDFDocument, rgb, StandardFonts} from 'pdf-lib';
import Pdf from 'react-native-pdf';
// import fs from 'react-native-fs';

const NewPdfemplate = () => {
  const [base64String, setBase64String] = useState<string>('');

  async function handleGeneratePDf() {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const {width, height} = page.getSize();

    function addHeaderFooterToPage(page: any) {
      page.drawLine({
        start: {x: 0, y: 800},
        end: {x: 1000, y: 800},
        thickness: lineThickness,
        color: lineColor,
      });

      // Vertical divider - Header
      page.drawLine({
        start: {x: width - 150, y: 830},
        end: {x: width - 150, y: 827 - lineLength},
        thickness: lineThickness,
        color: lineColor,
      });

      page.drawText(headerText, {
        x: 30,
        y: height - 26,
        size: headerSize,
        font: font,
        color: headerColor,
      });

      page.drawText('Logo', {
        x: width - 90,
        y: height - 26,
        size: headerSize,
        font: font,
        color: headerColor,
      });

      //   Horizontal Footer Border
      page.drawLine({
        start: {x: 0, y: 40},
        end: {x: 1000, y: 40},
        thickness: lineThickness,
        color: lineColor,
      });

      page.drawLine({
        start: {x: 160, y: 32},
        end: {x: 160, y: 32 - lineLength},
        thickness: lineThickness,
        color: lineColor,
      });
      page.drawLine({
        start: {x: 330, y: 32},
        end: {x: 330, y: 32 - lineLength},
        thickness: lineThickness,
        color: lineColor,
      });
      page.drawLine({
        start: {x: 450, y: 32},
        end: {x: 450, y: 32 - lineLength},
        thickness: lineThickness,
        color: lineColor,
      });

      // Set the footer text
      page.drawText('Ph:(215)8245688', {
        x: 30,
        y: 15,
        size: footerSize,
        font: font,
        color: footerColor,
      });
      page.drawText('ABC THT, STREET TWO', {
        x: 180,
        y: 15,
        size: footerSize,
        font: font,
        color: footerColor,
      });
      page.drawText('ABC AL', {
        x: 370,
        y: 15,
        size: footerSize,
        font: font,
        color: footerColor,
      });
      page.drawText('12312', {
        x: 500,
        y: 15,
        size: footerSize,
        font: font,
        color: footerColor,
      });
    }

    // Create a font for the header and footer
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Set the header and footer text
    const headerText = 'ABC Proposal';

    // Set the header and footer size and color
    const headerSize = 12;
    const footerSize = 12;
    const headerColor = rgb(0, 0, 0);
    const footerColor = rgb(0, 0, 0);

    // Set Custom line
    const lineLength = 20; // Length of the vertical line
    const lineThickness = 0.7; // Thickness of the line
    const lineColor = rgb(0, 0, 0); // Color of the line

    // Add pages to the PDF document
    // Create a new page

    addHeaderFooterToPage(page);
    page.drawText('Proposal Date: Wednesday, April 19, 2023', {
      x: 30,
      y: height - 70,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawText('By and between:', {
      x: 30,
      y: height - 90,
      size: 13,
      font: font,
      color: footerColor,
    });

    // THT TEST
    page.drawText('Client-02', {
      x: width - 200,
      y: height - 150,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawText('123 First street, Alhaja Mustapha', {
      x: width - 220,
      y: height - 180,
      size: 10,
      font: font,
      color: footerColor,
    });
    page.drawText('Helena, AL 35080', {
      x: width - 215,
      y: height - 195,
      size: 10,
      font: font,
      color: footerColor,
    });

    // TroutHouseTech Inc

    page.drawText('Zenith App', {
      x: 120,
      y: height - 150,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawText('And', {
      x: width - 290,
      y: height - 155,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('123 First street, Drive Ozone Park, NY', {
      x: 125,
      y: height - 180,
      size: 9,
      font: font,
      color: footerColor,
    });
    page.drawText('Helena NY, 11417', {
      x: 143,
      y: height - 190,
      size: 9,
      font: font,
      color: footerColor,
    });

    // Hereinafter CONTRACTOR Session
    page.drawText('Hereinafter CONTRACTOR', {
      x: 110,
      y: height - 250,
      size: 12,
      font: font,
      color: footerColor,
    });
    page.drawText('Hereinafter CUSTOMER', {
      x: width - 220,
      y: height - 250,
      size: 12,
      font: font,
      color: footerColor,
    });
    // Text
    page.drawText('Contractor to provide the following services at', {
      x: 30,
      y: height - 300,
      size: 12,
      font: font,
      color: footerColor,
    });
    page.drawText('123 First Street, Alhaji Mustapha Helena, AL 35080', {
      x: 273,
      y: height - 300,
      size: 14,
      font: font,
      color: footerColor,
    });

    page.drawLine({
      start: {x: width - 5, y: height - 305},
      end: {x: width - 322, y: height - 305},
      thickness: 2,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });

    page.drawText('Normal Group - 01', {
      x: 60,
      y: height - 340,
      size: 15,
      font: font,
      color: footerColor,
    });

    // List Items here
    page.drawText('.', {
      x: 80,
      y: height - 360,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Normal Line Item - 01', {
      x: 100,
      y: height - 365,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('.', {
      x: 100,
      y: height - 382,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Note For Normal Line Item - 01', {
      x: 120,
      y: height - 385,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawText('$274.00', {
      x: width - 80,
      y: height - 360,
      size: 13,
      font: font,
      color: footerColor,
    });

    // List ITem 2
    // List Items here
    page.drawText('.', {
      x: 80,
      y: height - 402,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Spare parts', {
      x: 100,
      y: height - 405,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('.', {
      x: 100,
      y: height - 425,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('We Need to get additional items to cater for damages', {
      x: 120,
      y: height - 425,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('$360', {
      x: width - 80,
      y: height - 408,
      size: 13,
      font: font,
      color: footerColor,
    });

    // List ITems 3

    page.drawText('.', {
      x: 80,
      y: height - 450,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Packaging materials', {
      x: 100,
      y: height - 450,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('.', {
      x: 100,
      y: height - 470,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Get two bundles of packaging materials', {
      x: 120,
      y: height - 470,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('$0.00', {
      x: width - 80,
      y: height - 472,
      size: 13,
      font: font,
      color: footerColor,
    });

    // Total
    page.drawText('Normal Group - 01 Total: $620.67', {
      x: width - 276,
      y: height - 495,
      size: 15,
      font: font,
      color: footerColor,
    });

    page.drawText('Base Price: $914.00', {
      x: 30,
      y: height - 525,
      size: 15,
      font: font,
      color: footerColor,
    });
    // Header Block Dimensions

    page.drawText('Accept:', {
      x: width - 320,
      y: height - 525,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawLine({
      start: {x: width - 275, y: height - 530},
      end: {x: width - 180, y: height - 530},
      thickness: 0.6,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });
    page.drawText('Decline:', {
      x: width - 170,
      y: height - 525,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawLine({
      start: {x: width - 120, y: height - 530},
      end: {x: width - 30, y: height - 530},
      thickness: 0.6,
      color: rgb(0, 0.2, 0.2),
      opacity: 0.75,
    });

    // Alt Group
    page.drawText('Alt Group', {
      x: 60,
      y: height - 570,
      size: 13,
      font: font,
      color: footerColor,
    });

    // Alt Group
    page.drawText('Add: $286.67', {
      x: width - 130,
      y: height - 570,
      size: 13,
      font: font,
      color: footerColor,
    });

    const page3 = pdfDoc.addPage();
    addHeaderFooterToPage(page3);
    page3.drawText('Total Price:', {
      x: 30,
      y: height - 70,
      size: 13,
      font: font,
      color: footerColor,
    });
    page3.drawText('$0', {
      x: 98,
      y: height - 70,
      size: 13,
      font: font,
      color: footerColor,
    });
    page3.drawLine({
      start: {x: 25, y: height - 185},
      end: {x: 250, y: height - 185},
      thickness: 0.6,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });

    page3.drawText('Approval by Client:', {
      x: 30,
      y: height - 140,
      size: 13,
      font: font,
      color: footerColor,
    });
    page3.drawLine({
      start: {x: 30, y: height - 145},
      end: {x: 140, y: height - 145},
      thickness: 2,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });

    page3.drawText('Authorized Representative ', {
      x: 30,
      y: height - 200,
      size: 13,
      font: font,
      color: footerColor,
    });
    page3.drawText('Date', {
      x: 230,
      y: height - 200,
      size: 13,
      font: font,
      color: footerColor,
    });
    //
    page3.drawLine({
      start: {x: 25, y: height - 235},
      end: {x: 250, y: height - 235},
      thickness: 0.6,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });
    page3.drawText('Printed Name', {
      x: 30,
      y: height - 250,
      size: 13,
      font: font,
      color: footerColor,
    });

    page3.drawText('Accept:', {
      x: width - 320,
      y: height - 70,
      size: 13,
      font: font,
      color: footerColor,
    });
    page3.drawLine({
      start: {x: width - 275, y: height - 80},
      end: {x: width - 180, y: height - 80},
      thickness: 0.6,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });
    page3.drawText('Decline:', {
      x: width - 170,
      y: height - 70,
      size: 13,
      font: font,
      color: footerColor,
    });
    page3.drawLine({
      start: {x: width - 120, y: height - 80},
      end: {x: width - 30, y: height - 80},
      thickness: 0.6,
      color: rgb(0, 0.2, 0.2),
      opacity: 0.75,
    });

    page3.drawText('Approval by Contractor:', {
      x: width - 270,
      y: height - 140,
      size: 13,
      font: font,
      color: footerColor,
    });
    page3.drawLine({
      start: {x: width - 140, y: height - 145},
      end: {x: 326, y: height - 145},
      thickness: 2,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });

    page3.drawLine({
      start: {x: width - 30, y: height - 185},
      end: {x: width - 240, y: height - 185},
      thickness: 0.6,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });

    page3.drawText('Authorized Representative ', {
      x: width - 240,
      y: height - 200,
      size: 13,
      font: font,
      color: footerColor,
    });

    page3.drawText('Date', {
      x: width - 70,
      y: height - 200,
      size: 13,
      font: font,
      color: footerColor,
    });
    //
    page3.drawLine({
      start: {x: width - 25, y: height - 235},
      end: {x: width - 250, y: height - 235},
      thickness: 0.6,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });
    page3.drawText('Printed Name', {
      x: width - 240,
      y: height - 250,
      size: 13,
      font: font,
      color: footerColor,
    });

    //

    page.drawText('.', {
      x: 80,
      y: height - 598,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Alt Line', {
      x: 100,
      y: height - 598,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('.', {
      x: 100,
      y: height - 615,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Note for all alt line item', {
      x: 120,
      y: height - 615,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('.', {
      x: 80,
      y: height - 635,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Reporting Cost', {
      x: 100,
      y: height - 635,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawText('.', {
      x: 100,
      y: height - 655,
      size: 25,
      font: font,
      color: footerColor,
    });
    page.drawText('Communications Overhead', {
      x: 120,
      y: height - 655,
      size: 13,
      font: font,
      color: footerColor,
    });

    // Accept decline
    page.drawText('Accept:', {
      x: width - 200,
      y: height - 655,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawLine({
      start: {x: width - 155, y: height - 660},
      end: {x: width - 110, y: height - 660},
      thickness: 0.6,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });
    page.drawText('Decline:', {
      x: width - 110,
      y: height - 655,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawLine({
      start: {x: width - 70, y: height - 660},
      end: {x: width - 15, y: height - 660},
      thickness: 0.6,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });
    page.drawLine({
      start: {x: 20, y: height - 680},
      end: {x: width - 15, y: height - 680},
      thickness: 0.3,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });
    page.drawText('Site preparation:', {
      x: 30,
      y: height - 705,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawText('.', {
      x: 55,
      y: height - 720,
      size: 23,
      font: font,
      color: footerColor,
    });
    page.drawText('Remove debris', {
      x: 65,
      y: height - 720,
      size: 13,
      font: font,
      color: footerColor,
    });

    page.drawLine({
      start: {x: 20, y: height - 730},
      end: {x: width - 15, y: height - 730},
      thickness: 0.3,
      color: rgb(0, 0, 0),
      opacity: 0.75,
    });

    page.drawText('Frist text only group', {
      x: 30,
      y: height - 750,
      size: 13,
      font: font,
      color: footerColor,
    });
    page.drawText('.', {
      x: 50,
      y: height - 770,
      size: 26,
      font: font,
      color: footerColor,
    });
    page.drawText('JESESE kekeke', {
      x: 65,
      y: height - 770,
      size: 13,
      font: font,
      color: footerColor,
    });

    // Save the PDF to a file or convert it to bytes
    const pdfBytes = await pdfDoc.saveAsBase64();

    setBase64String(pdfBytes);
  }

  function closePdf() {
    setBase64String('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {base64String ? (
          <Button onPress={closePdf} title="Close Pdf" />
        ) : (
          <Button onPress={handleGeneratePDf} title="Pre-view Pdf" />
        )}
        <Button onPress={handleGeneratePDf} title="Download PDf" />
      </View>

      {base64String && (
        <View>
          <Pdf
            style={styles.pdf}
            source={{uri: `data:application/pdf;base64,${base64String}`}}
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

export default NewPdfemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
