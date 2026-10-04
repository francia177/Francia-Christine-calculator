import { render, screen } from '@testing-library/react';
import App from './App';

test("renders calculator title", () => {
  render(<App />);
const titleElement = screen.getByRole("heading", { level: 1, name: /Christine's Calculator/i });
expect(titleElement).toBeInTheDocument();

});
