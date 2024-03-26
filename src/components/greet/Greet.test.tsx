/*
 Greet should render the text hello and if a name is passed into the component
 It should render hello followed by the name
*/
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  // test.only("Greet renders with a name", () => {
  // test.skip("Greet renders with a name", () => {
  test("renders with a name", () => {
    render(<Greet name="Krishna" />);
    const textElement = screen.getByText("Hello Krishna");
    expect(textElement).toBeInTheDocument();
  });
});

// we can also nest describe method
// describe("Greet", () => {
//   test("renders correctly", () => {
//     render(<Greet />);
//     const textElement = screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument();
//   });

//   // test.only("Greet renders with a name", () => {
//   // test.skip("Greet renders with a name", () => {
//   describe("Nested", () => {
//     test("renders with a name", () => {
//       render(<Greet name="Krishna" />);
//       const textElement = screen.getByText("Hello Krishna");
//       expect(textElement).toBeInTheDocument();
//     });
//   });
// });

// we can also have several describe methods in a single file
// describe("first", () => {
//   test("renders with a name", () => {
//     render(<Greet name="Krishna" />);
//     const textElement = screen.getByText("Hello Krishna");
//     expect(textElement).toBeInTheDocument();
//   });
// });

// describe("second", () => {
//   test("renders correctly", () => {
//     render(<Greet />);
//     const textElement = screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument();
//   });
// });
