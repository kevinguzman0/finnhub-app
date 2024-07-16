import { Text, View } from "react-native";
import { styles } from "../styles/boxStock.styles";
import { DataBoxStock } from "../../../types/stock.type";

const BoxStock = ({ stock }: { stock: DataBoxStock }) => {
  return (
    <View style={styles.containerStock}>
      <View style={styles.containerText}>
        <Text style={styles.text}>{stock.name}</Text>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>
          {stock.price}
        </Text>
      </View>
      <View style={styles.containerPercentage}>
        <Text style={styles.textPercentage}>
          ^{stock.percentage}% ({stock.value})
        </Text>
      </View>
    </View>
  );
};

export default BoxStock;
