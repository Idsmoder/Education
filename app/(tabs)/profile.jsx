import * as React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const STATUSBAR_HEIGHT = Platform.OS === "os" ? 20 : StatusBar.currentHeight;
const LOCATION_TASK_NAME = "background-location-task";

export default function TestingGround({ navigation }) {
  const onPress = async () => {
    const { status } = await Location.requestBackgroundPermissionsAsync();
    if (status === "granted") {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Highest,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 300,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text>Enable background location</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: STATUSBAR_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
});

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    console.log("error", error);
    return;
  }
  if (data) {
    const { locations } = data;
    // do something with the locations captured in the background
    console.log("locations", locations);
  }
});