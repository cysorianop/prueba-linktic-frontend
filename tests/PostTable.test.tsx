import { render, screen } from '@testing-library/react';
import PostTable from '../src/components/PostTable';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

test('renderiza la tabla con datos', () => {
  render(
    <BrowserRouter>
      <PostTable posts={[{ id: 1, title: 'Prueba', body: 'contenido' }]} />
    </BrowserRouter>
  );
  expect(screen.getByText('Prueba')).toBeDefined();
});