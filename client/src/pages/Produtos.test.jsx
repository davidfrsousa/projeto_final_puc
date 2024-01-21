import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Produtos from './Produtos';

test('loads and displays Produtos', async () => {
  // ARRANGE
  render(<Produtos/>)

  // ACT
  await fetch('http://localhost:3000/produtos');
  const itens = await screen.findAllByText('Visualizar');

  // ASSERT
  expect(itens).toHaveLength(5);
});