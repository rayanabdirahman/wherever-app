import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import logger from '../utilities/logger';

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // load custom google font: Montserrat
  useFonts({ Roboto_400Regular, Roboto_700Bold });

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      await SplashScreen.preventAutoHideAsync();
      logger.info(`[useCachedResources] - Caching resources started`);
      try {
        // Load fonts
        await Font.loadAsync({
          ...AntDesign.font,
          ...Feather.font
        });
      } catch (e) {
        logger.error(
          `[useCachedResources] - error when loading resources: ${e}`
        );
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
        logger.info(`[useCachedResources] - Caching resources completed`);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
