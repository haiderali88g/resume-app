import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
});

const ResumePDF = ({ imgData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {/* You can customize this section with your resume content */}
          <Text>Name: John Doe</Text>
          <Text>Email: john.doe@example.com</Text>
          {/* Add more content as needed */}
        </View>
        <View style={styles.section}>
          {/* Display the captured image in the PDF */}
          <Image src={imgData} style={styles.image} />
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
