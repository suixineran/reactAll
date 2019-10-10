import React from 'react'
import {Route, Link,} from 'react-router-dom'
import Page1aa from './Page1aa'
import Page1bb from './Page1bb'
import Page1cc from './Page1cc'
import Page1dd from './Page1dd'


function Page1(props) {
    console.log(props)
    let links = [

        { path: '/page1/aaa', exact: true, title: 'page1二级路由aaa',},
        { path: '/page1/bbb', exact: true, title: 'page1二级路由bbb',},
        { path: '/page1/ccc', exact: true, title: 'page1二级路由ccc',},
        { path: '/page1/ddd', exact: true, title: 'page1二级路由ddd',},
    ]
    let routers = [
        { path: '/page1/aaa', exact: true, title: '二级路由aaa', component: Page1aa},
        { path: '/page1/bbb', exact: true, title: '二级路由bbb', component: Page1bb},
        { path: '/page1/ccc', exact: true, title: '二级路由ccc', component: Page1cc},
        { path: '/page1/ddd', exact: true, title: '二级路由ddd', component: Page1dd},
    ]

    return (
        <div>
            <div>   <h2> 我是Page11页</h2></div>



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

export default Page1