var req = new XMLHttpRequest();
var navlinksdoc = "navlinks.json";

req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let arr = JSON.parse(this.responseText);
        process(arr);
    }
}
req.open('GET', navlinksdoc, true);
req.send();

function process(arr) {
    let menu_entradas = document.querySelector("#entradas");
    let list_items = document.createElement('ul');
    menu_entradas.appendChild(list_items);
    for (el in arr) {
        let item = document.createElement('li');
        let entrada = document.createElement('a');
        entrada.innerText = arr[el]['caption'];
        entrada.setAttribute('href', arr[el]['url']);
        item.appendChild(entrada);
        list_items.appendChild(item);
    }
}