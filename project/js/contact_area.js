var name1 = document.getElementById('name1');
var message = document.getElementById('message');
var form_submit = document.getElementById('form_submit');
var list = document.getElementById('list');

form_submit.addEventListener('click',function () {
    list.innerHTML = list.innerHTML+
    `<div class="contact-address">
    <h3>${name1.value}</h3>
    <p>${message.value}</p>
    </div><hr>` ;

})