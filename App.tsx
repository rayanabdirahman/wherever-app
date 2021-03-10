import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';
import Navigation from './navigation';
import { store } from './store';
import { Spinner } from './components/';
import useCachedResources from './hooks/useCachedResources';
import theme from './constants/Theme';
import useToast from './hooks/useToast';
import useAuthGuard from './hooks/useAuthGuard';

function App(): JSX.Element {
  const showToast = useToast();
  const hasUserSignedIn = useAuthGuard();

  React.useEffect(() => {
    showToast();
  });

  return (
    <SafeAreaProvider>
      <Navigation isUserSignedIn={hasUserSignedIn} />
      <StatusBar
        style="auto"
        backgroundColor="transparent"
        translucent={true}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaProvider>
  );
}

export default function (): JSX.Element {
  // TODO: set redux loading state
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <Spinner />;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    );
  }
}
