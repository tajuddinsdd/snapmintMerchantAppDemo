/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNSnapmint3 from 'react-native-snapmint3';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Pressable
          onPress={() => {
            const finalData = {
              utf8: '?',
              authenticity_token:
                'eeducD0CTBNATCU+6JyKyr+3Jkyzqmcdkyjq9VF4I0nKVIn2SwJiiONwvKegCtDTX9DQMA6n63PvzllycdNRIQ==',
              source: '',
              user_type: 'new_user',
              mobile: '7506607038',
              merchant_id: 352,
              store_id: 1,
              order_id: 1,
              order_value: 5000,
              merchant_confirmation_url: 'http://www.vijaysales.com/success',
              merchant_failure_url: 'http://www.vijaysales.com/failed',
              shipping_fees: 50,
              udf1: 'test',
              udf2: 'test',
              udf3: 'test',
              full_name: 'Amjad',
              email: 'rahul@snapmint.com',
              billing_first_name: 'GIRIDHAR',
              billing_middle_name: 'ravi',
              billing_last_name: 'Amjad',
              billing_full_name: 'GIRIDHAR ravi MAMIDIPALLY',
              billing_address_line1: 'GIRIDHAR EVENT ORGANRING',
              billing_address_line2: '8-2-268/1/D/2 ROAD NO 3',
              billing_city: 'Mumbai',
              billing_zip: '400076',
              shipping_first_name: 'GIRIDHAR',
              shipping_middle_name: 'ravi',
              shipping_last_name: 'MAMIDIPALLY',
              shipping_full_name: 'GIRIDHAR ravi MAMIDIPALLY',
              shipping_address_line1: 'GIRIDHAR EVENT ORGANRING',
              shipping_address_line2: '8-2-268/1/D/2 ROAD NO 3',
              shipping_city: 'Mumbai',
              shipping_zip: '400076',
              merchant_key: 'I68lsMZD',
              merchant_token: 'rIB7eJny',
              products: {
                sku: 'abdx123',
                name: 'Product 2',
                unit_price: 500,
                quantity: 5,
                item_url: 'https://google.com/test',
                udf1: 'udf1',
                udf2: 'udf2',
                udf: 'udf3',
              },
            };
            const dataObj = {
              finalData: finalData,
              base_url: 'https://qaapi.snapmint.com/v1/public/online_checkout',
              suc_url: 'http://www.vijaysales.com/success',
              fail_url: 'http://www.vijaysales.com/failed',
            };
            RNSnapmint3.openSnapmintMerchant(JSON.stringify(dataObj));
          }}>
          <Text>Open SDK</Text>
        </Pressable>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
