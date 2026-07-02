// ── Translations ──
const t = {
  en: {
    'nav.about':    'About',
    'nav.stack':    'Stack',
    'nav.work':     'Work',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',
    'hero.greeting': "Hello, I'm",
    'hero.desc':    'Java backend developer building enterprise microservices at Diasoft — distributed systems, event-driven architecture, and public procurement platforms for government clients.',
    'hero.cta1':    'See my work',
    'hero.cta2':    'Get in touch',
    'about.title':  'About <span class="accent">Me</span>',
    'about.p1':     "I'm a backend developer specialising in <strong>Java microservices</strong> on top of the Spring ecosystem. At Diasoft I work on a suite of services that power public procurement workflows for Russian government agencies — from purchase requests all the way through contract execution.",
    'about.p2':     'Outside of work I automate my daily life with <strong>Telegram bots</strong>, occasionally hack together <strong>Minecraft plugins in Kotlin</strong>, and wrote my university thesis on <strong>real-time snow physics</strong> (SPH + MPM solvers, Unity, GPU compute shaders).',
    'about.stat1':  'Microservices shipped',
    'about.stat2':  'Years in Java',
    'about.stat3':  'Tabs open rn',
    'stack.title':  'Tech <span class="accent">Stack</span>',
    'stack.g1':     'Backend',
    'stack.g2':     'Data & Messaging',
    'stack.g3':     'Infrastructure',
    'stack.g4':     'Also',
    'work.title':   'Work <span class="accent">Experience</span>',
    'work.desc':    'Building and maintaining enterprise microservices for the <strong>qArcher</strong> platform — a suite of services powering public procurement for government clients. Each service owns its full vertical: REST API, Kafka events, PostgreSQL schema, Liquibase migrations, autotests, and CI/CD pipeline.',
    'w1.title': 'Purchase Order Lifecycle',
    'w1.desc':  'End-to-end management of purchase orders through a finite state machine — from creation and approval to execution and archival.',
    'w2.title': 'Purchase Request Management',
    'w2.desc':  'Creation, validation, and routing of procurement requests across departments, with approval workflows and audit trail.',
    'w3.title': 'Data Catalog',
    'w3.desc':  'Enterprise metadata registry for data assets — datasets, schemas, lineage. MapStruct for mapping, Liquibase for schema versioning.',
    'w4.title': 'Dataflows Engine',
    'w4.desc':  'Streaming data model service with an in-memory processing engine for high-throughput event-driven data pipelines.',
    'w5.title': 'Process Orchestration',
    'w5.desc':  'Business process orchestration on Camunda BPM — BPMN workflows, DMN rules, and Kerberos-authenticated REST integration.',
    'w6.title': 'Analytics Platform',
    'w6.desc':  'Self-service analytics: Apache Superset dashboards backed by DuckDB for fast analytical queries over procurement data.',
    'projects.title': 'Personal <span class="accent">Projects</span>',
    'p1.title': 'Reminder Bot',
    'p1.desc':  'Telegram bot for household task management with a Mini App scheduler, snooze buttons, and automatic re-ping logic.',
    'p2.title': 'Snow Physics Simulation',
    'p2.desc':  'University thesis: real-time avalanche simulation using SPH fluid dynamics and MPM material point method on GPU compute shaders.',
    'p3.title': 'MiniGames API',
    'p3.desc':  'Framework library for Minecraft Paper plugins: player queue, team balancing, result persistence, and Brigadier command integration.',
    'p4.title': 'Splatoon Mini-Game',
    'p4.desc':  '"Paint the world" team arena game for Minecraft. Integrated with MiniGames API, dynamic arena cloning via Multiverse-Core.',
    'contact.title': 'Get in <span class="accent">Touch</span>',
    'contact.lead':  'Open to interesting backend opportunities, tech conversations, or collaboration on side projects.',
    'card.hint': 'Click for details →',
    'footer':    'Built with ☕ by Artem Balakin · <a href="https://github.com/ArtemBalakin/ArtemBalakin.github.io" target="_blank" rel="noopener">source</a>',
  },
  ru: {
    'nav.about':    'Обо мне',
    'nav.stack':    'Стек',
    'nav.work':     'Опыт',
    'nav.projects': 'Проекты',
    'nav.contact':  'Контакты',
    'hero.greeting': 'Привет, я',
    'hero.desc':    'Java backend-разработчик, создающий enterprise-микросервисы в Diasoft — распределённые системы, событийная архитектура и платформы для государственных закупок.',
    'hero.cta1':    'Мои проекты',
    'hero.cta2':    'Написать мне',
    'about.title':  'Обо <span class="accent">мне</span>',
    'about.p1':     'Backend-разработчик со специализацией на <strong>Java-микросервисах</strong> на Spring. В Diasoft работаю над набором сервисов для государственных закупок — от заявок до исполнения контрактов.',
    'about.p2':     'В свободное время автоматизирую быт <strong>Telegram-ботами</strong>, пишу <strong>плагины для Minecraft на Kotlin</strong> и написал дипломную работу по <strong>симуляции физики снега</strong> (SPH + MPM, Unity, GPU compute shaders).',
    'about.stat1':  'Микросервисов в проде',
    'about.stat2':  'Лет на Java',
    'about.stat3':  'Вкладок открыто',
    'stack.title':  'Технический <span class="accent">стек</span>',
    'stack.g1':     'Backend',
    'stack.g2':     'Данные и очереди',
    'stack.g3':     'Инфраструктура',
    'stack.g4':     'Также',
    'work.title':   'Опыт <span class="accent">работы</span>',
    'work.desc':    'Разработка и поддержка enterprise-микросервисов платформы <strong>qArcher</strong> — набор сервисов для государственных закупок. Каждый сервис — полный вертикальный срез: REST API, Kafka-события, схема PostgreSQL, миграции Liquibase, автотесты и CI/CD.',
    'w1.title': 'Управление заказами на закупку',
    'w1.desc':  'Полный жизненный цикл заказов через конечный автомат — от создания и согласования до исполнения и архивации.',
    'w2.title': 'Заявки на закупку',
    'w2.desc':  'Создание, валидация и маршрутизация заявок по подразделениям с журналом согласований.',
    'w3.title': 'Каталог данных',
    'w3.desc':  'Корпоративный реестр метаданных: датасеты, схемы, линейность. MapStruct для маппинга, Liquibase для версионирования.',
    'w4.title': 'Потоки данных',
    'w4.desc':  'Сервис потоковой модели данных с in-memory движком для высокопроизводительных событийных пайплайнов.',
    'w5.title': 'Оркестрация процессов',
    'w5.desc':  'Система оркестрации бизнес-процессов на Camunda BPM — BPMN-процессы, DMN-правила, Kerberos-аутентификация.',
    'w6.title': 'Аналитическая платформа',
    'w6.desc':  'Self-service аналитика: Apache Superset с DuckDB для быстрых аналитических запросов по данным закупок.',
    'projects.title': 'Личные <span class="accent">проекты</span>',
    'p1.title': 'Reminder Bot',
    'p1.desc':  'Telegram-бот для домашних дел с Mini App для расписания, кнопками отложить и автоматическим перепингом.',
    'p2.title': 'Симуляция физики снега',
    'p2.desc':  'Дипломная работа: симуляция лавин в реальном времени методами SPH (гидродинамика) и MPM (материальные точки) на GPU.',
    'p3.title': 'MiniGames API',
    'p3.desc':  'Библиотека-фреймворк для Paper-плагинов Minecraft: очередь игроков, балансировка команд, сохранение результатов, Brigadier-команды.',
    'p4.title': 'Мини-игра Splatoon',
    'p4.desc':  'Командная арена "закрась мир" для Minecraft. MiniGames API, динамическое клонирование арен через Multiverse-Core.',
    'contact.title': 'Связаться <span class="accent">со мной</span>',
    'contact.lead':  'Открыт к интересным backend-проектам, техническим беседам или совместным пет-проектам.',
    'card.hint': 'Нажмите для деталей →',
    'footer':    'Сделано с ☕ Артёмом Балакиным · <a href="https://github.com/ArtemBalakin/ArtemBalakin.github.io" target="_blank" rel="noopener">исходники</a>',
  }
};

