import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Page1 from './Page/Page1/Page1'
import Page2 from './Page/Page2'
import Page3 from './Page/Page3'
import Page4 from './Page/Page4'
import Home from './Page/Home'

function AppRouter() {
    let links = [
        { path: '/',   title: '首页', },
        { path: '/page1',  title: '一级路由1', },
        { path: '/page2',  title: '一级路由2', },
        { path: '/page3',  title: '一级路由3', },
        { path: '/page4',  title: '一级路由4', },

    ]

    let routes = [
        { path: '/', exact: true,  title: '首页', component: Home},
        // { path: '/page1/', exact: true,  title: '一级路由1', component: Page1},
        { path: '/page2/', exact: false,  title: '一级路由2', component: Page2},
        { path: '/page3/', exact: true,  title: '一级路由3', component: Page3},
        { path: '/page4/', exact: true,  title: '一级路由4', component: Page4},
        { path: '/page1/', exact: false, title: '二级路由1', component: Page1},

    ]

  return (
      <Router>
          {
              links.map((item, index) => {
                  return (
                      <div key={index}> <Link to={item.path}>{item.title}</Link> </div>
                  )
                  }
              )
          }

          {
              routes.map((item, index) => {
                      return (
                          <Route key={index} exact={item.exact} path={item.path}  component={item.component} />
                      )
                  }
              )
          }
      </Router>
  )
}


export default AppRouter
