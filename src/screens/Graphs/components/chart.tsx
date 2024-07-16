import { Text, View } from "react-native";
import { styles } from "../styles/chart.styles";
import { ChartType } from "../../../types/chart.type";
import { LineChartCustom } from "./lineChart";

export const Chart = ({ data }: { data: ChartType }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <LineChartCustom data={data.dataGraph} />
    </View>
  );
};
