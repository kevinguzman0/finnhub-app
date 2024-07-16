import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import { hp } from "../../utilities/responsive";
import BoxStock from "./components/boxStock";
import { data } from "../../ constants/stocks";

const WatchListScreen = () => {
  // var ws = React.useRef(
  //   new WebSocket(
  //     "wss://ws.finnhub.io?token=cqb7jg1r01qvu0juseb0cqb7jg1r01qvu0jusebg"
  //   )
  // ).current;

  // useEffect(() => {
  //   ws.onopen = () => {
  //     console.log("Connected to the server");
  //   };
  //   ws.addEventListener("open", function (event) {
  //     ws.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
  //     ws.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" }));
  //     ws.send(JSON.stringify({ type: "subscribe", symbol: "IC MARKETS:1" }));
  //   });
  //   ws.addEventListener("message", function (event) {
  //     const response = JSON.parse(event.data);
  //     if (response.data) {
  //       setServerMessagesList((prev) => [...prev, response.data]);
  //     }
  //   });
  //   ws.onerror = (e) => {
  //     console.log("Error in the connection", e);
  //   };
  //   // ws.onmessage = (e) => {
  //   //   console.log("Message received from the server", e);
  //   //   serverMessagesList.push(e.data);
  //   // };
  // }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <BoxStock stock={item} />}
        keyExtractor={(item, index) => item.name + index}
        numColumns={2}
        style={styles.containerFlatList}
        columnWrapperStyle={styles.centerItems}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors("whiteNormal"),
  },
  containerFlatList: {
    width: "100%",
    marginTop: hp(5),
  },
  centerItems: {
    justifyContent: "center",
  },
});
