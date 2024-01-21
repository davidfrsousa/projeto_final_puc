import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Sobre from './Sobre';

test('loads and displays Sobre', async () => {
  // ARRANGE
  render(<Sobre/>)

  // ACT
  const itens = await screen.findAllByText('Prototipação Eficiente de Produtos');

  // ASSERT
  expect(itens).toHaveLength(1);
});