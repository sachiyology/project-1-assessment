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


window.addEventListener('load',()=>{  // index.html読込時

    const elems = document.querySelectorAll('[hovercolor]');  // hovercolorという属性を持つ要素すべて

    elems.forEach((e)=>{  // 上記で指定した要素それぞれ(=e)について

        e.addEventListener('mouseover',()=>{  // ホバー時
            e.style.color = e.getAttribute('hovercolor');
            // eのテキスト色 ＝ eのhovercolorの属性値
        });

        e.addEventListener('mouseout',()=>{  // ホバー解除時
            e.style.color = "";  // 初期値に戻す（CSSで指定したもの）
        });

    });
});
