/**
 * Created by jiaaobo on 16/3/1.
 */

import React from  "react";
import TodoItem from  "./appItem";

export default class TodoMain extends React.Component{

    render(){
        return(
            <ul className="todo-list">
                {this.props.todoList.map((todo,index)=> {
                    return (<TodoItem key={index} {...todo} index={index} {...this.props}></TodoItem>);
                } )}
            </ul>

        );

    }


}


