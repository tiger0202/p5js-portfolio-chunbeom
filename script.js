const projects = [
  {
    title: 'Season Palette',
    image: 'season-palette.png',
    description:
      'A drawing tool that changes its brush style and color mood based on four seasonal modes: Spring, Summer, Autumn, and Winter.',
    interaction: 'Mouse drag + season buttons / number keys',
    tags: ['Painting', 'Color', 'Season'],
    projectUrl: '#',
    readMoreUrl: '#',
  },
  {
    title: 'Stained Glass Painter',
    image: 'stained-glass-painter.png',
    description:
      'A stained-glass-inspired painting tool where users create colorful irregular shapes with glowing light effects.',
    interaction: 'Mouse drag, Light button, C to clear, S to save',
    tags: ['Drawing', 'Glass', 'Light'],
    projectUrl: 'https://editor.p5js.org/tiger51555160/full/ayjUrn1q8',
    readMoreUrl: 'https://editor.p5js.org/tiger51555160/full/ayjUrn1q8',
  },
  {
    title: 'Elemental Portfolio Portal',
    image: 'elemental-portfolio-portal.png',
    description:
      'A fantasy-style interactive landing page where users awaken Fire, Water, Air, and Earth to open a portfolio portal.',
    interaction: 'Activate four elements through interaction',
    tags: ['Portfolio', 'Element', 'Portal'],
    projectUrl: 'https://editor.p5js.org/tiger51555160/full/oC7d0U93k',
    readMoreUrl: 'https://editor.p5js.org/tiger51555160/full/oC7d0U93k',
  },
  {
    title: 'Resonant Genesis',
    image: 'resonant-genesis.png',
    description:
      'A microphone-based generative artwork where voice and sound create a galaxy-like particle environment.',
    interaction: 'Microphone input, short sounds, humming',
    tags: ['Sound', 'Mic', 'Particles'],
    projectUrl: 'https://editor.p5js.org/tiger51555160/full/RRoVevAnL',
    readMoreUrl: 'https://editor.p5js.org/tiger51555160/full/RRoVevAnL',
  },
  {
    title: 'Sound Mirror: Slime Creature',
    image: 'sound-mirror-slime-creature.png',
    description:
      'A sound-responsive slime creature that emotionally reacts to the user’s voice through volume, pitch, color, and movement.',
    interaction: 'Microphone input, voice memory, playback',
    tags: ['Sound', 'Emotion', 'Character'],
    projectUrl: 'https://editor.p5js.org/tiger51555160/full/0RAWYCtER',
    readMoreUrl: 'https://editor.p5js.org/tiger51555160/full/0RAWYCtER',
  },
];

const projectGrid = document.getElementById('project-grid');
const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

projects.forEach((project) => {
  const card = document.createElement('article');
  card.className = 'project-card';

  const tagsMarkup = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');

  card.innerHTML = `
    <img class="project-image" src="${project.image}" alt="Placeholder screenshot for ${project.title}" />
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p class="meta"><strong>Interaction:</strong> ${project.interaction}</p>
      <div class="tag-list">${tagsMarkup}</div>
      <div class="card-actions">
        <a class="button button-primary" href="${project.projectUrl}" target="_blank" rel="noopener noreferrer">View Project</a>
        <a class="button button-secondary" href="${project.readMoreUrl}" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  `;

  projectGrid.appendChild(card);
});

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open');
});

document.getElementById('year').textContent = new Date().getFullYear();
