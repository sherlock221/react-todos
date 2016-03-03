/**
 * Created by jiaaobo on 16/3/1.
 */

import React from "react";


class  TodoHeader extends React.Component{

    //添加新任务
    handlerKeyUp(event){

        if(event.keyCode === 13){
            let val = event.target.value;
            if(!val) return false;

            let newToDoItem = {
                text : val,
                isChecked : false
            }

            event.target.value = "";
            this.props.addTodo(newToDoItem);
        }
    };

    render(){

        return(
            <div className="panel-header">
                    <input type="text" placeholder="您的任务?" onKeyUp={this.handlerKeyUp.bind(this)}/>
            </div>
        );

    }

}

export  default TodoHeader;