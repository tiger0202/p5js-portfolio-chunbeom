const projects = [
  {
    title: 'Season Palette',
    image: 'images/season-palette-placeholder.jpg',
    description:
      'An interactive color engine translating seasonal moods into generative palettes and animated swatches.',
    interaction: 'Mouse movement + click',
    tags: ['Color Theory', 'Generative', 'Interaction'],
    projectUrl: 'https://example.com/season-palette',
    readMoreUrl: 'https://example.com/season-palette-process',
  },
  {
    title: 'Stained Glass Painter',
    image: 'images/stained-glass-painter-placeholder.jpg',
    description:
      'A digital stained-glass studio where users paint segmented panes with algorithmic texture and light.',
    interaction: 'Draw with mouse / touch',
    tags: ['Drawing', 'Pattern', 'Visual Design'],
    projectUrl: 'https://example.com/stained-glass-painter',
    readMoreUrl: 'https://example.com/stained-glass-painter-process',
  },
  {
    title: 'Elemental Portfolio Portal',
    image: 'images/elemental-portfolio-portal-placeholder.jpg',
    description:
      'A portal interface mapping projects to fire, water, air, and earth through reactive particles and transitions.',
    interaction: 'Hover + click navigation',
    tags: ['UI Experiment', 'Particles', 'Portfolio'],
    projectUrl: 'https://example.com/elemental-portfolio-portal',
    readMoreUrl: 'https://example.com/elemental-portfolio-portal-process',
  },
  {
    title: 'Resonant Genesis',
    image: 'images/resonant-genesis-placeholder.jpg',
    description:
      'A sound-responsive ecosystem where abstract organisms emerge, evolve, and dissolve based on live audio input.',
    interaction: 'Microphone input',
    tags: ['Audio Reactive', 'Generative Life', 'Immersive'],
    projectUrl: 'https://example.com/resonant-genesis',
    readMoreUrl: 'https://example.com/resonant-genesis-process',
  },
  {
    title: 'Sound Mirror: Slime Creature',
    image: 'images/sound-mirror-slime-creature-placeholder.jpg',
    description:
      'A playful slime entity mirrors vocal rhythm and pitch, morphing in shape and elasticity in real time.',
    interaction: 'Voice + keyboard controls',
    tags: ['Character', 'Sound', 'Performance'],
    projectUrl: 'https://example.com/sound-mirror-slime-creature',
    readMoreUrl: 'https://example.com/sound-mirror-slime-creature-process',
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
