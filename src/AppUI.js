import React from 'react';
import {Button, Input, List} from "antd";
import 'antd/dist/antd.css'

const AppUI = (props) => {
        return (
            <div>
                <Input
                    style={{ width:'250px', margin:'10px'}}
                    placeholder={props.inputValue}
                    onChange={props.changeInputValue}
                />

                <Button
                    type="primary"
                    onClick={props.clickBtn}
                    // 提交后输入框的内容没有清除，但是再次添加的内容为空
                > 增加项目</Button>

                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={props.list}
                        renderItem=
                            {(item,index)=> (
                                <List.Item
                                    // onClick={props.deleteItem(index)}
                                    onClick={()=>{props.deleteItem(index)}}
                                    // onClick={this.deleteItem(index)}
                                    //用箭头函数绑定this会报错
                                >
                                {item}
                                </List.Item>
                            )}
                    />
                </div>
            </div>
        )
}

export default AppUI