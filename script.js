window.addEventListener("load",() =>{
    const form = document.querySelector("#new-task-form");



    document.querySelector('#subbutt').onclick = function(){
        var inpt = document.getElementById("inputtodo").value
        if (!inpt) {
            document.getElementById('box').style.display = 'block';
        } else {
            document.getElementById('box').style.display = 'none';
            
            
            // NewElement for tasks
            var tag = document.createElement("h1");
            tag.id = 'taskbox';
            tag.style.padding = '10px 10px 10px 10px';
            
            // Buttons
            var but1 = document.createElement("button");
            but1.innerHTML = "Edit"
            but1.id = 'edit';
            
            var but2 = document.createElement("button");
            but2.innerHTML ='Delete';
            but2.id = 'delete';
            
            
            
            
            // Taking input from text to putting into tag
            var text = document.createTextNode(inpt);
            tag.appendChild(text);
            
            
            var element = document.getElementById("tasks");
            element.appendChild(tag)
            element.appendChild(but1)
            element.appendChild(but2)
            
            
            
        }
            
        }




    // Do not refresh page after submit cliked
    form.addEventListener('submit',(e) => {
        e.preventDefault();
    // Do not refresh page after submit cliked


    })
})




// Checking if input is empty
