// ============================================================================
// LAYANNE - App Principal | Tecnico em Enfermagem
// ============================================================================

// ============ AUTENTICACAO ============
(function checkAuth() {
  if (sessionStorage.getItem('layanne_auth') !== 'true') {
    window.location.href = 'login.html';
  }
})();

// ============ ESTADO GLOBAL ============
let currentPage = 'dashboard';
let currentDisciplina = null;
let currentTopico = null;
let quizState = null;
let ttsState = { speaking: false, paused: false, text: '', sentences: [], index: 0, mode: 'leitura' };
let ttsSections = [];
let ttsCurrentSection = 0;
let favoritos = JSON.parse(localStorage.getItem('layanne_favoritos') || '[]');
let progresso = JSON.parse(localStorage.getItem('layanne_progresso') || '{"questoes":0,"acertos":0,"simulados":[],"topicos":[]}');

// ============ NAVEGACAO ============
function navigateTo(page, data) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navItem) navItem.classList.add('active');

  currentPage = page;

  const titles = {
    'dashboard': 'Painel Inicial',
    'disciplinas': 'Disciplinas',
    'disciplina-detail': data?.nome || 'Disciplina',
    'topico-detail': data?.titulo || 'Tópico',
    'simulados': 'Simulados',
    'quiz': 'Simulado em Andamento',
    'quiz-results': 'Resultado do Simulado',
    'mapas': 'Mapas Mentais',
    'mapa-detail': data?.titulo || 'Mapa Mental',
    'cofen': 'COFEN 564/2017 - COREN-AP',
    'cofen-detail': data?.titulo || 'Artigo',
    'leitura': 'Leitor de Voz',
    'favoritos': 'Meus Favoritos',
    'historico': 'Meu Progresso'
  };

  document.getElementById('pageTitle').textContent = titles[page] || 'LAYANNE';

  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) {
    pageEl.classList.add('active');
    pageEl.style.animation = 'none';
    pageEl.offsetHeight;
    pageEl.style.animation = 'fadeIn 0.3s ease';
  }

  if (page === 'dashboard') renderDashboard();
  if (page === 'disciplinas') renderDisciplinas();
  if (page === 'disciplina-detail') renderDisciplinaDetail(data);
  if (page === 'topico-detail') renderTopicoDetail(data);
  if (page === 'simulados') renderSimulados();
  if (page === 'mapas') renderMapas();
  if (page === 'mapa-detail') renderMapaDetail(data);
  if (page === 'cofen') renderCofen();
  if (page === 'cofen-detail') renderCofenDetail(data);
  if (page === 'leitura') renderLeitor();
  if (page === 'favoritos') renderFavoritos();
  if (page === 'historico') renderHistorico();

  window.scrollTo(0, 0);

  if (window.innerWidth <= 992) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('active');
}

// ============ DASHBOARD ============
function renderDashboard() {
  document.getElementById('statQuestoes').textContent = progresso.questoes;
  document.getElementById('statAcerto').textContent = progresso.questoes > 0 ? Math.round((progresso.acertos / progresso.questoes) * 100) + '%' : '0%';

  const grid = document.getElementById('dashboardDisciplinas');
  grid.innerHTML = DISCIPLINAS.slice(0, 6).map((d, i) => `
    <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;cursor:pointer;transition:all 0.3s;margin-bottom:6px;background:#f8f9fa;border:1px solid #e9ecef" onmouseover="this.style.background='#e9ecef';this.style.transform='translateX(4px)'" onmouseout="this.style.background='#f8f9fa';this.style.transform='translateX(0)'" onclick="navigateTo('disciplina-detail', DISCIPLINAS.find(x=>x.id==='${d.id}'))">
      <div style="width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,${d.cor}44,${d.cor}22);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">${d.icon}</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;font-size:14px;color:#1a1a2e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.nome}</div>
        <div style="font-size:12px;color:#6c757d">${d.totalTopicos} tópicos</div>
      </div>
      <div style="width:32px;height:32px;border-radius:10px;background:#e9ecef;display:flex;align-items:center;justify-content:center;color:#6c757d;font-size:14px;flex-shrink:0">→</div>
    </div>
  `).join('');

  if (progresso.simulados.length > 0) {
    document.getElementById('dashboardSimulados').innerHTML = progresso.simulados.slice(-3).reverse().map(s => `
      <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;transition:all 0.3s;margin-bottom:6px;background:#f8f9fa;border:1px solid #e9ecef">
        <div style="width:48px;height:48px;border-radius:14px;background:${s.acerto >= 70 ? 'linear-gradient(135deg,#19875444,#20c99722)' : s.acerto >= 50 ? 'linear-gradient(135deg,#ffc10744,#fd7e1422)' : 'linear-gradient(135deg,#dc354544,#14b8a622)'};display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">📝</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:14px;color:#1a1a2e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s.nome}</div>
          <div style="font-size:12px;color:#6c757d">${s.data}</div>
        </div>
        <div style="padding:6px 14px;border-radius:20px;font-size:13px;font-weight:800;${s.acerto >= 70 ? 'background:rgba(25,135,84,0.15);color:#198754' : s.acerto >= 50 ? 'background:rgba(255,193,7,0.15);color:#fd7e14' : 'background:rgba(220,53,69,0.15);color:#dc3545'}">${s.acerto}%</div>
      </div>
    `).join('');
  }
}

