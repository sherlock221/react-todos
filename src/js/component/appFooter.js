/**
 * Created by jiaaobo on 16/3/1.
 */

import React from "react";


class  TodoFooter extends React.Component{


    handlerAllState(event){
        this.props.changeTodoState(null,event.target.checked,true);
    };

    //清空已完成的任务
    handlerClearDone(){
        this.props.clearDone();
    };

    render(){
        return(
            <div className="">
                <input type="checkbox" checked={this.props.isAllChecked}  onChange={this.handlerAllState.bind(this)} />
                <span>{this.props.todoDoneCount}已完成/{this.props.todoCount}总数</span>
                <button onClick={this.handlerClearDone.bind(this)}>清除已完成</button>
            </div>
        );

    }

}

export  default TodoFooter;