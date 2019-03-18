import Home from './components/home'
import Portfolio from './components/portfolio'
import Clients from './components/clients'
import Contact from './components/contact'
import Products from './components/products'
import Services from './components/services'
import About from './components/about'
import Team from './components/team'
import Skills from './components/skills'

export const routes=[
    {path:'/',component:Home},
    {path:'/portfolio',component:Portfolio},
    {path:'/clients',component:Clients},
    {path:'/clients',component:Contact},
    {path:'/products',component:Products},
    {path:'/services',component:Services},
    {path:'/about',component:About},
    {path:'/team',component:Team},
    {path:'/skills',component:Skills}
];