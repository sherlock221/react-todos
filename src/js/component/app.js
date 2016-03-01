import React from "react";
import TodoHeader from  "./appHeader";
import TodoFooter from  "./appFooter";
import TodoMain from "./appMain";

export  default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            todoList: [],
            isAllChecked: false
        };
    };


    //判断是否有任务状态都完成,同步底部选择框
    allChecked() {
        let isAllChecked = false;
        if (this.state.todoList.every(
                (todo)=> todo.isChecked))
        {
            isAllChecked = true;
        }
        this.setState({isAllChecked: isAllChecked});
    };


    //改变任务状态
    changeTodoState(index,isDone,isChangeAll=false){

        if(isChangeAll){
            this.setState({
                todoList : this.state.todoList.map((todo)=>{
                    todo.isDone =  isDone;
                    return todo;
                }),
                isAllChecked : isDone
            });
        }
        else{
            this.state.todoList[index].isDone = isDone;
            this.allChecked();
        }

    };

    //添加任务
    addTodo(todoItem) {
        this.state.todoList.push(todoItem);
        this.allChecked();
    };


    //删除当前任务
    removeTodo(index) {
        this.state.todoList.splice(index,1);
        this.setState({
            todoList : this.state.todoList
        });
    };

    //清空已完成的任务1
    clearDone() {
        let todoList = this.state.todoList.filter((todo)=> {
            return !todo.isChecked;
        });

        this.setState({
            todoList: todoList,
            isAllChecked: false
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
            <TodoFooter isAllChecked={this.state.isAllChecked} clearDone={this.clearDone.bind(this)} {...props} changeTodoState={this.changeTodoState.bind(this)}></TodoFooter>

        </div>);

    };


}
