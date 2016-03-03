/**
 * Created by jiaaobo on 16/3/1.
 */

class TestPage {

    constructor(){
        console.log("初始化");
        this.test();
    };

    test(){

        let a = 10;
        setTimeout(()=>{
            a = 20;
            console.log(a);

        },2000);

    }

}


new TestPage();