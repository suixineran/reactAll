import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionType'

const defaultState = {
    inputValue : '请输入内容',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时',
    ]

}
export default (state = defaultState, action) => {
    console.log('旧的state=》',state)
    console.log('新的action=》', action)
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

    return state
}