The solution involves ensuring that the component using `useNavigation` is a direct child of a screen component within the `NavigationContainer`.   Also verify that the `NavigationContainer` is correctly configured in your app's entry point.

```typescript
// bugSolution.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen() {
  return <Text>Details Screen</Text>;
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
```