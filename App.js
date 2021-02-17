import React from 'react';
import { ApplicationProvider, IconRegistry, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { TopNav } from './components/TopNav';
import { BottomNav } from './components/BottomNav';

import { SafeAreaView, View , StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './screens/HomePage.js';


export default () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light/* , ...myTheme  */}}>
    <SafeAreaView style={{ flex: 1,         marginTop:StatusBar.currentHeight}}>
      <TopNav/>

      <Layout style={{ flex: 1}}>
        <HomePage></HomePage>
      </Layout>
      <BottomNav/>
    </SafeAreaView>
      
    </ApplicationProvider>
  </React.Fragment>
);