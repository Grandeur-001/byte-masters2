import * as THREE from 'three';

export function createFloatingPapers() {
  const container = document.getElementById('floating-papers');
  if (!container) return;

  const paperCount = 6;

  for (let i = 0; i < paperCount; i++) {
    const paper = document.createElement('div');
    paper.className = 'paper absolute flex items-center justify-center transition-all border border-[var(--border-gray)] backdrop-blur-[4px] rounded-[0.5rem] w-[4rem] h-[5rem] bg-[rgba(255, 255, 255, 0.05)]';

    paper.innerHTML = `
      <svg class="paper-icon w-[2rem] h-[2rem] text-[##ffa82665" style="color: #ffa82665; transition: all 0.3s ease-in;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
    `;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    paper.style.left = `${Math.random() * windowWidth}px`;
    paper.style.top = `${Math.random() * windowHeight}px`;

    container.appendChild(paper);

    animatePaper(paper, windowWidth, windowHeight);
  }
}

function animatePaper(paper, windowWidth, windowHeight) {
  const positions = Array.from({ length: 3 }).map(() => ({
    x: Math.random() * windowWidth,
    y: Math.random() * windowHeight,
    rotation: Math.random() * 360,
  }));

  const duration = 20000 + Math.random() * 10000;
  let startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const positionProgress = (elapsed % (duration / 3)) / (duration / 3);
    const currentIndex = Math.floor((elapsed % duration) / (duration / 3));
    const nextIndex = (currentIndex + 1) % 3;

    const currentPos = positions[currentIndex];
    const nextPos = positions[nextIndex];

    const x = currentPos.x + (nextPos.x - currentPos.x) * positionProgress;
    const y = currentPos.y + (nextPos.y - currentPos.y) * positionProgress;
    const rotation = currentPos.rotation + (nextPos.rotation - currentPos.rotation) * positionProgress;

    paper.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

export function initParticles() {
  const container = document.getElementById('particles-canvas');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    sizes[i] = Math.random() * 0.3 + 0.1;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.2,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const pos = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += mouseX * 0.1;
      pos[i * 3 + 1] += mouseY * 0.1;
    }
    geometry.attributes.position.needsUpdate = true;
  });

  function animate() {
    requestAnimationFrame(animate);

    particles.rotation.x += 0.0009 + mouseY * 0.02;
    particles.rotation.y += 0.0009 + mouseX * 0.02;

    const pos = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += Math.sin(i + Date.now() * 0.0001) * 0.01;
      pos[i * 3 + 1] += Math.cos(i + Date.now() * 0.0001) * 0.01;
    }

    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
