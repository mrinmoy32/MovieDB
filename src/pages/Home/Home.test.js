import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";

test("renders loading state", () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
  expect(screen.getByText(/Loading popular movies/i)).toBeInTheDocument();
});