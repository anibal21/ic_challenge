import React from 'react'

interface ILayout {
    children: JSX.Element
}

const Layout = ({ children }) => <div className={'cg-layout-container'} >
    {children}
</div>

export default Layout