'use strict'
window.onload = function() {

  //When the add button is pressed anything in the field is added
  document.querySelector('.add').addEventListener('click', function() {
    var textField = document.getElementById('text').value;
    if (textField.length === 0) {
      var textField = document.getElementById('text').value;
      var nothing = "Please enter an item";
      alert(nothing);
    } else {
      //makes a variable called node and creates a list item

      var node = document.createElement('Li')
      node.className = 'li';
      //makes a variable called textnode and
      //creates test on the page with the variable textfield
      var textnode = document.createTextNode(textField);
      node.appendChild(textnode);
      document.getElementById("list").appendChild(node);
      document.getElementById('text').value = "";
      addButton();
    }

    function addButton() {
      var button = document.createElement("BUTTON");
      button.className = "button";
      button.innerHTML = "X";
      node.appendChild(button);
    }

    function updatelist() {
      var nodes = document.getElementsByClassName('li')
      nodes.appendChild(button);
    }
    $('.button').on('click', function(){
      $(this).closest('li').remove();
      alertMessage();
    })
  })

  function alertMessage() {
    var list = document.getElementsByTagName('ol');
    // the list of from the order list
    var message = "this page has " + list[0].children.length + " list items";
    alert(message);
  }
}
