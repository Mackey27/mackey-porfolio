// Data
const skillsData = {
  frontend: [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Bootstrap', icon: 'bootstrap' },
  ],
  backend: [
    { name: 'PHP', icon: 'php' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'REST API', icon: 'api' },
    { name: 'MySQL', icon: 'mysql' },
  ],
  tools: [
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
  ],
  deployment: [
    { name: 'Hostinger', icon: 'hostinger' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'InfinityFree', icon: 'infinity' },
  ]
};

const iconSVGs = {
  html: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>`,
  css: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>`,
  js: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>`,
  tailwind: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>`,
  bootstrap: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.528 1.834 1.488 0 .988-.7 1.55-2.172 1.55zm4.452-3.504c-.432-.72-1.084-1.26-1.944-1.632-.804-.36-1.74-.54-2.808-.54H6.72v12.144h3.228v-3.816h1.488c1.068 0 2.004-.18 2.808-.54.864-.372 1.512-.912 1.944-1.632.432-.72.648-1.56.648-2.52 0-.96-.216-1.8-.648-2.52-.432-.72-1.084-1.26-1.944-1.632-.804-.36-1.74-.54-2.808-.54H9.956v2.916h1.814c1.472 0 2.172.562 2.172 1.55 0 .96-.664 1.488-1.834 1.488H9.956v.036h2.152c1.068 0 2.004-.18 2.808-.54.864-.372 1.512-.912 1.944-1.632.432-.72.648-1.56.648-2.52 0-.96-.216-1.8-.648-2.52z"/></svg>`,
  php: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zm-2.595-1.382h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.523-.29-1.047-.29z"/></svg>`,
  laravel: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.015.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.006-.043-.012-.063-.023L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .378 0L9.935 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .378 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033a.3.3 0 0 1 .024.06c.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81 1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505 2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256 1.58.908zm-8.65 9.654 5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/></svg>`,
  api: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  mysql: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.232 1.98.366 3.824.406 5.53zm4.017-4.08c-.378 1-.866 1.535-1.465 1.605-.167.02-.314.015-.44-.015v-.44c.13.02.256.02.38.02.39-.02.69-.22.9-.6.16-.31.27-.63.33-.96h-.01c-.18.26-.43.39-.75.39-.32 0-.58-.12-.77-.36-.19-.24-.29-.56-.29-.96 0-.46.12-.83.36-1.12.24-.29.56-.43.96-.43.4 0 .71.17.93.51.22.34.33.81.33 1.41 0 .55-.08 1.04-.24 1.47zm-.65-1.45c0-.25-.06-.46-.17-.62-.12-.16-.28-.24-.48-.24-.2 0-.36.08-.48.24-.12.16-.18.37-.18.62 0 .27.06.48.18.64.12.16.28.24.48.24.2 0 .36-.08.48-.24.11-.16.17-.37.17-.64zm4.8 1.29h-2.44c.02.41.15.72.39.93.24.21.55.32.94.32.44 0 .83-.12 1.17-.36v.66c-.34.22-.79.33-1.35.33-.56 0-1-.18-1.32-.53-.32-.35-.48-.84-.48-1.47 0-.61.17-1.1.52-1.48.35-.38.78-.57 1.3-.57.52 0 .92.17 1.2.51.28.34.42.81.42 1.41v.25zm-.76-.55c0-.36-.09-.64-.26-.84-.17-.2-.41-.3-.7-.3-.28 0-.52.1-.72.31-.2.21-.32.49-.36.83h2.04zm4.27.87c0 .48-.16.86-.49 1.13-.33.27-.77.41-1.33.41-.56 0-1.01-.11-1.36-.32v-.76c.48.31.95.46 1.39.46.33 0 .58-.06.76-.18.18-.12.27-.29.27-.51 0-.2-.08-.37-.24-.51-.16-.14-.44-.29-.83-.45-.54-.22-.92-.45-1.13-.69-.21-.24-.32-.54-.32-.89 0-.44.16-.8.48-1.07.32-.27.75-.41 1.28-.41.48 0 .91.1 1.29.31l-.27.6c-.36-.18-.7-.27-1.01-.27-.27 0-.48.06-.63.17-.15.11-.23.27-.23.47 0 .16.06.3.17.42.11.12.38.26.8.43.44.18.76.37.96.56.2.19.3.45.3.78zm3.8-.32h-2.44c.02.41.15.72.39.93.24.21.55.32.94.32.44 0 .83-.12 1.17-.36v.66c-.34.22-.79.33-1.35.33-.56 0-1-.18-1.32-.53-.32-.35-.48-.84-.48-1.47 0-.61.17-1.1.52-1.48.35-.38.78-.57 1.3-.57.52 0 .92.17 1.2.51.28.34.42.81.42 1.41v.25zm-.76-.55c0-.36-.09-.64-.26-.84-.17-.2-.41-.3-.7-.3-.28 0-.52.1-.72.31-.2.21-.32.49-.36.83h2.04z"/></svg>`,
  vscode: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>`,
  git: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>`,
  github: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  hostinger: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M8.477 7.594h3.586v8.852H8.477zm4.46 0h3.586v8.852h-3.586zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.19c-5.636 0-10.19-4.554-10.19-10.19S6.364 1.81 12 1.81 22.19 6.364 22.19 12 17.636 22.19 12 22.19z"/></svg>`,
  vercel: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>`,
  infinity: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-5.095-8 0-8z"/><path d="M5.822 8c-5.096 0-5.096 8 0 8 5.095 0 5.095-8 0-8z"/><path d="M5.822 8h6.356"/></svg>`
};