// ── Modal content ──
const modals = {
  en: {
    'purchase-order': { icon:'🛒', title:'Purchase Order Lifecycle',
      body:`<p>Full lifecycle management of purchase orders within the government procurement platform. Built as an event-driven microservice with a <strong>finite state machine</strong> controlling order states.</p><h4>Key features</h4><ul><li>FSM-based order states: draft → approved → executed → archived</li><li>Async event publishing via <strong>Kafka</strong> on each state transition</li><li>REST API with OpenAPI spec and qArcher codegen</li><li>PostgreSQL persistence with Liquibase migrations</li><li>Groovy-based autotests in CI/CD pipeline</li></ul>`,
      tags:['Java 21','Spring Boot','Kafka','PostgreSQL','Liquibase','Jenkins'] },
    'purchase-request': { icon:'📋', title:'Purchase Request Management',
      body:`<p>Service for managing procurement requests from creation through department routing to final approval. Handles complex validation rules and cross-department workflows.</p><h4>Key features</h4><ul><li>Multi-step approval workflow with configurable routing</li><li>Validation rules engine for request compliance</li><li>Integration with purchase order service via Kafka events</li><li>Full audit trail and version history</li></ul>`,
      tags:['Java 21','Spring Boot','Spring Data JPA','Kafka','PostgreSQL'] },
    'data-catalog': { icon:'🗂️', title:'Data Catalog',
      body:`<p>Enterprise metadata registry providing a centralised catalog of data assets. Tracks datasets, schemas, ownership, and lineage.</p><h4>Key features</h4><ul><li>Metadata CRUD with hierarchical asset tree</li><li>MapStruct for zero-boilerplate DTO ↔ entity mapping</li><li>Liquibase for reproducible schema versioning</li><li>Search and filter API for asset discovery</li><li>Integration adapters for external catalog systems</li></ul>`,
      tags:['Java 21','Spring Boot','MapStruct','Liquibase','PostgreSQL'] },
    'dataflows': { icon:'🌊', title:'Dataflows Engine',
      body:`<p>High-throughput streaming data model service with an in-memory engine for event-driven pipelines.</p><h4>Key features</h4><ul><li>In-memory data model with configurable retention</li><li>Streaming ingestion from Kafka topics</li><li>Transformation and aggregation pipeline</li><li>OpenCSV for data export</li><li>Separate in-memory engine module for testability</li></ul>`,
      tags:['Java 21','Kafka','In-memory','OpenCSV','Spring Boot'] },
    'bpm': { icon:'⚙️', title:'Process Orchestration',
      body:`<p>Business process orchestration system powering complex multi-step procurement workflows on <strong>Camunda BPM</strong>.</p><h4>Key features</h4><ul><li>BPMN 2.0 process definitions deployed to Camunda engine</li><li>DMN decision tables for rule-based routing</li><li>Kerberos authentication for enterprise SSO</li><li>Camunda Tasklist & Cockpit for process monitoring</li><li>Kibana dashboard integration for process logs</li></ul>`,
      tags:['Java 21','Camunda BPM','BPMN','DMN','Kerberos','Docker','Kibana'] },
    'analytics': { icon:'📊', title:'Analytics Platform',
      body:`<p>Self-service analytics layer enabling procurement analysts to build dashboards without SQL. Apache Superset as the BI frontend, DuckDB as a fast analytical engine.</p><h4>Key features</h4><ul><li>Apache Superset with custom dataset definitions</li><li>DuckDB for columnar in-process queries</li><li>Python ETL scripts for data ingestion</li><li>Dockerised deployment via Compose</li><li>Pre-built dashboards for procurement KPIs</li></ul>`,
      tags:['Apache Superset','DuckDB','Python','Docker Compose'] },
    'reminder-bot': { icon:'🤖', title:'Reminder Bot', link:'https://github.com/ArtemBalakin/reminderBot',
      body:`<p>A Telegram bot for managing household tasks and daily routines. Java 21 + Maven, deployed via Docker Compose.</p><h4>Features</h4><ul><li>Telegram Mini App for visual date/time scheduling</li><li>Inline action buttons: Done / On my way / Snooze</li><li>Automatic re-ping after 5 minutes of no response</li><li>Daily tasks with multiple reminder times</li><li>JSON catalog import for bulk task creation</li><li>New tasks via plain chat messages with <code>/new</code></li></ul>`,
      tags:['Java 21','Maven','Telegram Bot API','Telegram Mini App','Docker'] },
    'snow': { icon:'❄️', title:'Snow Physics Simulation', link:'https://github.com/ArtemBalakin/vkrSnow',
      body:`<p>University thesis — real-time snow and avalanche simulation combining two physical models in a single Unity scene.</p><h4>Physics</h4><ul><li><strong>SPH</strong> — fluid-like snow flow and avalanche dynamics</li><li><strong>MPM</strong> — slab release and granular snow behaviour</li><li>GPU Compute Shaders for particle kernel execution</li></ul><h4>Architecture</h4><ul><li>Clean service interfaces and composition root</li><li>Unity adapter layer isolating physics from engine lifecycle</li><li>CSV benchmark recorder with per-avalanche frame timing</li><li>Voxel snow world with save/load and terrain integration</li></ul>`,
      tags:['C#','Unity','SPH','MPM','GPU Compute','Benchmark'] },
    'minigames': { icon:'🎮', title:'MiniGames API', link:'https://github.com/JouTak/MiniGamesAPI',
      body:`<p>A framework library for building mini-games on Paper (Minecraft). Powers the Splatoon game mode.</p><h4>Features</h4><ul><li>Global player queue with join/leave API</li><li>Automatic team balancing algorithm</li><li>Result persistence (win/loss/score per player)</li><li>Brigadier command integration</li><li>Match lifecycle: lobby → countdown → game → results</li></ul>`,
      tags:['Kotlin','Gradle','Paper API','Brigadier','Minecraft'] },
    'splatoon': { icon:'🎨', title:'Splatoon Mini-Game', link:'https://github.com/JouTak/Splatoon',
      body:`<p>"Paint the world" arena game for Minecraft. Teams compete to paint the most blocks before time runs out.</p><h4>Features</h4><ul><li>Block-painting mechanics with per-team colour tracking</li><li>Dynamic arena cloning via Multiverse-Core</li><li>Match orchestration through <strong>MiniGames API</strong></li><li>Real-time scoreboard showing painted block counts</li><li>Auto match start when queue fills</li></ul>`,
      tags:['Kotlin','Gradle','Paper API','MiniGames API','Multiverse-Core'] },
  },
  ru: {
    'purchase-order': { icon:'🛒', title:'Управление заказами на закупку',
      body:`<p>Полный жизненный цикл заказов на закупку с <strong>конечным автоматом</strong> управления статусами.</p><h4>Ключевые возможности</h4><ul><li>FSM: черновик → согласован → исполнен → архив</li><li>Асинхронные события через <strong>Kafka</strong> на каждом переходе</li><li>REST API по OpenAPI-спеке с кодогенерацией qArcher</li><li>PostgreSQL + Liquibase миграции</li><li>Groovy-автотесты в CI/CD</li></ul>`,
      tags:['Java 21','Spring Boot','Kafka','PostgreSQL','Liquibase','Jenkins'] },
    'purchase-request': { icon:'📋', title:'Заявки на закупку',
      body:`<p>Сервис управления заявками на закупку — от создания через маршрутизацию до согласования.</p><h4>Ключевые возможности</h4><ul><li>Многошаговый workflow с настраиваемой маршрутизацией</li><li>Движок правил валидации заявок</li><li>Интеграция с сервисом заказов через Kafka</li><li>Журнал аудита и история версий</li></ul>`,
      tags:['Java 21','Spring Boot','Spring Data JPA','Kafka','PostgreSQL'] },
    'data-catalog': { icon:'🗂️', title:'Каталог данных',
      body:`<p>Корпоративный реестр метаданных для централизованного учёта информационных активов платформы.</p><h4>Ключевые возможности</h4><ul><li>CRUD метаданных с иерархическим деревом активов</li><li>MapStruct для маппинга DTO ↔ сущность</li><li>Liquibase для версионирования схемы</li><li>API поиска и фильтрации активов</li><li>Адаптеры интеграции с внешними каталогами</li></ul>`,
      tags:['Java 21','Spring Boot','MapStruct','Liquibase','PostgreSQL'] },
    'dataflows': { icon:'🌊', title:'Потоки данных',
      body:`<p>Высокопроизводительный сервис потоковой модели данных с in-memory движком.</p><h4>Ключевые возможности</h4><ul><li>In-memory модель данных с настраиваемым retention</li><li>Потоковая ингестия из Kafka-топиков</li><li>Пайплайн трансформации и агрегации</li><li>OpenCSV для экспорта данных</li><li>Отдельный модуль движка для тестирования</li></ul>`,
      tags:['Java 21','Kafka','In-memory','OpenCSV','Spring Boot'] },
    'bpm': { icon:'⚙️', title:'Оркестрация процессов',
      body:`<p>Система оркестрации бизнес-процессов на <strong>Camunda BPM</strong> для сложных закупочных workflow.</p><h4>Ключевые возможности</h4><ul><li>BPMN 2.0 процессы в движке Camunda</li><li>DMN-таблицы решений для маршрутинга</li><li>Kerberos-аутентификация для корпоративного SSO</li><li>Camunda Tasklist & Cockpit для мониторинга</li><li>Интеграция с Kibana для логов процессов</li></ul>`,
      tags:['Java 21','Camunda BPM','BPMN','DMN','Kerberos','Docker','Kibana'] },
    'analytics': { icon:'📊', title:'Аналитическая платформа',
      body:`<p>Self-service аналитика для аналитиков закупок. Apache Superset как BI-интерфейс, DuckDB как аналитический движок.</p><h4>Ключевые возможности</h4><ul><li>Apache Superset с кастомными датасетами</li><li>DuckDB для колоночных in-process запросов</li><li>Python ETL-скрипты для загрузки данных</li><li>Docker Compose для деплоя</li><li>Готовые дашборды с KPI по закупкам</li></ul>`,
      tags:['Apache Superset','DuckDB','Python','Docker Compose'] },
    'reminder-bot': { icon:'🤖', title:'Reminder Bot', link:'https://github.com/ArtemBalakin/reminderBot',
      body:`<p>Telegram-бот для управления домашними делами и напоминаниями. Java 21 + Maven, Docker Compose.</p><h4>Возможности</h4><ul><li>Telegram Mini App для настройки расписания</li><li>Инлайн-кнопки: Сделал / Пошёл делать / Отложить</li><li>Автоперепинг через 5 минут молчания</li><li>Ежедневные дела с несколькими временами</li><li>Импорт каталога через JSON-файл</li><li>Создание дел через <code>/new</code></li></ul>`,
      tags:['Java 21','Maven','Telegram Bot API','Telegram Mini App','Docker'] },
    'snow': { icon:'❄️', title:'Симуляция физики снега', link:'https://github.com/ArtemBalakin/vkrSnow',
      body:`<p>Дипломная работа — симуляция снега и лавин в реальном времени, две физические модели в одной Unity-сцене.</p><h4>Физика</h4><ul><li><strong>SPH</strong> — жидкостное течение снега и динамика лавин</li><li><strong>MPM</strong> — откол плиты и поведение сыпучего снега</li><li>GPU Compute Shaders для ядер частиц</li></ul><h4>Архитектура</h4><ul><li>Чистые сервисные интерфейсы и composition root</li><li>Unity-адаптерный слой, изолирующий физику</li><li>CSV-рекордер бенчмарков с пофреймовой разбивкой</li><li>Воксельный мир снега с сохранением/загрузкой</li></ul>`,
      tags:['C#','Unity','SPH','MPM','GPU Compute','Benchmark'] },
    'minigames': { icon:'🎮', title:'MiniGames API', link:'https://github.com/JouTak/MiniGamesAPI',
      body:`<p>Библиотека-фреймворк для мини-игр на Paper (Minecraft). Лежит в основе режима Splatoon.</p><h4>Возможности</h4><ul><li>Глобальная очередь игроков с API join/leave</li><li>Алгоритм балансировки команд</li><li>Сохранение результатов на игрока</li><li>Brigadier-интеграция для команд</li><li>Жизненный цикл матча: лобби → игра → результаты</li></ul>`,
      tags:['Kotlin','Gradle','Paper API','Brigadier','Minecraft'] },
    'splatoon': { icon:'🎨', title:'Мини-игра Splatoon', link:'https://github.com/JouTak/Splatoon',
      body:`<p>Командная арена "закрась мир" для Minecraft. Команды соревнуются, кто закрасит больше блоков.</p><h4>Возможности</h4><ul><li>Механика закрашивания с подсчётом по командам</li><li>Динамическое клонирование арен через Multiverse-Core</li><li>Управление матчем через <strong>MiniGames API</strong></li><li>Табло в реальном времени</li><li>Автозапуск при заполнении очереди</li></ul>`,
      tags:['Kotlin','Gradle','Paper API','MiniGames API','Multiverse-Core'] },
  }
};

