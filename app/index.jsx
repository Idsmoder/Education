import { StatusBar } from 'expo-status-bar';
import {View, Text} from "react-native";
import {useEffect, useState} from "react";

export default function App() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(interval);

                    return 100;
                }
                return Math.min(oldProgress + 10, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);
  return (
      <View className="flex-1 justify-center items-center bg-emerald-500">
          <Text className="mt-64 text-3xl text-white font-bold">iMEDIC</Text>
          <Text className={'mt-80 text-center text-white'} >Loading...</Text>

          <View className="mt-1 w-8/12 h-4 bg-emerald-300 rounded-full overflow-hidden ">
              <View style={{ width: `${progress}%` }} className="h-full border-l-emerald-300 rounded-full"></View>
          </View>
          <StatusBar style="auto" />


      </View>
  );
}


