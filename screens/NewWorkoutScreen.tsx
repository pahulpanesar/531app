import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Constants from '../Constants';
import SplashScreen from './../screens/SplashScreen';
import StartButton from '../components/StartButton';
import WorkoutCard from '../components/WorkoutCard';

export default function NewWorkoutScreen({ navigation }) {
  const [user, setUser] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getUser() {
        const getItem = await AsyncStorage.getItem(Constants.UserStorageKey);
        return getItem
    }
    getUser().then((userObj) => 
    setUser(JSON.parse(userObj).user));
    setLoading(false);
    }, []);

  return isLoading ? <SplashScreen /> : (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome{user == null ? ", P" : ", " + user.name}</Text>
      <WorkoutCard navigate={() => navigation.navigate('Main Workout')} />
      <StartButton navigate={() => navigation.navigate('Started Workout')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D5C9',
    alignItems: 'center',
    justifyContent: "space-around",
    paddingTop: 30
  },
  welcomeText: {
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": 36,
    "color": "#222",
  },
});
