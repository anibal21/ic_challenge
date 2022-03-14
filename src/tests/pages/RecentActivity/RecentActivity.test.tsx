import React, { Component } from 'react'
import { render } from '@testing-library/react'
import RecentActivity from './../../../pages/RecentActivity/RecentActivity'
import { Provider } from 'react-redux';
import { store } from './../../../store/store'

test('Loading Panel is showed if loading comes true', () => {

    const parameters = { 
        loading: true,
        userList: []
    }

    const cmp = render(
        <Provider store={store}>
            <RecentActivity loading={parameters.loading} userList={parameters.userList} />
        </Provider>)
    
    expect(cmp.container).toHaveTextContent('Loading...')

});

