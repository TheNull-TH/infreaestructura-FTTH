const data = {
  olt: {
    title: 'OLT (Optical Line Terminal)',
    badge: 'Central',
    layout: 'image-top',
    summary: 'Es el punto central de la red de acceso. Aquí converge la señal que se distribuye a múltiples clientes a través de fibra óptica.',
    detailImage: 'Images/Datacenter.jpg',
    features: [
      'Recibe y gestiona la señal de servicio para la red FTTH.',
      'Es el origen del enlace entre la red troncal y la distribución final.',
      'Permite conectar grandes volúmenes de usuarios y controlar la red de forma centralizada.'
    ],
    downloads: [
      { label: '📄 Descarga de referencia', url: 'https://www.google.com' }
    ]
  },
  odf: {
    title: 'ODF (Optical Distribution Frame)',
    badge: 'Distribución',
    layout: 'image-top',
    summary: 'El ODF organiza y protege las conexiones de fibra para facilitar la interconexión entre la zona central y la red de acceso.',
    detailImage: 'Images/odf.jpg',
    features: [
      'Sirve como punto de empalme y ordenamiento de fibras.',
      'Facilita el mantenimiento, la trazabilidad y la administración del cableado.',
      'Asegura una distribución ordenada y segura de los enlaces ópticos.'
    ],
    downloads: [
      { label: '📄 Hoja técnica', url: 'https://www.google.com' }
    ]
  },
  feeder: {
    title: 'Feeder Fiber (Cable principal de alimentación)',
    badge: 'Troncal',
    layout: 'image-top',
    summary: 'Es el cable principal que lleva la fibra desde la zona central hasta los puntos de distribución y empalme de la red.',
    detailImage: 'Images/fiber_opctical.jpg',
    features: [
      'Transporta la señal de forma longitudinal por la red de acceso.',
      'Conecta la zona central con los puntos de ramificación del servicio.',
      'Es la base de la infraestructura que soporta la distribución final.'
    ],
    downloads: [
      { label: '📄 Referencia del cable', url: 'https://www.google.com' }
    ]
  },
  odb: {
    title: 'ODB (Optical Distribution Box)',
    badge: 'Caja de distribución',
    layout: 'image-top',
    summary: 'El ODB es la caja de distribución donde se bifurcan y ordenan las fibras para alimentar a varios puntos de servicio.',
    detailImage: 'Images/armario_distribucion.jpg',
    features: [
      'Permite organizar la ramificación de la fibra hacia distintas zonas.',
      'Es un punto de acceso para mantenimiento y distribución local.',
      'Asegura la continuidad del servicio en la red de acceso.'
    ],
    downloads: [
      { label: '📄 Descripción de caja', url: 'https://www.google.com' }
    ]
  },
  fosc: {
    title: 'FOSC (Fiber Optic Splice Closure)',
    badge: 'Empalme',
    layout: 'image-top',
    summary: 'El cierre de empalme protege las conexiones y fusiones de fibra, manteniendo la continuidad y la protección física del enlace.',
    detailImage: 'Images/FOSC.png',
    features: [
      'Protege los empalmes de fibra contra humedad, polvo y manipulaciones.',
      'Permite la conexión y distribución segura entre tramos de red.',
      'Es clave para la sostenibilidad y el mantenimiento de la infraestructura.'
    ],
    downloads: [
      { label: '📄 Documentación técnica', url: 'https://www.google.com' }
    ]
  },
  splitter: {
    title: 'Gabinete Splitter (Splitter óptico)',
    badge: 'División',
    layout: 'image-top',
    summary: 'El splitter divide la señal óptica para repartirla entre varios usuarios sin necesidad de energía activa.',
    detailImage: 'Images/Gabinete Splitter.jpg',
    features: [
      'Distribuye la señal desde una fibra de entrada hacia múltiples salidas.',
      'Reduce la cantidad de infraestructura necesaria en la última milla.',
      'Es fundamental para la arquitectura FTTH y la cobertura masiva.'
    ],
    downloads: [
      { label: '📄 Especificación del splitter', url: 'https://www.google.com' }
    ]
  },
  ont: {
    title: 'ONU / ONT (Optical Network Unit / Terminal)',
    badge: 'Usuario',
    layout: 'image-top',
    summary: 'Es el equipo terminal del usuario que convierte la señal óptica en servicios de datos, voz y conectividad local.',
    detailImage: 'Images/ONU_ONT.jpg',
    features: [
      'Se conecta al punto final de la red para entregar servicio al usuario.',
      'Permite acceso a internet, telefonía y servicios multimedia.',
      'Es el elemento que cierra la ruta de fibra hasta el hogar o edificio.'
    ],
    downloads: [
      { label: '📄 Manual de instalación', url: 'https://www.google.com' }
    ]
  }
};

