
function myFunction() {
    const chat = document.getElementById('chat');
    const node = document.createElement("p");
    // lấy giá trị từ text box
    const x = document.getElementById("box_chat").value;
    node.innerHTML = x;
    // Append the "li" node to the list:
    if (x == null || x.length){
        chat.appendChild(node);
    }
    else{

    }
/*     chat.appendChild(node); */
    document.getElementById("box_chat").value=null
}
