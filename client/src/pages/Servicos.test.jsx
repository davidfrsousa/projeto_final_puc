import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Servicos from './Servicos';

test('loads and displays Serviços', async () => {
  // ARRANGE
  render(<Servicos/>)

  // ACT
  const item = await screen.findAllByText('Serviços');

  // ASSERT
  expect(item).toHaveLength(2);
})