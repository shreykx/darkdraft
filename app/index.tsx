import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, ActivityIndicator, Pressable } from "react-native";

import { useFonts } from "expo-font";
import { HandleGoogleSignIn } from "@/firebaseConfig";

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [FontsLoaded, error] = useFonts({
    "JollyLodger-Regular": require('../assets/fonts/JollyLodger-Regular.ttf')
  })

  useEffect(() => {
    if (FontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [FontsLoaded, error]);

  if (!FontsLoaded && !error) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#111111] items-center justify-center">

      {/* Navigation Bar */}
      <View className="absolute top-0 left-0  w-full px-4 py-2">
        <Text style={{ fontFamily: "JollyLodger-Regular", userSelect: "none" }} className="text-white text-2xl font-bold">
          DarkDraft
        </Text>

      </View>
      <View className="w-[80%]">
        <Pressable onPress={()=> HandleGoogleSignIn} className="px-4 py-2 transition duration-10 flex  items-center justify-center bg-blue-600 active:bg-blue-800 w-full">
          <Text className="text-white">Get Started</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}
