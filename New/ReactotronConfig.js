import { NativeModules } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Reactotron from "reactotron-react-native";

const scriptURL = NativeModules.SourceCode.scriptURL;
const host = scriptURL.split("://")[1].split(":")[0];

let reactotron = {};

console.log("Reactotron works on host: " + host);

reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: "UDHTTemplate",
    host,
    clientId: "reactotronClient",
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

reactotron.clear();

export default reactotron;
