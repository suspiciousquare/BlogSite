function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){

    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    
    var titleErr = contentErr = true;

    if (title == ""){
        printError("titleErr", "Please enter a title");
    } else {
        printError("titleErr","");
        titleErr = false;
    }
    
    if (content == ""){
        printError("contentErr", "Please enter blog contents");
    } else {
        printError("contentErr","");
        contentErr = false;
    }

    if(titleErr == true || contentErr == true){
        return false;
    } else {
        return true;
    }
}
function newElement() {
    //console.log("hello");
    if (validateForm()){
        document.getElementById("blog").prepend(document.createElement("hr"));

        var p = document.createElement("p");
        var content = document.getElementById("content").value;
        var t = document.createTextNode(content);
        p.appendChild(t);
        document.getElementById("blog").prepend(p);
        document.getElementById("content").value = "";

        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        var h2 = document.createElement("h2");
        t = document.createTextNode(datetime);
        h2.appendChild(t);
        document.getElementById("blog").prepend(h2);

        var h1 = document.createElement("h1");
        var title = document.getElementById("title").value;
        t = document.createTextNode(title);
        h1.appendChild(t);
        document.getElementById("blog").prepend(h1);
        document.getElementById("title").value = "";

        $('#blogmodal').modal('hide');
    }
}