// ── Typed roles ──
const roles = {
  en: ['Java Backend Developer','Spring Boot · Kafka · K8s','Microservices Architect','Telegram Bot Builder'],
  ru: ['Java Backend-разработчик','Spring Boot · Kafka · K8s','Архитектор микросервисов','Создатель Telegram-ботов'],
};

// ── State (declare ALL vars before any function that uses them) ──
var lang  = localStorage.getItem('lang')  || 'en';
var theme = localStorage.getItem('theme') || 'dark';
var typedTimer = null;
var typedRi = 0, typedCi = 0, typedDeleting = false;

// ── DOM refs ──
var root      = document.documentElement;
var themeBtn  = document.getElementById('themeToggle');
var themeIcon = themeBtn.querySelector('.theme-icon');
var langBtn   = document.getElementById('langToggle');
var typedEl   = document.getElementById('typed');
var nav       = document.getElementById('nav');
var overlay   = document.getElementById('modalOverlay');
var modalEl   = document.getElementById('modal');
var modalBody = document.getElementById('modalBody');
var closeBtn  = document.getElementById('modalClose');
var workLine  = document.getElementById('workLine');
var workDot   = document.getElementById('workDot');
var workSec   = document.getElementById('work');

// ── Theme ──
applyTheme(theme);
themeBtn.addEventListener('click', function() {
  theme = theme === 'light' ? 'dark' : 'light';
  applyTheme(theme);
  localStorage.setItem('theme', theme);
});
function applyTheme(t) {
  root.dataset.theme = t;
  themeIcon.textContent = t === 'light' ? '🌙' : '☀️';
}

