const btnH = document.querySelector(".hot");
const btnD = document.querySelector(".dessert");
const hot = document.querySelector(".hotHeader")
const dessert = document.querySelector(".desHeader")

btnH.addEventListener("click", function() {
    hot.scrollIntoView({ block: "start", behavior: "smooth" });
});
btnD.addEventListener("click", function() {
    dessert.scrollIntoView({ block: "start", behavior: "smooth" });
});

const btn = document.querySelector(".btn")
const vals = document.querySelectorAll(".ingValue")
let inp = document.querySelector(".inp")

btn.addEventListener("click", function(){
    vals.forEach(val=>{
        val.textContent = +val.textContent * inp.value 
    })
})

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault()
   
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var picture = document.getElementById('picture').value
    var message = document.getElementById('message').value
   
    // ту должен быть код для отправки данных на сервер
   
    alert('Сообщение отправлено!');
    this.reset();
  });
