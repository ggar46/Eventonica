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

test("renders Techtonica 2023 events title", () => {
  render(<App />);
  expect(screen.getByText(/Techtonica 2023 events/));
});