// ── Language ──
applyLang(lang);
langBtn.addEventListener('click', function() {
  lang = lang === 'en' ? 'ru' : 'en';
  applyLang(lang);
  localStorage.setItem('lang', lang);
});
function applyLang(l) {
  langBtn.textContent = l === 'en' ? 'RU' : 'EN';
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    if (t[l][key] !== undefined) el.innerHTML = t[l][key];
  });
  restartTyped(l);
}

// ── Typed text ──
function restartTyped(l) {
  clearTimeout(typedTimer);
  typedRi = 0; typedCi = 0; typedDeleting = false;
  if (typedEl) typedEl.textContent = '';
  typedTimer = setTimeout(function() { typeLoop(l); }, 500);
}
function typeLoop(l) {
  var list = roles[l];
  var word = list[typedRi];
  if (!typedDeleting) {
    typedEl.textContent = word.slice(0, ++typedCi);
    if (typedCi === word.length) {
      typedDeleting = true;
      typedTimer = setTimeout(function() { typeLoop(l); }, 2000);
      return;
    }
  } else {
    typedEl.textContent = word.slice(0, --typedCi);
    if (typedCi === 0) { typedDeleting = false; typedRi = (typedRi + 1) % list.length; }
  }
  typedTimer = setTimeout(function() { typeLoop(l); }, typedDeleting ? 40 : 75);
}

