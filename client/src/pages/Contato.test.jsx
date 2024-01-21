import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Contato from './Contato';

test('loads and displays Contato', async () => {
  // ARRANGE
  render(<Contato/>)

  // ACT
  const item = await screen.findAllByText('Enviar');

  // ASSERT
  expect(item).toHaveLength(1);
})