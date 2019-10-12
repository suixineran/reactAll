import React, {
    useState ,
    useEffect,
    createContext,
    useContext,
    useReducer,

} from 'react'
import Hook1 from './hook/Hook1'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {ColorContext} from "./hook/color";
const CountContext = createContext()




function Index() {
    useEffect(()=> {
        console.log('进入首页')
        return ()=>{
            console.log('离开首页')
        }
    },[])
    return <h2>我是首页</h2>
}

function List() {
    useEffect(()=>{
        console.log('进入列表页面')
        return ()=>{
            console.log('离开Index页面')
        }
    },[ ])

    return <h2>List-Page</h2>
}

function Counter(){
    const count = useContext(CountContext)  //一句话就可以得到count
    return (
        <div>
            <h2>{count}</h2>
            <div>父子组件传值， 父组件变 子组件 接收到的变量也会变
                <p>引入  createContext  useReducer  </p>
                <p>创建， const ColorContext = createContext({})</p>
                <p>链接  const [color,dispatch]=useReducer(reducer,'blue')</p>
                <p>再暴露出去，  ColorContext.Provider value= color,dispatch,</p>
                 <p>把子组件包裹下，</p>
                 <p>在子组件中接收 ， const color= useContext(ColorContext)</p>
            </div>
        </div>
    )
}




function Hook(props) {
    const [ count , setcount ] = useState(0)
    const [ age , setAge ] = useState(18)
    const [ sex , setSex ] = useState('女')
    const [ work , setWork ] = useState('前端程序员')

    //useEffect
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)

        return ()=>{
            console.log('====================')
        }
    },[count])
    //第二个参数表示 类似监控谁 谁改变的时候就会执行return 里边的函数


    //usereducer
    const [ count1 , dispatch ] =useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    },50)

    return (
        <div>
            <p>useState的使用</p>
            <p>You clicked  times</p>
            <h2>{count}</h2>
            <button onClick={()=>{setcount(count + 1)}}>click me</button>
            <p>you 今年:{age}岁</p>
            <p>性别:{sex}</p>
            <p>工作是:{work}</p>
            <hr/>

            <p>useEffect的使用</p>
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
            <hr/>

            <p>useContext的使用</p>
            <CountContext.Provider value={count}>
                {props.children}
                <Counter />
            </CountContext.Provider>
            <hr/>

            <div>
                <p>useEffect的使用</p>
                <p>现在的分数是  </p>
                <h2>{count1}</h2>
                <button onClick={()=>dispatch('add')}>增加</button>
                <button onClick={()=>dispatch('sub')}>减少</button>
            </div>
            <hr/>
            <hr/>

            <Hook1/>

        </div>


    )
}
export default Hook