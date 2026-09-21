(function(){
  function $(s,r){return (r||document).querySelector(s);}
  function $all(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}
  var pages = ['home','hidgo','guxo','hotel'];

  function showPage(name, anchor){
    pages.forEach(function(p){
      var el = document.getElementById('page-'+p);
      if(el) el.hidden = (p !== name);
    });
    if(name === 'home' && anchor && anchor !== '#top'){
      requestAnimationFrame(function(){
        var t = document.querySelector(anchor);
        if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
      });
    } else {
      window.scrollTo({top:0, behavior:'smooth'});
    }
  }

  document.addEventListener('click', function(e){
    var caseLink = e.target.closest('[data-case]');
    if(caseLink){ e.preventDefault(); showPage(caseLink.getAttribute('data-case')); return; }
    var homeLink = e.target.closest('[data-home]');
    if(homeLink){ e.preventDefault(); showPage('home', homeLink.getAttribute('href')); return; }
    var navLink = e.target.closest('[data-nav]');
    if(navLink){ e.preventDefault(); showPage('home', navLink.getAttribute('href')); return; }
  });

  var toggle = $('.nav__toggle');
  var links = $('.nav__links');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $all('a', links).forEach(function(a){
      a.addEventListener('click', function(){
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
