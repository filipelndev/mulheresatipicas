// Animação contínua de peças de quebra-cabeça caindo pelo card institucional
const puzzleImages = [
  'Fotos/qc1.png',
  'Fotos/qc2.png',
  'Fotos/qc3.png',
  'Fotos/qc4.png',
  'Fotos/qc5.png',
  'Fotos/qc6.png',
  'Fotos/qc7.png'
];

function createPuzzlePiece(src, left, cardHeight) {
  const piece = document.createElement('img');
  piece.src = src;
  piece.className = 'puzzle-piece falling';
  piece.style.left = left + 'px';
  piece.style.top = '-60px';
  piece.style.opacity = '0.85';
  piece.style.width = '48px';
  piece.style.height = '48px';
  piece.style.position = 'absolute';
  piece.style.zIndex = '1';
  return piece;
}

function dropPuzzlePiece(card) {
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  const src = puzzleImages[Math.floor(Math.random() * puzzleImages.length)];

  // posição horizontal aleatória, mas garantindo que não caia muito grudado nas bordas
  const left = Math.random() * (cardWidth - 80) + 20;

  const piece = createPuzzlePiece(src, left, cardHeight);
  card.appendChild(piece);

  // duração variável entre 2.5s e 5s
  const duration = 1000 + Math.random() * 1500;

  piece.animate([
    { top: '-60px', opacity: 0.9 },
    { top: cardHeight - 40 + 'px', opacity: 0.9 }
  ], {
    duration,
    easing: 'ease-in',
    fill: 'forwards'
  });

  // remover depois de cair
  setTimeout(() => {
    if (piece.parentNode) piece.parentNode.removeChild(piece);
  }, duration + 200);
}

function startPuzzleRain() {
  const card = document.getElementById('institucional');
  if (!card) return;

  function scheduleNextDrop() {
    // tempo aleatório entre 600ms e 1500ms
    const delay = 200 + Math.random() * 900;

    setTimeout(() => {
      dropPuzzlePiece(card);
      scheduleNextDrop();
    }, delay);
  }

  scheduleNextDrop();
}

document.addEventListener('DOMContentLoaded', startPuzzleRain);
