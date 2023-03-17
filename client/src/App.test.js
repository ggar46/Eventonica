import { render, screen } from '@testing-library/react';
import App from './App';
import AddEventForm from './components/addeventform';
import Events from './components/events';

 
describe("Add Event Form", () => {
  test("renders event form component", () => {
    render(<AddEventForm />);
  });
});

describe("Add Event Cards", () => {
  test("renders events.js component", () => {
    render(<Events />);
  });
});

test("renders Techtonica Events 2023 title", () => {
  render(<App />);
  expect(screen.getByText(/Techtonica Events 2023/));
});