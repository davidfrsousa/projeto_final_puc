import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home';

test('loads and displays Home', async () => {
  // ARRANGE
  render(<Home/>)

  // ACT
  const item = await screen.findAllByText('Conheça mais');

  // ASSERT
  expect(item).toHaveLength(1);
})