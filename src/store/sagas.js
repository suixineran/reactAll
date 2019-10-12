import { takeEvery ,put } from 'redux-saga/effects'
import {GET_MY_LIST} from './actionType'
import {getListAction} from './actionCreate'
import axios from 'axios'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    const res = yield axios.get('https://www.easy-mock.com/mock/5da09acae06604327eefd730/00')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga
