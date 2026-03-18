import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Counter Component', () => {
  describe('Increment Function', () => {
    it('increments counter by 1 when + button is clicked', () => {
      render(<Counter />);
      const incrementButton = screen.getByText('+');

      fireEvent.click(incrementButton);
      expect(screen.getByText('Counter: 1')).toBeInTheDocument();
    });

    it('increments counter multiple times', () => {
      render(<Counter />);
      const incrementButton = screen.getByText('+');

      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);

      expect(screen.getByText('Counter: 3')).toBeInTheDocument();
    });

    it('handles negative values correctly when incrementing', () => {
      render(<Counter initialValue={-5} />);
      const incrementButton = screen.getByText('+');

      fireEvent.click(incrementButton);
      expect(screen.getByText('Counter: -4')).toBeInTheDocument();
    });
  });

  describe('Decrement Function', () => {
    it('decrements counter by 1 when - button is clicked', () => {
      render(<Counter initialValue={1} />);
      const decrementButton = screen.getByText('-');

      fireEvent.click(decrementButton);
      expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });

    it('decrements counter multiple times', () => {
      render(<Counter initialValue={5} />);
      const decrementButton = screen.getByText('-');

      fireEvent.click(decrementButton);
      fireEvent.click(decrementButton);
      fireEvent.click(decrementButton);

      expect(screen.getByText('Counter: 2')).toBeInTheDocument();
    });

    it('decrements from default initial value (goes negative)', () => {
      render(<Counter />);
      const decrementButton = screen.getByText('-');

      fireEvent.click(decrementButton);
      expect(screen.getByText('Counter: -1')).toBeInTheDocument();
    });
  });

  describe('Clear Function', () => {
    it('resets counter to 0 when Clear button is clicked', () => {
      render(<Counter initialValue={5} />);
      const clearButton = screen.getByText('Clear');

      fireEvent.click(clearButton);
      expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });

    it('resets counter to 0 from negative value', () => {
      render(<Counter initialValue={-10} />);
      const clearButton = screen.getByText('Clear');

      fireEvent.click(clearButton);
      expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });

    it('resets counter to 0 after incrementing', () => {
      render(<Counter />);
      const incrementButton = screen.getByText('+');
      const clearButton = screen.getByText('Clear');

      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      expect(screen.getByText('Counter: 3')).toBeInTheDocument();

      fireEvent.click(clearButton);
      expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });

    it('resets counter to 0 after decrementing', () => {
      render(<Counter initialValue={10} />);
      const decrementButton = screen.getByText('-');
      const clearButton = screen.getByText('Clear');

      fireEvent.click(decrementButton);
      fireEvent.click(decrementButton);
      fireEvent.click(decrementButton);
      expect(screen.getByText('Counter: 7')).toBeInTheDocument();

      fireEvent.click(clearButton);
      expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });
  });
});
