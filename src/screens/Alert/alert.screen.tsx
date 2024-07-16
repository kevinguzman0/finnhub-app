import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { Header } from "./components/header";
import { DropDownCustom } from "../../components/input/DropDown";
import { ButtonCustom } from "../../components/button/button";
import { InputCustom } from "../../components/input/input";

type Stock = {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  isin: string;
  mic: string;
  shareClassFIGI: string;
  symbol: string;
  symbol2: string;
  type: string;
};

type DataDropDown = {
  label: string;
  value: string;
};

class AlertScreen extends React.Component {
  state = {
    data: [] as DataDropDown[],
    inputValue: "",
    dropdownValue: "option1",
    anotherInputValue: "",
    value: "",
  };

  saveInformation = () => {
    console.log(
      this.state.inputValue,
      this.state.dropdownValue,
      this.state.anotherInputValue
    );
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    console.log("fetching data");

    fetch(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cqb7jg1r01qvu0juseb0cqb7jg1r01qvu0jusebg"
    )
      .then((response) => response.json())
      .then((data: Stock[]) => {
        const dataDropDown = data.map((item) => ({
          label: item.description,
          value: item.description,
        }));

        this.setState({ data: dataDropDown });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  render() {
    const value = this.state.value;
    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.containerTitle}>
          <Text style={styles.title}>Add a new alert for a stock</Text>

          <View style={styles.containerForm}>
            <DropDownCustom
              data={this.state.data}
              value={value}
              onChange={(item) => this.setState({ dropdownValue: item })}
            />

            <InputCustom
              value={this.state.inputValue}
              onChangeText={(text) => this.setState({ inputValue: text })}
              placeholder="Price alert"
              keyboardType="numeric"
            />

            <ButtonCustom title="Save" onPress={this.saveInformation} />
          </View>
        </View>
      </View>
    );
  }
}
export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerTitle: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors("greenNormal"),
    marginBottom: 20,
    textAlign: "left",
    alignItems: "flex-start",
  },
  containerForm: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
