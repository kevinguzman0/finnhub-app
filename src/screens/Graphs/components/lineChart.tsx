import { LineChart } from "react-native-gifted-charts";
import { colors } from "../../../theme/colors";
import { DataGraphType } from "../../../types/chart.type";

export const LineChartCustom = ({ data }: { data: DataGraphType[] }) => {
  return (
    <LineChart
      isAnimated
      thickness={3}
      color={colors("greenNormal")}
      maxValue={100}
      noOfSections={3}
      animateOnDataChange
      animationDuration={1000}
      onDataChangeAnimationDuration={300}
      areaChart
      yAxisTextStyle={{ color: "lightgray" }}
      data={data}
      hideDataPoints
      startFillColor={"rgb(92, 180, 60)"}
      endFillColor={"rgb(92, 180, 60)"}
      startOpacity={0.4}
      endOpacity={0.1}
      spacing={22}
      backgroundColor={colors("blackNormal")}
      rulesColor="gray"
      rulesType="solid"
      initialSpacing={10}
      yAxisColor="lightgray"
      xAxisColor="lightgray"
      width={280}
    />
  );
};
