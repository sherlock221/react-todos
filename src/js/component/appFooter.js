/**
 * Created by jiaaobo on 16/3/1.
 */

import React from "react";


class  TodoFooter extends React.Component{



    render(){
        return(
            <div className="clearfix todo-footer">
                <span>{this.props.todoDoneCount}已完成/{this.props.todoCount}总数</span>
            </div>
        );

    }

}

export  default TodoFooter;