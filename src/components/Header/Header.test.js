import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen.getByText(/Popular/i)).toBeInTheDocument();
  expect(screen.getByText(/Top Rated/i)).toBeInTheDocument();
  expect(screen.getByText(/Upcoming/i)).toBeInTheDocument();
});