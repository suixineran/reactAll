import {  CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST,  } from './actionType'

const defaultState = {
    inputValue : 'haha请输入内容',
    list:[
        // '1早上4点起床，锻炼身体',
        // '2中午下班游泳一小时',
        // '3早上4点起床，锻炼身体',
        // '4中午下班游泳一小时',
        // '5中午下班游泳一小时',
    ]

}
export default (state = defaultState, action) => {
    // console.log('旧的state=》',state)
    // console.log('新的action=》', action)

    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        // newState.inputValue = ''
        return newState
    }

    if(action.type === GET_LIST ){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list
        return newState
    }

    return state
}