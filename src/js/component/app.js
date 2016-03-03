import React from "react";
import TodoHeader from  "./appHeader";
import TodoFooter from  "./appFooter";
import TodoMain from "./appMain";

export  default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todoList: []
        };
    };


    //改变任务状态
    changeTodoState(index,isDone){

        this.state.todoList[index].isDone = isDone;
        this.setState({});

    };

    //添加任务
    addTodo(todoItem) {
        let todoList =  this.state.todoList;
        todoList.push(todoItem);
        this.setState({
            todoList : todoList
        });
    };


    //删除当前任务
    removeTodo(index) {
        this.state.todoList.splice(index,1);
        this.setState({
            todoList : this.state.todoList
        });
    };


    render() {

        var props = {
            todoCount: this.state.todoList.length || 0,
            todoDoneCount: (this.state.todoList && this.state.todoList.filter((todo)=>todo.isDone)).length || 0
        };


        return (<div className="panel">
            <TodoHeader addTodo={this.addTodo.bind(this)}></TodoHeader>
            <TodoMain removeTodo={this.removeTodo.bind(this)} todoList={this.state.todoList} changeTodoState={this.changeTodoState.bind(this)}></TodoMain>
            <TodoFooter   {...props} ></TodoFooter>
        </div>);

    };


}
