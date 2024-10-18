import { createStackNavigator } from '@react-navigation/stack';
import { PokemonDetailsScreen } from 'screens/pokemon-details.screen';
import { SearchScreen } from 'screens/search.screen';

export type RootStackParamList = {
  SearchScreen: undefined;
  PokemonDetailsScreen: { url: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="SearchScreen">
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="PokemonDetailsScreen"
        component={PokemonDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
