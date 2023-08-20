document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".text", {
      strings: ["Gamer", "Coder", "Youtuber"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
  });
});

document.getElementById('burgerButton').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});