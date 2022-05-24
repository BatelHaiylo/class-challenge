function my5Task (){
    var question = confirm("do you have tasks for today?");
    var tasksArray = []

    for(i=0; (question==true)&&(i<5); i++){
        var Task = prompt("enter a task:")
        tasksArray.push(Task)
    }
    console.log(tasksArray);

    console.log(tasksArray.pop());
    console.log(tasksArray);

    console.log(tasksArray.shift());
    console.log(tasksArray);

    console.log(tasksArray.pop());
    console.log(tasksArray);

    console.log(tasksArray.shift());
}


