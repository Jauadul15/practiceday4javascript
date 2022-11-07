class papa{
    jomi(){

        console.log("ekta");
    }
    jomi2(){
        console.log("duita");
    }
}

class ami extends papa{


    shompotti(){
        super.jomi2();
    }

}
var obj=new ami();
obj.shompotti();