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
  const left = Math.random() * (cardWidth - 60) + 10;
  const piece = createPuzzlePiece(src, left, cardHeight);
  card.appendChild(piece);
  const duration = 2000 + Math.random() * 2000;
  piece.animate([
    { top: '-60px', opacity: 0.85 },
    { top: cardHeight - 40 + 'px', opacity: 0.85 }
  ], {
    duration,
    easing: 'ease-in',
    fill: 'forwards'
  });
  setTimeout(() => {
    if (piece.parentNode) piece.parentNode.removeChild(piece);
  }, duration + 100);
}

function startPuzzleRain() {
  const card = document.getElementById('institucional');
  if (!card) return;
  setInterval(() => {
    dropPuzzlePiece(card);
  }, 500);
}

document.addEventListener('DOMContentLoaded', startPuzzleRain);
