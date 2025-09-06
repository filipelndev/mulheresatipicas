function startAuthorCarousels() {
  const images = document.querySelectorAll('.autora img');

  images.forEach(img => {
    const imgListAttr = img.getAttribute('data-images');
    if (!imgListAttr) return; // ignora se não houver data-images

    const imgList = JSON.parse(imgListAttr);
    let index = 0;
    let intervalId;

    function startCarousel() {
      intervalId = setInterval(() => {
        index = (index + 1) % imgList.length;

        // efeito fade suave
        img.style.opacity = 0;
        setTimeout(() => {
          img.src = imgList[index];
          img.style.opacity = 1;
        }, 500);

      }, 4000); // troca a cada 4s
    }

    function stopCarousel() {
      clearInterval(intervalId);
    }

    // inicia
    startCarousel();

    // pausa ao passar o mouse
    img.addEventListener('mouseenter', stopCarousel);
    img.addEventListener('mouseleave', startCarousel);
  });
}

document.addEventListener('DOMContentLoaded', startAuthorCarousels);
