import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders header and home page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Popular/i)).toBeInTheDocument();
  expect(screen.getByText(/Movie Details Page/i)).toBeInTheDocument();
});