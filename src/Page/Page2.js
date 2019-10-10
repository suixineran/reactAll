import React from 'react'
import PageDetail from "./PageDetail"
import {Route, Link,} from 'react-router-dom'


function Page2(props) {
    let links = [

        { path: '/page2/aaa', exact: true, title: 'page2二级路由aaa',},
        { path: '/page2/bbb', exact: true, title: 'page2二级路由bbb',},
        { path: '/page2/ccc', exact: true, title: 'page2二级路由ccc',},
        { path: '/page2/ddd', exact: true, title: 'page2二级路由ddd',},
    ]
    let routers = [
        { path: '/page2/aaa', exact: true, title: '二级路由aaa', component: PageDetail},
        { path: '/page2/bbb', exact: true, title: '二级路由bbb', component: PageDetail},
        { path: '/page2/ccc', exact: true, title: '二级路由ccc', component: PageDetail},
        { path: '/page2/ddd', exact: true, title: '二级路由ddd', component: PageDetail},
    ]

    return (
        <div>
           <h2> 我是Page22页</h2>

            {
                links.map((item, index) => {
                        return (
                            <div key={index}> <Link to={item.path}>{item.title}</Link> </div>
                        )
                    }
                )
            }

            {
                routers.map((item, index) => {
                        return (
                            <Route key={index}  path={item.path}  component={item.component} />
                        )
                    }
                )
            }

        </div>
    )

}

export default Page2