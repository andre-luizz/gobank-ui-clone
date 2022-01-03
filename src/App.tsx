import { View, Text } from 'react-native';
import { ScreenProvider } from 'responsive-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenProvider baseFontSize={10}>
        <View>
          <Text>Test!</Text>
        </View>
      </ScreenProvider>
    </SafeAreaProvider>
  )
}