import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Hello Chennai text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Chennai/i);
  expect(linkElement).toBeInTheDocument();
});
