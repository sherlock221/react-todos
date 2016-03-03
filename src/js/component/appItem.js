/**
 * Created by jiaaobo on 16/3/1.
 */

import React from  "react";

export default class TodoItem extends React.Component {

    //处理任务是否完成
    handlerChange() {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    };

    // 鼠标移入
    handlerMouseOver() {
        React.findDOMNode(this.refs.deleteBtn).style.display = "inline";
    }

    // 鼠标移出
    handlerMouseOut() {
        React.findDOMNode(this.refs.deleteBtn).style.display = "none";
    }

    handlerDelete() {
        this.props.removeTodo(this.props.index);
    }



    render() {
        let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
        return (
            <li
                onMouseOver={this.handlerMouseOver.bind(this)}
                onMouseOut={this.handlerMouseOut.bind(this)}
            >
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
                <span style={doneStyle}>{this.props.text}</span>
                <button style={{'display': 'none'}} ref="deleteBtn" onClick={this.handlerDelete.bind(this)}  className="fr">删除</button>
            </li>

        );

    }


}


