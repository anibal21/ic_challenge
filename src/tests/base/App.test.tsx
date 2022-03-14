import React from 'react'
import { prettyDOM, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './../../store/store'
import App from './../../App'
import * as hook from './../../hooks/useFakeQuery/useFakeQuery'
import { players } from './../../hooks/useFakeQuery/data/fakeData'

test('Renders without crashing', () => {
  const { getByText } = render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  )

  expect(getByText(/Recent/)).toBeInTheDocument()
});

test('useFakeQuery works and display data', async () => {

  jest.spyOn(hook, 'useFakeQuery').mockImplementation(() => ({
    data: players,
    error: null,
    loading: false
    }));

  const cmp = await render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const ActivityListDiv = await cmp.findByRole('activityList')

  expect(ActivityListDiv.childElementCount).toBeGreaterThan(0)

});