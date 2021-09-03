import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import {
    APIContent,
    Content,
    Footer,
    Header,
    NavigationMenu
} from '../components'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        </div>
        <NavigationMenu />
        <div>
            <Content />
        </div>
        <div>
            <Footer />
        </div>
    </BrowserRouter>

)

export default AppRouter;