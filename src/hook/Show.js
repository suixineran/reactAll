import React,  { useContext } from 'react'

import { ColorContext } from './color'
function Show1() {
    const {color} = useContext(ColorContext)
    return (<div>
        <h2>我是子组件show1
            字体颜色为**{color}**
        </h2>
    </div>)

}

function Show2() {
    const {color, count1} = useContext(ColorContext)
    return (<div>
        <h2>我是子组件show2
            字体颜色为@@ {color} @@
            --{count1}--
        </h2>
    </div>)

}

function ShowArea(){
    const {color} = useContext(ColorContext)
    return (
        <div style={{color:color}}>
            我是父组件
        字体颜色为{color}
            <Show1/>
            <Show2/>
    </div>)

}
export default ShowArea