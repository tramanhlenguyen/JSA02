const form= document.getElementById("form");
form.addEventListener("submit", function() {
    let i1= document.getElementById("i1").value;
    let i2= document.getElementById("i2").value;
    let i3= document.getElementById("i3").value;
    let i4= document.getElementById("i4").value;
    let i5= document.getElementById("i5").value;
    let i6= document.getElementById("i6").value;
    fetch("https://webhook.site/75373018-bb87-4b58-8d82-e1b9ec62efef"
    + "?i1=" + i1
    + "&i2=" + i2
    + "&i3=" + i3
    + "&i4=" + i4
    + "&i5=" + i5
    + "&i6=" + i6);
    alert("Gửi thông tin thành công" + "\n" + "Vui lòng kiểm tra lại thông tin:" + "\n" + i1 + " " + i2 + " " + i3 + " " + i4 + " " + i5 + " " + i6 + " ")
})
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}