// ── Hero parallax ──
var heroSection = document.getElementById('hero');
window.addEventListener('scroll', function() {
  if (!heroSection) return;
  var scrollY = window.scrollY;
  var heroVis = document.querySelector('.hero-visual');
  var heroOrb = document.querySelector('.hero::before');
  if (heroVis && scrollY < window.innerHeight) {
    heroVis.style.transform = 'translateY(' + scrollY * 0.08 + 'px)';
    heroVis.style.opacity   = 1 - scrollY / (window.innerHeight * 0.8);
  }
}, { passive: true });

// ── Nav shadow ──
window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Work section scroll line ──
if (workLine && workSec) {
  window.addEventListener('scroll', function() {
    var rect  = workSec.getBoundingClientRect();
    var total = workSec.offsetHeight;
    var done  = Math.max(0, -rect.top + window.innerHeight * 0.35);
    var pct   = Math.min(100, (done / total) * 100);
    workLine.style.background =
      'linear-gradient(to bottom, var(--accent) ' + pct + '%, var(--border) ' + pct + '%)';
    workDot.style.boxShadow = pct > 3
      ? '0 0 0 4px var(--accent-dim), 0 0 28px var(--accent-glow)'
      : '0 0 0 4px var(--accent-dim)';
  }, { passive: true });
}

