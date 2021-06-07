import { render, screen } from '@testing-library/react';
import { Component } from '../src/js/component';

describe('Component global test', () => {
  it('renders default', () => {
    render(<Component />);
    expect(screen.getByText('Frontend Template Test View')).toBeInTheDocument();
  });
});
