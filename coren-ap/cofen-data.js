// ============================================================================
// LAYANNE - Dados do Código de Ética - COFEN 564/2017
// Resolução COFEN nº 564/2017 - Código de Ética dos Profissionais de Enfermagem
// COREN-AP | Conselho Regional de Enfermagem do Amapá
// ============================================================================

const COFEN_DISCIPLINA = {
  id: "cofen-etica",
  nome: "Código de Ética - COFEN 564/2017",
  icon: "⚖️",
  cor: "#6f42c1",
  categoria: "ético-legal",
  descricao: "Código de Ética dos Profissionais de Enfermagem, Resolução COFEN nº 564/2017. Estudo dos direitos, deveres e proibições éticas dos profissionais de enfermagem.",
  imagem: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400",
  totalTopicos: 5,
  topicos: [
    {
      id: "cofen-preambulo",
      titulo: "Preâmbulo e Princípios Fundamentais",
      subtitulo: "Pilares da atuação ética em Enfermagem",
      conteudo: `<h2>Preâmbulo do Código de Ética</h2>
<p>A profissão de Enfermagem, no exercício de suas atividades, compromete-se com o ser humano, com a coletividade e com a classe profissional, observando os princípios da dignidade da pessoa humana, da beneficência, da não-maleficência, da justiça, da autonomia e da veracidade.</p>

<div class="important-box">
<strong>Princípios Fundamentais (Art. 1º):</strong>
<ul>
<li><strong>Dignidade:</strong> Respeito absoluto ao ser humano como valor em si mesmo</li>
<li><strong>Beneficência:</strong> Obrigação de fazer o bem ao paciente</li>
<li><strong>Não-maleficência:</strong> Nunca causar dano intencionalmente</li>
<li><strong>Justiça:</strong> Tratar todos igualmente, sem discriminação</li>
<li><strong>Autonomia:</strong> Respeitar as decisões do paciente</li>
<li><strong>Veracidade:</strong> Sempre dizer a verdade</li>
</ul>
</div>

<div class="highlight-box">
<strong>Por que isso importa na prática:</strong>
<p>Tudo que você faz como profissional de Enfermagem deve respeitar esses 6 pilares. Se você está em dúvida sobre algo, pergunte: "Estou agindo com dignidade? Estou fazendo o bem? Posso causar dano? Sou justo? Respeitei a decisão do paciente? Estou sendo honesto?"</p>
</div>

<h3>Deveres Gerais (Art. 2º)</h3>
<p>São deveres dos profissionais de Enfermagem cumprir e fazer cumprir as normas regulamentares da profissão, bem como as disposições legais e institucionais que lhes sejam pertinentes.</p>

<div class="warning-box">
<strong>Alerta:</strong> Não cumprir normas éticas e legais pode resultar em advertência, suspensão ou cassação do registro no COREN-AP.
</div>`
    },
    {
      id: "cofen-direitos",
      titulo: "Direitos dos Profissionais",
      substrito: "Artigos 3º ao 23º - Garantias trabalhistas e profissionais",
      conteudo: `<h2>Direitos dos Profissionais de Enfermagem</h2>

<h3>Dignidade e Exercício (Art. 3º e 6º)</h3>
<ul>
<li>Zele pela dignidade da profissão - não permita que seja desvalorizada</li>
<li>Livre exercício das atividades inerentes à profissão</li>
<li>Deve estar devidamente habilitado e registrado no COREN</li>
</ul>

<div class="highlight-box">
<strong>Exercício Livre (Art. 6º):</strong>
<p>Você tem direito de trabalhar em qualquer lugar do país, desde que com registro ativo no COREN. Ninguém pode impedir seu exercício legal.</p>
</div>

<h3>Liberdades Profissionais (Art. 7º, 8º e 9º)</h3>
<table>
<thead>
<tr><th>Artigo</th><th>Direito</th><th>Exemplo Prático</th></tr>
</thead>
<tbody>
<tr><td>Art. 7º</td><td>Liberdade de escolha do local</td><td>Escolher entre hospital, clínica, escola</td></tr>
<tr><td>Art. 8º</td><td>Participação em entidades</td><td>Ser membro do COREN-AP, sindicatos</td></tr>
<tr><td>Art. 9º</td><td>Recusar ordens ileis</td><td>Recusar aplicar medicação sem prescrição</td></tr>
</tbody>
</table>

<div class="important-box">
<strong>Art. 9º - Direito de Recusar:</strong>
<p>Se mandarem fazer algo contra ética, lei ou protocolo, você pode e DEVE recusar. Comunique o fato ao superior hierárquico. Exemplo: aplicar medicação sem prescrição, assinar documento falso.</p>
</div>

<h3>Condições de Trabalho (Art. 10º ao 14º)</h3>
<ul>
<li><strong>Art. 10º:</strong> Remuneração justa e condigna pelo trabalho</li>
<li><strong>Art. 11:</strong> Direito à saúde e segurança no trabalho - não pode trabalhar sem EPIs</li>
<li><strong>Art. 12:</strong> Identidade profissional - use uniforme e crachá sempre</li>
<li><strong>Art. 13:</strong> Direito à informação e comunicação eficaz</li>
<li><strong>Art. 14:</strong> Direito à educação continuada</li>
</ul>

<div class="warning-box">
<strong>Alerta:</strong> A empresa é obrigada a fornecer EPIs e garantir ambientes seguros. Trabalhar em condições insalubres sem proteção é crime.
</div>`
    },
    {
      id: "cofen-deveres",
      titulo: "Deveres dos Profissionais",
      subtitulo: "Artigos 15º ao 30º - Obrigações éticas e legais",
      conteudo: `<h2>Deveres dos Profissionais de Enfermagem</h2>

<h3>Deveres Comuns (Art. 15º ao 23º)</h3>
<table>
<thead>
<tr><th>Artigo</th><th>Dever</th><th>Prática no Dia a Dia</th></tr>
</thead>
<tbody>
<tr><td>15</td><td>Conhecimentos atualizados</td><td>Participar de cursos, congressos</td></tr>
<tr><td>16</td><td>Recursos terapêuticos</td><td>Só usar para os quais foi habilitado</td></tr>
<tr><td>17</td><td>Prescrições médicas</td><td>Verificar os 5 certos, registrar</td></tr>
<tr><td>18</td><td>Normas éticas e legais</td><td>Nunca agir contra ética ou lei</td></tr>
<tr><td>19</td><td>Sigilo profissional</td><td>Nunca contar casos de pacientes</td></tr>
<tr><td>20</td><td>Segurança do paciente</td><td>Verificar identidade, alergias</td></tr>
<tr><td>21</td><td>Aconselhamento genético</td><td>Orientar com base em normas COREN</td></tr>
<tr><td>22</td><td>Educação em saúde</td><td>Participar de campanhas</td></tr>
<tr><td>23</td><td>Prescrição de Enfermagem</td><td>Implementar e avaliar prescrições</td></tr>
</tbody>
</table>

<div class="important-box">
<strong>Sigilo Profissional (Art. 19º):</strong>
<p>Tudo que você vê e ouve sobre o paciente DEVE ficar com você. Não conte casos na copa, não poste fotos. Sigilo só pode ser quebrado por determinação judicial.</p>
</div>

<h3>Deveres Específicos (Art. 24º ao 30º)</h3>
<ul>
<li><strong>Art. 24:</strong> Comunicar ao COREN o endereço de trabalho em até 30 dias</li>
<li><strong>Art. 25:</strong> Manter identidade profissional visível</li>
<li><strong>Art. 26:</strong> Uso de anestésicos e psicotrópicos apenas com prescrição</li>
<li><strong>Art. 27:</strong> Comunicar intercorrências ao médico em até 24 horas</li>
</ul>

<div class="warning-box">
<strong>Alerta:</strong> Medicamentos controlados (Art. 26º) só com prescrição em receita azul ou amarela. Administre, controle estoque, registre e devolva. Nunca sem prescrição.
</div>`
    },
    {
      id: "cofen-proibicoes",
      titulo: "Vedações e Proibições",
      subtitulo: "Artigos 4º e 5º - O que NÃO pode fazer",
      conteudo: `<h2>Vedações aos Profissionais de Enfermagem</h2>

<h3>Proibições Absolutas (Art. 4º e 5º)</h3>

<div class="warning-box" style="background: linear-gradient(135deg, #dc354515, #dc354510); border-left: 4px solid #dc3545;">
<strong>Art. 4º - Proibição de Recusar Cuidados:</strong>
<p>É vedado recusar-se a prestar cuidados ao ser humano em qualquer circunstância, salvo previsto em lei. Exceção: risco grave à vida do profissional sem proteção.</p>
</div>

<div class="warning-box" style="background: linear-gradient(135deg, #dc354515, #dc354510); border-left: 4px solid #dc3545;">
<strong>Art. 5º - Proibição de Práticas de Risco:</strong>
<p>É vedado exercer atividades que coloquem em risco a vida humana. Inclui: procedimentos para os quais não foi capacitado, manipular medicamentos sem prescrição.</p>
</div>

<h3>Outras Vedações Importantes</h3>
<table>
<thead>
<tr><th>Artigo</th><th>O que é Proibido</th><th>Consequência</th></tr>
</thead>
<tbody>
<tr><td>Art. 4º</td><td>Recusar atender paciente</td><td>Advertência a cassação</td></tr>
<tr><td>Art. 5º</td><td>Praticar atos de risco</td><td>Responsabilidade civil e criminal</td></tr>
<tr><td>Art. 18</td><td>Agir contra ética ou lei</td><td>Cassação COREN</td></tr>
<tr><td>Art. 19</td><td>Quebrar sigilo profissional</td><td>Processo ético e criminal</td></tr>
<tr><td>Art. 26</td><td>Usar controlados sem receita</td><td>Crime (art. 338 CP)</td></tr>
</tbody>
</table>

<div class="important-box">
<strong>Exemplo Prático de Recusa Permitida (Art. 9º):</strong>
<p>Se o médico pedir para você aplicar uma medicação que não está prescrita, você pode recusar. Comunique o fato ao superior hierárquico e registre no prontuário.</p>
</div>

<div class="highlight-box">
<strong>Regra de Ouro:</strong>
<p>Se algo está errado, pare, avalie, converse e registre. Sua responsabilidade é enorme e você pode ser processado civil e criminalmente por erros evitáveis.</p>
</div>`
    },
    {
      id: "cofen-aplicacao",
      titulo: "Aplicação Prática no COREN-AP",
      subtitulo: "Como aplicar o Código de Ética no Amapá",
      conteudo: `<h2>Aplicação Prática no COREN-AP</h2>

<h3>Sobre o COREN-AP</h3>
<div class="highlight-box">
<strong>Conselho Regional de Enfermagem do Amapá</strong>
<ul>
<li>Fundação: 19 de novembro de 1992</li>
<li>Sede: Avenida FAB, 899, Bairro Buritizal, Macapá-AP</li>
<li>CEP: 68900-077</li>
<li>Telefone: (96) 3212-5763</li>
<li>E-mail: corenap@coren-ap.org.br</li>
</ul>
</div>

<h3>Registration and Regularization</h3>
<ul>
<li><strong>Registro Profissional:</strong> Obrigatório para exercer a profissão</li>
<li><strong>Anuidade:</strong> Deve ser paga anualmente para manter o registro ativo</li>
<li><strong>Atualização de Dados:</strong> Comunicar mudanças de endereço em até 30 dias</li>
</ul>

<h3>Situações que Geram Processo Ético</h3>
<table>
<thead>
<tr><th>Infração</th><th>Penalidade</th><th>Artigo</th></tr>
</thead>
<tbody>
<tr><td>Recusar atendimento</td><td>Advertência a cassação</td><td>Art. 4º</td></tr>
<tr><td>Praticar atos de risco</td><td>Suspensão a cassação</td><td>Art. 5º</td></tr>
<tr><td>Quebrar sigilo</td><td>Advertência a cassação</td><td>Art. 19</td></tr>
<tr><td>Uso irregular controlados</td><td>Cassação</td><td>Art. 26</td></tr>
<tr><td>Assinar documento falso</td><td>Cassação</td><td>Art. 18</td></tr>
</tbody>
</table>

<div class="important-box">
<strong>Direitos do Processado:</strong>
<ul>
<li>Direito ao contraditório e ampla defesa</li>
<li>Direito a advogado</li>
<li>Direito a apresentar provas</li>
<li>Direito a recursos</li>
</ul>
</div>

<div class="warning-box">
<strong>Alerta:</strong> A cassação do registro impede o exercício da profissão em todo o Brasil. É a penalidade mais grave do COREN.
</div>

<h3>Canais de Denúncia</h3>
<ul>
<li><strong>Telefone:</strong> (96) 3212-5763</li>
<li><strong>E-mail:</strong> nucleo.juridico@coren-ap.org.br</li>
<li><strong>Presencial:</strong> Sede do COREN-AP em Macapá</li>
</ul>

<div class="highlight-box">
<strong>Como Denunciar:</strong>
<p>Identifique-se, descreva os fatos com datas, horários e nomes. Anexe provas se possível. O COREN é obrigado a investigar todas as denúncias formalizadas.</p>
</div>`
    }
  ]
};

console.log('[COREN-AP] Dados do Código de Ética carregados com sucesso!');
console.log(`[COREN-AP] Total de tópicos: ${COFEN_DISCIPLINA.topicos.length}`);
