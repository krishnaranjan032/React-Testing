/*
 Greet should render the text hello and if a name is passed into the component
 It should render hello followed by the name
*/
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

// test.only("Greet renders with a name", () => {
// test.skip("Greet renders with a name", () => {
test("Greet renders with a name", () => {
  render(<Greet name="Krishna" />);
  const textElement = screen.getByText('Hello Krishna');
  expect(textElement).toBeInTheDocument();
});
