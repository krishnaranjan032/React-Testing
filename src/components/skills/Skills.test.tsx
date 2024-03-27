import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("renders Start learning button", () => {
    render(<Skills skills={skills} />);
    // const startLearningButton = screen.getByRole("button",{     // here the problem arises getByROle throws error when they dont find document in the dom
    const startLearningButton = screen.queryByRole("button", {      // in place of getBy we use queryBy as it return null not an error
      name:'Start Learning'
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});
