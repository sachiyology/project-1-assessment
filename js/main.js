window.addEventListener('DOMContentLoaded', ()=>{
  const downbutton = document.querySelector('#down');
  const upbutton = document.querySelector('#up');
  const text = document.querySelector('#textbox');
  const counter = document.querySelector('#counter');
  downbutton.addEventListener('click', (event) => {
    counter.textContent=parseInt(counter.textContent)-parseInt(text.value);
  });
  upbutton.addEventListener('click', (event) => {
    counter.textContent=parseInt(counter.textContent)+parseInt(text.value);;
  });
});
