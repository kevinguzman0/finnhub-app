import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

jest.useFakeTimers();
test("renders the App component", () => {
  render(<App />);
});