// ── Modal ──
document.querySelectorAll('[data-modal]').forEach(function(card) {
  card.style.cursor = 'pointer';
  card.addEventListener('click', function() { openModal(card.dataset.modal); });
});
function openModal(id) {
  var data = modals[lang][id];
  if (!data) return;
  var linkHtml = data.link
    ? '<a href="' + data.link + '" target="_blank" rel="noopener" class="modal-github"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>GitHub</a>'
    : '';
  var tagsHtml = data.tags.map(function(tag) { return '<span class="skill-tag">' + tag + '</span>'; }).join('');
  modalBody.innerHTML =
    '<div class="modal-header"><span class="modal-icon">' + data.icon + '</span><div><h2 class="modal-title">' + data.title + '</h2>' + linkHtml + '</div></div>' +
    '<div class="modal-content">' + data.body + '</div>' +
    '<div class="skill-tags modal-tags">' + tagsHtml + '</div>';
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

// ── Java experience live timer ──
var JAVA_START = new Date('2022-09-01T00:00:00');
var javaTimerEl = document.getElementById('javaTimer');

function updateJavaTimer() {
  var now  = new Date();
  var diff = now - JAVA_START;
  var totalDays = Math.floor(diff / 86400000);
  var years  = Math.floor(totalDays / 365);
  var months = Math.floor((totalDays % 365) / 30);
  var days   = totalDays % 30;
  javaTimerEl.textContent = years + 'y ' + months + 'm ' + days + 'd';
}

if (javaTimerEl) {
  updateJavaTimer();
  setInterval(updateJavaTimer, 86400000); // update daily
  // Subtle pulse every ~10s to show it's live
  setInterval(function() {
    javaTimerEl.classList.add('timer-pulse');
    setTimeout(function() { javaTimerEl.classList.remove('timer-pulse'); }, 600);
  }, 10000);
}

// ── Count-up animation for stat numbers ──
function animateCount(el, target, suffix) {
  var start = 0;
  var duration = 1200;
  var step = duration / target;
  var timer = setInterval(function() {
    start++;
    el.textContent = start + suffix;
    if (start >= target) clearInterval(timer);
  }, step);
}

var countObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      var el = e.target;
      var val = el.dataset.countTo;
      var sfx = el.dataset.suffix || '';
      if (val) animateCount(el, parseInt(val), sfx);
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count-to]').forEach(function(el) {
  countObserver.observe(el);
});

// ── Scroll reveal ──
var revealEls = document.querySelectorAll(
  '.section-title,.about-grid,.stack-group,.project-card,.contact-card,.stat-card,.work-company-header,.work-desc'
);
revealEls.forEach(function(el) { el.classList.add('reveal'); });
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e, i) {
    if (e.isIntersecting) {
      setTimeout(function() { e.target.classList.add('visible'); }, i * 55);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(function(el) { revealObs.observe(el); });

// ── Active nav link ──
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-links a');
var navObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      navLinks.forEach(function(a) { a.classList.remove('active'); });
      var a = document.querySelector('.nav-links a[href="#' + e.target.id + '"]');
      if (a) a.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(function(s) { navObs.observe(s); });
