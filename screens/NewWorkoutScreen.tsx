import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import Constants from '../Constants';
import SplashScreen from './../screens/SplashScreen';

var width = Dimensions.get('window').width;

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
      
          {console.log(user)}
      <Text style={styles.welcomeText}>Welcome, {user == null ? "P" : user.name}</Text>

      <TouchableOpacity style={styles.mainCard} onPress={() => navigation.navigate('Main Workout')}>
        <Text style={styles.cardText}>
          BENCH DAY
        </Text>
        <Image source={require('./../assets/benchpress.png')} style={styles.cardImage}/>
        <Text style={styles.cardSubtitle}>
          Estimated 1RM: 220 lbs
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.startButtonContainer}
        onPress={() => navigation.navigate('Started Workout')}
      >
        <Text style={styles.startButtonText}>START ></Text>
      </TouchableOpacity>
    </View>
  );
}

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.removeItem('@531-graphql:auth0', () => {});
    if (value !== null) {
      // // We have data!!
      // console.log(`VALUEEE ${value}!!!.`);
      // console.log(`NAME: ${JSON.parse(value).name}!!`);
      // return JSON.stringify(value);
    }
  } catch (error) {
    // Error retrieving data
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D5C9',
    alignItems: 'center',
    justifyContent: "space-around"
  },
  welcomeText: {
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": 36,
    "color": "#222",
  },
  mainCard: {
    "width": 350,
    "height": 420,
    "backgroundColor": "#B9BAA3",
    "borderRadius": 10,
    "alignItems": 'center',
  },
  cardText: {
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": 55,
    "color": "#902923",
  },
  cardImage: {
    "width": 330,
    "height": 315,
  },
  cardSubtitle: {
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": 18,
    "textAlign": "center",
    "color": "#222"
  },
  startButtonContainer: {
    "backgroundColor": "#A3BAA4",
    "justifyContent": 'center',
    "borderRadius": 10,
    "width": 260,
    "height": 100,
    "alignItems": 'center',
    "margin": 75,
  },
  startButtonText: {
    "fontStyle": "normal",
    "fontWeight": "bold",
    "lineHeight": 65,
    "color": "#222",
    "fontSize": 55,
  },
  navBar: {
    "position": "absolute",
    "width": width,
    "height": 75,
    "left": 0,
    "bottom": 0,
    "backgroundColor": "#B9BAA3",
    "shadowOffset": {
      "width": 0,
      "height": 4
    },
    "shadowRadius": 10,
    "shadowColor": "rgba(0, 0, 0, 0.25)",
    "shadowOpacity": 1
  },

});