const mapContainer = document.getElementById('mapContainer');
const infoCard = document.getElementById('infoCard');
const titleEl = document.getElementById('cardTitle');
const badgeEl = document.getElementById('cardBadge');
const bodyEl = document.getElementById('cardBody');
const zones = [...document.querySelectorAll('.click-zone')];
const referenceImage = document.getElementById('referenceImage');
const referenceTitle = document.getElementById('refTitle');
const referenceImageSource = document.getElementById('refImgSrc');
const themeToggle = document.getElementById('themeToggle');

function positionCard(zone) {
  const containerRect = mapContainer.getBoundingClientRect();
  const zoneRect = zone.getBoundingClientRect();
  const cardWidth = Math.min(420, containerRect.width * 0.42);
  const cardHeight = Math.min(520, containerRect.height * 0.72);
  const zoneLeft = zoneRect.left - containerRect.left;
  const zoneRight = zoneRect.right - containerRect.left;
  const zoneTop = zoneRect.top - containerRect.top;
  const zoneBottom = zoneRect.bottom - containerRect.top;
  const centerX = zoneLeft + (zoneRect.width / 2);
  const centerY = zoneTop + (zoneRect.height / 2);
  const maxLeft = Math.max(10, containerRect.width - cardWidth - 10);
  const maxTop = Math.max(10, containerRect.height - cardHeight - 10);

  let left;
  let top;

  if (containerRect.width - zoneRight >= cardWidth + 20) {
    left = zoneRight + 12;
    top = Math.min(maxTop, Math.max(10, centerY - cardHeight / 2));
  } else if (zoneLeft >= cardWidth + 20) {
    left = zoneLeft - cardWidth - 12;
    top = Math.min(maxTop, Math.max(10, centerY - cardHeight / 2));
  } else {
    left = Math.min(maxLeft, Math.max(10, centerX - cardWidth / 2));
    if (zoneTop >= cardHeight + 20) {
      top = zoneTop - cardHeight - 12;
    } else if (containerRect.height - zoneBottom >= cardHeight + 20) {
      top = zoneBottom + 12;
    } else {
      top = Math.min(maxTop, Math.max(10, centerY - cardHeight / 2));
    }
  }

  infoCard.style.left = `${left}px`;
  infoCard.style.top = `${top}px`;
  infoCard.style.width = `${cardWidth}px`;
  infoCard.style.maxHeight = `${cardHeight}px`;
}

function renderCard(key) {
  const component = data[key];
  if (!component) return;

  titleEl.textContent = component.title;
  badgeEl.textContent = component.badge;

  const layoutClass = 'card-layout image-top';
  const visualHtml = component.detailImage
    ? `<div class="card-visual"><img src="${component.detailImage}" alt="${component.title}"></div>`
    : '';

  const bulletsHtml = component.features
    ? `<ul>${component.features.map(item => `<li>${item}</li>`).join('')}</ul>`
    : '';

  const downloadsHtml = component.downloads && component.downloads.length
    ? `<div class="download-list">${component.downloads.map(item => 
        `<a class="download-item" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>`).join('')}</div>`
    : '';

  bodyEl.innerHTML = `
    <div class="${layoutClass}">
      ${visualHtml}
      <div class="card-copy">
        <p class="card-summary">${component.summary}</p>
        <div class="tech-grid">
          <div><span>Función</span><strong>${component.badge}</strong></div>
          <div><span>Tipo</span><strong>${component.title}</strong></div>
        </div>
        ${bulletsHtml}
        ${downloadsHtml}
      </div>
    </div>
  `;
}

function showReference(key) {
  const component = data[key];
  if (!component || !referenceImage || !referenceImageSource) return;

  referenceTitle.textContent = component.title;
  referenceImageSource.src = component.detailImage;
  referenceImageSource.alt = component.title;
  referenceImage.style.display = 'block';
}

function showInfo(event, key) {
  const zone = event.currentTarget;
  zones.forEach(item => item.classList.toggle('active', item === zone));
  renderCard(key);
  showReference(key);
  infoCard.style.display = 'block';
  positionCard(zone);
}

function hideInfo(event) {
  const zone = event.currentTarget;
  zone.classList.remove('active');
  infoCard.style.display = 'none';
  if (referenceImage) referenceImage.style.display = 'none';
}

zones.forEach(zone => {
  const key = zone.dataset.key;

  zone.addEventListener('mouseenter', event => showInfo(event, key));
  zone.addEventListener('mouseleave', hideInfo);
  zone.addEventListener('focus', event => showInfo(event, key));
  zone.addEventListener('blur', hideInfo);
});

document.querySelector('.close-card').addEventListener('click', () => {
  infoCard.style.display = 'none';
  if (referenceImage) referenceImage.style.display = 'none';
  zones.forEach(zone => zone.classList.remove('active'));
});

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const darkThemeEnabled = document.body.classList.toggle('dark-theme');
    themeToggle.setAttribute('aria-pressed', String(darkThemeEnabled));
    const label = [...themeToggle.childNodes].reverse().find(node => node.nodeType === Node.TEXT_NODE);
    if (label) label.textContent = darkThemeEnabled ? ' Modo Día' : ' Modo Noche';
  });
}