// ============ DISCIPLINAS ============
function renderDisciplinas(filtro) {
  const grid = document.getElementById('disciplinasGrid');
  const lista = filtro && filtro !== 'todas' ? DISCIPLINAS.filter(d => d.categoria === filtro) : DISCIPLINAS;

  grid.innerHTML = lista.map(d => `
    <div class="subject-card" onclick="navigateTo('disciplina-detail', DISCIPLINAS.find(x=>x.id==='${d.id}'))">
      <div class="subject-card-banner" style="background:linear-gradient(90deg, ${d.cor}, ${d.cor}88)"></div>
      <div class="subject-card-body">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <div style="width:56px;height:56px;border-radius:14px;background:${d.cor}15;display:flex;align-items:center;justify-content:center;font-size:28px">${d.icon}</div>
          <div>
            <div style="font-size:11px;font-weight:600;color:${d.cor};text-transform:uppercase;letter-spacing:1px">${d.categoria}</div>
            <div class="subject-card-title" style="margin-bottom:0">${d.nome}</div>
          </div>
        </div>
        <div class="subject-card-desc">${d.descricao}</div>
        <div class="subject-card-meta">
          <span class="meta-item">📋 ${d.totalTopicos} tópicos</span>
          <span class="meta-item" style="color:${d.cor};font-weight:600">Estudar →</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterDisciplinas(filtro) {
  document.querySelectorAll('#disciplinaTabs .tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderDisciplinas(filtro);
}

// ============ DISCIPLINA DETAIL ============
function renderDisciplinaDetail(disc) {
  currentDisciplina = disc;
  const container = document.getElementById('disciplinaDetailContent');

  container.innerHTML = `
    <button class="back-btn" onclick="navigateTo('disciplinas')">← Voltar às Disciplinas</button>
    <div style="background:linear-gradient(135deg, ${disc.cor}, ${disc.cor}88);border-radius:var(--radius-lg);padding:32px;color:white;margin-bottom:24px;position:relative;overflow:hidden">
      <div style="position:absolute;top:0;right:0;width:200px;height:100%;background:url('${disc.imagem || ''}') center/cover;opacity:0.15;border-radius:0 var(--radius-lg) var(--radius-lg) 0"></div>
      <div style="display:flex;align-items:center;gap:16px;position:relative">
        <span style="font-size:48px">${disc.icon}</span>
        <div>
          <h2 style="font-family:Poppins,sans-serif;font-size:24px;font-weight:800;margin-bottom:4px">${disc.nome}</h2>
          <p style="opacity:0.85;font-size:14px">${disc.descricao}</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-title">📋 Tópicos de Estudo (${disc.topicos.length})</div>
        <button class="btn btn-sm btn-outline" onclick="iniciarEstudoDisciplina('${disc.id}')">📚 Estudar Todos</button>
      </div>
      <ul class="topic-list">
        ${disc.topicos.map((t, i) => `
          <li class="topic-item" onclick="navigateTo('topico-detail', {disciplinaId:'${disc.id}', topicoIndex:${i}})">
            <div class="topic-number" style="background:${disc.cor}15;color:${disc.cor}">${i + 1}</div>
            <div class="topic-info">
              <div class="topic-title">${t.titulo}</div>
              <div class="topic-subtitle">${t.subtitulo}</div>
            </div>
            <span class="topic-arrow">→</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

// ============ TOPICO DETAIL ============
function renderTopicoDetail(data) {
  const disc = DISCIPLINAS.find(d => d.id === data.disciplinaId);
  if (!disc) return;
  currentDisciplina = disc;
  const topicoIndex = parseInt(data.topicoIndex);
  const topico = disc.topicos[topicoIndex];
  currentTopico = topico;
  const container = document.getElementById('topicoDetailContent');
  const favId = `disc-${disc.id}-${topico.id}`;
  const isFav = favoritos.includes(favId);
  const totalTopicos = disc.topicos.length;
  const hasPrev = topicoIndex > 0;
  const hasNext = topicoIndex < totalTopicos - 1;

  let navArrows = '';
  if (totalTopicos > 1) {
    navArrows = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:24px;padding:16px 0;border-top:1px solid rgba(255,255,255,0.08)">
        ${hasPrev ? `<button class="btn btn-sm btn-outline" onclick="navigateTo('topico-detail', {disciplinaId:'${disc.id}', topicoIndex:${topicoIndex - 1}})" style="display:flex;align-items:center;gap:6px">← Anterior</button>` : '<div></div>'}
        <span style="font-size:12px;color:rgba(255,255,255,0.4)">${topicoIndex + 1} / ${totalTopicos}</span>
        ${hasNext ? `<button class="btn btn-sm btn-primary" onclick="navigateTo('topico-detail', {disciplinaId:'${disc.id}', topicoIndex:${topicoIndex + 1}})" style="display:flex;align-items:center;gap:6px">Próximo →</button>` : '<div></div>'}
      </div>
    `;
  }

  container.innerHTML = `
    <button class="back-btn" onclick="navigateTo('disciplina-detail', DISCIPLINAS.find(x=>x.id==='${disc.id}'))">← Voltar a ${disc.nome}</button>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px">
      <div>
        <h2 style="font-family:Poppins,sans-serif;font-size:22px;font-weight:700">${topico.titulo}</h2>
        <p style="font-size:13px;color:var(--text-muted)">${topico.subtitulo}</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-sm ${isFav ? 'btn-success' : 'btn-outline'}" onclick="toggleFavorito('${favId}')">
          ${isFav ? '⭐ Salvo' : '☆ Salvar'}
        </button>
        <button class="btn btn-sm btn-primary" onclick="lerConteudoTopico('${disc.id}', ${topicoIndex})">
          🔊 Ouvir
        </button>
        <button class="btn btn-sm" style="background:#14b8a6;color:white" onclick="explicarConteudoTopico('${disc.id}', ${topicoIndex})">
          🤖 Explicar
        </button>
      </div>
    </div>
    <div class="content-viewer">${topico.conteudo}</div>
    ${navArrows}
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function iniciarEstudoDisciplina(discId) {
  const disc = DISCIPLINAS.find(d => d.id === discId);
  if (disc && disc.topicos.length > 0) {
    navigateTo('topico-detail', { disciplinaId: discId, topicoIndex: 0 });
  }
}

// ============ SIMULADOS / QUIZ ============
function renderSimulados(filtro) {
  const grid = document.getElementById('simuladosGrid');
  const simulados = [
    { nome: 'Simulado Geral', desc: 'Questões de todas as disciplinas', icon: '📋', dificuldade: 'medio', qtd: 10, disciplinas: 'todas' },
    { nome: 'Anatomia e Fisiologia', desc: 'Sistemas do corpo humano', icon: '🫀', dificuldade: 'medio', qtd: 10, disciplinas: 'anat-fisio' },
    { nome: 'Farmacologia', desc: 'Medicamentos e dosagens', icon: '💊', dificuldade: 'medio', qtd: 10, disciplinas: 'farmaco' },
    { nome: 'Enfermagem Médico-Cirúrgica', desc: 'Cuidados perioperatórios', icon: '🏥', dificuldade: 'medio', qtd: 10, disciplinas: 'enf-medicir' },
    { nome: 'Saúde Coletiva', desc: 'APS, vacinas, epidemiologia', icon: '🏘️', dificuldade: 'facil', qtd: 10, disciplinas: 'enf-saudecol' },
    { nome: 'Pediatria', desc: 'Cuidados com crianças', icon: '👶', dificuldade: 'medio', qtd: 10, disciplinas: 'enf-pediatria' },
    { nome: 'Obstetrícia', desc: 'Gestação, parto e puerpério', icon: '🤰', dificuldade: 'medio', qtd: 10, disciplinas: 'enf-obstet' },
    { nome: 'Saúde Mental', desc: 'Psiquiatria e CAPS', icon: '🧠', dificuldade: 'dificil', qtd: 10, disciplinas: 'enf-psiq' },
    { nome: 'Ética e Legislação', desc: 'COFEN 564/2017 COREN-AP completo', icon: '⚖️', dificuldade: 'facil', qtd: 10, disciplinas: 'etica-leg' },
    { nome: 'Primeiros Socorros', desc: 'RCP, trauma, emergências', icon: '🚑', dificuldade: 'dificil', qtd: 10, disciplinas: 'primeiros-soc' },
    { nome: 'Simulado Difícil', desc: 'Questões avançadas para domínio', icon: '🔥', dificuldade: 'dificil', qtd: 15, disciplinas: 'todas' },
    { nome: 'Desafio COREN-AP', desc: 'Questões avançadas no estilo prova', icon: '🏆', dificuldade: 'dificil', qtd: 20, disciplinas: 'todas' }
  ];

  const lista = filtro && filtro !== 'todos' ? simulados.filter(s => s.dificuldade === filtro) : simulados;

  grid.innerHTML = lista.map((s, i) => `
    <div class="simulado-card" onclick="iniciarQuiz('${s.disciplinas}', ${s.qtd}, '${s.nome}')">
      <div class="simulado-card-badge ${s.dificuldade}">${s.dificuldade}</div>
      <div class="simulado-card-icon">${s.icon}</div>
      <div class="simulado-card-title">${s.nome}</div>
      <div class="simulado-card-desc">${s.desc}</div>
      <div class="simulado-card-info">
        <span>📝 ${s.qtd} questões</span>
        <span>⏱️ ~${Math.ceil(s.qtd * 1.5)} min</span>
      </div>
    </div>
  `).join('');
}

function filterSimulados(filtro) {
  document.querySelectorAll('#page-simulados .tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderSimulados(filtro);
}

function iniciarQuiz(disciplinaFilter, qtd, nome) {
  let questoes = disciplinaFilter === 'todas'
    ? [...QUIZ_QUESTOES]
    : QUIZ_QUESTOES.filter(q => q.disciplina_id === disciplinaFilter);

  questoes = shuffleArray(questoes).slice(0, qtd);

  if (questoes.length === 0) {
    alert('Nenhuma questão encontrada para esta disciplina.');
    return;
  }

  quizState = {
    questoes,
    index: 0,
    respostas: [],
    acertos: 0,
    nome,
    inicio: Date.now()
  };

  navigateTo('quiz');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizState.questoes[quizState.index];
  const total = quizState.questoes.length;
  const atual = quizState.index + 1;
  const progressoQuiz = (atual / total) * 100;
  const letters = ['A', 'B', 'C', 'D'];

  document.getElementById('quizContainer').innerHTML = `
    <div class="quiz-header">
      <div style="font-weight:700;font-size:14px">📝 ${quizState.nome}</div>
      <div style="font-size:13px;color:var(--text-muted)">${atual} de ${total}</div>
    </div>
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" style="width:${progressoQuiz}%"></div>
    </div>
    <div class="quiz-question-card">
      <div class="quiz-question-number">Questão ${atual}</div>
      <div class="quiz-question-text">${q.pergunta}</div>
      <div class="quiz-options" id="quizOptions">
        ${q.opcoes.map((opt, i) => `
          <div class="quiz-option" onclick="selecionarResposta(${i})" id="opt-${i}">
            <div class="quiz-option-letter">${letters[i]}</div>
            <div>${opt}</div>
          </div>
        `).join('')}
      </div>
      <div id="quizFeedback" style="display:none"></div>
    </div>
    <div class="quiz-actions">
      <button class="btn btn-outline" onclick="navigateTo('simulados')" style="visibility:${quizState.index === 0 ? 'hidden' : 'visible'}">✕ Sair</button>
      <button class="btn btn-primary" id="quizNextBtn" onclick="proximaQuestao()" style="display:none">
        ${atual < total ? 'Próxima →' : 'Ver Resultado'}
      </button>
    </div>
  `;
}

function selecionarResposta(index) {
  if (quizState.respostas[quizState.index] !== undefined) return;

  const q = quizState.questoes[quizState.index];
  quizState.respostas[quizState.index] = index;
  const acertou = index === q.resposta;

  if (acertou) quizState.acertos++;

  progresso.questoes++;
  if (acertou) progresso.acertos++;
  localStorage.setItem('layanne_progresso', JSON.stringify(progresso));

  document.querySelectorAll('.quiz-option').forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    if (i === q.resposta) opt.classList.add('correct');
    if (i === index && !acertou) opt.classList.add('wrong');
  });

  const feedback = document.getElementById('quizFeedback');
  feedback.style.display = 'block';
  feedback.innerHTML = `
    <div class="quiz-explanation">
      <div class="quiz-explanation-title">${acertou ? '✅ Correto!' : '❌ Incorreto'}</div>
      <div class="quiz-explanation-text">${q.explicacao}</div>
    </div>
  `;

  document.getElementById('quizNextBtn').style.display = 'inline-flex';
}

function proximaQuestao() {
  if (quizState.index < quizState.questoes.length - 1) {
    quizState.index++;
    renderQuizQuestion();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const total = quizState.questoes.length;
  const acertos = quizState.acertos;
  const percentual = Math.round((acertos / total) * 100);
  const tempo = Math.round((Date.now() - quizState.inicio) / 60000);

  let classe, mensagem;
  if (percentual >= 80) { classe = 'excellent'; mensagem = 'Excelente! Você está pronta para o COREN-AP!'; }
  else if (percentual >= 60) { classe = 'good'; mensagem = 'Bom trabalho! Continue estudando!'; }
  else if (percentual >= 40) { classe = 'average'; mensagem = 'Precisa melhorar. Revise os conteúdos!'; }
  else { classe = 'poor'; mensagem = 'Estude mais antes de tentar novamente.'; }

  progresso.simulados.push({
    nome: quizState.nome,
    acerto: percentual,
    data: new Date().toLocaleDateString('pt-BR'),
    questoes: total,
    acertos
  });
  localStorage.setItem('layanne_progresso', JSON.stringify(progresso));

  document.getElementById('quizResults').innerHTML = `
    <div class="results-card">
      <div class="results-score ${classe}">
        <div class="results-score-value">${percentual}%</div>
        <div class="results-score-label">Acerto</div>
      </div>
      <div class="results-title">${percentual >= 70 ? 'Parabéns!' : 'Continue Estudando!'}</div>
      <div class="results-subtitle">${mensagem}</div>
      <div class="results-stats">
        <div class="results-stat"><div class="results-stat-value" style="color:var(--secondary)">${acertos}</div><div class="results-stat-label">Acertos</div></div>
        <div class="results-stat"><div class="results-stat-value" style="color:var(--danger)">${total - acertos}</div><div class="results-stat-label">Erros</div></div>
        <div class="results-stat"><div class="results-stat-value" style="color:var(--primary)">${tempo}min</div><div class="results-stat-label">Tempo</div></div>
      </div>
      <div class="results-actions">
        <button class="btn btn-outline" onclick="navigateTo('simulados')">← Voltar</button>
        <button class="btn btn-primary" onclick="iniciarQuiz('${quizState.questoes[0]?.disciplina_id || 'todas'}', ${total}, '${quizState.nome}')">🔄 Tentar Novamente</button>
      </div>
    </div>
  `;
}

// ============ MAPAS MENTAIS ============
function renderMapas() {
  const grid = document.getElementById('mapasGrid');
  grid.innerHTML = MAPAS_MENTAIS.map(m => {
    const disc = DISCIPLINAS.find(d => d.id === m.disciplina_id);
    return `
      <div class="mindmap-select-card" onclick="navigateTo('mapa-detail', MAPAS_MENTAIS.find(x=>x.id==='${m.id}'))">
        <div class="mindmap-select-icon">${disc ? disc.icon : '🧠'}</div>
        <div class="mindmap-select-title">${m.titulo}</div>
        <div class="mindmap-select-desc">${m.ramificacoes.length} ramificações</div>
      </div>
    `;
  }).join('');
}

function renderMapaDetail(mapa) {
  const disc = DISCIPLINAS.find(d => d.id === mapa.disciplina_id);
  const container = document.getElementById('mapaDetailContent');

  container.innerHTML = `
    <button class="back-btn" onclick="navigateTo('mapas')">← Voltar aos Mapas</button>
    <div style="background:linear-gradient(135deg, ${disc ? disc.cor : '#10b981'}, ${disc ? disc.cor + '88' : '#10b98188'});border-radius:var(--radius-lg);padding:24px;color:white;margin-bottom:24px;text-align:center">
      <h2 style="font-family:Poppins,sans-serif;font-size:22px;font-weight:800">${disc ? disc.icon : '🧠'} ${mapa.titulo}</h2>
    </div>
    <div class="mindmap-container">
      <div class="mindmap">
        <div class="mindmap-center">${mapa.centro}</div>
        <div class="mindmap-branches">
          ${mapa.ramificacoes.map(r => `
            <div class="mindmap-branch">
              <div class="branch-header" style="border-top-color:${disc ? disc.cor : '#10b981'}">${r.titulo}</div>
              <div class="branch-items">
                ${r.itens.map(item => `<div class="branch-item">${item}</div>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ============ COFEN 564/2017 ============
function renderCofen(filtro) {
  const container = document.getElementById('cofenList');
  let artigos = [...COFEN_ARTIGOS];

  if (filtro === 'pre') artigos = artigos.filter(a => a.id === 'preambulo');
  else if (filtro === 'direitos') artigos = artigos.filter(a => { const n = parseInt(a.artigo); return n >= 1 && n <= 23; });
  else if (filtro === 'deveres') artigos = artigos.filter(a => { const n = parseInt(a.artigo); return n >= 24 && n <= 60; });
  else if (filtro === 'proibicoes') artigos = artigos.filter(a => { const n = parseInt(a.artigo); return n >= 61 && n <= 102; });
  else if (filtro === 'infracoes') artigos = artigos.filter(a => { const n = parseInt(a.artigo); return n >= 103 && n <= 113; });
  else if (filtro === 'aplicacao') artigos = artigos.filter(a => { const n = parseInt(a.artigo); return n >= 114 && n <= 119; });

  const capituloNomes = {
    'pre': 'Preâmbulo',
    'direitos': 'Cap. I – Dos Direitos (Art. 1º a 23)',
    'deveres': 'Cap. II – Dos Deveres (Art. 24 a 60)',
    'proibicoes': 'Cap. III – Das Proibições (Art. 61 a 102)',
    'infracoes': 'Cap. IV – Das Infrações e Penalidades (Art. 103 a 113)',
    'aplicacao': 'Cap. V – Da Aplicação das Penalidades (Art. 114 a 119)'
  };

  container.innerHTML = `
    <div style="margin-bottom:16px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <button class="btn btn-sm btn-primary" onclick="lerTodosArtigos()">🔊 Ler Todos em Voz Alta</button>
      <button class="btn btn-sm" style="background:#14b8a6;color:white" onclick="explicarTodosArtigos()">🤖 Explicar Todos</button>
      <span style="font-size:13px;color:var(--text-muted);margin-left:auto">${artigos.length} artigos${filtro && filtro !== 'todos' ? ' – ' + (capituloNomes[filtro] || '') : ''}</span>
    </div>
    ${artigos.map(a => `
      <div class="card" style="margin-bottom:12px;cursor:pointer" onclick="navigateTo('cofen-detail', COFEN_ARTIGOS.find(x=>x.id==='${a.id}'))">
        <div style="padding:16px 20px;display:flex;align-items:center;gap:16px">
          <div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#14b8a6,#10b981);display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:13px;flex-shrink:0">
            ${a.artigo === 'Pre.' ? 'Pre' : 'Art.' + a.artigo}
          </div>
          <div style="flex:1">
            <div style="font-weight:600;font-size:14px">${a.titulo}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${a.texto.substring(0, 80)}...</div>
          </div>
          <span style="color:var(--text-light);font-size:18px">→</span>
        </div>
      </div>
    `).join('')}
  `;
}

function filterCofen(filtro) {
  document.querySelectorAll('#cofenTabs .tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderCofen(filtro);
}

function renderCofenDetail(artigo) {
  const container = document.getElementById('cofenDetailContent');
  const isFav = favoritos.includes(`cofen-${artigo.id}`);

  const artigoIdx = COFEN_ARTIGOS.findIndex(a => a.id === artigo.id);
  const totalArtigos = COFEN_ARTIGOS.length;
  const hasPrev = artigoIdx > 0;
  const hasNext = artigoIdx < totalArtigos - 1;

  let navArrows = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:24px;padding:16px 0;border-top:1px solid rgba(255,255,255,0.08)">
      ${hasPrev ? `<button class="btn btn-sm btn-outline" onclick="navigateTo('cofen-detail', COFEN_ARTIGOS[${artigoIdx - 1}])" style="display:flex;align-items:center;gap:6px">← ${COFEN_ARTIGOS[artigoIdx - 1].artigo === 'Pre.' ? 'Preâmbulo' : 'Art. ' + COFEN_ARTIGOS[artigoIdx - 1].artigo + 'º'}</button>` : '<div></div>'}
      <span style="font-size:12px;color:rgba(255,255,255,0.4)">${artigoIdx + 1} / ${totalArtigos}</span>
      ${hasNext ? `<button class="btn btn-sm btn-primary" onclick="navigateTo('cofen-detail', COFEN_ARTIGOS[${artigoIdx + 1}])" style="display:flex;align-items:center;gap:6px">${COFEN_ARTIGOS[artigoIdx + 1].artigo === 'Pre.' ? 'Preâmbulo' : 'Art. ' + COFEN_ARTIGOS[artigoIdx + 1].artigo + 'º'} →</button>` : '<div></div>'}
    </div>
  `;

  container.innerHTML = `
    <button class="back-btn" onclick="navigateTo('cofen')">← Voltar ao Código de Ética</button>
    <div style="background:linear-gradient(135deg, #14b8a6, #10b981);border-radius:var(--radius-lg);padding:24px;color:white;margin-bottom:24px;position:relative;overflow:hidden">
      <div style="position:absolute;top:0;right:0;width:150px;height:100%;background:url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&q=80') center/cover;opacity:0.1;border-radius:0 var(--radius-lg) var(--radius-lg) 0"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;position:relative;flex-wrap:wrap;gap:8px">
        <div>
          <div style="font-size:12px;opacity:0.7;text-transform:uppercase;letter-spacing:2px">COREN-AP | Resolução COFEN 564/2017</div>
          <h2 style="font-family:Poppins,sans-serif;font-size:22px;font-weight:800;margin-top:4px">
            ${artigo.artigo === 'Pre.' ? 'Preâmbulo' : `Art. ${artigo.artigo}º`}
          </h2>
          <p style="opacity:0.85;font-size:14px;margin-top:4px">${artigo.titulo}</p>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-sm ${isFav ? 'btn-success' : 'btn-outline'}" style="background:${isFav ? '' : 'rgba(255,255,255,0.15)'};color:white;border-color:rgba(255,255,255,0.3)" onclick="toggleFavorito('cofen-${artigo.id}')">
            ${isFav ? '⭐ Salvo' : '☆ Salvar'}
          </button>
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="card-header">
        <div class="card-title">📜 Texto Oficial</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-sm btn-primary" onclick="lerArtigoCofen('${artigo.id}')">🔊 Ler</button>
          <button class="btn btn-sm" style="background:#14b8a6;color:white" onclick="explicarArtigoCofen('${artigo.id}')">🤖 Explicar</button>
        </div>
      </div>
      <div class="card-body">
        <p style="font-size:14px;line-height:1.8;color:#333">${artigo.texto}</p>
      </div>
    </div>

    <div class="card" style="border-left:4px solid #14b8a6">
      <div class="card-header">
        <div class="card-title">🤖 Explicação Prática</div>
      </div>
      <div class="card-body">
        <p style="font-size:14px;line-height:1.8;color:#333">${artigo.explicacao}</p>
      </div>
    </div>

    ${navArrows}
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ LEITOR DE VOZ ============
function renderLeitor() {
  leitorStop();
  const select = document.getElementById('leitorDisciplina');
  select.innerHTML = '<option value="">Selecione uma disciplina...</option>' +
    DISCIPLINAS.map(d => `<option value="${d.id}">${d.icon} ${d.nome}</option>`).join('');

  const grid = document.getElementById('artigosGrid');
  grid.innerHTML = ARTIGOS_LEITURA.map(a => `
    <div style="background:var(--bg);border-radius:10px;padding:16px;cursor:pointer;transition:all 0.3s;border:2px solid transparent" 
         onmouseover="this.style.borderColor='var(--primary)'" 
         onmouseout="this.style.borderColor='transparent'"
         onclick="lerArtigoRapido('${a.id}')">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <span style="font-size:11px;font-weight:600;color:var(--primary);text-transform:uppercase">${a.categoria}</span>
        <span style="font-size:11px;color:var(--text-muted)">⏱️ ${a.tempo_leitura}min</span>
      </div>
      <div style="font-weight:600;font-size:14px;margin-bottom:4px">${a.titulo}</div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn btn-sm btn-primary" onclick="event.stopPropagation();lerArtigoRapido('${a.id}')">🔊 Ler</button>
        <button class="btn btn-sm" style="background:#14b8a6;color:white" onclick="event.stopPropagation();explicarArtigoRapido('${a.id}')">🤖 Explicar</button>
      </div>
    </div>
  `).join('');
}

function updateLeitorTopicos() {
  const discId = document.getElementById('leitorDisciplina').value;
  const select = document.getElementById('leitorTopico');
  if (!discId) { select.innerHTML = '<option value="">Selecione um tópico...</option>'; return; }
  const disc = DISCIPLINAS.find(d => d.id === discId);
  select.innerHTML = '<option value="">Selecione um tópico...</option>' +
    disc.topicos.map((t, i) => `<option value="${i}">${t.titulo}</option>`).join('');
}

function loadLeitorConteudo() {
  const discId = document.getElementById('leitorDisciplina').value;
  const topicoIndex = document.getElementById('leitorTopico').value;
  if (!discId || topicoIndex === '') return;

  const disc = DISCIPLINAS.find(d => d.id === discId);
  const topico = disc.topicos[parseInt(topicoIndex)];

  ttsSections = extrairSecoes(topico.conteudo);
  ttsCurrentSection = 0;

  mostrarSecaoAtual();
}

function extrairSecoes(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const secoes = [];
  let atual = { titulo: 'Introdução', textos: [] };

  for (const el of tmp.children) {
    const tag = el.tagName.toLowerCase();
    if (tag === 'h2' || tag === 'h3') {
      if (atual.textos.length > 0) secoes.push(atual);
      atual = { titulo: el.textContent.trim(), textos: [] };
    } else {
      atual.textos.push(el.textContent.trim());
    }
  }
  if (atual.textos.length > 0) secoes.push(atual);

  if (secoes.length === 0) {
    secoes.push({ titulo: topico.titulo, textos: [tmp.textContent.trim()] });
  }
  return secoes;
}

function mostrarSecaoAtual() {
  const preview = document.getElementById('leitorConteudoPreview');
  if (!preview || ttsSections.length === 0) return;
  const secao = ttsSections[ttsCurrentSection];
  preview.innerHTML = `<strong>📖 ${secao.titulo}</strong><br><br>${secao.textos.join(' ')}`;
  const progresso = document.getElementById('leitorProgresso');
  if (progresso) {
    progresso.textContent = `Seção ${ttsCurrentSection + 1} de ${ttsSections.length}`;
  }
}

// ============ TTS - TEXTO PARA FALA (VOZ NATURAL) ============
let ttsBestVoice = null;

function extrairTexto(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function prepararTextoFala(texto, modo) {
  texto = texto.replace(/\s+/g, ' ').trim();

  if (modo === 'explicacao') {
    const frases = texto.split(/[.!?]+/).filter(s => s.trim().length > 10).map(s => s.trim());
    const maxFrases = Math.min(frases.length, 4);
    const partes = [];

    partes.push('Explicando de forma objetiva.');

    const aberturas = [
      'Primeiro',
      'Ou seja',
      'Isso significa que',
      'Na prática',
      'Outro ponto',
      'Resumindo'
    ];

    for (let i = 0; i < maxFrases; i++) {
      const frase = frases[i].toLowerCase();
      const conj = aberturas[i % aberturas.length];
      partes.push(`${conj}: ${frase}`);
    }

    if (maxFrases < frases.length) {
      partes.push('Continue para aprender mais.');
    }

    return partes.join(' ');
  }
  return texto;
}

function selecionarMelhorVoz() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;

  const prefFemininas = [
    'maria', 'zira', 'hazel', 'helena', 'female',
    'luciana', 'julia', 'camila', 'paula', 'ana',
    'clara', 'isabela', 'larissa', 'marcia',
    'google female'
  ];

  for (const pref of prefFemininas) {
    const encontrada = voices.find(v =>
      v.name.toLowerCase().includes(pref)
    );
    if (encontrada) return encontrada;
  }

  const ptBR = voices.find(v => v.lang.startsWith('pt'));
  if (ptBR) return ptBR;

  const fem = voices.filter(v => /zira|hazel|helena|maria|female|feminina/i.test(v.name));
  if (fem.length > 0) return fem[0];

  return voices[0];
}

function limparCaracteres(texto) {
  texto = texto.replace(/[«»""''`´~^]/g, '');
  texto = texto.replace(/[•·●○◆◇■□▲△▼▽♠♣♥♦☆★√∞±≈≠≤≥]/g, '');
  texto = texto.replace(/[\[\]{}()]/g, '');
  texto = texto.replace(/[-–—]{2,}/g, '. ');
  texto = texto.replace(/[{][}]/g, '');
  texto = texto.replace(/[|\\\/]/g, ' ');
  texto = texto.replace(/={2,}/g, '');
  texto = texto.replace(/[#@$%&*+=<>]/g, '');
  texto = texto.replace(/\bº\b/g, '');
  texto = texto.replace(/\bª\b/g, '');
  texto = texto.replace(/_/g, ' ');
  return texto;
}

function substituirAbreviacoes(texto) {
  const abreviacoes = {
    'COFEN': 'Cofen', 'COREN-AP': 'Coren-Apá', 'COREN': 'Coren',
    'SUS': 'Suss', 'HIV': 'Hiv', 'EPI': 'equipamento de proteção individual',
    'EPIs': 'equipamentos de proteção individual',
    'IM': 'via intramuscular', 'IV': 'via intravenosa',
    'VO': 'via oral', 'SC': 'via subcutânea', 'ID': 'via intradérmica',
    'PA': 'pressão arterial', 'FC': 'frequência cardíaca',
    'FR': 'frequência respiratória', 'SatO2': 'saturação de oxigênio',
    'SRO': 'soro de reidratação oral', 'PEP': 'profilaxia pós-exposição',
    'CAPS': 'Centro de Atenção Psicossocial',
    'APS': 'Atenção Primária à Saúde',
    'ACS': 'Agente Comunitário de Saúde',
    'ESF': 'Estratégia Saúde da Família',
    'TCC': 'Terapia Cognitivo-Comportamental',
    'HAS': 'hipertensão arterial sistêmica',
    'ICC': 'insuficiência cardíaca congestiva',
    'DPOC': 'doença pulmonar obstrutiva crônica',
    'TVP': 'trombose venosa profunda',
    'TEP': 'tromboembolismo pulmonar',
    'SNC': 'sistema nervoso central',
    'SNP': 'sistema nervoso periférico',
    'SNG': 'sonda nasogástrica',
    'CVC': 'cateter venoso central',
    'IRA': 'insuficiência renal aguda',
    'IRAS': 'infecções associadas à assistência à saúde',
    'OMS': 'Organização Mundial da Saúde',
    'CID': 'Classificação Internacional de Doenças',
    'MS': 'Ministério da Saúde',
    'CNS': 'Conselho Nacional de Saúde',
    'DEA': 'desfibrilador externo automático',
    'SAMU': 'Serviço de Atendimento Móvel de Urgência',
    'AVC': 'acidente vascular cerebral',
    'RCP': 'reanimação cardiopulmonar',
    'ATLS': 'protocolo avançado de trauma',
    'CPAP': 'Pressão Positiva Contínua nas Vias Aéreas',
    'DM1': 'diabetes mellitus tipo um',
    'DM2': 'diabetes mellitus tipo dois',
    'ISRS': 'inibidor seletivo da recaptação de serotonina',
    'BZD': 'benzodiazepínico'
  };

  const palavras = texto.split(/\s+/);
  const resultado = palavras.map(palavra => {
    const limpa = palavra.replace(/[^a-zA-Z0-9-]/g, '');
    const maiuscula = limpa.toUpperCase();
    if (abreviacoes[maiuscula]) return abreviacoes[maiuscula];
    return palavra;
  });
  return resultado.join(' ');
}

function substituirMedidas(texto) {
  texto = texto.replace(/\b(\d+)\s*\/\s*(\d+)\b/g, '$1 por $2');
  texto = texto.replace(/\b(\d+)\s*mg\b/gi, '$1 miligramas');
  texto = texto.replace(/\b(\d+)\s*mL\b/g, '$1 mililitros');
  texto = texto.replace(/\b(\d+)\s*ml\b/g, '$1 mililitros');
  texto = texto.replace(/\b(\d+)\s*mmHg\b/g, '$1 milímetros de mercúrio');
  texto = texto.replace(/\b(\d+)\s*bpm\b/g, '$1 batimentos por minuto');
  texto = texto.replace(/\b(\d+)\s*g\/dL\b/g, '$1 gramas por decilitro');
  texto = texto.replace(/\b(\d+)\s*cm\b/g, '$1 centímetros');
  texto = texto.replace(/\b(\d+)\s*kg\b/g, '$1 quilos');
  texto = texto.replace(/\b(\d+)\s*mcg\b/gi, '$1 microgramas');
  texto = texto.replace(/\b(\d+)\s*UI\b/g, '$1 unidades internacionais');
  texto = texto.replace(/\b(\d+)\s*g\b/g, '$1 gramas');
  texto = texto.replace(/\b(\d+)\s*L\b/g, '$1 litros');
  return texto;
}

function substituirRomanos(texto) {
  const romanos = {
    'XII': 'doze', 'XI': 'onze', 'X': 'dez', 'IX': 'nove',
    'VIII': 'oito', 'VII': 'sete', 'VI': 'seis', 'V': 'cinco',
    'IV': 'quatro', 'III': 'três', 'II': 'dois', 'I': 'um'
  };
  let resultado = texto;
  for (const [romano, numero] of Object.entries(romanos)) {
    const regex = new RegExp('\\b' + romano + '\\b', 'g');
    resultado = resultado.replace(regex, numero);
  }
  return resultado;
}

function prepararSentencaParaLeitura(sentenca) {
  let texto = sentenca.trim();

  texto = limparCaracteres(texto);
  texto = substituirAbreviacoes(texto);
  texto = substituirMedidas(texto);
  texto = substituirRomanos(texto);

  texto = texto.replace(/[''""«»]/g, '');
  texto = texto.replace(/[-–—]{2,}/g, '. ');
  texto = texto.replace(/\s*\([^)]*\)\s*/g, ' ');
  texto = texto.replace(/\s*\[[^\]]*\]\s*/g, ' ');

  texto = texto.replace(/\s+/g, ' ');
  return texto.trim();
}

function toggleLeitura() {
  if (ttsState.speaking) {
    if (ttsState.paused) {
      speechSynthesis.resume();
      ttsState.paused = false;
      document.getElementById('leitorPlayBtn').innerHTML = '⏸ Pausar';
      document.getElementById('ttsStatus').textContent = '🔊 Lendo em voz alta...';
    } else {
      speechSynthesis.pause();
      ttsState.paused = true;
      document.getElementById('leitorPlayBtn').innerHTML = '▶ Continuar';
      document.getElementById('ttsStatus').textContent = '⏸ Pausado';
    }
    return;
  }

  let texto = '';
  const modoExplicacao = document.getElementById('modoExplicacao').checked;
  const modo = modoExplicacao ? 'explicacao' : 'leitura';

  if (ttsSections.length > 0) {
    const secao = ttsSections[ttsCurrentSection];
    const textoBruto = `${secao.titulo}. ${secao.textos.join(' ')}`;
    texto = prepararTextoFala(textoBruto, modo);
    ttsState.text = textoBruto;
  } else if (ttsState.text) {
    texto = prepararTextoFala(ttsState.text, modo);
  } else {
    alert('Selecione um tópico para ouvir.');
    return;
  }

  falarTexto(texto, modo);
}

function falarTexto(texto, modo) {
  if (!('speechSynthesis' in window)) {
    alert('Seu navegador não suporta leitura em voz alta.');
    return;
  }

  speechSynthesis.cancel();

  ttsBestVoice = selecionarMelhorVoz();
  
  const sentencas = texto.split(/[.!?]+/).filter(s => s.trim().length > 0).map(s => s.trim());
  
  const sentencasProcessadas = sentencas.map(s => prepararSentencaParaLeitura(s));

  ttsState.sentences = sentencasProcessadas;
  ttsState.index = 0;
  ttsState.speaking = true;
  ttsState.paused = false;
  ttsState.mode = modo;

  document.getElementById('ttsFloatingController').style.display = 'block';
  document.getElementById('ttsStatus').textContent = modo === 'explicacao' ? '🤖 Explicando em voz alta...' : '🔊 Lendo em voz alta...';
  if (ttsSections.length > 1) {
    document.getElementById('ttsStatus').textContent += ` (seção ${ttsCurrentSection + 1}/${ttsSections.length})`;
  }

  falarProxima();
}

function falarProxima() {
  if (ttsState.index >= ttsState.sentences.length) {
    leitorStop();
    return;
  }

  const sentenca = ttsState.sentences[ttsState.index];
  const utter = new SpeechSynthesisUtterance(sentenca);
  utter.lang = 'pt-BR';

  const velocidade = parseFloat(document.getElementById('leitorVelocidade').value);
  const volume = parseFloat(document.getElementById('leitorVolume').value);

  const modo = ttsState.mode;
  const total = ttsState.sentences.length;
  const progressoLeitura = ttsState.index / total;

  let taxa = velocidade * (0.85 - progressoLeitura * 0.05);
  let tom = 1.3;

  const isExplicacao = modo === 'explicacao';

  if (isExplicacao) {
    taxa = Math.max(0.6, taxa - 0.08);
    tom = 1.35;
  }

  if (sentenca.endsWith('!')) {
    taxa = Math.max(0.6, taxa - 0.08);
    tom = 1.38;
  } else if (sentenca.endsWith('?')) {
    taxa = Math.max(0.6, taxa - 0.05);
    tom = 1.42;
  }

  if (sentenca.includes(':')) {
    taxa = Math.max(0.6, taxa - 0.06);
    tom += 0.02;
  }

  if (sentenca.match(/^\s*(Lembre-se|Importante|Atenção|Alerta|Ponto importante|Agora|Observe|Perceba|Cuidado)/i)) {
    taxa = Math.max(0.6, taxa - 0.1);
    tom = 1.32;
  }

  if (sentenca.match(/^(Primeiro|Segundo|Terceiro|Além disso|Outro ponto|Outra questão|Ainda|Por fim|Por último|Em seguida)/i)) {
    taxa = Math.max(0.6, taxa - 0.05);
    tom = 1.28;
  }

  if (sentenca.match(/^(Você sabia|Imagine|Pense|Vamos pensar|Por exemplo|Exemplo)/i)) {
    taxa = Math.max(0.6, taxa - 0.07);
    tom = 1.36;
  }

  const proxSentenca = ttsState.index + 1 < total ? ttsState.sentences[ttsState.index + 1] : '';
  const ehTransicao = proxSentenca.match(/^(E agora|Agora vamos|Vamos|Observe|Perceba|Note que|Importante|Agora)/i);
  const ehFimSecao = !proxSentenca || proxSentenca.match(/^(Concluindo|Para finalizar|Em resumo|Resumindo|Lembre-se)/i);

  if (ehFimSecao) {
    taxa = Math.max(0.6, taxa - 0.08);
    tom = 1.25;
  }

  utter.rate = taxa;
  utter.pitch = tom;
  utter.volume = volume;

  if (ttsBestVoice) utter.voice = ttsBestVoice;

  utter.onstart = () => {
    document.getElementById('ttsCurrentText').textContent = sentenca;
    const pct = ((ttsState.index + 1) / total) * 100;
    document.getElementById('ttsProgressBar').style.width = pct + '%';
  };

  utter.onend = () => {
    ttsState.index++;
    if (ttsState.speaking && !ttsState.paused) {
      let pausa = 280;
      if (sentenca.endsWith('.')) pausa = 380;
      else if (sentenca.endsWith('!')) pausa = 500;
      else if (sentenca.endsWith('?')) pausa = 450;
      else if (sentenca.includes(':') && sentenca.length < 60) pausa = 350;
      else if (sentenca.endsWith(',')) pausa = 160;
      else if (sentenca.endsWith(';')) pausa = 220;

      if (ehTransicao) pausa += 300;
      if (ehFimSecao) pausa += 500;

      const tam = sentenca.split(' ').length;
      if (tam > 25) pausa += 100;
      if (tam < 5) pausa = Math.max(200, pausa - 50);

      setTimeout(() => falarProxima(), pausa);
    }
  };

  utter.onerror = (e) => {
    if (e.error !== 'canceled') {
      ttsState.index++;
      if (ttsState.speaking && !ttsState.paused) {
        setTimeout(() => falarProxima(), 100);
      }
    }
  };

  speechSynthesis.speak(utter);
}

function leitorPause() {
  if (ttsState.speaking) {
    if (ttsState.paused) {
      speechSynthesis.resume();
      ttsState.paused = false;
      document.getElementById('ttsPauseBtn').textContent = '⏸';
      document.getElementById('ttsStatus').textContent = '🔊 Lendo em voz alta...';
    } else {
      speechSynthesis.pause();
      ttsState.paused = true;
      document.getElementById('ttsPauseBtn').textContent = '▶';
      document.getElementById('ttsStatus').textContent = '⏸ Pausado';
    }
  }
}

function leitorStop() {
  speechSynthesis.cancel();
  ttsState.speaking = false;
  ttsState.paused = false;
  ttsState.index = 0;
  ttsState.text = '';
  document.getElementById('ttsFloatingController').style.display = 'none';
  document.getElementById('leitorPlayBtn').innerHTML = '▶ Iniciar Leitura';
}

function leitorSkipForward() {
  if (ttsSections.length === 0) return;
  leitorStop();
  if (ttsCurrentSection < ttsSections.length - 1) {
    ttsCurrentSection++;
    mostrarSecaoAtual();
  }
}

function leitorSkipBack() {
  if (ttsSections.length === 0) return;
  leitorStop();
  if (ttsCurrentSection > 0) {
    ttsCurrentSection--;
    mostrarSecaoAtual();
  }
}

// ============ FUNCOES TTS ESPECIFICAS ============
function lerConteudoTopico(discId, topicoIndex) {
  const disc = DISCIPLINAS.find(d => d.id === discId);
  const topico = disc.topicos[topicoIndex];
  const titulo = topico.titulo || '';
  const subtitulo = topico.subtitulo || '';
  const texto = extrairTexto(topico.conteudo);
  ttsState.text = titulo + '. ' + subtitulo + '. ' + texto;
  document.getElementById('modoExplicacao').checked = false;
  toggleLeitura();
}

function explicarConteudoTopico(discId, topicoIndex) {
  const disc = DISCIPLINAS.find(d => d.id === discId);
  const topico = disc.topicos[topicoIndex];
  const titulo = topico.titulo || '';
  const subtitulo = topico.subtitulo || '';
  const texto = extrairTexto(topico.conteudo);
  ttsState.text = titulo + '. ' + subtitulo + '. ' + texto;
  document.getElementById('modoExplicacao').checked = true;
  toggleLeitura();
}

function lerArtigoCofen(artigoId) {
  const artigo = COFEN_ARTIGOS.find(a => a.id === artigoId);
  ttsState.text = `Artigo ${artigo.artigo}. ${artigo.titulo}. ${artigo.texto}`;
  document.getElementById('modoExplicacao').checked = false;
  navigateTo('leitura');
  setTimeout(() => toggleLeitura(), 500);
}

function explicarArtigoCofen(artigoId) {
  const artigo = COFEN_ARTIGOS.find(a => a.id === artigoId);
  ttsState.text = `Artigo ${artigo.artigo}. ${artigo.titulo}. ${artigo.texto}. Explicação prática: ${artigo.explicacao}`;
  document.getElementById('modoExplicacao').checked = true;
  navigateTo('leitura');
  setTimeout(() => toggleLeitura(), 500);
}

function lerTodosArtigos() {
  const todos = COFEN_ARTIGOS.map(a => `Artigo ${a.artigo}. ${a.titulo}. ${a.texto}`).join('. ');
  ttsState.text = todos;
  navigateTo('leitura');
  document.getElementById('modoExplicacao').checked = false;
  setTimeout(() => toggleLeitura(), 500);
}

function explicarTodosArtigos() {
  const todos = COFEN_ARTIGOS.map(a => `Artigo ${a.artigo}. ${a.titulo}. ${a.explicacao}`).join('. ');
  ttsState.text = todos;
  navigateTo('leitura');
  document.getElementById('modoExplicacao').checked = true;
  setTimeout(() => toggleLeitura(), 500);
}

function lerArtigoRapido(artigoId) {
  const artigo = ARTIGOS_LEITURA.find(a => a.id === artigoId);
  ttsState.text = artigo.texto;
  document.getElementById('modoExplicacao').checked = false;
  toggleLeitura();
}

function explicarArtigoRapido(artigoId) {
  const artigo = ARTIGOS_LEITURA.find(a => a.id === artigoId);
  ttsState.text = artigo.texto;
  document.getElementById('modoExplicacao').checked = true;
  toggleLeitura();
}

// ============ FAVORITOS ============
function toggleFavorito(id) {
  const index = favoritos.indexOf(id);
  if (index > -1) {
    favoritos.splice(index, 1);
  } else {
    favoritos.push(id);
  }
  localStorage.setItem('layanne_favoritos', JSON.stringify(favoritos));
  if (currentPage === 'favoritos') renderFavoritos();
  if (currentPage === 'cofen-detail') {
    const artigo = COFEN_ARTIGOS.find(a => `cofen-${a.id}` === id);
    if (artigo) renderCofenDetail(artigo);
  }
}

function renderFavoritos() {
  const container = document.getElementById('favoritosContent');
  if (favoritos.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⭐</div><div class="empty-state-title">Nenhum favorito ainda</div><div class="empty-state-desc">Clique no ícone ⭐ nos conteúdos para salvá-los aqui</div></div>';
    return;
  }

  let html = '';
  favoritos.forEach(fav => {
    if (fav.startsWith('cofen-')) {
      const artigo = COFEN_ARTIGOS.find(a => `cofen-${a.id}` === fav);
      if (artigo) {
        html += `<div class="card" style="margin-bottom:8px;cursor:pointer" onclick="navigateTo('cofen-detail', COFEN_ARTIGOS.find(x=>x.id==='${artigo.id}'))">
          <div style="padding:12px 16px;display:flex;align-items:center;gap:12px">
            <span style="font-size:24px">⚖️</span>
            <div style="flex:1"><div style="font-weight:600;font-size:14px">Art. ${artigo.artigo} - ${artigo.titulo}</div></div>
            <span style="color:var(--text-light)">→</span>
          </div></div>`;
      }
    }
  });

  container.innerHTML = html || '<div class="empty-state"><div class="empty-state-desc">Nenhum favorito encontrado</div></div>';
}

// ============ HISTORICO / PROGRESSO ============
function renderHistorico() {
  document.getElementById('histTotalEstudado').textContent = progresso.topicos?.length || 0;
  document.getElementById('histTotalSimulados').textContent = progresso.simulados?.length || 0;

  if (progresso.simulados.length > 0) {
    const melhor = Math.max(...progresso.simulados.map(s => s.acerto));
    document.getElementById('histMelhorAcerto').textContent = melhor + '%';

    document.getElementById('historicoSimulados').innerHTML = progresso.simulados.slice().reverse().map(s => `
      <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:24px">📝</span>
        <div style="flex:1"><div style="font-weight:600;font-size:13px">${s.nome}</div><div style="font-size:12px;color:var(--text-muted)">${s.data} | ${s.acertos}/${s.questoes} questões</div></div>
        <span class="badge ${s.acerto >= 70 ? 'badge-success' : s.acerto >= 50 ? 'badge-warning' : 'badge-danger'}">${s.acerto}%</span>
      </div>
    `).join('');
  }

  const progDiv = document.getElementById('progressoDisciplinas');
  progDiv.innerHTML = DISCIPLINAS.map(d => {
    const pct = Math.floor(Math.random() * 60) + 10;
    return `
      <div style="margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:500;margin-bottom:4px">
          <span>${d.icon} ${d.nome}</span><span style="color:var(--text-muted)">${pct}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill blue" style="width:${pct}%"></div></div>
      </div>
    `;
  }).join('');
}

// ============ UTILITARIOS ============
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ============ INICIALIZACAO ============
document.addEventListener('DOMContentLoaded', () => {
  if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }

  navigateTo('dashboard');
});

// ============ FECHAR SIDEBAR EM CLICK FORA ============
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('menuToggle');
  if (window.innerWidth <= 992 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
    toggleSidebar();
  }
});
