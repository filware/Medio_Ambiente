const lista = document.getElementById('listaB');
const all = document.querySelector('body');
const todo = document.getElementById('cuerpo');

document.getElementById('ver').addEventListener('mousemove', () => {
  lista.style.display = 'block';
  todo.style.opacity = '20%';
  all.style.overflowY = 'hidden';
});
document.getElementById('verA').addEventListener('mousemove', () => {
  lista.style.display = 'block';
  todo.style.opacity = '20%';
  all.style.overflowY = 'hidden';
});
document.getElementById('verA').addEventListener('mouseout', () => {
  lista.style.display = 'none';
  todo.style.opacity = '100%';
  all.style.overflowY = 'auto';
});
lista.addEventListener('mousemove', () => {
  lista.style.display = 'block';
  todo.style.opacity = '20%';
  all.style.overflowY = 'hidden';
});
lista.addEventListener('mouseout', () => {
  lista.style.display = 'none';
  todo.style.opacity = '100%';
  all.style.overflowY = 'auto';
});

const envioA = document.getElementById('envioA');
envioA.addEventListener('click', () => {
  lista.style.display = 'none';
  let cont = 0;
  const tiempo = setTimeout(() => {
    cont += 1;
    const iframeContent = document.getElementById('iframeContent');
    iframeContent.src = 'https://www.youtube.com/embed/M_aeK_CXpjc';
    iframeContent.style.display = 'block';
    all.style.overflowY = 'hidden';
    todo.style.opacity = '20%';
    if (cont === 1) {
      clearTimeout(tiempo);
    }
  }, 1000);
});
const envioB = document.getElementById('envioB');
envioB.addEventListener('click', () => {
  lista.style.display = 'none';
  let cont = 0;
  const tiempo = setTimeout(() => {
    cont += 1;
    const iframeContent = document.getElementById('iframeContent');
    iframeContent.src = 'https://www.youtube.com/embed/M3SpvL8mZAk';
    iframeContent.style.display = 'block';
    all.style.overflowY = 'hidden';
    todo.style.opacity = '20%';
    if (cont === 1) {
      clearTimeout(tiempo);
    }
  }, 1000);
});
const envioC = document.getElementById('envioC');
envioC.addEventListener('click', () => {
  lista.style.display = 'none';
  let cont = 0;
  const tiempo = setTimeout(() => {
    cont += 1;
    const iframeContent = document.getElementById('iframeContent');
    iframeContent.src = 'https://www.youtube.com/embed/M_aeK_CXpjc';
    iframeContent.style.display = 'block';
    all.style.overflowY = 'hidden';
    todo.style.opacity = '20%';
    if (cont === 1) {
      clearTimeout(tiempo);
    }
  }, 1000);
});
const envioD = document.getElementById('envioD');
envioD.addEventListener('click', () => {
  lista.style.display = 'none';
  let cont = 0;
  const tiempo = setTimeout(() => {
    cont += 1;
    const iframeContent = document.getElementById('iframeContent');
    iframeContent.src = 'https://www.youtube.com/embed/bR2X6sqsAiY';
    iframeContent.style.display = 'block';
    all.style.overflowY = 'hidden';
    todo.style.opacity = '20%';
    if (cont === 1) {
      clearTimeout(tiempo);
    }
  }, 1000);
});
const envioE = document.getElementById('envioE');
envioE.addEventListener('click', () => {
  lista.style.display = 'none';
  let cont = 0;
  const tiempo = setTimeout(() => {
    cont += 1;
    const iframeContent = document.getElementById('iframeContent');
    iframeContent.src = 'https://www.youtube.com/embed/zeLIGu8l9OY';
    iframeContent.style.display = 'block';
    all.style.overflowY = 'hidden';
    todo.style.opacity = '20%';
    if (cont === 1) {
      clearTimeout(tiempo);
    }
  }, 1000);
});
//
todo.addEventListener('click', () => {
  iframeContent.style.display = 'none';
  all.style.overflowY = 'scroll';
  todo.style.opacity = '100%';
});
//
const documento = document.getElementById('listAlter');
function mouse() {
  const ventanaCap = window.scrollY;
  const ventanaCom = screen.height;
  if (ventanaCom / 2 < ventanaCap) {
    documento.style = `
        position:fixed;
        top: 15%;
        `;
  } else {
    documento.style = `
        position:absolute;
        top: 75%;
        `;
  }
}
/*imagenesScreen*/
const imagenesScrren = document.getElementById('imagenesScrren');
const imagenesSelect = document.getElementById('imagenes').children;
const salir = document.getElementById('salir');
salir.addEventListener('click', () => {
  imagenesScrren.style.display = 'none';
});
for (let a = 0; a < imagenesSelect.length; a++) {
  imagenesSelect[a].addEventListener('click', b => {
    imagenesScrren.style.display = 'block';
    const imgA = document.createElement('img');
    imgA.id = 'imgScreen';
    imgA.src = `${b.target.src}`;
    imagenesScrren.appendChild(imgA);
  });
}
//
const verImagenes = document.getElementById('cell');
const Imagenes = document.getElementById('imagenesA');
function saber(dato) {
  Imagenes.style.display = `${dato}`;
}
window.onresize = () => {
  if (innerWidth < 698) {
    verImagenes.style.display = 'block';
    verImagenes.addEventListener('mousemove', () => {
      verImagenes.style.display = 'none';
      saber('block');
    });
    Imagenes.addEventListener('mouseleave', () => {
      verImagenes.style.display = 'block';
      saber('none');
    });
  } else {
    verImagenes.style.display = 'none';
  }
};
if (window.innerWidth < 698) {
  verImagenes.style.display = 'block';
  verImagenes.addEventListener("mousemove", () => {
    saber('block');
  });
  Imagenes.addEventListener('mouseleave', () => {
    verImagenes.style.display = 'block';
    saber('none');
  });
} else {
  verImagenes.style.display = 'none';
}