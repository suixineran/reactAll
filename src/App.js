import React , { Component }from 'react'
import 'antd/dist/antd.css'
import store from './store'
import {  changeInputAction, addItemAction, deleteItemAction, getMyListAction, } from './store/actionCreate'
import AppUI from "./store/AppUI"


class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange)
        // this.deleteItem = this.deleteItem.bind(this)

    }

    render() {
        let {inputValue, list} = this.state
        return (
            <div  style={{margin:'10px'}}>
                <AppUI
                    inputValue={inputValue}
                    list={list}
                    changeInputValue={this.changeInputValue}
                    clickBtn={this.clickBtn}
                    deleteItem={this.deleteItem}
                />
            </div>
        )
    }

    componentDidMount(){
        const action =getMyListAction()
        store.dispatch(action)
        console.log(action)
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    changeInputValue = (e) => {
        const action =  changeInputAction(e.target.value)
        store.dispatch(action)
    }

    clickBtn = () => {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem = (index) => {
        console.log(index)
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default App
