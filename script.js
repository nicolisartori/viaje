  window.addEventListener('scroll', function(){
    var menu = document.querySelector('nav li#l1');
    menu.classList.toggle('ativo', window.scrollY > 0);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector('nav li#l2');
    menu.classList.toggle('ativo', window.scrollY > 0);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector('nav li#l3');
    menu.classList.toggle('ativo', window.scrollY > 0);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector('.barramenu');
    menu.classList.toggle('ativo', window.scrollY > 0);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector('h4 a');
    menu.classList.toggle('ativo', window.scrollY > 0);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector('.logo');
    menu.classList.toggle('ativo', window.scrollY > 0);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector('nav img');
    menu.classList.toggle('ativo', window.scrollY > 0);
  })




