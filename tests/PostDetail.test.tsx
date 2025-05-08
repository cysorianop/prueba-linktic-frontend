import { render, screen } from '@testing-library/react';
import PostDetail from '../src/components/PostDetail';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import React from 'react';

test('renderiza loading inicialmente', () => {
  render(
    <MemoryRouter initialEntries={["/post/1"]}>
      <PostDetail />
    </MemoryRouter>
  );
  expect(screen.getByText(/cargando/i)).toBeDefined();
});