const projectsData = [
  {
    title: 'Visitor Logbook with Face Capture',
    description: 'Smart visitor management system with facial recognition for check-in/check-out tracking.',
    tags: ['Laravel', 'MySQL', 'JavaScript'],
    color: '#0f766e',
    link: '#'
  },
  {
    title: 'SFNHS SSLG Voting System',
    description: 'Secure online voting platform for student government elections with real-time results.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    color: '#ea580c',
    link: '#'
  },
  {
    title: 'Vibe Map',
    description: 'Location-based social platform for discovering events and connecting with nearby communities.',
    tags: ['JavaScript', 'Tailwind', 'REST API'],
    color: '#0369a1',
    link: '#'
  },
  {
    title: 'Barangay Management',
    description: 'Comprehensive system for barangay administration, permits, and resident services management.',
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    color: '#4f46e5',
    link: '#'
  }
];

// Render functions
function renderSkills(category) {
  const container = document.getElementById('skills-container');
  const skills = skillsData[category];

  container.innerHTML = skills.map((skill, index) => `
    <div class="skill-card bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 flex flex-col items-center justify-center text-center reveal reveal-delay-${Math.min(index + 1, 4)}">
      <div class="w-12 h-12 mb-3 flex items-center justify-center text-[var(--fg)]">
        ${iconSVGs[skill.icon]}
      </div>
      <span class="text-sm font-medium">${skill.name}</span>
    </div>
  `).join('');

  observeElements();
}

function renderProjects() {
  const track = document.getElementById('projects-track');
  const dotsContainer = document.getElementById('projects-dots');

  // Render slides
  track.innerHTML = projectsData.map((project, index) => `
    <div class="project-card flex-shrink-0 w-full max-w-md reveal reveal-delay-${Math.min(index + 1, 4)}">
      <div class="p-5">
        <h3 class="font-bold mb-2 text-sm tracking-tight">${project.title}</h3>
        <p class="text-xs text-[var(--fg-muted)] mb-4 leading-relaxed">${project.description}</p>
        <div class="flex flex-wrap gap-1 mb-4">
          ${project.tags.map(tag => `
            <span class="px-2 py-1 text-[10px] font-mono bg-[var(--bg)] rounded border border-[var(--border)]">${tag}</span>
          `).join('')}
        </div>
        <a href="${project.link}" class="inline-flex items-center gap-2 text-xs font-medium hover:underline" style="color: ${project.color}">
          View Project
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </div>
    </div>
  `).join('');

  // Render pagination dots
  dotsContainer.innerHTML = projectsData.map((_, index) => `
    <button
      class="pagination-dot w-2 h-2 rounded-full border border-[var(--fg-muted)] transition-all ${index === 0 ? 'bg-[var(--accent)] border-[var(--accent)] w-8' : 'bg-transparent'}"
      data-slide="${index}"
      aria-label="Go to slide ${index + 1}"
    ></button>
  `).join('');

  // Setup slider
  setupSlider();
}

// Slider state
let currentSlide = 0;

function setupSlider() {
  const track = document.getElementById('projects-track');
  const prevBtn = document.getElementById('projects-prev');
  const nextBtn = document.getElementById('projects-next');
  const dots = document.querySelectorAll('.pagination-dot');

  function goToSlide(index) {
    currentSlide = index;
    const offset = -100 * currentSlide;
    track.style.transform = `translateX(${offset}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('bg-[var(--accent)]', 'border-[var(--accent)]', 'w-8');
        dot.classList.remove('bg-transparent');
      } else {
        dot.classList.remove('bg-[var(--accent)]', 'border-[var(--accent)]', 'w-8');
        dot.classList.add('bg-transparent');
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide === 0 ? projectsData.length - 1 : currentSlide - 1;
    goToSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide === projectsData.length - 1 ? 0 : currentSlide + 1;
    goToSlide(currentSlide);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.slide));
    });
  });
}

// Tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSkills(btn.dataset.tab);
  });
});

// Intersection Observer
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Message Sent';
    btn.style.background = 'var(--accent)';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
      this.reset();
    }, 2000);
  }, 1500);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderSkills('frontend');
  renderProjects();
  observeElements();
});
