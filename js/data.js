// ============================================================================
// LAYANNE - Painel de Estudos para Técnico em Enfermagem
// Arquivo de Dados Completo - data.js
// COREN-AP | Conselho Regional de Enfermagem do Amapá
// Resolução COFEN n. 564/2017 - Código de Ética dos Profissionais de Enfermagem
// Versao: 2.0 | Encoding: UTF-8
// ============================================================================

const COFEN_ARTIGOS = [
  {
    id: "preambulo",
    artigo: "Pre.",
    titulo: "Preâmbulo do Código de Ética",
    texto: "A profissão de Enfermagem, no exercício de suas atividades, compromete-se com o ser humano, com a coletividade e com a classe profissional, observando os princípios da dignidade da pessoa humana, da beneficência, da não-maleficência, da justiça, da autonomia e da veracidade.",
    explicacao: "O preâmbulo estabelece os pilares fundamentais de toda a atuação do profissional de enfermagem. Tudo que você faz deve respeitar a dignidade do paciente, buscar o bem, evitar o mal, ser justo, respeitar decisões e ser honesto."
  },
  {
    id: "art-1", artigo: "1", titulo: "Princípios éticos fundamentais",
    texto: "O profissional de Enfermagem exercerá suas atividades observando, principalmente, os princípios da dignidade da pessoa humana, da beneficência, da não-maleficência, da justiça, da autonomia e da veracidade.",
    explicacao: "Base de tudo: agir com dignidade (respeito ao paciente), beneficência (fazer o bem), não-maleficência (não causar danos), justiça (tratar igualmente), autonomia (respeitar decisões) e veracidade (dizer a verdade)."
  },
  {
    id: "art-2", artigo: "2", titulo: "Cumprimento de normas",
    texto: "São deveres dos profissionais de Enfermagem cumprir e fazer cumprir as normas regulamentares da profissão, bem como as disposições legais e institucionais que lhes sejam pertinentes.",
    explicacao: "Você deve cumprir e fazer cumprir as normas do COREN-AP, leis e protocolos do hospital. Inclui normas de segurança, legislação sanitária e resoluções do COFEN."
  },
  {
    id: "art-3", artigo: "3", titulo: "Dignidade da profissão",
    texto: "O profissional de Enfermagem deverá velar pela dignidade da profissão, não devendo, em nenhum momento, e sob nenhuma alegação, permitir que a mesma seja desvalorizada.",
    explicacao: "Zele para que a enfermagem seja sempre valorizada. Não permita que outros diminuam seu papel, lute por condições dignas e demonstrar a importância da profissão."
  },
  {
    id: "art-4", artigo: "4", titulo: "Proibição de recusar cuidados",
    texto: "É vedado ao profissional de Enfermagem recusar-se a prestar cuidados ao ser humano em qualquer circunstância, ressalvados os casos previstos em lei.",
    explicacao: "Não é permitido recusar atender um paciente em situações extremas. Única exceção: quando a lei prevê, como risco grave a vida do profissional sem proteção."
  },
  {
    id: "art-5", artigo: "5", titulo: "Proibição de práticas de risco",
    texto: "É vedado ao profissional de Enfermagem exercer atividades que, por qualquer forma, coloquem em risco a vida humana.",
    explicacao: "Não realize procedimentos para os quais não foi capacitado, manipule medicamentos sem prescrição, ou qualquer ação que possa causar dano ao paciente."
  },
  {
    id: "art-6", artigo: "6", titulo: "Liberdade de exercício profissional",
    texto: "É assegurado ao profissional de Enfermagem o livre exercício das atividades inerentes à profissão, desde que devidamente habilitado e registrado no Conselho Regional de Enfermagem.",
    explicacao: "Você tem direito de trabalhar livremente em qualquer lugar do país, desde que com registro ativo no COREN-AP. Ninguém pode impedir seu exercício legal."
  },
  {
    id: "art-7", artigo: "7", titulo: "Liberdade de escolha do local",
    texto: "É assegurado ao profissional de Enfermagem a liberdade de escolha do local de trabalho, em conformidade com suas aptidões e expectativas, observadas as normas legais e regulamentares.",
    explicacao: "Você escolhe onde trabalhar: hospital, clínica, escola, indústria. Ninguém pode obrigar você a trabalhar em local específico."
  },
  {
    id: "art-8", artigo: "8", titulo: "Participação em entidades profissionais",
    texto: "É assegurado ao profissional de Enfermagem o direito de participar de entidades profissionais, sindicais ou representativas, sem constrangimento.",
    explicacao: "Você pode ser membro do COREN-AP, sindicatos e associações. Nenhum empregador pode impedir. É forma de fortalecer a categoria."
  },
  {
    id: "art-9", artigo: "9", titulo: "Direito de recusar ordens ileis",
    texto: "É assegurado ao profissional de Enfermagem o direito de recusar-se a cumprir determinação que esteja em desacordo com as normas éticas, legais ou institucionais, comunicando o fato ao superior hierárquico.",
    explicacao: "Se mandarem fazer algo contra ética, lei ou protocolo, você pode e DEVE recusar. Comunique ao superior o motivo. Exemplo: aplicar medicação sem prescrição."
  },
  {
    id: "art-10", artigo: "10", titulo: "Remuneração justa",
    texto: "É assegurado ao profissional de Enfermagem o direito à remuneração justa e condigna pelo exercício de suas atividades, conforme o trabalho executado.",
    explicacao: "Você tem direito a ganhar de forma justa, nunca abaixo do salário mínimo. Inclui gratificações noturnas, periculosidade e insalubridade."
  },
  {
    id: "art-11", artigo: "11", titulo: "Direito à Saúde e segurança no trabalho",
    texto: "É assegurado ao profissional de Enfermagem o direito à Saúde e a segurança no trabalho, sendo vedado o exercício em condições insalubres ou perigosas sem proteção adequada.",
    explicacao: "Não pode ser obrigado a trabalhar em ambiente de risco. Empresa deve fornecer EPIs e garantir ambientes seguros."
  },
  {
    id: "art-12", artigo: "12", titulo: "Identidade profissional",
    texto: "É assegurado ao profissional de Enfermagem o direito à identidade profissional, sendo obrigatório o uso da roupa de trabalho e da crachá de identificação.",
    explicacao: "Use uniforme e cracha com nome e registro COREN-AP sempre. Garante que o paciente saiba quem cuida dele e fortalece a identidade profissional."
  },
  {
    id: "art-13", artigo: "13", titulo: "Direito a informação",
    texto: "É assegurado ao profissional de Enfermagem o direito à informação e a comunicação eficaz com a equipe multiprofissional, visando a segurança do paciente.",
    explicacao: "Você tem direito de receber informações necessárias: prontuário, prescrições, exames. Comunique intercorrências de forma clara e tempestiva."
  },
  {
    id: "art-14", artigo: "14", titulo: "Direito a formação continuada",
    texto: "É assegurado ao profissional de Enfermagem o direito à educação continuada e ao aperfeiçoamento profissional.",
    explicacao: "Direito de estudar, fazer cursos, participar de congressos. A formação continuada é obrigatória para manter registro no COREN-AP."
  },
  {
    id: "art-15", artigo: "15", titulo: "Conhecimentos atualizados",
    texto: "São deveres dos profissionais de Enfermagem manter seus conhecimentos profissionais atualizados, participando de programas de educação continuada.",
    explicacao: "Estudo contínuo é obrigatório. Participe de cursos, palestras e congressos. Requisito para manter registro COREN e garantir atendimento de qualidade."
  },
  {
    id: "art-16", artigo: "16", titulo: "Recursos terapêuticos",
    texto: "São deveres dos profissionais de Enfermagem utilizar apenas os recursos terapêuticos para os quais esteja habilitado.",
    explicacao: "Só use medicamentos, equipamentos e procedimentos para os quais foi treinado. Não faça nada além da sua formação."
  },
  {
    id: "art-17", artigo: "17", titulo: "Aplicação correta de prescrições",
    texto: "São deveres dos profissionais de Enfermagem zelar pela aplicação correta das prescrições médicas e pelo cumprimento dos protocolos de Enfermagem.",
    explicacao: "Leia prescrições com atenção, verifique os 5 certos e registre. Se encontrar algo suspeito, converse com o médico antes de aplicar."
  },
  {
    id: "art-18", artigo: "18", titulo: "Respeito a normas éticas e legais",
    texto: "São deveres dos profissionais de Enfermagem respeitar os princípios éticos e legais da profissão, abster-se de praticar atos que prejudiquem a segurança do paciente.",
    explicacao: "Nunca agir contra ética ou lei. Não assine documentos falsos, não pratique eutanasia sem autorização e sempre respeite direitos do paciente."
  },
  {
    id: "art-19", artigo: "19", titulo: "Sigilo profissional",
    texto: "São deveres dos profissionais de Enfermagem manter sigilo absoluto sobre informações confiadas no exercício profissional, só podendo quebrá-lo por determinação judicial.",
    explicacao: "Tudo que você vê e ouve sobre o paciente DEVE ficar com você. Não conte casos na copa, não poste fotos. Sigilo só quebrado por ordem judicial."
  },
  {
    id: "art-20", artigo: "20", titulo: "Segurança do paciente",
    texto: "São deveres dos profissionais de Enfermagem observar os procedimentos de segurança e proteção do paciente, adotando medidas que previnam riscos e danos.",
    explicacao: "Verifique identidade antes de procedimentos, mantenha grades levantadas, verifique alergias antes de medicar e mantenha ambiente seguro."
  },
  {
    id: "art-21", artigo: "21", titulo: "Aconselhamento genético",
    texto: "São deveres dos profissionais de Enfermagem participar do aconselhamento genético, em consonância com as normas do Conselho Federal de Enfermagem.",
    explicacao: "Ao orientar sobre saúde reprodutiva e doenças genéticas, siga diretrizes do COREN. Importante em saúde da mulher e centros de atenção."
  },
  {
    id: "art-22", artigo: "22", titulo: "Educação em saúde",
    texto: "São deveres dos profissionais de Enfermagem participar do planejamento e execução de programas de educação em saúde.",
    explicacao: "Você é agente multiplicador. Participe de campanhas de vacinação, orientação sobre higiene, alimentação e prevenção de doenças."
  },
  {
    id: "art-23", artigo: "23", titulo: "Prescrição de Enfermagem",
    texto: "São deveres dos profissionais de Enfermagem realizar a prescrição de Enfermagem com base em conhecimentos científicos, técnicos e éticos.",
    explicacao: "A prescrição é privativa do enfermeiro. Como técnico, implemente, avalie e registre as prescrições. Colabore para cuidado integrado."
  },
  {
    id: "art-24", artigo: "24", titulo: "Comunicação ao COREN",
    texto: "São deveres dos profissionais de Enfermagem comunicar ao COREN, em até 30 dias, o endereço onde irá exercer a profissão.",
    explicacao: "Ao mudar de trabalho, informe o COREN-AP em até 30 dias. Necessário para manter registro atualizado."
  },
  {
    id: "art-25", artigo: "25", titulo: "Identidade visível",
    texto: "São deveres dos profissionais de Enfermagem manter a identidade profissional visível, apresentando-se de forma identificável.",
    explicacao: "Apresente-se ao paciente com nome e função. Use uniforme limpo e cracha visível. Humaniza atendimento e dá segurança."
  },
  {
    id: "art-26", artigo: "26", titulo: "Uso de anestésicos e psicotrópicos",
    texto: "São deveres dos profissionais de Enfermagem utilizar-se apenas de anestésicos, Psicotrópicos e entorpecentes para fins terapêuticos, mediante prescrição médica.",
    explicacao: "Medicamentos controlados só com prescrição em receita azul ou amarela. Administre, controle estoque, registre e devolva. Nunca sem prescrição."
  },
  {
    id: "art-27", artigo: "27", titulo: "Comunicação de intercorrências",
    texto: "São deveres dos profissionais de Enfermagem comunicar ao médico, em até 24 horas, qualquer intercorrência do paciente, registrando no prontuário.",
    explicacao: "Alterações (febre, queda PA, sangramento, alergia) devem ser comunicadas em até 24h e registradas. Garante continuidade do cuidado."
  },
  {
    id: "art-28", artigo: "28", titulo: "Privacidade e intimidade",
    texto: "São deveres dos profissionais de Enfermagem respeitar a privacidade e a intimidade do paciente, assegurando condições adequadas para procedimentos.",
    explicacao: "Use cortinas, feche portas, solicite saida de não autorizados. Respeite a intimidade como você gostaria que respeitassem a sua."
  },
  {
    id: "art-29", artigo: "29", titulo: "Trabalho em equipe",
    texto: "São deveres dos profissionais de Enfermagem participar da equipe multiprofissional, contribuindo para a qualidade do atendimento com respeito e harmonia.",
    explicacao: "Você faz parte de uma equipe. Colabore, compartilhe informações, respeite Colárguas. Trabalho em equipe salva vidas."
  },
  {
    id: "art-30", artigo: "30", titulo: "Encaminhamento a outros profissionais",
    texto: "São deveres dos profissionais de Enfermagem respeitar os limites de sua competência e encaminhar o paciente a outros profissionais, quando necessário.",
    explicacao: "Identifique necessidade além da sua atribuição e encaminhe ao profissional correto. Não tente tudo sozinho."
  },
  {
    id: "art-31", artigo: "31", titulo: "Conduta com dignidade",
    texto: "São deveres dos profissionais de Enfermagem manter conduta compatível com a dignidade e o decoro profissional.",
    explicacao: "Aja com profissionalismo sempre: não beba no trabalho, não faça piadas com sofrimento, não humilhe Colárguas. Sua conduta reflete a categoria."
  },
  {
    id: "art-32", artigo: "32", titulo: "Controle de infecções hospitalares",
    texto: "São deveres dos profissionais de Enfermagem participar do controle da infecção hospitalar, adotando medidas de prevenção e controle.",
    explicacao: "Lave mãos antes e depois, use EPI, higienize equipamentos, participe do NUCLEI de controle. Cada técnico é responsável por prevenir IACS."
  },
  {
    id: "art-33", artigo: "33", titulo: "Registro adequado",
    texto: "São deveres dos profissionais de Enfermagem registrar, de forma clara e objetiva, os dados pertinentes ao cuidado de Enfermagem no prontuário.",
    explicacao: "Escreva com data, hora e assinatura. Registre sinais vitais, observações, medicações e intercorrências. O prontuário é documento legal."
  },
  {
    id: "art-34", artigo: "34", titulo: "Colaboração com ensino e pesquisa",
    texto: "São deveres dos profissionais de Enfermagem colaborar com atividades de ensino, pesquisa e extensão.",
    explicacao: "Acolha estudantes, participe de pesquisas e contribua com extensão. Você é parte da formação dos futuros profissionais."
  },
  {
    id: "art-35", artigo: "35", titulo: "Ações comunitárias de saúde",
    texto: "São deveres dos profissionais de Enfermagem participar do planejamento e execução de ações de educação em saúde, incluindo programas de atenção básica.",
    explicacao: "Participe de mutirões de vacinação, busca ativa, palestras em escolas. A educação em saúde é ferramenta poderosa da enfermagem."
  },
  {
    id: "art-36", artigo: "36", titulo: "Normas de segurança do trabalho",
    texto: "São deveres dos profissionais de Enfermagem observar as normas de segurança do trabalho, proteção individual e coletiva.",
    explicacao: "Use EPIs sempre, conheça protocolos de emergência, extintores e rotas de fuga. Segurança protege você e pacientes."
  },
  {
    id: "art-37", artigo: "37", titulo: "Equipamentos de proteção",
    texto: "São deveres dos profissionais de Enfermagem utilizar equipamentos e instrumentos de proteção individual e coletiva, de acordo com normas técnicas.",
    explicacao: "Luvas, máscaras, aventais, óculos. Cada risco exige EPI específico. Não aceite trabalhar sem equipamentos necessários."
  },
  {
    id: "art-38", artigo: "38", titulo: "Comunicação de irregularidades",
    texto: "São deveres dos profissionais de Enfermagem comunicar ao COREN qualquer irregularidade presenciada no exercício profissional.",
    explicacao: "Profissional sem registro, maus-tratos, falhas graves: comunique ao COREN-AP. É proteção dos pacientes e da profissão."
  },
  {
    id: "art-39", artigo: "39", titulo: "Programas de qualidade",
    texto: "São deveres dos profissionais de Enfermagem participar de programas de melhoria da qualidade assistêncial e de gestão do cuidado.",
    explicacao: "Participe de indicadores de queda, infecção, tempo de espera. Seus dados ajudam a melhorar o atendimento."
  },
  {
    id: "art-40", artigo: "40", titulo: "Preceitos legais e regulamentares",
    texto: "São deveres dos profissionais de Enfermagem observar os preceitos legais e regulamentares relativos à profissão.",
    explicacao: "Mantenha-se informado sobre Lei 5905/72, Portarias do MS, Resoluções do COREN-AP e COFEN. Conhecer obrigações e direitos é essencial."
  },
  {
    id: "art-41", artigo: "41", titulo: "Princípios da Bioética",
    texto: "São deveres dos profissionais de Enfermagem observar os princípios da Bioética, no exercício de suas atividades.",
    explicacao: "Respeite diversidade, sensibilidade social, justiça distributiva. Em decisões éticas difíceis, busque orientação do COREN-AP e da equipe."
  },
  {
    id: "art-42", artigo: "42", titulo: "Prescrição conforme CFEN",
    texto: "São deveres dos profissionais de Enfermagem realizar a prescrição de Enfermagem conforme normas do CFEN, sendo de responsabilidade do enfermeiro.",
    explicacao: "Prescrição é privativa do enfermeiro. Técnico implementa, avalia e registra. Colabore com enfermeiro para cuidado integrado."
  },
  {
    id: "art-43", artigo: "43", titulo: "Programas de auditoria",
    texto: "São deveres dos profissionais de Enfermagem participar de programas de auditoria e avaliação da qualidade do cuidado.",
    explicacao: "Na auditoria, coopere com informações honestas. Seus registros serão avaliados - mantenha tudo em ordem."
  },
  {
    id: "art-44", artigo: "44", titulo: "Formação de profissionais",
    texto: "São deveres dos profissionais de Enfermagem contribuir para a formação dos profissionais de Enfermagem.",
    explicacao: "Acolha estagiários com paciência e profissionalismo. Ensine pelo exemplo. Seu papel de preceptor é fundamental."
  },
  {
    id: "art-45", artigo: "45", titulo: "Normas de prescrição de Enfermagem",
    texto: "São deveres dos profissionais de Enfermagem observar as normas de prescrição de Enfermagem do CFEN e do CNS.",
    explicacao: "Conheça como prescrições são feitas, implementadas e avaliadas. Isso melhora segurança do paciente."
  },
  {
    id: "art-46", artigo: "46", titulo: "Limites de competência",
    texto: "São deveres dos profissionais de Enfermagem observar os limites de sua competência e não se imiscuir em atividades privativas de outros profissionais.",
    explicacao: "Não faça o que não é da sua alçada. Não diagnostique, não prescreva. Respeite: médico diagnostica, enfermeiro prescreve, técnico executa."
  },
  {
    id: "art-47", artigo: "47", titulo: "Conceito de infração ético-disciplinar",
    texto: "Constitui infração ético-disciplinar todo ato praticado pelo profissional de Enfermagem que viole as disposições deste Código, as normas regulamentares e as leis da Enfermagem.",
    explicacao: "Infração é toda violação do Código de Ética, normas do COREN-AP ou leis da profissão. Qualquer violação gera processo administrativo."
  },
  {
    id: "art-48", artigo: "48", titulo: "Exemplos de infrações",
    texto: "São infrações: exercer sem registro, exercer atividades de outro profissional, utilizar a profissão para fins não legitimados.",
    explicacao: "Trabalhar sem COREN-AP, fazer procedimentos privativos de médico/enfermeiro, usar profissão para vender produtos. Gera processo e cassação."
  },
  {
    id: "art-49", artigo: "49", titulo: "Descumprimento de normas",
    texto: "Constitui infração o descumprimento das disposições legais e regulamentares aplicáveis à profissão e das normas éticas deste Código.",
    explicacao: "Desconhecimento não exclui responsabilidade. Estude o Código de Ética e conheça as leis. Descumpri-la sempre gera penalidade."
  },
  {
    id: "art-50", artigo: "50", titulo: "Abuso e mau exercício",
    texto: "São infrações os atos que configurem abuso profissional, mau exercício da profissão e exercício irregular.",
    explicacao: "Abuso: usar posição para favorecer/prejudicar. Mau exercício: negligência, imperícia, imprudência. Exercício irregular: sem registro."
  },
  {
    id: "art-51", artigo: "51", titulo: "Infrações contra o paciente",
    texto: "Constitui infração desrespeitar os direitos do paciente: vida, dignidade, privacidade, informação, consentimento e recusa de tratamento.",
    explicacao: "Não trate o paciente com desprezo, esconda informações ou realize procedimentos sem consentimento. Paciente pode recusar tratamento."
  },
  {
    id: "art-52", artigo: "52", titulo: "Improbidade, desidia e inassiduidade",
    texto: "São infrações os atos de improbidade, desidia e inassiduidade no exercício da profissão.",
    explicacao: "Improbidade: desonestidade (desviar materiais). Desidia: negligência (não dar medicação). Inassiduidade: faltas frequentes."
  },
  {
    id: "art-53", artigo: "53", titulo: "Qualquer ato contra princípios éticos",
    texto: "Constitui infração qualquer ato que desrespeite princípios éticos, legais e regulamentares, incluindo concorrência desleal e publicidade enganosa.",
    explicacao: "Divulgação falsa, concorrência desleal, cobrar valores abusivos, praticar medicina sem autorização. Qualquer violação gera punição."
  },
  {
    id: "art-54", artigo: "54", titulo: "Processo administrativo disciplinar",
    texto: "As infrações serão apuradas em processo administrativo disciplinar, assegurados o contraditório e a ampla defesa.",
    explicacao: "Ninguém é punido sem defesa. Direito a saber a acusação, apresentar provas, ter advogado e ser ouvido antes da decisão."
  },
  {
    id: "art-55", artigo: "55", titulo: "Tipos de penas",
    texto: "As penas disciplinares são: a) advertência; b) multa; c) suspensão; d) cassação do registro profissional.",
    explicacao: "4 níveis: ADVERTÊNCIA (falta leve), MULTA (falta média), SUSPENSÃO (falta grave, até 1 ano), CASSAÇÃO (falta gravíssima, mínimo 5 anos)."
  },
  {
    id: "art-56", artigo: "56", titulo: "Pena de advertência",
    texto: "A advertência será aplicada ao profissional que praticar infração leve, quando não houver reincidência.",
    explicacao: "Pena mais branda. Serve como alerta. Se houver reincidência, pena pode ser aumentada."
  },
  {
    id: "art-57", artigo: "57", titulo: "Pena de multa",
    texto: "A multa será aplicada ao profissional que praticar infração média, sendo o valor determinado pelo COFEN.",
    explicacao: "Para faltas intermediárias. Valor conforme gravidade. Não pagamento pode levar a suspensão do registro."
  },
  {
    id: "art-58", artigo: "58", titulo: "Pena de suspensão",
    texto: "A suspensão será aplicada ao profissional que praticar infração grave, impedindo-o do exercício por tempo determinado, até 360 dias.",
    explicacao: "Impede de trabalhar por até 1 ano. Aplicada em mau-tratos, abuso, negligência com dano. Não pode exercer em lugar nenhum."
  },
  {
    id: "art-59", artigo: "59", titulo: "Cassação do registro",
    texto: "A cassação será aplicada ao profissional que praticar infração gravíssima, impedindo o exercício pelo prazo mínimo de 5 anos.",
    explicacao: "Pena mais grave: perda do registro por mínimo 5 anos. Falsificação, homicídio por negligência, reincidência em suspensão."
  },
  {
    id: "art-60", artigo: "60", titulo: "Valor da multa",
    texto: "O valor da multa será fixado pelo COFEN, observados os limites legais, conforme gravidade e circunstâncias.",
    explicacao: "Circunstâncias agravantes aumentam valor. Atenuantes podem diminuir. Profissional pode parcelar pagamento."
  },
  {
    id: "art-61", artigo: "61", titulo: "Prazo da suspensão",
    texto: "A suspensão será por tempo determinado, não excedendo 360 dias, e será registrada no histórico profissional.",
    explicacao: "Fica registrada para sempre no histórico, visível em consultas ao COREN-AP."
  },
  {
    id: "art-62", artigo: "62", titulo: "Prazo da cassação",
    texto: "A cassação implicará impossibilidade de exercício pelo prazo mínimo de 5 anos, podendo ser reassumido após esse periodo.",
    explicacao: "Mínimo 5 anos para tentar recuperar registro. Não é garantido - COREN-AP avaliará o pedido."
  },
  {
    id: "art-63", artigo: "63", titulo: "Cumulação de penas",
    texto: "As penas de advertência e multa poderão ser aplicadas cumuladamente.",
    explicacao: "Você pode receber advertência e multa ao mesmo tempo quando a falta justifica ambos."
  },
  {
    id: "art-64", artigo: "64", titulo: "Reincidência",
    texto: "A reincidência poderá acarretar elevação da pena, levando a suspensão ou cassação.",
    explicacao: "Primeiro aviso, depois multa, depois suspensão, e por fim cassação. Reincidência demonstra desrespeito continuado."
  },
  {
    id: "art-65", artigo: "65", titulo: "Destituição de cargo",
    texto: "O profissional poderá ser destituído do cargo ou emprego em razão de infração ético-disciplinar.",
    explicacao: "Duas consequências: profissional (COREN-AP) e trabalhista (empregador). Poderão ocorrer separadamente."
  },
  {
    id: "art-66", artigo: "66", titulo: "Aplicação das penas pelos CORENs",
    texto: "Os CORENs aplicarão as penas de acordo com a gravidade, observado o devido processo legal e direito de defesa.",
    explicacao: "Cada COREN-AP aplica penas em sua jurisprudência. Decisões podem ser recorridas ao COFEN."
  },
  {
    id: "art-67", artigo: "67", titulo: "Casos omissos",
    texto: "Os casos omissos serão resolvidos pelo COFEN, que editará normas complementares necessárias.",
    explicacao: "Situação não prevista? O COFEN decide e cria novas regras. Garante que o Código sempre esteja atualizado."
  },
  {
    id: "art-68", artigo: "68", titulo: "Exercício ilegal da profissão",
    texto: "Constitui infração o exercício ilegal da profissão de Enfermagem, sem registro ou inscrição no Conselho Regional de Enfermagem.",
    explicacao: "Trabalhar sem registro ativo no COREN-AP é crime. Sempre verifique se seu registro está ativo antes de iniciar em novo local."
  },
  {
    id: "art-69", artigo: "69", titulo: "Uso indevido do título profissional",
    texto: "Constitui infração usar título profissional a que não tem direito, ou exercer atribuições privativas de outro profissional de Enfermagem.",
    explicacao: "Técnico não pode se intitular enfermeiro. Cada título tem atribuição específica. Usar título alheio é falta grave."
  },
  {
    id: "art-70", artigo: "70", titulo: "Exercício em locais não autorizados",
    texto: "Constitui infração exercer atividades em locais não autorizados pelo COREN ou sem as condições adequadas de segurança.",
    explicacao: "Ambientes sem condições mínimas de segurança comprometem pacientes e profissionais. Comunique ao COREN-AP."
  },
  {
    id: "art-71", artigo: "71", titulo: "Descumprimento de determinação do COREN",
    texto: "Constitui infração não atender as determinações do COREN, incluindo convocações, notificações e comparecimento.",
    explicacao: "O COREN-AP tem poder fiscalizador. Não atender convocação pode gerar penalidade."
  },
  {
    id: "art-72", artigo: "72", titulo: "Recebimento de vantagem indevida",
    texto: "Constitui infração receber vantagem indevida ou comissão por encaminhamento de pacientes, materiais ou medicamentos.",
    explicacao: "Não aceite propinas, comissões ou vantagens por indicação. Isso é éticamente condenável e gera penalidade."
  },
  {
    id: "art-73", artigo: "73", titulo: "Reclamação pública indevida",
    texto: "Constitui infração fazer reclamação pública infundada contra instituição, colega ou autoridade sanitária.",
    explicacao: "Críticas construtivas são bem-vindas, mas reclamações infundadas e públicas desabonam a profissão e geram responsabilidade."
  },
  {
    id: "art-74", artigo: "74", titulo: "Prática de charlatanismo",
    texto: "Constitui infração o charlatanismo, o sensacionalismo e a publicidade enganosa de serviços de Enfermagem.",
    explicacao: "Não prometa curas milagrosas, não divulgue serviços falsos. Atue sempre com base científica."
  },
  {
    id: "art-75", artigo: "75", titulo: "Abandono de paciente",
    texto: "Constitui infração abandonar paciente sob seus cuidados, salvo por justa causa devidamente comunicada.",
    explicacao: "Abandonar paciente é falta gravíssima. Única exceção: justa causa comunicada ao COREN-AP e superior hierárquico."
  },
  {
    id: "art-76", artigo: "76", titulo: "Inserção de dados falsos",
    texto: "Constitui infração inserir dados falsos em prontuários, registros de enfermagem ou documentos de controle.",
    explicacao: "Falsificar registros é crime. Dados reais protegem pacientes e profissionais. Mantenha registros sempre verdadeiros."
  },
  {
    id: "art-77", artigo: "77", titulo: "Divulgação de informações confidenciais",
    texto: "Constitui infração divulgar informações que quebrem o sigilo profissional ou exponham dados de pacientes sem autorização.",
    explicacao: "Relembre: sigilo profissional é sagrado. Divulgar dados sem autorização judicial gera penalidade e responsabilidade civil."
  },
  {
    id: "art-78", artigo: "78", titulo: "Ação de risco à Saúde pública",
    texto: "Constitui infração praticar ações que coloquem em risco à Saúde pública, não comunicando doenças de notificação obrigatória.",
    explicacao: "Comunicar doenças de notificação obrigatória é obrigação legal. Não comunicar é infração grave."
  },
  {
    id: "art-79", artigo: "79", titulo: "Ausência de registro de procedimentos",
    texto: "Constitui infração deixar de registrar procedimentos realizados, intercorrências ou sinais vitais no prontuário.",
    explicacao: "Se não registrou, não aconteceu. O prontuário é documento legal. Registre tudo que fizer."
  },
  {
    id: "art-80", artigo: "80", titulo: "Falta de responsabilidade com EPIs",
    texto: "Constitui infração não utilizar ou não fornecer equipamentos de proteção individual quando necessário.",
    explicacao: "Exigir EPI é direito. Não fornecer EPI é infração. Você deve usar e exigir os equipamentos necessários."
  },
  {
    id: "art-81", artigo: "81", titulo: "Falta de preparo para emergências",
    texto: "Constitui infração não se preparar para atender emergências, deixando de participar de treinamentos obrigatórios.",
    explicacao: "Treinamentos de RCP e emergências são obrigatórios. Não participar gera responsabilidade em caso de intercorrência."
  },
  {
    id: "art-82", artigo: "82", titulo: "Exercício sob influência de substâncias",
    texto: "Constitui infração exercer a profissão sob influência de álcool, drogás ou qualquer substância que comprometa o juízo.",
    explicacao: "Nunca trabalhe sob efeito de substâncias psicoativas. Compromete sua segurança e a do paciente."
  },
  {
    id: "art-83", artigo: "83", titulo: "Violação dos direitos do paciente",
    texto: "Constitui infração desrespeitar os direitos do paciente previstos na legislação sanitária vigente.",
    explicacao: "Paciente tem direito a vida, dignidade, informação, privacidade e consentimento. Desrespeitar gera penalidade."
  },
  {
    id: "art-84", artigo: "84", titulo: "Não comunicação de intercorrências",
    texto: "Constitui infração não comunicar ao médico ou enfermeiro intercorrências e alterações do estado do paciente.",
    explicacao: "Alterações devem ser comunicadas e registradas tempestivamente. Não comunicar compromete continuidade do cuidado."
  },
  {
    id: "art-85", artigo: "85", titulo: "Descuido com materiais e equipamentos",
    texto: "Constitui infração dar destino inadequado a materiais, equipamentos ou resíduos de serviços de saúde.",
    explicacao: "Gerencie resíduos conforme normas. Materiais contaminados vão para lixo infectante. Descuido gera contaminação."
  },
  {
    id: "art-86", artigo: "86", titulo: "Exercício de atribuições de outros profissionais",
    texto: "Constitui infração exercer atribuições privativas de enfermeiro ou médico, ultrapassando os limites da competência.",
    explicacao: "Técnico executa, não prescreve. Enfermeiro prescreve. Médico diagnostica. Respeite sua atribuição."
  },
  {
    id: "art-87", artigo: "87", titulo: "Falta de higiene pessoal e profissional",
    texto: "Constitui infração apresentar-se com falta de higiene pessoal ou vestir-se de forma inadequada ao exercício profissional.",
    explicacao: "Higiene e uniformização são obrigatórias. Transmite segurança e respeito ao paciente."
  },
  {
    id: "art-88", artigo: "88", titulo: "Uso indevido de recinto hospitalar",
    texto: "Constitui infração utilizar recinto hospitalar para fins estranhos ao atendimento de pacientes.",
    explicacao: "Ambientes clínicos são exclusivos para cuidado. Uso inadequado é infração."
  },
  {
    id: "art-89", artigo: "89", titulo: "Falta de identificação profissional",
    texto: "Constitui infração não portar ou não ostentar a identificação profissional durante o exercício.",
    explicacao: "Use cracha com nome e registro COREN-AP sempre visível. É obrigação legal."
  },
  {
    id: "art-90", artigo: "90", titulo: "Exercício sem condições éticas",
    texto: "Constitui infração exercer a profissão em condições que não assegurem os princípios éticos fundamentais.",
    explicacao: "Ambiente inadequado, falta de material ou pressão para agir contra ética: tudo isso gera responsabilidade."
  },
  {
    id: "art-91", artigo: "91", titulo: "Não participação em programas de qualidade",
    texto: "Constitui infração não participar de programas institucionais de qualidade, segurança do paciente e controle de infecções.",
    explicacao: "Participar de programas de qualidade é obrigação. Ajudam a melhorar o atendimento e prevenir eventos adversos."
  },
  {
    id: "art-92", artigo: "92", titulo: "Conduta anti-ética com Colárguas",
    texto: "Constitui infração praticar atos que desabonem a conduta profissional de Colárguas, injuriar ou difamar.",
    explicacao: "Respeite Colárguas. Críticas construtivas são bem-vindas, mas injúria e difamação geram penalidade."
  },
  {
    id: "art-93", artigo: "93", titulo: "Recusa injustificada de atendimento",
    texto: "Constitui infração recusar-se a prestar cuidados sem justificativa legal ou profissional.",
    explicacao: "Recusar atendimento só é permitido em casos extremos previstos em lei. Justifique sempre."
  },
  {
    id: "art-94", artigo: "94", titulo: "Não atendimento a convocação do COREN",
    texto: "Constitui infração não atender convocação do COREN para esclarecimentos ou comparecimento.",
    explicacao: "COREN-AP convoca profissionais para apurar irregularidades. Não comparecer gera penalidade."
  },
  {
    id: "art-95", artigo: "95", titulo: "Divulgação de título ou especialização não reconhecida",
    texto: "Constitui infração divulgar titulo, especialização ou qualificação profissional não reconhecida pelo COREN.",
    explicacao: "Só divulgue títulos e especializações oficialmente reconhecidos. Títulos falsos geram penalidade grave."
  },
  {
    id: "art-96", artigo: "96", titulo: "Não participação em mutirões sanitários",
    texto: "Constitui infração não participar, sem justificativa, de mutirões sanitários ou campanhas de saúde pública.",
    explicacao: "Mutirões de vacinação e campanhas são oportunidades de servir a comunidade. PARTICIPE."
  },
  {
    id: "art-97", artigo: "97", titulo: "Falta de responsabilidade com controlados",
    texto: "Constitui infração não zelar pelo controle de medicamentos Psicotrópicos e entorpecentes.",
    explicacao: "Medicamentos controlados exigem controle rigoroso. Perdas ou extravios geram responsabilidade."
  },
  {
    id: "art-98", artigo: "98", titulo: "Não comunicação de acidentes de trabalho",
    texto: "Constitui infração não comunicar acidentes de trabalho ao COREN ou ao serviço de segurança.",
    explicacao: "Acidentes devem ser registrados e comunicados. Protege profissionais e pacientes."
  },
  {
    id: "art-99", artigo: "99", titulo: "Descumprimento de normas de gestão de resíduos",
    texto: "Constitui infração não observar as normas de gestão de resíduos sólidos dos serviços de saúde.",
    explicacao: "Lixo infectante, químico, comum: cada um tem destino específico. Descumprir gera multa e responsabilidade."
  },
  {
    id: "art-100", artigo: "100", titulo: "Falta de participação em comitês de ética",
    texto: "Constitui infração não participar, quando convocado, de comitês de ética em saúde ou de ética profissional.",
    explicacao: "Comites de ética ajudam a resolver dilemas. Participar é obrigatoriedade quando convocado."
  },
  {
    id: "art-101", artigo: "101", titulo: "Não participação em programas de educação continuada",
    texto: "Constitui infração não participar de programas de educação continuada oferecidos pela instituição ou COREN.",
    explicacao: "Educação continuada é obrigatoriedade. Não participar compromete atualização profissional."
  },
  {
    id: "art-102", artigo: "102", titulo: "Qualquer outro ato previsto em legislação",
    texto: "Constitui infração qualquer outro ato previsto em legislação complementar ou regulamentar do COFEN e CORENs.",
    explicacao: "Legislação pode criar novas regras. Mantenha-se atualizado. Desconhecimento não exclui responsabilidade."
  },
  {
    id: "art-103", artigo: "103", titulo: "Classificação das infrações",
    texto: "As infrações ético-disciplinares serão classificadas em leves, medias, graves e gravíssimas, conforme a natureza e as circunstâncias.",
    explicacao: "Gravidade define a penalidade. Leves: advertência. Medias: multa. Graves: suspensão. Gravíssimas: cassação."
  },
  {
    id: "art-104", artigo: "104", titulo: "Infrações leves",
    texto: "Constituem infrações leves os atos que causem pequenos danos ao paciente, a profissão ou a coletividade, sem dano grave.",
    explicacao: "Exemplos: faltas injustificadas, descuido leve, atrasos. Pena: advertência."
  },
  {
    id: "art-105", artigo: "105", titulo: "Infrações médias",
    texto: "Constituem infrações médias os atos que causem danos moderados ao paciente, a profissão ou a coletividade.",
    explicacao: "Exemplos: negligência com resultado moderado, imprudência sem dano grave. Pena: multa."
  },
  {
    id: "art-106", artigo: "106", titulo: "Infrações graves",
    texto: "Constituem infrações graves os atos que causem danos graves ao paciente, a profissão ou a coletividade.",
    explicacao: "Exemplos: mau-trato, imperícia com dano grave, abandono parcial. Pena: suspensão até 360 dias."
  },
  {
    id: "art-107", artigo: "107", titulo: "Infrações gravíssimas",
    texto: "Constituem infrações gravíssimas os atos que causem danos muito graves ao paciente, a profissão ou a coletividade.",
    explicacao: "Exemplos: homicídio por negligência, falsificação de documentos, exercício ilegal. Pena: cassação."
  },
  {
    id: "art-108", artigo: "108", titulo: "Críterios de apenação",
    texto: "Na aplicação da penalidade, serão considerados: a gravidade do ato, as circunstâncias agravantes e atenuantes, a reincidência e a conduta profissional.",
    explicacao: "COREN-AP avalia todo o contexto. Reincidência agrava. Comportamento bom atenua."
  },
  {
    id: "art-109", artigo: "109", titulo: "Atenuantes",
    texto: "São circunstâncias atenuantes: bom histórico profissional, confissão espontânea, colaboração com a investigação e reparação do dano.",
    explicacao: "Se colaborar, admitir erro e ajudar na investigação, pena pode ser reduzida."
  },
  {
    id: "art-110", artigo: "110", titulo: "Agravantes",
    texto: "São circunstâncias agravantes: reincidência, abuso de confiança, práticas contra menores ou incapazes e uso de cargos públicos.",
    explicacao: "Reincidência, abuso de função e vítimas vulneráveis aumentam a penalidade."
  },
  {
    id: "art-111", artigo: "111", titulo: "Direito de defesa",
    texto: "Em qualquer processo, assegura-se ao profissional o direito de defesa, com contraditório e ampla defesa.",
    explicacao: "Ninguém é punido sem defesa. Você tem direito a advogado, provas e audiência."
  },
  {
    id: "art-112", artigo: "112", titulo: "Recursos administrativos",
    texto: "As decisões do COREN podem ser recorridas ao COFEN, no prazo legal, mediante recurso administrativo.",
    explicacao: "Discordou da decisão? Recorra ao COFEN no prazo. Direito garantido."
  },
  {
    id: "art-113", artigo: "113", titulo: "Publicidade das penas",
    texto: "As penas aplicadas serão publicadas no organismo oficial do COREN e comunicadas ao COFEN.",
    explicacao: "Penas são públicas. Aparece no histórico profissional, visível em consultas ao COREN-AP."
  },
  {
    id: "art-114", artigo: "114", titulo: "Iniciativa da ação disciplinar",
    texto: "A ação disciplinar será iniciada de ofício pelo COREN, mediante representação de autoridade ou queixa de pessoa.",
    explicacao: "COREN-AP pode iniciar investigação por própria iniciativa, por representação ou queixa."
  },
  {
    id: "art-115", artigo: "115", titulo: "Instauração do processo",
    texto: "Instaurado o processo, o profissional será notificado para apresentar defesa no prazo de 15 dias.",
    explicacao: "Após notificação, você tem 15 dias para apresentar defesa. Não deixar passar o prazo."
  },
  {
    id: "art-116", artigo: "116", titulo: "Indeferimento da defesa",
    texto: "A defesa será indeferida apenas se não observar os requisitos formais, cabendo recurso ao Conselho Pleno.",
    explicacao: "Se sua defesa for rejeitada por erro formal, recorra ao Conselho Pleno do COREN-AP."
  },
  {
    id: "art-117", artigo: "117", titulo: "Julgamento pelo COREN",
    texto: "O COREN julgará a ação disciplinar em sessão do Conselho Pleno, com presença de, no mínimo, 2/3 dos conselheiros.",
    explicacao: "Julgamento é feito em sessão do Conselho Pleno do COREN-AP. Decisão por maioria de votos."
  },
  {
    id: "art-118", artigo: "118", titulo: "Execução da pena",
    texto: "A pena será executada no prazo de 30 dias após o trânsito em julgado, sendo registrada no histórico profissional.",
    explicacao: "Após decisão final, pena é executada em 30 dias e registrada no histórico COREN-AP."
  },
  {
    id: "art-119", artigo: "119", titulo: "Casos omissos na aplicação das penas",
    texto: "Os casos omissos na aplicação das penas serão resolvidos pelo COFEN, que editará as normas complementares.",
    explicacao: "Situações não previstas são resolvidas pelo COFEN. Mantenha-se atualizado com as resoluções mais recentes."
  }
];

const DISCIPLINAS = [
  {
    id: "anat-fisio", nome: "Anatomia e Fisiologia Humana", icon: "\ud83e\udec0", cor: "#dc3545",
    categoria: "básico", descricao: "Estudo da estrutura e função do corpo humano, incluindo sistemas orgânicos fundamentais para a prática de Enfermagem.",
    imagem: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400", totalTopicos: 6,
    topicos: [
      {
        id: "anat-cardio", titulo: "Sistema Cardiovascular", subtitulo: "Coração, vasos e circulação",
        conteudo: "<h2>Sistema Cardiovascular</h2><h3>Estrutura do Coração</h3><p>Órgão muscular oco do tamanho de um punho, localizado no mediastino médio. Quatro cavidades: dois atrios e dois ventrículos. Peso: 250-350g.</p><table><thead><tr><th>Estrutura</th><th>Função</th><th>Importância Clínica</th></tr></thead><tbody><tr><td>Válvula Mitral</td><td>Controla fluxo AE-VE</td><td>Prolapso, estenose</td></tr><tr><td>Válvula Tricúspide</td><td>Controla fluxo AD-VD</td><td>Insuficiência tricúspide</td></tr><tr><td>Válvula Aórtica</td><td>Saída do VE para aorta</td><td>Estenose aórtica</td></tr><tr><td>Válvula Pulmonar</td><td>Saída VD para art. pulmonar</td><td>Estenose pulmonar</td></tr></tbody></table><div class=\"important-box\"><strong>Ponto de Atenção:</strong> Lado esquerdo = arterial (pressão alta), lado direito = venoso (pressão baixa). Miocárdio do VE é 3x mais espesso que o VD.</div><h3>Ciclo Cardíaco</h3><p>Dura 0,8s a 75bpm: Sístole (0,1s) = contração, Diástole (0,7s) = relaxamento e enchimento.</p><div class=\"highlight-box\"><strong>Sinais Vitais Normais:</strong><ul><li>FC: 60-100 bpm</li><li>PA normal: 120x80 mmHg</li><li>Pre-hipertensão: 130-139/80-89</li><li>Hipertensão grau 1: 140-159/90-99</li></ul></div><h3>Sistema de Condução</h3><ul><li><strong>No Sinusal:</strong> Marcapasso natural, 60-100 bpm</li><li><strong>NAV:</strong> 40-60 bpm</li><li><strong>Fascículo de His:</strong> 20-40 bpm</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Conhecer pontos de pulso é essencial: carotida, radial, femoral, pediosa, tibial posterior. Ausência de pulso periférico = emergência.</div>"
      },
      {
        id: "anat-resp", titulo: "Sistema Respiratório", subtitulo: "Vias aéreas, pulmões e trocas gásosas",
        conteudo: "<h2>Sistema Respiratório</h2><h3>Organização Anatômica</h3><table><thead><tr><th>Estrutura</th><th>Função</th><th>Patologia</th></tr></thead><tbody><tr><td>Cavidade Nasal</td><td>Aquece, umidifica, filtra</td><td>Rinite</td></tr><tr><td>Laringe</td><td>Cordas vocais, epiglote</td><td>Laringite, obstrução</td></tr><tr><td>Traqueia</td><td>Condutora de ar</td><td>Traqueostomia</td></tr><tr><td>Bronquios</td><td>Divisão até alveolos</td><td>Bronquite, asma, DPOC</td></tr><tr><td>Alveolos</td><td>Trocas gásosas O2/CO2</td><td>Pneumonia, embolia</td></tr></tbody></table><div class=\"important-box\"><strong>Dados Importantes:</strong><ul><li>FR normal adulto: 12-20 irpm</li><li>Volume corrente: 500 mL</li><li>Capacidade vital: ~4.800 mL</li><li>Superfície alveolar: ~100 m2</li></ul></div><h3>Mecanismo da Respiração</h3><ul><li><strong>Inspiração:</strong> Contração diafragma + intercostais, aumento volume, ar entra</li><li><strong>Expiração:</strong> Relaxamento, diminuição volume, ar sai (passiva)</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> SatO2 normal >= 95%. Abaixo de 90% = hipoxemia, intervenção imediata. Use oximetro de pulso.</div>"
      },
      {
        id: "anat-nerv", titulo: "Sistema Nervoso", subtitulo: "SNC, SNP e controle neural",
        conteudo: "<h2>Sistema Nervoso</h2><h3>Organização</h3><table><thead><tr><th>Divisão</th><th>Componentes</th><th>Função</th></tr></thead><tbody><tr><td>SNC</td><td>Encéfalo + Medula</td><td>Processamento central</td></tr><tr><td>SNP Somático</td><td>Nervos motores/sensoriais</td><td>Controle voluntário</td></tr><tr><td>SNP Autônomo</td><td>Simpático + Parassimpático</td><td>Controle involuntário</td></tr></tbody></table><div class=\"highlight-box\"><strong>Simpático vs Parassimpático:</strong><ul><li><strong>Simpático:</strong> FC alta, dilata pupilas, vasoconstrição (luta/fuga)</li><li><strong>Parassimpático:</strong> FC baixa, contrais pupilas, vasodilatação (repouso)</li></ul></div><h3>Reflexos e Avaliação</h3><ul><li>PERRLA: Pupila redonda, igual, reativa a luz e acomodação</li><li>Escala de Glasgow: 3-15 pontos (abertura ocular + verbal + motora)</li><li>Glasgow < 8 = intubação orotraqueal</li><li>AVC: escala FAST (Face, Arms, Speech, Time)</li></ul><div class=\"important-box\"><strong>Líquido Cefalorraquidiano:</strong> Pressão normal LCR: 6-20 cmH2O na punção lombar. Protege e nutre o SNC.</div>"
      },
      {
        id: "anat-diges", titulo: "Sistema Digestório", subtitulo: "Tubo digestório e órgãos anexos",
        conteudo: "<h2>Sistema Digestório</h2><h3>Trajeto do Tubo Digestório</h3><table><thead><tr><th>Órgão</th><th>Função</th><th>Enfermagem</th></tr></thead><tbody><tr><td>Boca</td><td>Digestão mecânica/química</td><td>Higiene bucal em acamados</td></tr><tr><td>Esôfago</td><td>Condução do bolo alimentar</td><td>SND, disfagia</td></tr><tr><td>Estômago</td><td>Digestão proteica</td><td>SNG descompressão</td></tr><tr><td>Int. Delgado</td><td>Absorção de nutrientes</td><td>Dieta enteral, ostomias</td></tr><tr><td>Int. Grosso</td><td>Absorção de água</td><td>Enemas, obstrução</td></tr><tr><td>Fígado</td><td>Metabolismo, bile</td><td>Icterícia, hepatite</td></tr><tr><td>Pâncreas</td><td>Suco pancreático, insulina</td><td>Pancreatite, diabetes</td></tr></tbody></table><div class=\"important-box\"><strong>Alimentação Enteral:</strong><ul><li>Verificar resíduo gástrico a cada 4-6h antes de alimentação</li><li>Resíduo > 200mL: suspender e comunicar médico</li><li>Cabeça elevado 30-45 graus durante e 30 min após</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Ictericia (amarelidão pele/escleras) = problema hepático. Urina escura + fezes esbranquicadas = comunicar imediatamente.</div>"
      },
      {
        id: "anat-urin", titulo: "Sistema Urinário", subtitulo: "Rins, ureteres, bexiga e uretra",
        conteudo: "<h2>Sistema Urinário</h2><h3>Estrutura Renal</h3><table><thead><tr><th>Estrutura</th><th>Função</th><th>Parâmetro</th></tr></thead><tbody><tr><td>Glomérulo</td><td>Filtração</td><td>TFG</td></tr><tr><td>Túbulo Próximal</td><td>Reabsorção 99% água/sais</td><td>Equilíbrio hídrico</td></tr><tr><td>Alça de Henle</td><td>Concentração urinária</td><td>Diluição</td></tr><tr><td>Túbulo Distal</td><td>Secreção hormonal</td><td>Aldosterona/ADH</td></tr><tr><td>Coletor</td><td>Concentração final</td><td>Osmolaridade</td></tr></tbody></table><div class=\"highlight-box\"><strong>Diurese Normal:</strong><ul><li>800-2000 mL/dia</li><li>Urina amarelo-clara, transparente</li><li>Oliguria: &lt; 500 mL/dia</li><li>Anuria: &lt; 100 mL/dia (EMERGÊNCIA)</li></ul></div><h3>Balanço Hídrico</h3><ul><li><strong>Entradas:</strong> Líquidos + SNG + SVO + Medicações</li><li><strong>Saídas:</strong> Diurese + Fezes + Vômitos + Drenos + Insensíveis (700-1000mL)</li><li><strong>Positivo:</strong> Risco sobrecarga hídrica</li><li><strong>Negativo:</strong> Risco desidratação</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Ausência urina > 6h com SVO = emergência. Verifique sonda obstruida e comunique médico.</div>"
      },
      {
        id: "anat-endo", titulo: "Sistema Endocrino", subtitulo: "Glândulas, hormônios e regulação",
        conteudo: "<h2>Sistema Endocrino</h2><h3>Glândulas Principais</h3><table><thead><tr><th>Glândula</th><th>Hormônio</th><th>Função</th><th>Patologia</th></tr></thead><tbody><tr><td>Pituitária</td><td>GH, TSH, ACTH</td><td>Regula outras glândulas</td><td>Acromegalia</td></tr><tr><td>Tireóide</td><td>T3, T4</td><td>Metabolismo</td><td>Hipo/Hipertireoidismo</td></tr><tr><td>Suprarrenal</td><td>Cortisol, Aldosterona</td><td>Estresse, eletrólitos</td><td>Cushing</td></tr><tr><td>Pâncreas</td><td>Insulina, Glucagon</td><td>Regula glicose</td><td>Diabetes Mellitus</td></tr></tbody></table><div class=\"important-box\"><strong>Diabetes Mellitus:</strong><ul><li>Tipo 1: Autoimune, pâncreas não produz insulina</li><li>Tipo 2: Resistência a insulina, associada a obesidade</li><li>Glicemia normal jejum: 70-100 mg/dL</li><li>Hipoglicemia: &lt; 70 mg/dL (sudorese, tremores, confusão)</li><li>Hiperglicemia: &gt; 200 mg/dL (sede, poliuria)</li><li>Cetoácidose: emergência com CHF e Kussmaul</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Pacientes com insulina: monitore glicemia capilar. Tenha sempre dextrose 50% disponível.</div>"
      }
    ]
  },
  {
    id: "farmaco", nome: "Farmacologia", icon: "\ud83d\udc8a", cor: "#198754",
    categoria: "básico", descricao: "Princípios gerais de farmacologia, cálculo de dosagem, vias de administração e segurança no uso de medicamentos.",
    imagem: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", totalTopicos: 5,
    topicos: [
      {
        id: "farm-princ", titulo: "Princípios Gerais", subtitulo: "Farmacocinética e Farmacodinâmica",
        conteudo: "<h2>Princípios Gerais de Farmacologia</h2><h3>Farmacodinâmica</h3><p>O que o medicamento faz no organismo. Agonistas estimulam receptores, Antagonistas bloqueiam.</p><div class=\"highlight-box\"><strong>Efeitos:</strong><ul><li>Terapêutico: resultado desejado</li><li>Adverso: indesejado, previsível</li><li>Colateral: secundário, geralmente leve</li><li>Toxicidade: danoso por excesso</li></ul></div><h3>Farmacocinética</h3><table><thead><tr><th>Fase</th><th>Descrição</th><th>Exemplo</th></tr></thead><tbody><tr><td>Absorção</td><td>Entra na corrente sanguínea</td><td>VO: estômago; IM: músculo</td></tr><tr><td>Distribuição</td><td>Espalha-se pelo corpo</td><td>Depende fluxo sanguíneo</td></tr><tr><td>Metabolismo</td><td>Transformação (fígado)</td><td>Citocromo P450</td></tr><tr><td>Excreção</td><td>Eliminação (rins)</td><td>Urina, fezes, bile</td></tr></tbody></table><div class=\"important-box\"><strong>5 Certos:</strong><ul><li>Certo paciente (nome + DN)</li><li>Certo medicamento (nome + princípio ativo)</li><li>Certa dose (calcule e recalcule)</li><li>Certa via (verifique forma)</li><li>Certo horário (prescrição médica)</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Verifique alergias ANTES de qualquer administração. Em dúvida, NÃO administre.</div>"
      },
      {
        id: "farm-vias", titulo: "Vias de Administração", subtitulo: "Oral, parenteral, topical e outras",
        conteudo: "<h2>Vias de Administração</h2><table><thead><tr><th>Via</th><th>Característica</th><th>Ponto de Atenção</th></tr></thead><tbody><tr><td>Oral (VO)</td><td>Comprimidos, xaropes</td><td>Jejum, interação alimentar</td></tr><tr><td>Sublingual</td><td>Absorção rápida</td><td>Não engolir, não mastigar</td></tr><tr><td>Retal</td><td>supositórios</td><td>Posição lateral esquerda</td></tr><tr><td>Tópica</td><td>Pomadas, colírios</td><td>Limpar área antes</td></tr><tr><td>IM</td><td>Profunda no músculo</td><td>Agulha 25x7mm, rotação</td></tr><tr><td>IV</td><td>Direto na veia</td><td>Via mais rápida, risco alto</td></tr><tr><td>SC</td><td>Técnica do pregão</td><td>Insulina, heparina</td></tr><tr><td>ID</td><td>Intradérmica</td><td>Ângulo de 15 graus</td></tr></tbody></table><div class=\"important-box\"><strong>Locais IM:</strong><ul><li>Deltoides: até 1mL</li><li>ventroglútea: até 3mL (melhor adulto)</li><td>Vasto lateral coxa: bebês (até 1mL)</td><li>Evitar dorsoglútea (risco ciático)</li></ul></div><div class=\"warning-box\"><strong>Alerta Insulina:</strong> NÃO massageie após aplicação. Verifique glicemia antes e depois.</div>"
      },
      {
        id: "farm-calc", titulo: "Cálculo de Dosagem", subtitulo: "Fórmulas e práticas de cálculo",
        conteudo: "<h2>Cálculo de Dosagem</h2><div class=\"highlight-box\"><strong>Fórmula Mestra:</strong><p>Quantidade Prescrita / Concentração Disponível = Volume a Administrar</p><p>Ex: Prescrito 500mg, disponível 250mg/5mL = (500x5)/250 = 10mL</p></div><div class=\"highlight-box\"><strong>Peso Corporal:</strong><p>Dose = Peso(kg) x Dose/kg x Intervalo</p><p>Ex: Criança 20kg, paracetamol 15mg/kg = 300mg/dose</p></div><table><thead><tr><th>Medicamento</th><th>Concentração</th><th>Dose Comum</th></tr></thead><tbody><tr><td>Paracetamol</td><td>200mg/2mL</td><td>500-750mg/6-8h</td></tr><tr><td>Dipirona</td><td>500mg/mL</td><td>500-1000mg/6h</td></tr><tr><td>Amoxicilina</td><td>250mg/5mL</td><td>250-500mg/8h</td></tr><tr><td>Ceftriaxona</td><td>1g frasco</td><td>1-2g/24h</td></tr></tbody></table><div class=\"warning-box\"><strong>Alerta:</strong> Sempre verifique riquiqui, calcule em mg e CONVERTA para mL. Dose pediátrica SEMPRE por peso.</div>"
      },
      {
        id: "farm-antibio", titulo: "Antibióticos", subtitulo: "Classes, uso correto e resistência",
        conteudo: "<h2>Antibióticos</h2><table><thead><tr><th>Classe</th><th>Exemplo</th><th>Atenção</th></tr></thead><tbody><tr><td>Penicilinas</td><td>Amoxicilina</td><td>Teste alergia, anafilaxia</td></tr><tr><td>Cefalosporinas</td><td>Ceftriaxona</td><td>Alergia cruzada penicilina</td></tr><tr><td>Aminoglicosídeos</td><td>Amicacina</td><td>Nefro/ototóxico, picos e vales</td></tr><tr><td>Macrolidos</td><td>Azitromicina</td><td>QT prolongado</td></tr><tr><td>Fluoroquinolonas</td><td>Ciprofloxacino</td><td>Tendinite, fotosensibilidade</td></tr></tbody></table><div class=\"important-box\"><strong>Regras de Ouro:</strong><ul><li>Administre EXATAMENTE no horário prescrito</li><li>Complete todo o tratamento</li><li>Picos e vales: respeite intervalo</li><li>Verifique alergias sempre</li></ul></div><div class=\"warning-box\"><strong>Alerta Resistência:</strong> Use SOMENTE com prescrição. Nunca compartilhe. Nunca use de tratamento anterior. Higienização das mãos é principal forma de prevenir infecções.</div>"
      },
      {
        id: "farm-control", titulo: "Medicamentos Controlados", subtitulo: "Receitas, armazenamento e controle",
        conteudo: "<h2>Medicamentos Controlados</h2><table><thead><tr><th>Cor</th><th>Uso</th><th>Exemplo</th></tr></thead><tbody><tr><td style=\"color:#0066cc\">Azul</td><td>Antibióticos e controlados simples</td><td>Amoxicilina, Cefalexina</td></tr><tr><td style=\"color:#cc9900\">Amarela</td><td>Psicotrópicos e entorpecentes</td><td>Rivotril, Diazepam, Morfina</td></tr></tbody></table><div class=\"highlight-box\"><strong>Faixas Parenteral:</strong><ul><li>Faixa B (Branca): psicotrópicos</li><li>Faixa A (Amarela): Entorpecentes</li></ul></div><h3>Responsabilidades</h3><ul><li>Receitar com receita válida e assinada</li><li>Verificar validade, lote, integridade</li><li>Registrar no quadro de controle</li><li>Guardar amparolas vazias para devolução</li><li>Não administrar sem prescrição específica</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Uso irregular é crime (art.338 CP) e gera cassação COREN. Nunca peça receita em branco.</div>"
      }
    ]
  },
  {
    id: "enf-medicir", nome: "Enfermagem Médico-Cirúrgica", icon: "\ud83c\udfe5", cor: "#10b981",
    categoria: "clínico", descricao: "Cuidados no perioperatório, drenos, sondas, curativos e hidratação IV.",
    imagem: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400", totalTopicos: 5,
    topicos: [
      {
        id: "mc-preop", titulo: "Pre-operatório", subtitulo: "Preparo do paciente para cirurgia",
        conteudo: "<h2>Período Pre-operatório</h2><h3>Risco Cirúrgico (ASA)</h3><table><thead><tr><th>ASA</th><th>Descrição</th><th>Risco</th></tr></thead><tbody><tr><td>I</td><td>Saudável</td><td>Baixo</td></tr><tr><td>II</td><td>Doença leve (HAS, DM controlado)</td><td>Baixo-Mod</td></tr><tr><td>III</td><td>Doença grave (ICC, DM descontrolado)</td><td>Mod-Alto</td></tr><tr><td>IV</td><td>Grave, ameaça a vida</td><td>Alto</td></tr><tr><td>V</td><td>Moribundo, emergência</td><td>Muito Alto</td></tr></tbody></table><h3>Checklist</h3><ul><li>Confirmar identidade: nome, DN, prontuário</li><li>Termo de consentimento assinado</li><li>Jejum: 8h sólidos, 2h líquidos claros</li><li>Exames: hemograma, coagulograma, ECG, RX</li><li>Remover acessórios, próteses removíveis</li><li>SNA 30-60min antes (Cefazolina 2g IV)</li><li>Identificação no pulso</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> PA > 180/110, febre > 38C, dúvidas jejum: COMUNIQUE médico ANTES do encaminhamento.</div>"
      },
      {
        id: "mc-posop", titulo: "Pós-operatório", subtitulo: "Cuidados após cirurgia",
        conteudo: "<h2>Período Pós-operatório</h2><h3>Avaliações</h3><table><thead><tr><th>Avaliação</th><th>Frequência</th><th>Parâmetros</th></tr></thead><tbody><tr><td>Sinais vitais</td><td>15min/1h, depois 1h/6h</td><td>FC, PA, FR, Temp, SatO2</td></tr><tr><td>Nível consciência</td><td>Contínuo</td><td>Glasgow, sonolência</td></tr><tr><td>Dor</td><td>4h ou sob demanda</td><td>Escala 0-10</td></tr><tr><td>Drenos</td><td>1h primeiro dia</td><td>Quantidade, cor</td></tr></tbody></table><div class=\"highlight-box\"><strong>Posições:</strong><ul><li>Abdominal: Fowler 30-45 graus</li><li>Torácica: lado operado para cima</li><li>Peridural: acompanhar PA e nível bloqueio</li></ul></div><h3>Complicações</h3><ul><li>Hemorragia: sangramento abundante</li><li>Infecção: eritema, edema, secreção purulenta</li><li>TVP: edema, dor, calor no membro</li><li>TEP: dor torácica, dispneia, SatO2 cai</li><li>Ileo: distensão abdominal</li><li>Retenção urinária: bexiga palpável</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Sangramento abundante + PA cai + taquicardia + palidez = hemorragia interna, reexploração.</div>"
      },
      {
        id: "mc-drenos", titulo: "Drenos e Sondas", subtitulo: "Tipos e cuidados de enfermagem",
        conteudo: "<h2>Drenos e Sondas</h2><table><thead><tr><th>Tipo</th><th>Função</th><th>Característica</th></tr></thead><tbody><tr><td>Penrose</td><td>Drenagem passiva</td><td>Fita borracha, troca diária</td></tr><tr><td>Redon (JP)</td><td>Ativa por compressão</td><td>Bomba compressão</td></tr><tr><td>Blake</td><td>Ativa</td><td>Sem furinho central</td></tr><tr><td>Thorax</td><td>Drenagem pleural</td><td>Sistema selado água</td></tr></tbody></table><div class=\"highlight-box\"><strong>Cuidados Gerais:</strong><ul><li>Dreno abaixo nível do ferimento</li><li>Verifique fluxo, cor, consistência</li><li>Registre volume a cada 8h</li><li>Não puxe nem movimente</li></ul></div><h3>Drenagem Torácica</h3><ul><li>Frasco coletor abaixo nível torácico</li><li>Oscilação indica drenagem</li><li>Bolhas de ar = fuga pleural (comunicar)</li><li>Se desconectado: tape com gaze umedecida, paciente lado afetado para cima</li></ul><div class=\"important-box\"><strong>Sondas:</strong><ul><li>SND/SNFG: manter nível, verificar fluxo</li><li>Sonda vesical: bexiga ar 10-15mL</li><li>Keogh: registrar diurese horária</li></ul></div>"
      },
      {
        id: "mc-curativos", titulo: "Curativos e Feridas", subtitulo: "Classificação e técnicas",
        conteudo: "<h2>Curativos e Feridas</h2><h3>Classificação</h3><table><thead><tr><th>Tipo</th><th>Característica</th><th>Exemplo</th></tr></thead><tbody><tr><td>Clean</td><td>Cirúrgica, sem contaminação</td><td>Apendicectomia eletiva</td></tr><tr><td>Clean-Contam</td><td>Leve contaminação</td><td>Colecistectomia</td></tr><tr><td>Contaminated</td><td>Aberta recente</td><td>Fratura exposta</td></tr><tr><td>Dirty</td><td>Infectada</td><td>Abcesso</td></tr></tbody></table><h3>Espessura</h3><ul><li>1o grau: Epiderme - eritema</li><li>2o grau: Epiderme+derme - bolhas</li><li>3o grau: Subcutâneo - perda tecido</li><li>4o grau: Músculos, tendões, osso</li></ul><h3>Técnica</h3><ul><li>Lave mãos, use luva estéril</li><li>Remova curativo antigo observando</li><li>Lave com SF 0.9% dentro para fora</li><li>Secar gaze dentro para fora</li><li>Aplicar medicação conforme prescrição</li><li>Cobrir com gaze e fixar</li><li>Registre: local, dimensões, aspecto</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Eritema crescente + calor + edema + purulento + febre = infecção, comunicar médico.</div>"
      },
      {
        id: "mc-hidratação", titulo: "Hidratação Intravenosa", subtitulo: "Cateteres e sistemas de infusão",
        conteudo: "<h2>Hidratação Intravenosa</h2><table><thead><tr><th>Calibre</th><th>Cor</th><th>Uso</th></tr></thead><tbody><tr><td>14G</td><td>Laranja</td><td>Ressuscitação</td></tr><tr><td>16G</td><td>Cinza</td><td>Hemoderivados</td></tr><tr><td>18G</td><td>Verde</td><td>Hidratação geral</td></tr><tr><td>20G</td><td>Rosa</td><td>Uso adulto geral</td></tr><tr><td>22G</td><td>Azul</td><td>Pediátrico, idosos</td></tr><tr><td>24G</td><td>Amarelo</td><td>Neonatal</td></tr></tbody></table><div class=\"highlight-box\"><strong>Velocidade (gotas/min):</strong><p>(Volume x Fator) / Horas</p><ul><li>Macro (10-20 gotas/mL): Fator = 20</li><li>Micro (60 gotas/mL): Fator = 60</li></ul></div><h3>Cuidados</h3><ul><li>Verificar permeabilidade antes de conectar</li><li>Observar flebite: dor, eritema, cordão</li><li>Trocar cateter: 72-96h</li><li>Trocar equipo/bujão: 24h</li><li>Manter local limpo com micropore transparente</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Verifique compatibilidade de medicamentos antes de misturar. Incompatibilidades causam precipitados ou embolia.</div>"
      }
    ]
  },
  {
    id: "enf-saúdecol", nome: "Enfermagem em Saúde Coletiva", icon: "\ud83c\udf24\ufe0f", cor: "#198754",
    categoria: "clínico", descricao: "APS, calendário vacinal, saúde da gestante, endemias e epidemiologia.",
    imagem: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", totalTopicos: 5,
    topicos: [
      {
        id: "sc-aps", titulo: "Atenção Primária à Saúde", subtitulo: "ESF e Unidades Básicas",
        conteudo: "<h2>Atenção Primária à Saúde</h2><h3>O que é a APS?</h3><p>Porta de entrada do SUS. Primeira linha de atendimento: vigilância, promoção, prevenção e reabilitação.</p><div class=\"highlight-box\"><strong>Princípios:</strong><ul><li>Acessibilidade: porta de entrada aberta</li><li>Continuidade: acompanhamento longitudinal</li><li>Integralidade: cuidado biopsicossocial</li><li>Humanização: respeito e acolhimento</li><li>Participação comunitária</li></ul></div><h3>Estratégia Saúde da Família</h3><ul><li>Médico ou Enfermeiro referente</li><li>Enfermeiro ou Técnico</li><li>ACS para cada 750 famílias</li></ul><table><thead><tr><th>Atividade</th><th>Responsável</th></tr></thead><tbody><tr><td>Consultas</td><td>Médico/Enfermeiro</td></tr><tr><td>Procedimentos</td><td>Técnico de Enfermagem</td></tr><tr><td>Visitas domiciliares</td><td>ACS + Enfermagem</td></tr><tr><td>Busca ativa</td><td>ACS</td></tr></tbody></table><div class=\"warning-box\"><strong>Alerta:</strong> Técnico na APS: vacinação, curativos, coleta, PA, busca ativa de gestantes. Registre TUDO no e-SUS AB.</div>"
      },
      {
        id: "sc-vacinas", titulo: "Calendário Vacinal", subtitulo: "Programa Nacional de Imunização",
        conteudo: "<h2>Calendário Vacinal</h2><table><thead><tr><th>Vacina</th><th>Doses</th><th>Idade</th><th>Via</th></tr></thead><tbody><tr><td>BCG</td><td>1 dose</td><td>Ao nascer</td><td>ID</td></tr><tr><td>Hepatite B</td><td>3 doses</td><td>Nasc, 2m, 6m</td><td>IM</td></tr><tr><td>Pentavalente</td><td>3+ref</td><td>2m, 4m, 6m, 15m</td><td>IM</td></tr><tr><td>Polio</td><td>3+ref</td><td>2m, 4m, 6m, 4-6a</td><td>VO/SC</td></tr><tr><td>Pneumo 10V</td><td>2+ref</td><td>2m, 4m, 12m</td><td>IM</td></tr><tr><td>Rotavírus</td><td>2-3 doses</td><td>2m, 4m, 6m</td><td>VO</td></tr><tr><td>Meningo C</td><td>2+ref</td><td>3m, 5m, 12m</td><td>IM</td></tr><tr><td>Triviral</td><td>2 doses</td><td>12m, 15m</td><td>SC</td></tr><tr><td>Febre Amarela</td><td>2 doses</td><td>9m + 4a</td><td>SC</td></tr></tbody></table><div class=\"important-box\"><strong>Regras:</strong><ul><li>BCG: intradérmica braço direito, 4cm acima olécrano</li><li>Triviral: diluente 0,6mL, agitar suavemente, SC</li><li>Verificar cadeia de frio (2-8C)</li><li>Observação 20-30min pós-vacinação</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Reação anafilaxia: raríssima, ter adrenalina 1:1000. Febre até 72h é comum.</div>"
      },
      {
        id: "sc-gestante", titulo: "Saúde da Gestante", subtitulo: "Pre-natal e cuidados materno-fetais",
        conteudo: "<h2>Saúde da Gestante</h2><h3>Protocolo Pre-Natal</h3><p>Mínimo 6 consultas ao longo da gestação. Iniciar preferencialmente no 1º trimestre.</p><table><thead><tr><th>Período</th><th>Frequência</th><th>Exames Principais</th><th>Condutas de Enfermagem</th></tr></thead><tbody><tr><td>1º Trim (até 12 sem)</td><td>Mensal</td><td>Hemograma, Glicemia, VDRL, HBsAg, HIV, Urocultura, Tipo sanguíneo/Rh, Toxoplasmose, Rubéola, Citomegalovírus</td><td>Orientar suplementação, solicitar exames, investigar histórico obstétrico</td></tr><tr><td>2º Trim (13-27 sem)</td><td>Mensal/Quinzenal</td><td>US morfológico (20-24 sem), Teste OGTT (24-28 sem), Hemograma repetido</td><td>Monitorar ganho de peso, PA, altura uterina, movimentos fetais, orientar sobre sinais de alerta</td></tr><tr><td>3º Trim (28-40 sem)</td><td>Quinzenal/Semanal</td><td>CTG (a partir 37 sem), US obstétrico, Hemograma, Coagulograma, Sorologias repetidas</td><td>Avaliar apresentação fetal, sinais de trabalho de parto, orientar sobre bolsa e parto</td></tr></tbody></table><div class=\"important-box\"><strong>Sinais de Alerta - COMUNICAR IMEDIATAMENTE:</strong><ul><li>Sangramento vaginal (qualquer quantidade)</li><li>Dor abdominal intensa ou cólicas regulares</li><li>Cefaleia intensa + edema + visão turva (pre-eclampsia)</li><li>Febre ≥ 38°C</li><li>Ruptura de membranas (líquido claro/verdoso)</li><li>Diminuição/ausência de movimentos fetais</li><li>Perda de líquido amniótico com odor fétido</li><li>Contrações regulares antes de 37 semanas</li></ul></div><h3>Suplementação de Rotina</h3><table><thead><tr><th>Suplemento</th><th>Dose</th><th>Período</th><th>Indicação</th></tr></thead><tbody><tr><td>Ácido Fólico</td><td>400-800 mcg/dia</td><td>Pré-concepcional até 12ª semana</td><td>Prevenir defeitos do tubo neural</td></tr><tr><td>Ferro (Sulfato ferroso)</td><td>40-60 mg/dia</td><td>20ª semana até 3 meses pós-parto</td><td>Prevenir anemia ferropriva</td></tr><tr><td>Cálcio</td><td>500-1000 mg/dia</td><td>20ª semana até parto</td><td>Prevenir pré-eclampsia (especialmente baixo consumo)</td></tr></tbody></table><div class=\"warning-box\"><strong>Pré-Eclampsia:</strong> PA ≥ 140/90 mmHg + proteinúria ≥ 300mg/24h (ou +1 na tira). <strong>Eclampsia:</strong> + convulsões. <strong>Tratamento:</strong> Sulfato de Magnésio IV (carga 4-6g em 15-20min + manutenção 1-2g/h) + anti-hipertensivo (Hidralazina/Nifedipina). <strong>Monitorar:</strong> Refletores, diurese (>30mL/h), FR (>12rpm), nível consciência.</div><h3>Exemplo Prático - Consulta de Pré-Natal</h3><p><strong>Gestante 28 anos, G2P1, 26 semanas, PA 130/85, AU 26cm, MF+, peso +3kg.</strong></p><ul><li>Ações: Solicitar OGTT, hemograma, US morfológico se não feito</li><li>Orientar: Sinais de alerta, alimentação saudável, atividade física leve</li><li>Suplementar: Ferro 60mg/dia + Ácido fólico 5mg/semana</li><li>Agendar retorno: 2 semanas</li></ul>"
      },
      {
        id: "sc-endemias", titulo: "Endemias e Vigilância Epidemiológica", subtitulo: "Doenças de notificação obrigatória e controle vetorial",
        conteudo: "<h2>Endemias e Vigilância Epidemiológica</h2><h3>Principais Doenças de Notificação Obrigatória no Amapá</h3><table><thead><tr><th>Doença</th><th>Agente/Etiologia</th><th>Transmissão</th><th>Sinais/Sintomas Principais</th><th>Notificação</th><th>Conduta de Enfermagem</th></tr></thead><tbody><tr><td>Dengue</td><td>DENV 1-4 (Flavivírus)</td><td>Aedes aegypti</td><td>Febre alta, cefaleia, mialgia/artralgia, exantema, petéquias, teste do laço (+)</td><td>Semanal (SINAN)</td><td>Hidratação oral/IV, evitar AAS, monitorar sinais de alarme (dor abdominal, vômitos persistentes, sangramento, hepatomegalia, letargia)</td></tr><tr><td>Zika</td><td>ZIKV (Flavivírus)</td><td>Aedes aegypti, sexual, vertical</td><td>Exantema maculopapular, prurido, febre baixa, artralgia, conjuntivite não purulenta</td><td>Imediata (gestantes) / Semanal</td><td>Notificar gestantes IMEDIATAMENTE, orientar repelente, preservativo, US serial, investigar microcefalia</td></tr><tr><td>Chikungunya</td><td>CHIKV (Alphavírus)</td><td>Aedes aegypti/albopictus</td><td>Febre alta, poliartralgia intensa/incapacitante, exantema, mialgia, cefaleia</td><td>Semanal</td><td>Analgesia/anti-inflamatório, hidratação, fisioterapia precoce (pode cronificar), evitar AAS</td></tr><tr><td>Febre Amarela</td><td>Vírus Amarílico</td><td>Aedes (urbana) / Haemagogus/Sabethes (silvestre)</td><td>Febre, cefaleia, mialgia, icterícia, hematêmese, oligúria, proteinúria (forma grave)</td><td>IMEDIATA (24h)</td><td>ISOLAMENTO, notificar suspeita, coletar sorologia, encaminhar referência, vacina bloqueio</td></tr><tr><td>Malária</td><td>P. vivax, P. falciparum</td><td>Anopheles (fêmea)</td><td>Febre cíclica (calafrios, febre, suor), cefaleia, esplenomegalia, anemia</td><td>IMEDIATA (24h)</td><td>Gota espessa + esfregaço (padrão-ouro), TDR, tratar conforme espécie (P. falciparum = ART + PQ), investigar contatos</td></tr><tr><td>Leptospirose</td><td>Leptospira spp.</td><td>Urina de roedores (água/lama contaminada)</td><td>Febre, mialgia intensa (panturrilha), cefaleia, icterícia, insuficiência renal (Weil)</td><td>IMEDIATA</td><td>Penicilina G cristalina IV (casos graves), doxiciclina VO (leves), notificar exposição ocupacional</td></tr><tr><td>Tuberculose</td><td>M. tuberculose (Koch)</td><td>Aerossol (gotículas)</td><td>Tosse >2sem, febre vespertina, sudorese noturna, emagrecimento, hemoptise</td><td>IMEDIATA</td><td>BK (3 amostras), TRM, RX tórax, RIPE 6 meses, DOT (tratamento supervisionado), investigar contatos</td></tr><tr><td>HIV/AIDS</td><td>HIV-1/2</td><td>Sexual, sanguínea, vertical</td><td>Síndrome aguda (mono-like), linfadenopatia, infecções oportunistas (AIDS)</td><td>Semanal (AIDS) / Imediata (gestante/criança)</td><td>Teste rápido, CD4/Viral Load, TARV, profilaxia vertical (AZT neonato), PEP/PrEP</td></tr><tr><td>Hanseníase</td><td>M. leprae</td><td>Contato próximo prolongado</td><td>Manchas hipocrômicas/eritematosas com alteração térmica/dolorosa, neurite</td><td>Semanal</td><td>Baciloscopia, PQT (6-12 meses), prevenção incapacidades, examinar contatos</td></tr></tbody></table><div class=\"highlight-box\"><strong>Fluxo de Notificação:</strong><ol><li>Suspeita clínica → Preencher ficha SINAN/SIVEP</li><li>Notificação IMEDIATA (24h): doenças de potencial epidêmico/grave</li><li>Notificação SEMANAL (domingo): endemias de rotina</li><li>SIVANET/SINAN Net: sistema digital oficial</li><li>Investigação epidemiológica pela Vigilância</li><li>Bloqueio/Controle de foco (vetoriais)</li></ol></div><div class=\"warning-box\"><strong>ALERTA - Sinais de Gravidade Arboviroses (Dengue):</strong> Dor abdominal intensa e contínua, vômitos persistentes, sangramento de mucosa, letargia/irritabilidade, hepatomegalia >2cm, aumento de Hct com queda de plaquetas (choque). <strong>CONDUTA:</strong> Hidratação IV agressiva, monitoramento hemodinâmico, encaminhamento URGENTE.</div><h3>Controle Vetorial - Ações do Técnico de Enfermagem</h3><ul><li>Educação em saúde: eliminação de criadouros (pneus, garrafas, caixas d'água, calhas, plantas)</li><li>Busca ativa de febre em área de transmissão</li><li>Aplicação de larvicida (temefós) / adulticida (UBV pesado/costeiro) - conforme protocolo municipal</li><li>Orientação: repelente (DEET/Icaridina), roupas longás, mosquiteiro, telas</li><li>Notificação de imóveis fechados/abandonados para agente de endemias</li></ul><h3>Exemplo Prático - Caso Dengue com Sinais de Alarme</h3><p><strong>Paciente 24 anos, 4º dia de febre, dor abdominal difusa, 3 vômitos/24h, Hct 48% (basal 40%), Plaquetas 80.000.</strong></p><ul><li>Classificação: Dengue COM sinais de alarme (Grupu B)</li><li>Ações IMEDIATAS: Acesso venoso calibroso (18G/20G), SF 0,9% 20mL/kg/h (reavaliar a cada 1-2h)</li><li>Monitorar: PA, FC, diurese (sonda vesical), Hct/pltq 4/4h, sinais neurológicos</li><li>NÃO usar: AAS, corticoides, AINEs, heparina</li><li>Encaminhar: Unidade de referência para hidratação IV contínua e monitoramento</li></ul>"
      },
      {
        id: "sc-epidemio", titulo: "Epidemiologia Básica", subtitulo: "Indicadores e prevenção",
        conteudo: "<h2>Epidemiologia Básica</h2><table><thead><tr><th>Indicador</th><th>Fórmula</th></tr></thead><tbody><tr><td>Morbidade</td><td>(Casos novos / População) x 1000</td></tr><tr><td>Mortalidade</td><td>(Óbitos / População) x 1000</td></tr><tr><td>Letalidade</td><td>(Óbitos / Casos) x 100</td></tr><tr><td>Mortalidade Materna</td><td>(Óbitos mat / Nasc vivos) x 100.000</td></tr><tr><td>Mortalidade Infantil</td><td>(Óbitos < 1a / Nasc vivos) x 1000</td></tr></tbody></table><div class=\"highlight-box\"><strong>Tipos:</strong><ul><li>Epidemia: aumento brusco acima do esperado</li><li>Endemia: presença constante esperada</li><li>Pandemia: abrangência mundial</li></ul></div><h3>Medidas de Controle</h3><ul><li>Fonte: tratar o paciente</li><li>Contato: EPI, higienização</li><li>Barreira: vacinas, preservativos</li><li>Suscetível: profilaxia, orientação</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Higienização das mãos em 5 momentos: antes contato, antes procedimento, após risco líquidos, após contato, após ambiente.</div>"
      }
    ]
  },
  {
    id: "enf-pediatria", nome: "Enfermagem Pediatria", icon: "\ud83d\udc76", cor: "#fd7e14",
    categoria: "clínico", descricao: "Puericultura, febre na infância, doenças respiratórias e gástroenterite pediátrica.",
    imagem: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400", totalTopicos: 4,
    topicos: [
      {
        id: "ped-pueri", titulo: "Puericultura", subtitulo: "Crescimento e desenvolvimento",
        conteudo: "<h2>Puericultura</h2><h3>Fases do Crescimento</h3><table><thead><tr><th>Fase</th><th>Idade</th><th>Avaliação</th></tr></thead><tbody><tr><td>Neonatal</td><td>0-28 dias</td><td>Reflexos, cordão, temperatura</td></tr><tr><td>1a Infancia</td><td>28d-2a</td><td>Peso, PC, altura</td></tr><tr><td>2a Infancia</td><td>2-10a</td><td>Desenvolvimento psicomotor</td></tr><tr><td>Adolescência</td><td>10-19a</td><td>Tanner, psicossocial</td></tr></tbody></table><div class=\"highlight-box\"><strong>Reflexos Neonatais:</strong><ul><li>Moro: braços abrem + choro (até 3-4m)</li><li>Preensão palmar: segura forte (até 2-3m)</li><li>Passos automáticos: movimento ao segurar</li><li>Babinski: dedos abrem ao estimular planta</li></ul></div><div class=\"important-box\"><strong>Soro em Pediátrico:</strong><ul><li>Bomba de infusão sempre que possível</li><li>Equipo micro (60 gotas/mL)</li><li>Monitorar edema, crepitação, FR</li><li>Verificar posição tara balança</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Bebês desidratam rápido. Monitorar: turgor pele, fontanela (plana), lacrimação, urina.</div>"
      },
      {
        id: "ped-febre", titulo: "Febre na Infância", subtitulo: "Avaliação e manejo",
        conteudo: "<h2>Febre na Infância</h2><table><thead><tr><th>Idade</th><th>Temp Axilar</th><th>Conduta</th></tr></thead><tbody><tr><td>Até 3m</td><td>>= 37,5C</td><td>EMERGÊNCIA: internação</td></tr><tr><td>3-6m</td><td>>= 38,5C</td><td>Avaliação 24h</td></tr><tr><td>> 6m</td><td>>= 38,5C</td><td>Antitérmico + observação</td></tr></tbody></table><div class=\"important-box\"><strong>Manejo:</strong><ul><li>Paracetamol: 15mg/kg/dose, 6/6h</li><li>Dipirona: 15-20mg/kg/dose, 6/6h</li><li>Ibuprofeno: 10mg/kg/dose, 8/8h (>6m)</li><li>NUNCA aspirina em menores de 16a (Reye)</li></ul></div><h3>Sinais de Alerta</h3><ul><li>Rigidez de nuca (meningite)</li><li>Manchas púrpura que não somem (meningococcemia)</li><li>Convulsões febris</li><li>Recusa alimentação > 8h</li><li>Irritabilidade ou sonolência extrema</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Febre em neonato (até 28d) é SEMPRE emergência. Pode indicar sepsis ou meningite.</div>"
      },
      {
        id: "ped-resp", titulo: "Doenças Respiratórias", subtitulo: "Laringite, bronquiolite, pneumonia",
        conteudo: "<h2>Doenças Respiratórias Pediátricas</h2><table><thead><tr><th>Doença</th><th>Idade</th><th>Sinais</th><th>Conduta</th></tr></thead><tbody><tr><td>Laringite (Crupe)</td><td>6m-3a</td><td>Ladrido, tosse, estridor</td><td>Umidificar ar, corticoides</td></tr><tr><td>Bronquiolite</td><td>< 2a</td><td>Sibilos, taquipneia</td><td>Suporte, O2 se necessário</td></tr><tr><td>Pneumonia</td><td>Qualquer</td><td>Febre, tosse, FR alta</td><td>Antibiótico, O2</td></tr><tr><td>Asma</td><td>> 2a</td><td>Sibilos recorrentes</td><td>Broncodilatador, corticoide</td></tr></tbody></table><div class=\"important-box\"><strong>Sinais de Alerta:</strong><ul><li>FR > 60/min no bebê</li><li>Retração intercostal/subcostal</li><li>Cianose perioral</li><li>SatO2 < 92%</li><li>Recusa de alimento</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Criança com estridor inspiratório + cianose + agitação = obstrução severa, chame equipe rápidamente.</div>"
      },
      {
        id: "ped-gástro", titulo: "Gastroenterite", subtitulo: "Diarreia, desidratação e HID",
        conteudo: "<h2>Gastroenterite na Infancia</h2><h3>Classificação da Desidratação</h3><table><thead><tr><th>Grau</th><th>Sinais</th><th>Perda Peso</th></tr></thead><tbody><tr><td>Sem desidratação</td><td>Sem sinais</td><td>< 5%</td></tr><tr><td>Desidratação leve</td><td>Sede, mucosa seca</td><td>5-10%</td></tr><tr><td>Desidratação moderada</td><td>Olho fundo, turgor reduzido</td><td>5-10%</td></tr><tr><td>Desidratação grave</td><td>Letárgico, sem choro</td><td>> 10%</td></tr></tbody></table><div class=\"important-box\"><strong>Hidratação Oral (SRO):</strong><ul><li>Leve: 50-100mL/kg em 4h</li><li>Moderada: soro IV (SF 0,9% ou RL)</li><li>Grave: IV agressiva + internação</li><li>SRO: sacarose 20g + citrato 2,9g + NaCl 3,5g/L</li></ul></div><h3>Conduta de Enfermagem</h3><ul><li>Manter hidratação oral (ofertar SRO em pequenas quantidades)</li><li>Pesar fraldas molhadas para controle</li><li>Alimentação precoce (não jejuar)</li><li>Higiene perianal (prevenir dermatite)</li><li>Medir temperatura retal</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Diarreia com sangue (disenteria) + febre = suspeitar invasão bacteriana, comunicar médico.</div>"
      }
    ]
  },
  {
    id: "enf-obstet", nome: "Enfermagem Obstétrica", icon: "\ud83e\udc30", cor: "#14b8a6",
    categoria: "clínico", descricao: "Fisiologia da gestação, trabalho de parto, puerpério e assistência ao neonato.",
    imagem: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400", totalTopicos: 4,
    topicos: [
      {
        id: "obs-gestação", titulo: "Fisiologia da Gestação", subtitulo: "Trimestres e adaptações maternas",
        conteudo: "<h2>Fisiologia da Gestação</h2><h3>Duração</h3><p>Gestação normal: 280 dias (40 semanas) a partir da última menstruação. Dividida em 3 trimestres.</p><table><thead><tr><th>Período</th><th>Semanas</th><th>Desenvolvimento Fetal</th></tr></thead><tbody><tr><td>1o Trim</td><td>1-12</td><td>Organogênese, tons cardíacos</td></tr><tr><td>2o Trim</td><td>13-27</td><td>Crescimento, movimentos</td></tr><tr><td>3o Trim</td><td>28-40</td><td>Maturação pulmonar, ganho peso</td></tr></tbody></table><div class=\"highlight-box\"><strong>Adaptações Maternas:</strong><ul><li>Cardiovasculares: aumento volume sanguíneo 50%</li><li>Respiratórias: aumento ventilação</li><li>Renais: aumento fluxo renal</li><li>Endocrinas: alterações tireoidianas</li><li>Hematológicas: fisiológica anemia</li></ul></div><h3>Sinais de Gestação</h3><ul><li>Primários: amenorreia, náusea, hipersensibilidade mamária</li><li>Secundários: linha nigra, cloasma, estrias</li><li>Confirmação: beta-HCG positivo</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Gestante com febre + icterícia + sangramento nos primeiros 20 dias de gestação: pensar em gestação ectópica roturada.</div>"
      },
      {
        id: "obs-trabalho", titulo: "Trabalho de Parto", subtitulo: "Fases, parto normal e cesaria",
        conteudo: "<h2>Trabalho de Parto</h2><h3>Fases</h3><table><thead><tr><th>Fase</th><th>Duração</th><th>Características</th></tr></thead><tbody><tr><td>Labor</td><td>0-4cm dilatação</td><td>Contrações irregulares</td></tr><tr><td>Ativa</td><td>4-10cm</td><td>Contrações regulares, 3-5min</td></tr><tr><td>Expulsiva</td><td>10cm-parto</td><td>Impulso de empurrar</td></tr><tr><td>Placentaria</td><td>Após parto</td><td>Eliminação da placenta</td></tr></tbody></table><div class=\"important-box\"><strong>Avaliação do TP:</strong><ul><li>Dilatação cervical (exame vaginal)</li><li>Frequência e intensidade contrações</li><li>Apresentação fetal (qual parte é primeiro)</li><li>Partograma: registro gráfico do trabalho de parto</li></ul></div><h3>Indicações de Cesárea</h3><ul><li>Apresentação podalica</li><li>Placenta prévia</li><li>Sofrimento fetal</li><li>Cabeça pélvica desproporcional</li><li>Prioridade materna</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Parto normal: tempo de dilatação ativa deve ser >= 1cm/h. Se não progredir, comunicar médico para possível cesárea.</div>"
      },
      {
        id: "obs-puerpério", titulo: "Púerpério", subtitulo: "Cuidados pós-parto",
        conteudo: "<h2>Púerpério</h2><p>Período de recuperação pós-parto, dura 6 semanas (42 dias).</p><h3>Signos de Loquios</h3><table><thead><tr><th>Período</th><th>Característica</th></tr></thead><tbody><tr><td>1-4 dias</td><td>Loquios sanguinolentos (vermelhos)</td></tr><tr><td>5-8 dias</td><td>Loquios sero-sanguinolentos (rosados)</td></tr><tr><td>9-42 dias</td><td>Loquios alvos (brancos/amarelados)</td></tr></tbody></table><div class=\"highlight-box\"><strong>Cuidados de Enfermagem:</strong><ul><li>Observar loquios: quantidade, odor, cor</li><li>Aferir PA, FC e temperatura 4x/dia</li><li>Orientar higiene perineal</li><li>Verificar retenção urinária</li><li>Apoio a amamentação</li><li>Avaliar estado emocional (depressão)</li></ul></div><h3>Sinais de Alerta</h3><ul><li>Hemorragia pós-parto: loquios muito abundantes</li><li>Febre > 38C: infecção</li><li>Dor, edema, eritema em MMII: TVP</li><li>Tristeza intensa, choro constante: depressão pós-parto</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Hemorragia pós-parto é principal causa de morte materna. Comunique imediatamente qualquer sangramento excessivo.</div>"
      },
      {
        id: "obs-neonato", titulo: "Assistência ao Neonato", subtitulo: "Primeiros cuidados e Apgar",
        conteudo: "<h2>Assistência ao Neonato</h2><h3>Escala de Apgar</h3><table><thead><tr><th>Críterio</th><th>0</th><th>1</th><th>2</th></tr></thead><tbody><tr><td>Aparelho Respiratório</td><td>Ausente</td><td>Lento, irregular</td><td>Choro forte</td></tr><tr><td>FC</td><td>Ausente</td><td>< 100 bpm</td><td>> 100 bpm</td></tr><tr><td>Tono Muscular</td><td>Frouxo</td><td>Alguma flexão</td><td>Boa flexão</td></tr><tr><td>Reflexos</td><td>Ausentes</td><td>Mínimo</td><td>Choro, tossir</td></tr><tr><td>Cor</td><td>Azul/branco</td><td>Corpo rosa</td><td>Todo rosa</td></tr></tbody></table><div class=\"highlight-box\"><strong>Interpretação:</strong><ul><li>7-10: Neonato vigoroso</li><li>4-6: Asfixia moderada (suporte)</li><li>0-3: Asfixia grave (reanimação)</li></ul></div><h3>Primeiros Cuidados</h3><ul><li>Secar e envolver (prevenir hipotermia)</li><li>Aspirar via aérea se necessário</li><li>Aspiração oronasal antes do corte do cordão</li><li>Corte do cordão: 2 pincas, 5cm do inserto</li><li>Identificação: bracadeira com nome mãe, DN, sexo</li><li>Vitamina K intramuscular (10mg)</li><li>Oftalmoprofilaxia (colírio)</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Neonato cianótico + FR irregular + ausência choro: reanimação neonatal imediata. Aquecimento é prioridade.</div>"
      }
    ]
  },
  {
    id: "enf-psiq", nome: "Enfermagem Psiquiátrica", icon: "\ud83e\udde0", cor: "#6f42c1",
    categoria: "clínico", descricao: "Saúde Mental, legislação, depressão, esquizofrenia e ansiedade.",
    imagem: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400", totalTopicos: 4,
    topicos: [
      {
        id: "psiq-leg", titulo: "Saúde Mental e Legislação", subtitulo: "Lei 10216/01 e internação involuntária",
        conteudo: "<h2>Saúde Mental e Legislação</h2><h3>Lei 10.216/2001</h3><p>Protege direitos e atendimento em Saúde Mental. Determina prioridade a comunidade e desinstitucionalização.</p><div class=\"highlight-box\"><strong>Princípios:</strong><ul><li>Atendimento em serviço de Saúde Mental público</li><li>Respeito, dignidade e humanidade</li><li>Reabilitação psicossocial</li><li>Serviços da rede substitutiva (CAPS)</li></ul></div><h3>Tipos de Internação</h3><table><thead><tr><th>Tipo</th><th>Solicitante</th><th>Duração Max</th></tr></thead><tbody><tr><td>Voluntária</td><td>Paciente</td><td>Indefinida</td></tr><tr><td>Involuntária</td><td>Familiar (1o grau)</td><td>Indefinida</td></tr><tr><td>Compulsória</td><td>Ministério Público</td><td>Indefinida</td></tr></tbody></table><div class=\"important-box\"><strong>CAPS (Centro de Atenção Psicossocial):</strong><ul><li>Atende demanda de Saúde Mental</li><li>Triagem por equipe multiprofissional</li><li>Tratamento substitutivo a internação</li><li>Manejo de crise em tempo integral</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Paciente em risco a si ou a terceiros: internação Compulsória. Comunique autoridades sanitárias e judiciais.</div>"
      },
      {
        id: "psiq-dep", titulo: "Depressão", subtitulo: "Diagnóstico, tratamento e cuidados",
        conteudo: "<h2>Depressão</h2><h3>Diagnóstico (CID-11 / DSM-5)</h3><p>Ao menos 5 sintomas por 2 semanas, incluindo humor deprimido OU perda de interesse:</p><ul><li>Tristeza persistente, vazio</li><li>Perda de interesse ou prazer (anhedonia)</li><li>Alteração do sono (insônia ou hipersonia)</li><li>Alteração do apetite/peso</li><li>Fadiga, perda de energia</li><li>Desvalor, culpa excessiva</li><li>Dificuldade de concentração</li><li>Ideação suicida</li></ul><div class=\"important-box\"><strong>Escala PHQ-9 (Rastreio):</strong><ul><li>0-4: Mínimo</li><li>5-9: Leve</li><li>10-14: Moderado</li><li>15-19: Moderadamente grave</li><li>20-27: Grave</li></ul></div><h3>Tratamento</h3><ul><li>Psicoterapia (TCC)</li><li>Antidepressivos (ISRS: Fluoxetina, Sertralina)</li><li>Psicoedução e suporte</li><li>Rede de apoio social</li></ul><div class=\"warning-box\"><strong>Alerta Suicídio:</strong> Se paciente expressa ideação suicida, NÃO deixe só, comunique equipe, garanta segurança, encaminhe para CAPS/UPA.</div>"
      },
      {
        id: "psiq-esq", titulo: "Esquizofrenia", subtitulo: "Sintomas, tratamento e reabilitação",
        conteudo: "<h2>Esquizofrenia</h2><h3>Classificação dos Sintomas</h3><table><thead><tr><th>Tipo</th><th>Sintomas</th><th>Exemplos</th></tr></thead><tbody><tr><td>Positivos</td><td>Adição de experiência</td><td>Alucinações, delírios</td></tr><tr><td>Negativos</td><td>Diminuição de funções</td><td>Apatia, alogia, abulia</td></tr><tr><td>Cognitivos</td><td>Déficits atencionais</td><td>Dificuldade memoria</td></tr></tbody></table><div class=\"highlight-box\"><strong>Tratamento Farmacológico:</strong><ul><li>Antipsicóticos atípicos: Risperidona, Olanzapina, Quetiapina</li><li>Antipsicóticos típicos: Haloperidol, Clorpromazina</li><li>Farmacoresistência: Clozapina (monitorar contagem leucocitária)</li></ul></div><h3>Cuidados de Enfermagem</h3><ul><li>Relação terapêutica: empática, sem julgamento</li><li>Ambiente seguro: sem objetos cortantes</li><li>Medicação: supervisão, efeitos colaterais</li><li>Controle de rigidez extrapiramidal</li><li>Reabilitação psicossocial</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Síndrome neuroléptica maligna (hipertermia, rigidez, alteração mental): EMERGÊNCIA, suspender antipsicótico e internar.</div>"
      },
      {
        id: "psiq-ans", titulo: "Ansiedade", subtitulo: "Transtornos de ansiedade e manejo",
        conteudo: "<h2>Transtornos de Ansiedade</h2><h3>Tipos Principais</h3><table><thead><tr><th>Tipo</th><th>Característica</th></tr></thead><tbody><tr><td>Transtorno de Ansiedade Generalizada (TAG)</td><td>Preocupação excessiva, >= 6 meses</td></tr><tr><td>Crise de Pânico</td><td>Episódios de medo intenso, palpitação, sudorese</td></tr><tr><td>Fobia Social</td><td>Medo de situações sociais</td></tr><tr><td>TOC</td><td>Obsessões (pensamentos) + Compulsões (rituais)</td></tr><tr><td>TEPT</td><td>Reexperimentação de trauma</td></tr></tbody></table><div class=\"important-box\"><strong>Crise de Pânico - Conduta:</strong><ul><li>Manter calma, falar em tom baixo</li><li>Orientar respiração diafragmática</li><li>Não minimizar o sofrimento</li><li>Avaliar se necessita medicação (BZD)</li><li>Orientar sobre higiene do sono</li></ul></div><h3>Tratamento</h3><ul><li>Psicoterapia TCC (primeira linha)</li><li>ISRS/SNRI (antidepressivos)</li><li>BZD para episódios agudos (curto prazo)</li><li>Relaxamento, meditação, exercício físico</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Paciente com ideação suicida associada a ansiedade grave: encaminhamento imediato a CAPS/UPA. Não deixe só.</div>"
      }
    ]
  },
  {
    id: "micro-parasit", nome: "Microbiologia e Parasitologia", icon: "\ud83d\udd2c", cor: "#20c997",
    categoria: "básico", descricao: "Assepsia/antissepsia, IRAS, parasitas e vírus.",
    imagem: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400", totalTopicos: 4,
    topicos: [
      {
        id: "micro-assep", titulo: "Assepsia e Antissepsia", subtitulo: "Higienização e controle de contaminação",
        conteudo: "<h2>Assepsia e Antissepsia</h2><h3>Diferença Fundamental</h3><table><thead><tr><th>Conceito</th><th>Definição</th><th>Exemplo</th></tr></thead><tbody><tr><td>Assepsia</td><td>Ausência total de microorganismos</td><td>Esterilização cirúrgica</td></tr><tr><td>Antissepsia</td><td>Redução de microorganismos</td><td>Higienização das mãos</td></tr><tr><td>Desinfeção</td><td>Eliminação de patógenos</td><td>Limpeza de superfícies</td></tr></tbody></table><div class=\"highlight-box\"><strong>Higienização das Mãos - 5 Momentos:</strong><ul><li>1. Antes do contato com o paciente</li><li>2. Antes do procedimento asséptico</li><li>3. Após risco de contaminação com líquidos corporais</li><li>4. Após contato com o paciente</li><li>5. Após contato com ambiente próximo</li></ul></div><h3>Agentes Químicos</h3><ul><li>Álcool 70%: desinfeção de pele</li><li>Clorhexidina: antissepsia de mucosa e pele</li><li>Glutaraldeído: estérilização fria</li><li>Hipoclorito de sódio: desinfeção de superfícies</li></ul><div class=\"important-box\"><strong>Níveis de Risco:</strong><ul><li>Baixo: superfícies intactas (caixa de cabeceira)</li><li>Intermediário: mucosa, secreções (sondas)</li><li>Alto: sangue, flúidos estéreis (cirurgia)</li></ul></div>"
      },
      {
        id: "micro-iras", titulo: "IRAS", subtitulo: "Infecções Relacionadas a Assistência à Saúde",
        conteudo: "<h2>IRAS - Infecções Relacionadas a Assistência à Saúde</h2><h3>Principais IRAS</h3><table><thead><tr><th>IRAS</th><th>Causa</th><th>Prevenção</th></tr></thead><tbody><tr><td>ITU associada a cateter</td><td>Cateter uretral</td><td>Higiene, circuito fechado</td></tr><tr><td>Infecção de sitio cirúrgico</td><td>Procedimento cirúrgico</td><td>Profilaxia, curativo</td></tr><tr><td>Infecção respiratória associada a VM</td><td>Intubação orotraqueal</td><td>Curva do tubo elevada, higiene bucal</td></tr><tr><td>Bacteriemia associada a CVC</td><td>Cateter venoso central</td><td>Higiene mãos, kit estéril</td></tr></tbody></table><div class=\"important-box\"><strong>Prevenção - Bundle:</strong><ul><li>Higienização das mãos</li><li>Barreiras estereis para CVC</li><li>Clorhexidina na pele</li><li>Remover acessos desnecessários</li><li>Avaliar diáriamente necessidade de cateter</li></ul></div><h3>Medidas de Enfermagem</h3><ul><li>Lavar mãos com água e sabão ou AHP</li><li>Usar EPI: luvas, máscaras, aventais</li><li>Gerir resíduos hospitalares (infectantes)</li><li>Desinfectar superfícies diáriamente</li><li>Notificar NUCLEI (Núcleo de Controle de Infecção)</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Febre > 38C em paciente internado: avalie origem. Pode ser IRAS. Comunique equipe e NUCLEI.</div>"
      },
      {
        id: "micro-paras", titulo: "Principais Parasitas", subtitulo: "Enterobius, Giardia, Ascaris, Toxoplasma",
        conteudo: "<h2>Parasitoses Comuns</h2><table><thead><tr><th>Parasita</th><th>Transmissão</th><th>Sinais</th><th>Prevenção</th></tr></thead><tbody><tr><td>Enterobius (Oxiura)</td><td>Fecal-oral, autoinfecção</td><td>Prurito anal noturno</td><td>Higiene mãos, unhas cortadas</td></tr><tr><td>Ascaris</td><td>Ingestão ovos contaminados</td><td>Dor abdominal, desnutrição</td><td>Lavagem alimentos</td></tr><tr><td>Giardia lamblia</td><td>Agua contaminada</td><td>Diarreia, dor abdominal</td><td>Agua tratada, higiene</td></tr><tr><td>Toxoplasma gondii</td><td>Gato, carne crua</td><td>Geralmente assintomático</td><td>Evitar terra, carne mal cozida</td></tr><tr><td>Plasmodium (Malária)</td><td> mosquito Anopheles</td><td>Febre ciclica, calafrios</td><td>Repelente, mosquiteiro</td></tr></tbody></table><div class=\"important-box\"><strong>Toxoplasmose na Gestação:</strong><ul><li>Primeira infecção: risco de malformação fetal</li><li>Evitar terra, carne crua, fezes de gato</li><li>Tratamento: Sulfadiazina + Pirimetamina</li><li>Monitorar IgG e IgM durante pre-natal</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Gestante com IgM positiva para toxoplasmose: encaminhe para infectologista. Risco de transmissão vertical.</div>"
      },
      {
        id: "micro-vírus", titulo: "Principais Vírus", subtitulo: "HIV, Hepatites, Covid-19, Dengue",
        conteudo: "<h2>Principais Vírus na Prática de Enfermagem</h2><table><thead><tr><th>Vírus</th><th>Transmissão</th><th>Prevenção</th></tr></thead><tbody><tr><td>HIV</td><td>Sexual, sanguínea, vertical</td><td>Preservativos, EPI, profilaxia</td></tr><tr><td>Hepatite B</td><td>Sanguínea, sexual</td><td>Vacina, EPI</td></tr><tr><td>Hepatite C</td><td>Sanguínea</td><td>EPI, não compartilhar material</td></tr><tr><td>Covid-19</td><td>Aerossol</td><td>Mascara, higiene mãos, vacina</td></tr><tr><td>Dengue/Zika/Chik</td><td>Vetor Aedes aegypti</td><td>Repelente, eliminar focos</td></tr></tbody></table><div class=\"important-box\"><strong>Profissionais e Risco Ocupacional:</strong><ul><li>Exposição a sangue: profilaxia em até 72h</li><li>HIV: AZT + Lamivudina + Raltegravir</li><li>Hepatite B: se vacinado, verificar anti-HBs</li><li>Registrar evento adverso em formulário</li></ul></div><h3>pós-Exposição (PEP)</h3><ul><li>Acidente com material biológico</li><li>Lavar local com água e sabão</li><li>Comunicar superior e Serviço de saúde do Trabalho</li><li>PGD (Profilaxia de Grama Desejada): até 72h</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Acidente com material perfurocortante: LAVE, COMPARE, ENCAMINHE. Tempo é crucial para profilaxia.</div>"
      }
    ]
  },
  {
    id: "etica-leg", nome: "Ética e Legislação em Enfermagem", icon: "\u2696\ufe0f", cor: "#14b8a6",
    categoria: "geral", descricao: "Legislação sanitária e conselhos profissionais. O Código de Ética está em COFEN_ARTIGOS.",
    imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400", totalTopicos: 2,
    topicos: [
      {
        id: "leg-sanit", titulo: "Legislação Sanitária", subtitulo: "Lei 8080/90, Lei 10216/01 e principais leis",
        conteudo: "<h2>Legislação Sanitária do Brasil</h2><h3>Leis Principais</h3><table><thead><tr><th>Lei</th><th>Assunto</th><th>Ponto Principal</th></tr></thead><tbody><tr><td>Lei 8080/1990</td><td>SUS - Organização</td><td>Princípios, direitos, deveres do SUS</td></tr><tr><td>Lei 8142/1990</td><td>Participação popular no SUS</td><td>Conferências, Conselhos de saúde</td></tr><tr><td>Lei 10216/2001</td><td>Saúde Mental</td><td>Direitos, internação, substituição asilos</td></tr><tr><td>Lei 5905/1972</td><td>Profissão de Enfermagem</td><td>Exercício, atribuições, COREN</td></tr><tr><td>Lei 6259/1975</td><td>Controle de infecções</td><td>Vigilância epidemiológica</td></tr><tr><td>Lei 6360/1976</td><td>Vigilância sanitária</td><td>Medicamentos, produtos</td></tr><tr><td>Lei 9434/1997</td><td>Transplantes</td><td>Doação, captação, transplantes</td></tr><tr><td>Lei 12846/2013</td><td>Empresas estrangeiras saúde</td><td>Regulamentação</td></tr></tbody></table><div class=\"important-box\"><strong>Lei 8080/90 - Princípios do SUS:</strong><ul><li>Universalidade: saúde e direito de todos</li><li>Integralidade: atendimento completo</li><li>Equidade: atendimento diferenciado conforme necessidade</li><li>Descentralização: gestão tripartite (Municipal/Estadual/Federal)</li><li>Participação comunitária</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Conhecer essas leis e obrigação profissional. Todas afetam diretamente a prática diária do técnico de enfermagem no SUS.</div>"
      },
      {
        id: "leg-conselhos", titulo: "Conselhos Profissionais", subtitulo: "COREN-AP, CRF, CREM, CRM e funções",
        conteudo: "<h2>Conselhos Profissionais de saúde</h2><table><thead><tr><th>Conselho</th><th>Profissão</th><th>Lei Base</th></tr></thead><tbody><tr><td><strong>COREN-AP</strong></td><td>Enfermagem</td><td>Lei 5905/72</td></tr><tr><td>CRF</td><td>Farmácia</td><td>Lei 5991/73</td></tr><tr><td>CREM</td><td>Odontologia</td><td>Lei 5081/66</td></tr><tr><td>CRM</td><td>Medicina</td><td>Lei 326/57</td></tr><tr><td>CRFa</td><td>Fonoáudiologia</td><td>Lei 6965/81</td></tr><tr><td>CREFITO</td><td>Fisioterapia</td><td>Lei 6916/81</td></tr><tr><td>CRA</td><td>Psicologia</td><td>Lei 4119/62</td></tr></tbody></table><div class=\"highlight-box\"><strong>Funções do COREN-AP:</strong><ul><li>Registrar profissionais de Enfermagem no Amapa</li><li>Fiscalizar exercício da profissão no estado</li><li>Julgar infrações ético-disciplinares</li><li>Representar a categoria no Amapa</li><li>Colaborar com legislação sanitária</li></ul></div><h3>Registro Profissional</h3><ul><li>Obrigatório para exercer a profissão</li><li>Renovação: anual ou bienal (varia por conselho)</li><li>Consulta: site do COREN-AP</li><li>Registro em branco: apenas consulta</li><li>Atividade: consta endereço de trabalho</li></ul><div class=\"important-box\"><strong>Atribuições do Técnico de Enfermagem (Lei 5905/72):</strong><ul><li>Auxiliar médico e enfermeiro</li><li>Aplicar medicações prescritas</li><li>Colher sangue e outros materiais</li><li>Aferir sinais vitais</li><li>Assistir partos normais</li><li>Curativos</li><li>Manter assepsia e antissepsia</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Exercer enfermagem sem registro COREN-AP é crime. Consulte sempre o conselho do seu estado para informações atualizadas.</div>"
      }
    ]
  },
  {
    id: "etica-prof", nome: "Ética Profissional em Enfermagem", icon: "\ud83c\udf1f", cor: "#14b8a6",
    categoria: "geral", descricao: "Princípios bioéticos, consentimento, dilemas éticos, responsabilidade profissional e ética nas redes sociais.",
    imagem: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400", totalTopicos: 8,
    topicos: [
      {
        id: "et-fund", titulo: "Fundamentos da Ética Profissional", subtitulo: "Definição, história e pilares da ética na Saúde",
        conteudo: "<h2>Fundamentos da Ética Profissional</h2><h3>O que é Ética?</h3><p>Ética é o estudo dos valores morais que orientam o comportamento humano. Na Saúde, a ética guia as decisões do profissional em cada situação clínica.</p><div class=\"important-box\"><strong>Definições Importantes:</strong><ul><li><strong>Moral:</strong> conjunto de normas aceitas pela sociedade (varia conforme cultura)</li><li><strong>Ética:</strong> reflexão crítica sobre as normas morais (universal)</li><li><strong>Deontologia:</strong> estudo dos deveres e obrigações profissionais</li><li><strong>Bioética:</strong> ética aplicada à prática de saúde</li></ul></div><h3>Pilares da Ética na Enfermagem</h3><table><thead><tr><th>Princípio</th><th>Significado</th><th>Exemplo Prático</th></tr></thead><tbody><tr><td><strong>Autonomia</strong></td><td>Respeitar decisões do paciente</td><td>Paciente pode recusar tratamento</td></tr><tr><td><strong>Beneficência</strong></td><td>Agir em benefício do paciente</td><td>Escolher melhor conduta clínica</td></tr><tr><td><strong>Não-maleficência</strong></td><td>Não causar dano intencional</td><td>Verificar 5 certos antes de medicar</td></tr><tr><td><strong>Justiça</strong></td><td>Tratar igualmente, distribuir recursos com equidade</td><td>Triagem correta em emergência</td></tr><tr><td><strong>Veracidade</strong></td><td>Dizer a verdade ao paciente</td><td>Informar diagnóstico honestamente</td></tr></tbody></table><div class=\"highlight-box\"><strong>Diferença Fundamental:</strong><ul><li>O que eu POSSO fazer = ETICA (devo fazer?)</li><li>O que eu DEVO fazer = MORAL (é certo?)</li><li>O que eu OBRIGATORIAMENTE faço = LEI (é legal?)</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Na dúvida ética, sempre consulte o COREN-AP, Comitê de ética da instituição ou Colárguas experientes. Nunca decida sozinho em dilemas complexos.</div>"
      },
      {
        id: "et-autonomia", titulo: "Consentimento Livre e Esclarecido", subtitulo: "Direito do paciente a decidir e informação",
        conteudo: "<h2>Consentimento Livre e Esclarecido (TCLE)</h2><h3>O que é o TCLE?</h3><p>Termo de Consentimento Livre e Esclarecido é documento que registra que o paciente foi informado e concordou com o tratamento proposto.</p><div class=\"important-box\"><strong>Elementos Obrigatórios do TCLE:</strong><ul><li>Identificação do paciente e profissional</li><li>Descrição do procedimento/tratamento</li><li>Objéticos do tratamento</li><li>Benefícios esperados</li><li>Riscos e complicações possíveis</li><li>Alternativas de tratamento</li><li>Direito de recusar a qualquer momento</li><li>Assinatura do paciente ou responsável</li></ul></div><h3>Quando é Necessário o TCLE?</h3><table><thead><tr><th>Situação</th><th>TCLE Obrigatório?</th><th>Observação</th></tr></thead><tbody><tr><td>Procedimentos cirúrgicos</td><td>Sim, sempre</td><td>Mesmo anestesia local</td></tr><tr><td>Administração de medicamentos</td><td>Recomendado</td><td>Orientar sobre efeitos</td></tr><tr><td>Coleta de exames</td><td>Sim</td><td>Explicar finalidade</td></tr><tr><td>Transfusão sanguínea</td><td>Sim, sempre</td><td>Riscos e benefícios</td></tr><tr><td>Emergência com risco de vida</td><td>Não (salvo risco iminente)</td><td>Art. 15 CDC - protege vida</td></tr><tr><td>Paciente inconsciente</td><td>Responsável legal</td><td>Familiar de 1o grau</td></tr></tbody></table><div class=\"highlight-box\"><strong>Consentimento Presumido:</strong><ul><li>Paciente inconsciente + risco de vida iminente</li><li>Não há tempo para obter autorização</li><li>Presume-se que paciente concordaria</li><li>Deve ser documentado e justificado</li></ul></div><h3>Direito de Recusar Tratamento</h3><ul><li>Paciente pode recusar qualquer tratamento</li><li>Mesmo que isso leve a morte</li><li>Profissional deve orientar sobre consequências</li><li>Documentar a recusa e orientações</li><li>Não há responsabilidade penal do profissional</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Tratar sem consentimento é crime (Art. 147 CP). Em dúvida, documente TUDO e consulte a equipe.</div>"
      },
      {
        id: "et-sigilo", titulo: "Sigilo Profissional e Privacidade", subtitulo: "Limite do sigilo e consequências de quebra",
        conteudo: "<h2>Sigilo Profissional</h2><h3>O que é Sigilo?</h3><p>Sigilo é obrigação de manter em segredo todas as informações obtidas no exercício profissional sobre o paciente e sua família.</p><div class=\"important-box\"><strong>Alcance do Sigilo:</strong><ul><li>Dados clínicos e diagnósticos</li><li>Informações pessoais e famíliares</li><li>Histórico social e econômico</li><li>Dados genéticos e de Saúde Mental</li><li>Fotos e vídeos (mesmo anonimizados)</li><li>Redes sociais: NUNCA publique</li></ul></div><h3>Quando o Sigilo PODE ser Quebrado?</h3><table><thead><tr><th>Situação</th><th>Condição</th><th>Exemplo</th></tr></thead><tbody><tr><td>Determinação judicial</td><td>Obrigatória</td><td>Ordem de juiz para investigação</td></tr><tr><td>Doenças de notificação</td><td>Obrigatória</td><td>HIV, TB, COVID-19 (anônima)</td></tr><tr><td>Risco a terceiros</td><td>Justificada</td><td>Paciente agressivo, ameaça</td></tr><tr><td>Consentimento do paciente</td><td>Livre</td><td>Autoriza divulgação de caso</td></tr></tbody></table><div class=\"highlight-box\"><strong><li>Sigilo Pós-Mortem:</strong><ul><li>O sigilo NÃO morre com o paciente</li><li>Familiares NÃO tem direito ao prontuário</li><li>Apenas herdeiros necessários podem solicitar</li><li>Mantido por tempo indeterminado</li></ul></div><h3>Consequências de Quebra de Sigilo</h3><ul><li>Administrativa: advertência, multa, suspensão, cassação COREN</li><li>Civil: indenização por danos morais e materiais</li><li>Penal: detenção de 1 a 6 meses (Art. 154 CP)</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Nunca comente casos na copa, corredor ou redes sociais. Mesmo sem identificar paciente, contextos podem revelar identidade.</div>"
      },
      {
        id: "et-dilemas", titulo: "Dilemas Éticos na Prática de Enfermagem", subtitulo: "Situações reais e como decidir",
        conteudo: "<h2>Dilemas Éticos Comuns</h2><h3>O que é um Dilema Ético?</h3><p>Situação onde dois ou mais princípios éticos estão em conflito e não há resposta fácil ou correta.</p><table><thead><tr><th>Dilema</th><th>Conflito</th><th>Conduta Sugerida</th></tr></thead><tbody><tr><td>Paciente recusa tratamento salva-vidas</td><td>Autonomia x Beneficência</td><td>Orientar, documentar, respeitar decisão</td></tr><tr><td>Familiar não quer informar diagnóstico ao paciente</td><td>Veracidade x Não-maleficência</td><td>Conversar com família, orientar direito do paciente</td></tr><tr><td>Recursos escassos (leito de UTI)</td><td>Justiça x Beneficência</td><td>Seguir protocolo de triagem institucional</td></tr><tr><td>Paciente terminal quer eutanasia</td><td>Autonomia x Não-maleficência</td><td>Acolher, orientar sobre cuidados paliativos</td></tr><tr><td>Profissional presencia mau-trato</td><td>Fidelidade x Justiça</td><td>Comunicar COREN-AP e autoridades</td></tr></tbody></table><div class=\"important-box\"><strong>Como Decidir em Dilemas:</strong><ul><li>Identifique todos os envolvidos</li><li>Liste os princípios éticos em conflito</li><li>Consulte Colárguas, COREN ou Comitê</li><li>Documente o raciocínio ético</li><li>Assuma responsabilidade pela decisão</li></ul></div><h3>Casos Reais de Enfermagem</h3><ul><li><strong>Eutanasia:</strong> Brasil NÃO permite. Cuidados paliativos é ética.</li><li><strong>Dystanasia:</strong> Suspender tratamento sem fim é ético quando fútil.</li><li><strong>Abandono terapêutico:</strong> Retirada de suporte quando não há mais benefício é ética.</li><li><strong>Ordem do médico errada:</strong> Técnico DEVE recusar e comunicar.</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Em dilemas, registre em prontuário seu raciocínio ético. Consulte sempre o Comitê de ética da instituição.</div>"
      },
      {
        id: "et-resp", titulo: "Responsabilidade Profissional", subtitulo: "Civil, criminal e administrativa",
        conteudo: "<h2>Responsabilidade Profissional</h2><h3>Tipos de Responsabilidade</h3><table><thead><tr><th>Tipo</th><th>Descrição</th><th>Exemplo</th></tr></thead><tbody><tr><td><strong>Civil</strong></td><td>Reparação de danos (indenização)</td><td>Paciente sofre dano por erro, indeniza</td></tr><tr><td><strong>Criminal</strong></td><td>Pena privativa de liberdade</td><td>Homicídio culposo por imperícia</td></tr><tr><td><strong>Administrativa</strong></td><td>Penalidade do COREN</td><td>Suspensão, cassação do registro</td></tr></tbody></table><div class=\"important-box\"><strong>Elementos da Responsabilidade Civil:</strong><ul><li><strong>Fato:</strong> o erro aconteceu</li><li><strong>Dano:</strong> paciente sofreu prejuízo</li><li><strong>Nexo causal:</strong> o erro causou o dano</li><li><strong>Culpa:</strong> negligência, imperícia ou imprudência</li></ul></div><h3>Tipos de Culpa</h3><ul><li><strong>Negligência:</strong> omissão do que deveria fazer (não monitorar paciente)</li><li><strong>Imperícia:</strong> falta de aptidão técnica (errar dosagem por desconhecimento)</li><li><strong>Imprudência:</strong> ação sem cautela (aplicar medicação sem verificar paciente)</li></ul><div class=\"highlight-box\"><strong>Princípio da Culpa:</strong><ul><li>Ninguém é responsabilizado objetivamente em saúde</li><li>É necessário provar o erro e o nexo causal</li><li>Profissional não responde por erro do médico/patologia</li><li>Responde por SEUS atos dentro de sua atribuição</li></ul></div><h3>Erro Médico vs Erro de Enfermagem</h3><ul><li><strong>Erro médico:</strong> diagnóstico ou prescrição errada (responsabilidade do médico)</li><li><strong>Erro de enfermagem:</strong> execução incorreta (aplicação errada, falha no registro)</li><li><strong>Erro institucional:</strong> falta de material, equipe insuficiente</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Para se proteger: registre TUDO, siga protocolos, capacite-se continuamente e em dúvida, pergunte.</div>"
      },
      {
        id: "et-pesquisa", titulo: "Ética em Pesquisa com Seres Humanos", subtitulo: "CEP, CEP e normas éticas em pesquisa",
        conteudo: "<h2>Ética em Pesquisa</h2><h3>Por que e Importante?</h3><p>Pesquisas com seres humanos exigem proteção especial para evitar danos e garantir dignidade aos participantes.</p><div class=\"important-box\"><strong>histórico - Código de Nuremberg (1947):</strong><ul><li>Criado após experimentos nazistas</li><li>Consentimento é obrigatório</li><li>Pesquisa deve ser cientificamente justificável</li></ul></div><div class=\"highlight-box\"><strong>Princípios Éticos em Pesquisa (Helsinki):</strong><ul><li>Bem-estar do participante é prioridade</li><li>Riscos devem ser mínimos</li><li>Benefícios devem superar riscos</li><li>Consentimento livre e documentado</li><li>Participante pode sair a qualquer momento</li></ul></div><h3>Comitê de Ética em Pesquisa (CEP)</h3><table><thead><tr><th>Função</th><th>Descrição</th></tr></thead><tbody><tr><td>Avaliar projetos</td><td>Analisa riscos, benefícios e consentimento</td></tr><tr><td>Monitorar estudos</td><td>Acompanha execução e eventos adversos</td></tr><tr><td>Proteger participantes</td><td>Garante dignidade e segurança</td></tr><tr><td>Exigir TCLE</td><td>Documento obrigatório para toda pesquisa</td></tr></tbody></table><div class=\"important-box\"><strong>TCLE em Pesquisa - Requisitos:</strong><ul><li>Objéticos claros da pesquisa</li><li>Procedimentos detalhados</li><li>Riscos e benefícios explicados</li><li>Garantia de sigilo</li><li>Direito de recusar sem prejuízo</li><li>Indenização em caso de dano</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Participar de pesquisa sem aprovação do CEP é PROIBIDO. Profissional que aplicar tratamento experimental sem consentimento responde civil e criminalmente.</div>"
      },
      {
        id: "et-redes", titulo: "Ética nas Redes Sociais e Tecnologia", subtitulo: "Limites do uso de smartphones e mídias sociais",
        conteudo: "<h2>Ética nas Redes Sociais</h2><h3>O Risco do Uso Inadequado</h3><p>A tecnologia trouxe rapidez e facilidade, mas também riscos éticos quando usada de forma irresponsável no ambiente de trabalho.</p><div class=\"important-box\"><strong>O que é PROIBIDO:</strong><ul><li>Fotos de pacientes (mesmo sem rosto)</li><li>Vídeos de procedimentos</li><li>Compartilhar prontuários ou exames</li><li>Postar sobre casos em andamento</li><li>Fotos no centro cirúrgico</li><li>Gravações de áudio sem autorização</li></ul></div><h3>Consequências Legais</h3><table><thead><tr><th>Ação</th><th>Consequência</th></tr></thead><tbody><tr><td>Fotografar paciente</td><td>Indenização civil + penalidade COREN</td></tr><tr><td>Postar caso em rede social</td><td>Quebra de sigilo + cassação</td></tr><tr><td>Gravar procedimento sem autorização</td><td>Crime contra intimidade</td></tr><tr><td>Usar smartphone durante atendimento</td><td>Descuido profissional</td></tr></tbody></table><div class=\"highlight-box\"><strong>Uso Ético da Tecnologia:</strong><ul><li>Smartphone APENAS para uso profissional</li><li>Aplis médicos: uso autorizado pela instituição</li><li>Fotos de feridas: APENAS com consentimento e para prontuário</li><li>Mensagens com equipe: em apps seguros</li><li>Educação: usar para atualização, não distração</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> A câmera do celular NUNCA deve ser usada para fotografar pacientes. Mesmo com consentimento, há risco de extravio. Use câmeras institucionais.</div>"
      },
      {
        id: "et-autocuidado", titulo: "Ética e Autocuidado do Profissional", subtitulo: "Saúde mental, saúde do trabalhador e limites",
        conteudo: "<h2>Ética e Autocuidado</h2><h3>Por que Autocuidado é Ético?</h3><p>Profissional doente, cansado ou emocionalmente abalado não consegue cuidar de ninguém com qualidade. Autocuidado é ético porque protege pacientes e profissionais.</p><div class=\"important-box\"><strong>Direitos do Profissional:</strong><ul><li>Jornada de trabalho dentro da lei</li><li>Intervalos para descanso e alimentação</li><li>Ambiente de trabalho seguro</li><li>EPIs adequados</li><li>Saúde mental é assistida</li><li>Licença médica quando necessária</li></ul></div><h3>Sinais de Burnout em Enfermagem</h3><table><thead><tr><th>Físico</th><th>Emocional</th><th>Comportamental</th></tr></thead><tbody><tr><td>Queixas frequentes</td><td>Despersonalização</td><td>Absenteismo</td></tr><tr><td>Cefaleia constante</td><td>Desinteresse</td><td>Erros frequentes</td></tr><tr><td>Insônia</td><td>Irresponsabilidade</td><td>Isolamento</td></tr><tr><td>Fadiga crônica</td><td>Culpa excessiva</td><td>Uso de substâncias</td></tr></tbody></table><div class=\"highlight-box\"><strong>Estratégias de Autocuidado:</strong><ul><li>Respiração e pausas durante plantão</li><li>Alimentação adequada e hidratação</li><li>Exercício físico regular</li><li>Apoio social e profissional</li><li>Terapia psicológica quando necessária</li><li>Sair do plantão quando emocionalmente abalado</li></ul></div><h3>Limites Profissionais</h3><ul><li>Não levar problemas do trabalho para casa</li><li>Não se envolver emocionalmente excessivamente</li><li>Distinguir empatia de Identificação</li><li>Saber dizer não quando necessário</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Profissional com burnout comete mais erros. Se estiver sentindo esses sinais, procure apoio. Cuidar de você é parte da ética profissional.</div>"
      },
      {
        id: "et-relações", titulo: "Relações Interpessoais e Postura Profissional", subtitulo: "Habilidades sociais, comunicação, empatia, igualdade, equidade e achismo",
        conteudo: "<h2>Relações Interpessoais na Enfermagem</h2><h3>O que são Relações Interpessoais?</h3><p>Relações interpessoais são as interações e conexões emocionais, cognitivas e comportamentais que se estabelecem entre as pessoas. Na Saúde, essas relações são fundamentais para a qualidade do atendimento e do trabalho em equipe.</p><div class=\"important-box\"><strong>Pilares das Relações Interpessoais na Saúde:</strong><ul><li><strong>Respeito:</strong> valorizar cada pessoa como única</li><li><strong>Confiança:</strong> base para cooperação e trabalho em equipe</li><li><strong>Empatia:</strong> capacidade de se colocar no lugar do outro</li><li><strong>Comunicação:</strong> troca clara e respeitosa de informações</li></ul></div><h3>Habilidades Interpessoais</h3><p>Habilidades interpessoais são competências sociais que permitem ao profissional interagir de forma eficaz com pacientes, famíliares e equipe.</p><table><thead><tr><th>Habilidade</th><th>Descrição</th><th>Aplicação na Saúde</th></tr></thead><tbody><tr><td><strong>Escuta Ativa</strong></td><td>Ouvir com atenção, sem interromper</td><td>Paciente se sente acolhido e compreendido</td></tr><tr><td><strong>Empatia</strong></td><td>Compreender sentimentos do outro</td><td>Diminui ansiedade e melhora adesão ao tratamento</td></tr><tr><td><strong>Assertividade</strong></td><td>Expressar ideias com clareza e respeito</td><td>Comunicar dúvidas, erros e necessidades claramente</td></tr><tr><td><strong>Controle de impulsos</strong></td><td>Gerenciar emoções em situações críticas</td><td>Mantém profissionalismo em emergências</td></tr><tr><td><strong>Flexibilidade</strong></td><td>Adaptar-se a mudanças e novas situações</td><td>Lidar com imprevistos e diferentes perfis de pacientes</td></tr></tbody></table><div class=\"highlight-box\"><strong>Escuta Ativa - Como praticar:</strong><ul><li>Mantenha contato visual</li><li>Não balance a cabeça (sim/não)</li><li>Não interrompa o paciente</li><li>Repita palavras-chaveave para confirmar entendimento</li><li>Ajude com perguntas abertas</li><li>Evite julgamentos</li></ul></div><h3>Comunicação Assertiva</h3><p>Comunicação assertiva e aquela em que o profissional expressa suas ideias, sentimentos e necessidades de forma clara, direta e respeitosa, sem agressividade ou passividade.</p><table><thead><tr><th>Tipo</th><th>Comportamento</th><th>Exemplo</th></tr></thead><tbody><tr><td><strong>Passivo</strong></td><td>Não defende seus direitos</td><td>Não cobra material que precisa</td></tr><tr><td><strong>Agresivo</strong></td><td>Impoe sua vontade com violencia</td><td>Grita quando não concorda</td></tr><tr><td><strong>Assertivo</strong></td><td>Expressa com respeito e clareza</td><td>\"Preciso de material para atender, vamos resolver?\"</td></tr></tbody></table><div class=\"important-box\"><strong>Como ser assertivo:</strong><ul><li>Use frases na 1a pessoa (\"Eu sinto...\", \"Eu preciso...\")</li><li>Seja específico e direto</li><li>Mantenha tom de voz calmo</li><li>Ouca antes de responder</li><li>Valide o sentimento do outro</li></ul></div><h3>Igualdade e Equidade na Saúde</h3><table><thead><tr><th>Conceito</th><th>Significado</th><th>Exemplo Prático</th></tr></thead><tbody><tr><td><strong>Igualdade</strong></td><td>Dar os mesmos recursos a todos</td><td>Todos recebem mesmo tratamento, sem considerar necessidades</td></tr><tr><td><strong>Equidade</strong></td><td>Dar o que cada um precisa</td><td>Paciente com diabetes recebe orientação nutricional diferenciada</td></tr></tbody></table><div class=\"highlight-box\"><strong>Por que Equidade e mais importante que Igualdade?</strong><ul><li>Nem todos tem as mesmas necessidades</li><li>Pacientes com comorbidades precisam de cuidados diferenciados</li><li>Equidade respeita as diferenças individuais</li><li>Garante justiça social na Saúde</li></ul></div><h3>O que e Achismo?</h3><p>Achismo e quando uma pessoa forma opinioes ou toma decisões baseadas em impressões pessoais, sem evidências cientificas, dados ou conhecimento técnico.</p><div class=\"important-box\"><strong>Origem do Achismo:</strong><ul><li><strong>Historica:</strong> vem do verbo \"achar\" - acreditar sem provas</li><li><strong>Cultural:</strong> transmitida por cultura oral, \"diz que diz\"</li><li><strong>Falta de educação:</strong> ausência de pensamento critico</li><li><strong>Preconceito:</strong> julgamento baseado em aparencia ou crenca</li></ul></div><h3>Achismo na Prática de Enfermagem</h3><table><thead><tr><th>Situação</th><th>Achismo</th><th>Conduta Correta</th></tr></thead><tbody><tr><td>\"Esse paciente não esta doente\"</td><td>Opiniao sem exame clínico</td><td>Avaliar sinais vitais e sintomas objetivamente</td></tr><tr><td>\"Paciente de etnia X e mais resistente\"</td><td>Preconceito e racismo</td><td>Tratar cada paciente individualmente</td></tr><tr><td>\"Não precisa de analgesia\"</td><td>Minimizar dor do paciente</td><td>Respeitar a percepção de dor do paciente (EVA)</td></tr><tr><td>\"Medicação serve pra todos\"</td><td>Generalização perigosa</td><td>Verificar alergias e histórico individual</td></tr></tbody></table><div class=\"warning-box\"><strong>Alerta:</strong> O achismo e INCOMPATIVEL com a prática profissional de enfermagem. Todo cuidado deve ser baseado em EVIDENCIAS CIENTIFICAS e no protocolo da instituição.</div><h3>Éticas e Valores Humanos</h3><p>Éticas são os princípios morais que guiam o comportamento humano. Valores são as qualidades que consideramos importantes e que orientam nossas ações.</p><table><thead><tr><th>Valor Humano</th><th>Aplicação na Enfermagem</th></tr></thead><tbody><tr><td><strong>Respeito</strong></td><td>Valorizar dignidade de todo paciente</td></tr><tr><td><strong>Responsabilidade</strong></td><td>Assumir consequências de seus atos</td></tr><tr><td><strong>Comprometimento</strong></td><td>Cuidar com dedicação e competência</td></tr><tr><td><strong>Justiça</strong></td><td>Tratar com imparcialidade</td></tr><tr><td><strong>Tolerância</strong></td><td>Aceitar diferenças sem julgamento</td></tr><tr><td><strong>Solidariedade</strong></td><td>Ajudar Colárguas e pacientes em necessidade</td></tr></tbody></table><div class=\"highlight-box\"><strong>Diferença entre Ética e Moral:</strong><ul><li><strong>Moral:</strong> conjunto de normas aceitas pela sociedade (varia conforme cultura)</li><li><strong>Ética:</strong> reflexão critica sobre as normas morais (universal)</li><li><strong>Valores:</strong> guiam escolhas e ações do profissional</li></ul></div><h3>Postura Profissional</h3><p>A postura profissional e a forma como o enfermeiro se apresenta e atua no ambiente de trabalho, demonstrando competência, ética e respeito.</p><table><thead><tr><th>Aspecto</th><th>Conduta Esperada</th></tr></thead><tbody><tr><td><strong>Vestimenta</strong></td><td>Roupa limpa, avental, cracha identificatorio</td></tr><tr><td><strong>Higiene</strong></td><td>Lavagem das mãos, uniforme asseico</td></tr><tr><td><strong>Comunicação</strong></td><td>Tom de voz calmo, linguagem acessivel, respeitosa</td></tr><tr><td><strong>Pontualidade</strong></td><td>Chegar no horário, cumprir escalas</td></tr><tr><td><strong>Ethos</strong></td><td>Manter profissionalismo, não misturar assuntos pessoais</td></tr><tr><td><strong>Ética</strong></td><td>Seguir Código de Ética, registrar em prontuário</td></tr></tbody></table><div class=\"important-box\"><strong>Erros Comuns que Devem ser Evitados:</strong><ul><li>Conversas pessoais durante atendimento</li><li>Comentarios inadequados na frente de pacientes</li><li>Uso de celular para assuntos não relacionados ao trabalho</li><li>Fofocas e criticas entre Colárguas</li><li>Descumprir protocolos de segurança</li></ul></div><div class=\"warning-box\"><strong>Lembrete:</strong> Postura profissional e reflexo da qualidade do profissional e da instituição. Cada gesto e olhar comúnicam algo ao paciente. Seja exemplar em todas as situações.</div>"
      }
    ]
  },
  {
    id: "primeiros-soc", nome: "Primeiros Socorros e Emergências", icon: "\ud83d\ude91", cor: "#dc3545",
    categoria: "especializado", descricao: "RCP, trauma, queimaduras, intoxicações e cuidados com pacientes em estado grave.",
    imagem: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=400", totalTopicos: 6,
    topicos: [
      {
        id: "ps-rcp", titulo: "RCP - Reanimação Cardiopulmonar", subtitulo: "Suporte Básico e Avançado de Vida",
        conteudo: "<h2>Reanimação Cardiopulmonar (RCP)</h2><h3>Algoritmo AHA 2020</h3><ol><li><strong>Verificar responsividade:</strong> Chamar, tocar ombro</li><li><strong>Acionar SAMU (192) / Bombeiros (193)</strong></li><li><strong>Avaliar respiração:</strong> Ver, ouvir, sentir (max 10s)</li><li><strong>Compressões torácicas:</strong> 30:2 (1 adulto)</li><li><strong>Desfibrilação:</strong> AED o mais rápido possível</li></ol><div class=\"important-box\"><strong>Compressões Torácicas - TECNICA:</strong><ul><li>Local: metade inferior do esterno</li><li>Profundidade: 5-6cm (adulto)</li><li>Velocidade: 100-120/min</li><li>Retorno total do peito entre compressões</li><li>Interrupções < 10 segundos</li></ul></div><h3>Desfibrilador (DEA/AED)</h3><ul><li>Ligar DEA, seguir instruções de voz</li><li>Colocar eletrodos: apex e base</li><li>Analisar ritmo: choque ou não choque</li><li>Se choque: isolar todos, descarregar</li><li>Retomar compressões imediatamente</li></ul><div class=\"highlight-box\"><strong>RCP em Crianca:</strong><ul><li>Compressões com 1 ma ou 2 mãos (dependendo do tamanho)</li><li>Profundidade: 1/3 do diâmetro torácico</li><li>2 minutos de RCP antes de chamar SAMU se sozinho</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> Parada cardíaca: para cada minuto sem RCP, chances de sobrevivência caem 10%. Compressões de boa qualidade são a CHAVE.</div>"
      },
      {
        id: "ps-trauma", titulo: "Atendimento ao Trauma", subtitulo: "ABCDE do trauma e estabilização",
        conteudo: "<h2>Atendimento ao Trauma</h2><h3>ABCDE do Trauma (ATLS)</h3><table><thead><tr><th>Letra</th><th>Avaliação</th><th>Conduta</th></tr></thead><tbody><tr><td><strong>A</strong></td><td>Via aérea + cervical</td><td>Abrir via aérea, imobilizar coluna</td></tr><tr><td><strong>B</strong></td><td>Respiração</td><td>O2, descompressão torácica se necessário</td></tr><tr><td><strong>C</strong></td><td>Circulação + controle hemorragia</td><td>IV, reposição, compressão</td></tr><tr><td><strong>D</strong></td><td>Déficit neurológico</td><td>Glasgow, pupilas, mobilidade</td></tr><tr><td><strong>E</strong></td><td>Exposição e ambiente</td><td>Despir, prevenir hipotermia</td></tr></tbody></table><div class=\"important-box\"><strong>Hemorragias:</strong><ul><li>Compressão direta: primeira conduta</li><li>Torniquete: hemorragia de MMII grave</li><li>Hemostático: gaze com hemostático</li><li>Reposição: SF 0,9%, RL, hemoderivados</li></ul></div><h3>Fraturas</h3><ul><li>Imobilizar no local do acidente (suspeita de fratura)</li><li>Não reduzir fratura exposta</li><li>Verificar PAM distal (pulso, movimento, sensibilidade)</li><li>Encaminhar com imobilização para hospital</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> Trauma grave: NÃO movimentar o paciente até estabilizar. Imobilizar coluna cervical e dorsal. Chamar SAMU.</div>"
      },
      {
        id: "ps-queim", titulo: "Queimaduras", subtitulo: "Classificação, extensão e tratamento",
        conteudo: "<h2>Queimaduras</h2><h3>Classificação por Grau</h3><table><thead><tr><th>Grau</th><th>Profundidade</th><th>Característica</th><th>Cicatrização</th></tr></thead><tbody><tr><td>1o</td><td>Epiderme</td><td>Vermelhidão, dor</td><td>3-5 dias</td></tr><tr><td>2o</td><td>Derme</td><td>Bolhas, dor intensa</td><td>2-3 semanas</td></tr><tr><td>3o</td><td>Subcutâneo+</td><td>Esbranquicado, indolor</td><td>Cirúrgica</td></tr></tbody></table><h3>Regra dos 9 (Superfície Corporal)</h3><table><thead><tr><th>Região</th><th>Porcentagem</th></tr></thead><tbody><tr><td>Cabeça</td><td>9%</td></tr><tr><td>Membro superior (cada)</td><td>9%</td></tr><tr><td>Membro inferior (cada)</td><td>18%</td></tr><tr><td>Tronco anterior</td><td>18%</td></tr><tr><td>Tronco posterior</td><td>18%</td></tr><tr><td>Genitália</td><td>1%</td></tr></tbody></table><div class=\"important-box\"><strong>Conduta Imediata:</strong><ul><li>Retirar roupa (não forçar se aderida)</li><li>Refrigerar com água corrente 15-20 min (20-25C)</li><li>NÃO aplicar pasta de dente, manteiga, gelo</li><li>Cobrir com gaze estéril umedecida</li><li>Analgesia: Dipirona IV ou Tramal</li></ul></div><div class=\"warning-box\"><strong>Alerta:</strong> > 20% superfície corporal = queimadura grave, risco de choque. Encaminhar a centro queimado. Monitorar diurese.</div>"
      },
      {
        id: "ps-intox", titulo: "Intoxicações", subtitulo: "Venenos, medicamentos e gáses",
         conteudo: "<h2>Intoxicações e Envenenamentos</h2><h3>Intoxicações por Tipo</h3><table><thead><tr><th>Tipo</th><th>Exemplos</th><th>Sinais</th><th>Antidoto/Conduta</th></tr></thead><tbody><tr><td>Medicamentos</td><td>Paracetamol, opioides, antidepressivos</td><td>Sonorolência, depressão respiratória</td><td>Naloxone (opioides), NAC (Paracetamol)</td></tr><tr><td>Pragas</td><td>Organofosforados</td><td>SLUD (salivação, lacrimação, urina, diarreia)</td><td>Atropina</td></tr><tr><td>Plantas</td><td>Datura, espinheiro</td><td>Irritação GI, alucinações</td><td>Carvão ativado</td></tr><tr><td>CO</td><td>Incêndio, gás</td><td>Cefaleia, confusão, cianose</td><td>O2 alto fluxo</td></tr></tbody></table><div class=\"important-box\"><strong>Carvão Ativado:</strong><ul><li>Dose: 1g/kg de peso</li><li>Via: oral ou SNG</li><li>Eficiente até 1h da ingestão</li><li>Contraindicado: hidrocarbonetos, ácidos</li></ul></div><h3>Conduta Geral</h3><ul><li>Identificar tóxico: levar embalagem/frasco</li><li>Descontaminação: carvão ativado</li><li>Suporte: via aérea, circulação</li><li>Antidotos específicos quando houver</li><li>Encaminhar para tóxicologia/UPA</li></ul><div class=\"warning-box\"><strong>Alerta:</strong> NÃO induza vomito com ipeca. NÃO lave estômago em casa. Leve embalagem ao hospital. Ligue 188 (CVV) ou SAMU 192.</div>"
       },
       {
         id: "ps-uti", titulo: "Cuidados com Pacientes Graves", subtitulo: "Ventilação mecânica, vasopressores e monitorização",
         conteudo: "<h2>Cuidados com Pacientes em Estado Grave</h2><h3>Avaliação Primária - Glasgow</h3><table><thead><tr><th>Críterio</th><th>Resposta</th><th>Pontos</th></tr></thead><tbody><tr><td>Abertura Ocular</td><td>Espontânea / Comando / Dor / Nenhuma</td><td>4 / 3 / 2 / 1</td></tr><tr><td>Resposta Verbal</td><td>Orientada / Confusa / Inapropiada / Incompreensível / Nenhuma</td><td>5 / 4 / 3 / 2 / 1</td></tr><tr><td>Resposta Motora</td><td>Obedece / Localiza / Flexão / Extensão / Nenhuma</td><td>6 / 5 / 4 / 3 / 2 / 1</td></tr></tbody></table><div class=\"important-box\"><strong>Glasgow:</strong><ul><li>13-15: Leve</li><li>9-12: Moderado</li><li>3-8: Grave (intubação orotraqueal)</li></ul></div><h3>Ventilação Mecânica - Parâmetros Básicos</h3><table><thead><tr><th>Parâmetro</th><th>Normal</th><th>Alerta</th></tr></thead><tbody><tr><td>Volume Corrente</td><td>6-8 mL/kg</td><td>> 10 mL/kg = risco de barotrauma</td></tr><tr><td>FR</td><td>12-20 irpm</td><td>Alta FR = tentativa de compensar</td></tr><tr><td>PEEP</td><td>5-10 cmH2O</td><td>> 10 = risco hemodinâmico</td></tr><tr><td>FIO2</td><td>21-100%</td><td>> 60% prolongado = toxicidade</td></tr></tbody></table><div class=\"highlight-box\"><strong>Sinais de Desmame:</strong><ul><li>Causa de internação resolvida</li><li>FC < 140, PA estável</li><li>FR < 30, SatO2 > 90%</li><li>Consciência preservada</li><li>Secreção abundante: aspirar antes do desmame</li></ul></div><h3>Vasopressores - Drogas de Suporte</h3><table><thead><tr><th>Droga</th><th>Indicação</th><th>Alerta</th></tr></thead><tbody><tr><td>Norepinefrina</td><td>Primeira linha choque séptico</td><td>Via central preferencial</td></tr><tr><td>Dobutamina</td><td>Falência cardíaca</td><td>Monitorar FC</td></tr><tr><td>Adrenalina</td><td>Choque cardiogênico grave</td><td>Arritmogena</td></tr></tbody></table><div class=\"warning-box\"><strong>Alerta:</strong> Paciente com PA cai + FC alta + oligúria + pele fria = CHOQUE. Chamar equipe, iniciar expansão de líquidos, vasopressor conforme orientação medica.</div>"
        }
     ]
  },
  {
    id: "coren-ap", nome: "COREN-AP", icon: "🏛️", cor: "#14b8a6",
    categoria: "geral",
    descricao: "Conselho Regional de Enfermagem do Amapá. Lei 5.905/73, competências, registro, processo ético-disciplinar e resoluções.",
    imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
    totalTopicos: 6,
    topicos: [
      {
        id: "coren-oque", titulo: "O que é o COREN-AP", subtitulo: "História, estrutura e finalidade",
        conteudo: "<h2>Conselho Regional de Enfermagem do Amapá (COREN-AP)</h2><h3>O que é</h3><p>O <strong>COREN-AP</strong> é o Conselho Regional de Enfermagem do Amapá, órgão fiscalizador do exercício profissional de enfermagem no estado. O COFEN (Conselho Federal) e os CORENs (Conselhos Regionais) constituem em seu conjunto uma <strong>Autarquia Pública Federal</strong>, autônoma, vinculada ao Poder Executivo, criada pela <strong>Lei Federal nº 5.905/1973</strong>.</p><h3>Finalidade</h3><ul><li>Deliberar sobre inscrição no Conselho e seu cancelamento</li><li>Disciplinar e fiscalizar o exercício profissional</li><li>Fazer executar as instruções e provimentos do COFEN</li><li>Manter o registro dos profissionais com exercício na jurisdição</li><li>Conhecer e decidir assuntos atinentes à ética profissional</li><li>Expedir a carteira profissional</li><li>Zelar pelo bom conceito da profissão</li></ul><h3>Endereço e Contato</h3><ul><li><strong>Endereço:</strong> Av. Duque de Caxias, 1308 - Central, Macapá-AP</li><li><strong>CEP:</strong> 68900-071</li><li><strong>Telefone:</strong> (96) 3345-5450</li><li><strong>E-mail:</strong> protocolo@coren-ap.gov.br</li><li><strong>Horário:</strong> Segunda a sexta, 08h às 17h</li><li><strong>Website:</strong> www.coren-ap.gov.br</li></ul><div class=\"important-box\"><strong>Importante:</strong> A filiação ao COREN-AP é <strong>obrigatória</strong> para todos os profissionais de enfermagem que exercem atividade no estado do Amapá. Sem registro ativo, o profissional não pode exercer a profissão.</div>"
      },
      {
        id: "coren-estrutura", titulo: "Estrutura e Composição", subtitulo: "Plenário, diretoria e delegacias",
        conteudo: "<h2>Estrutura do COREN-AP</h2><h3>Composição do Plenário</h3><p>O COREN-AP é composto por <strong>5 a 21 membros</strong> e tantos suplentes, todos de nacionalidade brasileira, na proporção de:</p><ul><li><strong>3/5 (três quintos)</strong> de Enfermeiros</li><li><strong>2/5 (dois quintos)</strong> de profissionais das demais categorias (Técnicos e Auxiliares)</li></ul><h3>Mandato</h3><ul><li>Mandato de <strong>3 anos</strong></li><li>Eleitos por voto pessoal, secreto e obrigatório</li><li>Assembleia Geral especialmente convocada para esse fim</li></ul><h3>Diretoria</h3><ul><li><strong>Presidente</strong> - coordenador das atividades</li><li><strong>Vice-Presidente</strong></li><li><strong>1º Secretário</strong></li><li><strong>2º Secretário</strong></li><li><strong>1º Tesoureiro</strong></li><li><strong>2º Tesoureiro</strong></li></ul><h3>Atribuições dos Conselhos Regionais (Art. 15, Lei 5.905/73)</h3><ol><li>Deliberar sobre inscrição e cancelamento</li><li>Disciplinar e fiscalizar o exercício profissional</li><li>Fazer executar instruções do COFEN</li><li>Manter registro dos profissionais</li><li>Decidir assuntos éticos, impondo penalidades</li><li>Elaborar proposta orçamentária</li><li>Expedir carteira profissional</li><li>Zelar pelo bom conceito da profissão</li><li>Publicar relatórios anuais</li><li>Propor medidas ao COFEN</li><li>Fixar valor da anuidade</li><li>Prestar contas ao COFEN</li><li>Eleger diretoria e delegados</li></ol>"
      },
      {
        id: "coren-registro", titulo: "Registro Profissional", subtitulo: "Como se registrar e manter a inscrição",
        conteudo: "<h2>Registro no COREN-AP</h2><h3>Quem deve se registrar</h3><ul><li><strong>Enfermeiros</strong> (graduados em Enfermagem)</li><li><strong>Técnicos de Enfermagem</strong> (curso técnico)</li><li><strong>Auxiliares de Enfermagem</strong> (curso auxiliar)</li><li><strong>Atendentes de Enfermagem</strong></li></ul><h3>Documentos Necessários</h3><ul><li>Diploma ou certificado de conclusão do curso</li><li>RG e CPF</li><li>Comprovante de residência</li><li>Foto 3x4 recente</li><li>Comprovante de pagamento da anuidade</li></ul><h3>Tipos de Inscrição</h3><ul><li><strong>Inscrição Inicial:</strong> Primeiro registro profissional</li><li><strong>Transferência:</strong> Quando o profissional muda de jurisdição (de outro COREN para o COREN-AP)</li><li><strong>Reabilitação:</strong> Quando a inscrição foi cancelada e o profissional deseja retornar</li></ul><h3>Anuidade</h3><p>O pagamento da <strong>anuidade</strong> é obrigatório e deve ser renovado anualmente. O valor é fixado pelo COREN-AP. O profissional com anuidade em atraso pode ter sua inscrição <strong>suspensa</strong>.</p><div class=\"warning-box\"><strong>Alerta:</strong> Exercer a profissão sem registro ativo no COREN-AP configura <strong>exercício ilegal</strong> da profissão, sujeito a penalidades.</div>"
      },
      {
        id: "coren-etica", titulo: "Processo Ético-Disciplinar", subtitulo: "Denúncia, instrução e julgamento",
        conteudo: "<h2>Processo Ético-Disciplinar no COREN-AP</h2><h3>O que é</h3><p>O processo ético-disciplinar é o instrumento pelo qual o COREN-AP apura e julga infrações éticas e disciplinares cometidas por profissionais de enfermagem, de acordo com o <strong>Código de Ética dos Profissionais de Enfermagem</strong> (Resolução COFEN nº 564/2017).</p><h3>Quem pode denunciar</h3><ul><li>Qualquer pessoa: usuário do serviço de saúde, profissional de enfermagem ou de outra categoria</li><li>A denúncia é <strong>gratuita</strong> e pode ser feita por escrito</li></ul><h3>Etapas do Processo</h3><ol><li><strong>Denúncia:</strong> Formalização por escrito com narração clara do fato</li><li><strong>Parecer do Relator:</strong> Conselheiro designado emite parecer fundamentado</li><li><strong>Deliberação do Plenário:</strong> Decide pela abertura de processo ético ou arquivamento</li><li><strong>Comissão de Instrução:</strong> Responsável pelo andamento do processo</li><li><strong>Julgamento:</strong> Plenário decide pela inocência ou aplicação de penalidade</li></ol><h3>Penalidades (Art. 97 a 119 do Código de Ética)</h3><ul><li><strong>Advertência</strong> - para infrações leves</li><li><strong>Multa</strong> - valor fixado pelo COFEN</li><li><strong>Suspensão</strong> - impedimento temporário do exercício</li><li><strong>Cassação do registro</strong> - cancelamento definitivo</li></ul><div class=\"important-box\"><strong>Direito de Defesa:</strong> O profissional denunciado tem direito ao contraditório e ampla defesa em todas as fases do processo.</div>"
      },
      {
        id: "coren-lei", titulo: "Lei 5.905/73 e Resoluções", subtitulo: "Legislação que regulamenta a profissão",
        conteudo: "<h2>Legislação da Enfermagem</h2><h3>Lei Federal nº 5.905/1973</h3><p>Lei que criou o <strong>COFEN</strong> e os <strong>CORENs</strong>, regulamentando o exercício profissional de enfermagem em todo o Brasil.</p><h3>Principais Leis e Resoluções</h3><table><thead><tr><th>Lei/Resolução</th><th>Assunto</th></tr></thead><tbody><tr><td>Lei 5.905/73</td><td>Criação do COFEN e CORENs</td></tr><tr><td>Lei 7.498/86</td><td>Regulamenta o exercício da Enfermagem</td></tr><tr><td>Decreto 94.406/87</td><td>Regulamenta as Leis 5.905/73 e 7.498/86</td></tr><tr><td>Res. COFEN 564/2017</td><td>Código de Ética dos Profissionais de Enfermagem</td></tr><tr><td>Res. COFEN 370/2010</td><td>Código de Processo Ético-Disciplinar</td></tr><tr><td>Res. COFEN 568/2018</td><td>Consultórios e Clínicas de Enfermagem</td></tr><tr><td>Res. COFEN 358/2009</td><td>Cuidados de Enfermagem à Pessoa com Vulnerabilidade</td></tr><tr><td>Res. COFEN 710/2022</td><td>Doação e Transplante de Órgãos</td></tr></tbody></table><h3>Atribuições por Categoria</h3><ul><li><strong>Enfermeiro:</strong> Prescrever condutas, coordenar equipe, realizar pesquisa, docência</li><li><strong>Técnico de Enfermagem:</strong> Executar cuidados, aplicar medicamentos, coletar exames</li><li><strong>Auxiliar de Enfermagem:</strong> Atividades de cuidados básicos, higiene, conforto</li></ul><div class=\"warning-box\"><strong>Importante:</strong> O técnico e o auxiliar NÃO podem prescrever medicamentos nem realizar procedimentos que não sejam de sua competência. Respeite sempre suas atribuições!</div>"
      },
      {
        id: "coren-serviços", titulo: "Serviços e Carteira", subtitulo: "Carteira profissional, online e atendimento",
        conteudo: "<h2>Serviços do COREN-AP</h2><h3>Carteira Profissional</h3><ul><li>Indispensável ao exercício da profissão</li><li>Tem <strong>fé pública</strong> em todo o território nacional</li><li>Serve como documento de identidade</li><li>Deve ser portada durante o exercício das atividades</li></ul><h3>Serviços Online</h3><ul><li><strong>Consulta de inscrição:</strong> Verificar situação cadastral</li><li><strong>Segunda via de carteira:</strong> Em caso de extravio ou roubo</li><li><strong>Pagamento de anuidade:</strong> PIX, boleto ou cartão</li><li><strong>Comprovantes:</strong> Certidões e declarações</li></ul><h3>Atendimento ao Público</h3><ul><li><strong>Horário:</strong> Segunda a sexta-feira, 08h às 17h</li><li><strong>Endereço:</strong> Av. Duque de Caxias, 1308 - Central, Macapá-AP</li><li><strong>Telefone:</strong> (96) 3345-5450</li><li><strong>E-mail:</strong> protocolo@coren-ap.gov.br</li></ul><h3>Ouvidoria</h3><p>Para reclamações, sugestões e elogios, acesse a ouvidoria do COFEN: <strong>ouvidoria.cofen.gov.br/coren-ap</strong></p><div class=\"important-box\"><strong>Dica:</strong> Mantenha sua inscrição sempre regular e anuidade em dia. Verifique sua situação pelo site do COREN-AP regularmente.</div>"
      }
    ]
  },
  // Adicionando a disciplina do Código de Ética do COREN-AP
  ...(typeof COFEN_DISCIPLINA !== 'undefined' ? [COFEN_DISCIPLINA] : [])
];

const QUIZ_QUESTOES = [
  { id: 1, disciplina_id: "anat-fisio", pergunta: "Qual é a função principal dos alveolos pulmonares?", opcoes: ["Conduzir o ar para os brônquios", "Realizar trocas gásosas (O2 e CO2)", "Filtrar partículas do ar inspirado", "Produzir muco para proteção"], resposta: 1, explicacao: "Os alveolos são estruturas onde ocorre a hematose, troca de oxigênio e gás carbônico entre o ar e o sangue.", dificuldade: "fácil" },
  { id: 2, disciplina_id: "anat-fisio", pergunta: "Qual a frequência cardíaca normal de um adulto em repouso?", opcoes: ["40 a 60 bpm", "60 a 100 bpm", "100 a 120 bpm", "120 a 140 bpm"], resposta: 1, explicacao: "A FC normal do adulto em repouso é de 60 a 100 batimentos por minuto. Abaixo de 60 é bradicardia, acima de 100 é taquicardia.", dificuldade: "fácil" },
  { id: 3, disciplina_id: "anat-fisio", pergunta: "Qual hormônio é produzido pelo pâncreas para reduzir a glicemia?", opcoes: ["Glucagon", "Cortisol", "Insulina", "Adrenalina"], resposta: 2, explicacao: "A insulina é produzida pelas células beta das ilhotas de Langerhans do pâncreas e tem a função de reduzir a glicemia sanguínea.", dificuldade: "fácil" },
  { id: 4, disciplina_id: "anat-fisio", pergunta: "Qual o volume urinário considerado normal por dia em um adulto?", opcoes: ["200 a 500 mL", "800 a 2.000 mL", "3.000 a 5.000 mL", "Apenas 100 mL"], resposta: 1, explicacao: "O volume urinário normal é de 800 a 2.000 mL/dia. Abaixo de 500mL é oligúria e abaixo de 100mL é anúria.", dificuldade: "fácil" },
  { id: 5, disciplina_id: "anat-fisio", pergunta: "Na avaliação neurologica, a sigla PERRLA significa:", opcoes: ["Pulsação, Edema, Reflexo, Lesão, Alergia", "Pupila Edil, Redonda, Reagente, Largada, Abertura", "Pupila Redonda, Igual, Reativa à Luz e à Acomodação", "Pulseira, Exame, Registro, Lembrete, Anotação"], resposta: 2, explicacao: "PERRLA: Pupila Redonda, Igual, Reativa a Luz e a Acomodação. É um indicador importante do estado neurológico.", dificuldade: "medio" },
  { id: 6, disciplina_id: "anat-fisio", pergunta: "Qual a pressão normal do liquido cefalorraquidiana (LCR) na punção lombar?", opcoes: ["0 a 5 cmH2O", "6 a 20 cmH2O", "30 a 50 cmH2O", "100 a 120 cmH2O"], resposta: 1, explicacao: "A pressão normal do LCR é de 6 a 20 cmH2O. Valores acima indicam hipertensão intracraniana.", dificuldade: "medio" },
  { id: 7, disciplina_id: "farmaco", pergunta: "Qual a regra fundamental antes de administrar qualquer medicamento?", opcoes: ["Verificar o nome do médico", "Verificar alergias do paciente", "Verificar o custo do medicamento", "Verificar a data de fabricação apenas"], resposta: 1, explicacao: "A verificação de alergias é o primeiro passo fundamental. Pode causar anafilaxia e morte do paciente.", dificuldade: "fácil" },
  { id: 8, disciplina_id: "farmaco", pergunta: "Um paciente pesa 70kg e a prescrição é de Paracetamol 15mg/kg. Qual a dose correta?", opcoes: ["750mg", "1.050mg", "1.500mg", "500mg"], resposta: 1, explicacao: "70kg x 15mg/kg = 1.050mg. O cálculo é feito multiplicando o peso pela dose por kg prescrita.", dificuldade: "medio" },
  { id: 9, disciplina_id: "farmaco", pergunta: "Qual a via de administração indicada para insulina?", opcoes: ["Intramuscular", "Intravenosa", "Subcutânea", "Oral"], resposta: 2, explicacao: "A insulina é administrada por via subcutânea, usando técnica do pregão, rotacionando locais (abdomen, braco, coxa, glúteo).", dificuldade: "fácil" },
  { id: 10, disciplina_id: "farmaco", pergunta: "A receita amarela é indicada para quais tipos de medicamentos?", opcoes: ["Antibióticos", "Psicotrópicos e entorpecentes", "anti-inflamatórios", "Vitaminas"], resposta: 1, explicacao: "Receita amarela é específica para Psicotrópicos e entorpecentes. Azul é para antibióticos e controlados simples.", dificuldade: "fácil" },
  { id: 11, disciplina_id: "farmaco", pergunta: "Qual antibiótico exige monitoramento de picos e vales para evitar toxicidade?", opcoes: ["Amoxicilina", "Cefalexina", "Gentamicina", "Azitromicina"], resposta: 2, explicacao: "A Gentamicina é aminoglicosídeo, nefro e ototóxica. Exige coleta de picos (30min pós-dose) e vales (antes da próxima dose).", dificuldade: "medio" },
  { id: 12, disciplina_id: "enf-medicir", pergunta: "Qual a posição ideal para paciente no pós-operatório de cirurgia abdominal?", opcoes: ["Decúbito dorsal horizontal", "Fowler (semi-elevada 30-45 graus)", "Decúbito lateral", "Trendelenburg"], resposta: 1, explicacao: "A posição de Fowler facilita a respiração, reduz pressão abdominal e favorece a drenagem de secreções.", dificuldade: "fácil" },
  { id: 13, disciplina_id: "enf-medicir", pergunta: "Qual sinal indica fuga pleural em drenagem torácica?", opcoes: ["Ausência de oscilação", "Presença de bolhas de ar no frasco", "Secreção esverdeada", "Volume acima de 500mL"], resposta: 1, explicacao: "Bolhas de ar no sistema selado indicam fuga pleural, ou seja, ar está entrando pela cavidade torácica e não deveria.", dificuldade: "medio" },
  { id: 14, disciplina_id: "enf-medicir", pergunta: "A profilaxia antibiotica cirúrgica (SNA) deve ser administrada:", opcoes: ["2 horas antes da cirurgia", "30-60 minutos antes da incisão", "Após a cirurgia", "No primeiro dia pós-operatório"], resposta: 1, explicacao: "O ideal é 30-60 minutos antes da incisão cirúrgica para garantir concentração adequada do antibiótico no tecido no momento da cirurgia.", dificuldade: "medio" },
  { id: 15, disciplina_id: "enf-medicir", pergunta: "O que é indicado por resíduo gástrico > 200mL em paciente com SNG?", opcoes: ["Alimentação normal", "Suspender alimentação e comunicar médico", "Aumentar velocidade da alimentação", "Aumentar volume do resíduo"], resposta: 1, explicacao: "Resíduo > 200mL indica que o estômago não está absorvendo bem. Suspender e comunicar ao médico para reavaliar.", dificuldade: "fácil" },
  { id: 16, disciplina_id: "enf-medicir", pergunta: "Qual o calibre de abocath mais indicado para adulto em uso geral?", opcoes: ["14G (Laranja)", "18G (Verde)", "20G (Rosa)", "24G (Amarelo)"], resposta: 2, explicacao: "O 20G (Rosa) é o calibre mais útilizado em adultos para uso geral. 14G é para emergência, 24G é pediátrico.", dificuldade: "fácil" },
  { id: 17, disciplina_id: "enf-saúdecol", pergunta: "Quantas consultas mínimas de pre-natal são recomendadas pela OMS?", opcoes: ["3 consultas", "6 consultas", "9 consultas", "12 consultas"], resposta: 1, explicacao: "A OMS recomenda mínimo de 6 consultas pre-natal ao longo da gestação para adequado acompanhamento materno-fetal.", dificuldade: "fácil" },
  { id: 18, disciplina_id: "enf-saúdecol", pergunta: "A BCG é administrada por qual via e em qual local?", opcoes: ["IM no braco esquerdo", "ID no braço direito, 4cm acima do olécrano", "SC na coxa", "VO na boca"], resposta: 1, explicacao: "BCG é intradérmica (ID), no braço direito, 4cm acima do olécrano do cotovelo, na regiao do deltoide.", dificuldade: "medio" },
  { id: 19, disciplina_id: "enf-saúdecol", pergunta: "Qual o principal sintoma que deve levar a pensar em pre-eclampsia na gestante?", opcoes: ["Dor lombar + edema nos pés", "PA >= 140/90 + proteinuria + cefaleia", "Náusea + vomito + febre", "Sangramento vaginal"], resposta: 1, explicacao: "Pre-eclampsia se caracteriza por hipertensão (PA >= 140/90) + proteinuria + edema + cefaleia. É emergência obstétrica.", dificuldade: "medio" },
  { id: 20, disciplina_id: "enf-saúdecol", pergunta: "A notificação imediata (24h) é indicada para qual tipo de doença?", opcoes: ["Diabetes mellitus", "HAS arterial", "Doenças com potencial epidêmico grave", "Câncer"], resposta: 2, explicacao: "Doenças de notificação imediata são aquelas com potencial epidêmico grave como febre amarela, meningite e polio.", dificuldade: "fácil" },
  { id: 21, disciplina_id: "enf-pediatria", pergunta: "Febre em neonato (até 28 dias) é considerada:", opcoes: ["Normal, monitorar em casa", "Emergência, internação imediata", "Tratar com dipirona e observar", "Esperar 24 horas"], resposta: 1, explicacao: "Febre em neonato é SEMPRE emergência. Pode indicar sepsis neonatal ou meningite. Exige internação imediata.", dificuldade: "fácil" },
  { id: 22, disciplina_id: "enf-pediatria", pergunta: "Qual medicamento antitérmico é CONTRAINDICADO em menores de 16 anos?", opcoes: ["Paracetamol", "Dipirona", "Ibuprofeno", "Ácido acetilsalicílico (Aspirina)"], resposta: 3, explicacao: "Aspirina em crianças pode causar Síndrome de Reye, quadro grave com dano hepático e encefalopatia.", dificuldade: "medio" },
  { id: 23, disciplina_id: "enf-pediatria", pergunta: "Qual é a escala usada para avaliar o estado clínico de recém-nascidos?", opcoes: ["Glasgow", "APGAR", "Tanner", "Karnofsky"], resposta: 1, explicacao: "Escala de APGAR: Aparelho Respiratório, FC, Tono, Reflexos, Cor. Avaliada no 1o e 5o minuto após nascimento.", dificuldade: "fácil" },
  { id: 24, disciplina_id: "enf-pediatria", pergunta: "A desidratação grave em criança é classificada por perda de peso superior a:", opcoes: ["2%", "5%", "10%", "20%"], resposta: 2, explicacao: "Desidratação leve: 5%, moderada: 5-10%, grave: > 10%. Na grave há sinais de choque e necessita soro IV urgente.", dificuldade: "medio" },
  { id: 25, disciplina_id: "enf-obstet", pergunta: "Quantos dias dura uma gestação normal a partir da última menstruação?", opcoes: ["240 dias", "280 dias", "320 dias", "365 dias"], resposta: 1, explicacao: "Gestação normal dura 280 dias (40 semanas) a partir da data da última menstruação (DUM).", dificuldade: "fácil" },
  { id: 26, disciplina_id: "enf-obstet", pergunta: "Os loquios no pós-parto evoluem de sanguinolentos para alvos em quantos dias?", opcoes: ["2-3 dias", "9-14 dias", "1-2 dias", "30 dias"], resposta: 1, explicacao: "Loquios: 1-4 dias = sanguinolentos, 5-8 dias = sero-sanguinolentos, 9-42 dias = alvos. A evolução indica boa cicatrização.", dificuldade: "medio" },
  { id: 27, disciplina_id: "enf-obstet", pergunta: "Na escala de APGAR, qual nota indica necessidade de reanimação neonatal imediata?", opcoes: ["7-10", "4-6", "0-3", "Apenas 0"], resposta: 2, explicacao: "APGAR 0-3 indica asfixia grave com necessidade de reanimação neonatal imediata. 4-6 = asfixia moderada.", dificuldade: "medio" },
  { id: 28, disciplina_id: "enf-obstet", pergunta: "Qual a dilatação cervical que marca o início da fase ativa do trabalho de parto?", opcoes: ["0-2 cm", "4 cm", "8 cm", "10 cm"], resposta: 1, explicacao: "A fase ativa começa com 4cm de dilatação e vai até 10cm. Nesta fase as contrações se tornam regulares e intensas.", dificuldade: "medio" },
  { id: 29, disciplina_id: "enf-psiq", pergunta: "Qual a lei que regula a Saúde mental e a internação psiquiátrica no Brasil?", opcoes: ["Lei 8080/90", "Lei 10216/01", "Lei 5905/72", "Lei 8142/90"], resposta: 1, explicacao: "Lei 10.216/2001 protege direitos em Saúde Mental, regulamenta internação e prioriza serviços comunitários (CAPS).", dificuldade: "fácil" },
  { id: 30, disciplina_id: "enf-psiq", pergunta: "A internação involuntária de um paciente psiquiátrico pode ser solicitada por:", opcoes: ["Qualquer profissional de saúde", "Familiar de 1o grau ou responsável", "O próprio paciente", "A polícia"], resposta: 1, explicacao: "Involuntária: solicitada por famíliar de 1o grau ou responsável legal, com duração máxima conforme necessidade.", dificuldade: "medio" },
  { id: 31, disciplina_id: "enf-psiq", pergunta: "A escala PHQ-9 pontua de 0 a 27 e indica depressão grave a partir de:", opcoes: ["5 pontos", "10 pontos", "15 pontos", "20 pontos"], resposta: 3, explicacao: "PHQ-9: 0-4 mínimo, 5-9 leve, 10-14 moderado, 15-19 moderadamente grave, 20-27 grave.", dificuldade: "medio" },
  { id: 32, disciplina_id: "enf-psiq", pergunta: "Síndrome neuroléptica maligna é uma emergência associada a uso de:", opcoes: ["Antidepressivos", "Antipsicóticos", "Ansiolíticos", "Lítio"], resposta: 1, explicacao: "SNM é rara mas grave, associada a antipsicóticos. Triade: hipertermia, rigidez, alteração mental. Suspender antipsicótico imediatamente.", dificuldade: "dificil" },
  { id: 33, disciplina_id: "micro-parasit", pergunta: "A Higienização das Mãos deve ser realizada em quantos momentos segundo a OMS?", opcoes: ["3 momentos", "5 momentos", "7 momentos", "Apenas antes de medir"], resposta: 1, explicacao: "5 momentos: antes contato, antes procedimento, após risco líquidos, após contato, após ambiente próximo.", dificuldade: "fácil" },
  { id: 34, disciplina_id: "micro-parasit", pergunta: "Qual agente químico é indicado para desinfeção de superfícies com sangue?", opcoes: ["Álcool 70%", "Clorhexidina 2%", "Hipoclorito de sódio 1-2%", "Água e sabão"], resposta: 2, explicacao: "Hipoclorito de sódio 1-2% é eficaz contra HBV, HCV e HIV em superfícies contaminadas com sangue.", dificuldade: "medio" },
  { id: 35, disciplina_id: "micro-parasit", pergunta: "Em caso de acidente com material perfurocortante, qual a primeira ação?", opcoes: ["Fugir do local", "Lavar local com água e sabão e comunicar", "Colocar band-aid", "Ignorar o acidente"], resposta: 1, explicacao: "Lavar imediatamente com água e sabão, comprimir se sangrar, comunicar superior é serviço de saúde do trabalhador para PEP.", dificuldade: "fácil" },
  { id: 36, disciplina_id: "micro-parasit", pergunta: "Qual vacina é obrigatória para profissionais de saúde em risco de Hepatite B?", opcoes: ["BCG", "Hepatite A", "Hepatite B", "Febre Amarela"], resposta: 2, explicacao: "Profissionais de saúde devem ser vacinados contra Hepatite B (3 doses). Verificar anti-HBs para confirmar proteção.", dificuldade: "fácil" },
  { id: 37, disciplina_id: "etica-leg", pergunta: "O COREN-AP é o conselho responsável pela fiscalização de qual profissão?", opcoes: ["Medicina", "Farmácia", "Enfermagem", "Odontologia"], resposta: 2, explicacao: "COREN-AP - Conselho Regional de Enfermagem do Amapá. Responsável por registrar, fiscalizar e julgar profissionais de enfermagem no estado.", dificuldade: "fácil" },
  { id: 38, disciplina_id: "etica-leg", pergunta: "Qual princípio do SUS garante que a Saúde é direito de todos e dever do Estado?", opcoes: ["Equidade", "Integralidade", "Universalidade", "Descentralização"], resposta: 2, explicacao: "Universalidade: saúde é direito de todos e dever do Estado. Garante acesso universal e gratuito pelo SUS.", dificuldade: "fácil" },
  { id: 39, disciplina_id: "etica-leg", pergunta: "A Lei 5905/72 regulamenta qual aspecto da profissão?", opcoes: ["Saúde Mental", "Exercício da Enfermagem", "SUS", "Transplantes"], resposta: 1, explicacao: "Lei 5905/72 regulamenta a profissão de Enfermagem, definindo exercício, atribuições e papel do COREN-AP.", dificuldade: "medio" },
  { id: 40, disciplina_id: "etica-leg", pergunta: "São atribuições do técnico de Enfermagem (Lei 5905/72) EXCETO:", opcoes: ["Aplicar medicações prescritas", "Colher sangue", "Prescrever enfermagem", "Aferir sinais vitais"], resposta: 2, explicacao: "Prescrição de Enfermagem é atribuição do ENFERMEIRO, não do técnico. O técnico implementa, não prescreve.", dificuldade: "medio" },
  { id: 41, disciplina_id: "primeiros-soc", pergunta: "Na RCP de adulto, qual a proporção correta de compressões e ventilações?", opcoes: ["15:2", "30:2", "30:5", "15:5"], resposta: 1, explicacao: "RCP de adulto: 30 compressões torácicas seguidas de 2 ventilações (proporção 30:2).", dificuldade: "fácil" },
  { id: 42, disciplina_id: "primeiros-soc", pergunta: "A profundidade recomendada para compressões torácicas em adulto é:", opcoes: ["2-3 cm", "5-6 cm", "8-10 cm", "Apenas 1 cm"], resposta: 1, explicacao: "Compressões de 5-6cm de profundidade, velocidade 100-120/min, com retorno total do peito.", dificuldade: "fácil" },
  { id: 43, disciplina_id: "primeiros-soc", pergunta: "Na avaliação do trauma, a letra 'C' no protocolo ABCDE corresponde a:", opcoes: ["Cervical", "Consciência", "Circulação e controle de hemorragia", "Coração"], resposta: 2, explicacao: "C = Circulação + controle de hemorragia. Avaliar pulso, reposição de líquidos, comprimir sangramentos.", dificuldade: "medio" },
  { id: 44, disciplina_id: "primeiros-soc", pergunta: "Na queimadura, a regra dos 9 atribui qual porcentagem para cada membro inferior?", opcoes: ["9%", "18%", "27%", "36%"], resposta: 1, explicacao: "Cada membro inferior = 18% da superfície corporal total na regra dos 9.", dificuldade: "medio" },
  { id: 45, disciplina_id: "primeiros-soc", pergunta: "Em caso de intoxicação por medicamentos, a primeira ação é:", opcoes: ["Induzir vomito", "Lavar estômago", "Identificar o tóxico e levar a embalagem", "Dar leite"], resposta: 2, explicacao: "Identificar qual tóxico foi ingerido, levar embalagem/frasco ao hospital. NUNCA induza vomito com ipeca.", dificuldade: "fácil" },
  { id: 46, disciplina_id: "anat-fisio", pergunta: "Qual a função do sistema simpático no organismo?", opcoes: ["Repouso e digestão", "Luta ou fuga - aumento FC, dilata pupilas", "Regulação hormonal", "Controle respiratório"], resposta: 1, explicacao: "Sistema simpático prepara o corpo para ação: aumenta FC, dilata pupilas, inibe peristaltismo, vasoconstrição.", dificuldade: "medio" },
  { id: 47, disciplina_id: "farmaco", pergunta: "Qual a concentração normal de glicemia em jejum?", opcoes: ["50-70 mg/dL", "70-100 mg/dL", "120-150 mg/dL", "200-250 mg/dL"], resposta: 1, explicacao: "Glicemia normal em jejum: 70-100 mg/dL. Acima de 126 mg/dL em dois exames indica diabetes.", dificuldade: "fácil" },
  { id: 48, disciplina_id: "enf-medicir", pergunta: "Flebite em cateter periférico se manifesta por:", opcoes: ["Edema na ponta do dedo", "Dor, eritema, calor e cordão venoso", "Febre e calafrios", "Hematoma no local"], resposta: 1, explicacao: "Flebite: inflamação da veia com dor, eritema, calor e cordão venoso palpável. Indica remoção do cateter.", dificuldade: "fácil" },
  { id: 49, disciplina_id: "enf-saúdecol", pergunta: "O Ácido Fólico na gestação deve ser iniciado:", opcoes: ["No 3o trimestre", "No 2o trimestre", "Antes da concepção e até 12 semanas", "Durante o parto"], resposta: 2, explicacao: "Ácido Fólico 400-800mcg/dia deve ser iniciado antes da gravidez e mantido até a 12a semana para prevenir defeitos do tubo neural.", dificuldade: "medio" },
  { id: 50, disciplina_id: "enf-pediatria", pergunta: "A posição correta para medir a altura em crianças maiores de 2 anos é:", opcoes: ["Deitada", "Em pé, costas encostadas na parede", "Sentada no colo", "Em joelhos"], resposta: 1, explicacao: "Maiores de 2 anos: medir em pé. Menores de 2 anos: medir deitados (comprimento).", dificuldade: "medio" },
  { id: 51, disciplina_id: "enf-obstet", pergunta: "Qual o principal indicador de desnutrição em recém-nascido?", opcoes: ["Cor da pele", "Peso ao nascer < 2500g", "Tamanho dos pes", "Numero de dedos"], resposta: 1, explicacao: "Peso ao nascer < 2500g é indicador de baixo peso e pode indicar desnutrição intrauterina ou prematuridade.", dificuldade: "medio" },
  { id: 52, disciplina_id: "enf-psiq", pergunta: "Qual é a primeira linha de tratamento para o Transtorno de Ansiedade Generalizada?", opcoes: ["Apenas benzodiazepínicos", "Psicoterapia TCC + ISRS", "Antipsicóticos", "Nenhum tratamento"], resposta: 1, explicacao: "TCC é primeira linha para TAG, podendo ser associada a ISRS (antidepressivos) em casos moderados a graves.", dificuldade: "medio" },
  { id: 53, disciplina_id: "micro-parasit", pergunta: "Qual tipo de Transfusão sanguínea tem o maior risco de transmissão de HIV?", opcoes: ["Plaquetas", "Plasma", "Sangue total", "Crio"], resposta: 2, explicacao: "Sangue total tem maior volume celular e consequentemente maior risco se o doador estiver contaminado.", dificuldade: "dificil" },
  { id: 54, disciplina_id: "etica-leg", pergunta: "O sigilo profissional só pode ser quebrado:", opcoes: ["Quando o médico autorizar", "Quando o paciente der permissão verbal", "Por determinação judicial", "Nunca pode ser quebrado"], resposta: 2, explicacao: "Sigilo só é quebrado por determinação judicial ou quando a divulgação for necessária para proteger o paciente.", dificuldade: "medio" },
  { id: 55, disciplina_id: "primeiros-soc", pergunta: "O carvão ativado para desintoxicação e eficaz em até quanto tempo após a ingestão?", opcoes: ["30 minutos", "1 hora", "4 horas", "12 horas"], resposta: 1, explicacao: "Carvão ativado é eficaz até 1 hora após ingestão. Dose: 1g/kg. Contraindicado em hidrocarbonetos e ácidos.", dificuldade: "medio" },
  { id: 56, disciplina_id: "anat-fisio", pergunta: "Qual estrutura renal é responsável pela filtração do sangue?", opcoes: ["Túbulo proximal", "Glomérulo", "Alça de Henle", "Coletor"], resposta: 1, explicacao: "O glomérulo é a estrutura onde ocorre a filtração do sangue para formar o filtrado glomerular.", dificuldade: "fácil" },
  { id: 57, disciplina_id: "farmaco", pergunta: "Um frasco de Ceftriaxona 1g deve ser reconstituido com quantos mL de diluente para IM?", opcoes: ["1 mL", "2,1 mL", "5 mL", "10 mL"], resposta: 1, explicacao: "Ceftriaxona 1g IM: reconstituir com 2,1mL de diluente (lidocaina 1% ou água para injeção) para concentração de 350mg/mL.", dificuldade: "dificil" },
  { id: 58, disciplina_id: "enf-medicir", pergunta: "Medicamentos vesicantes causam:", opcoes: ["Apenas dor", "Necrose do tecido no local", "Febre", "Náusea"], resposta: 1, explicacao: "Vesicantes causam necrose grave do tecido (ex: quimioterapicos). Devem ser administrados exclusivamente por via central.", dificuldade: "medio" },
  { id: 59, disciplina_id: "enf-saúdecol", pergunta: "A letalidade é calculada por:", opcoes: ["(Casos/População) x 1000", "(Óbitos/Casos) x 100", "(Óbitos/População) x 1000", "(Casos novos/População) x 100"], resposta: 1, explicacao: "Letalidade = (Óbitos / Casos x 100). Indica a gravidade da doença entre os que adoeceram.", dificuldade: "medio" },
  { id: 60, disciplina_id: "enf-pediatria", pergunta: "Qual sinal clínico indica desidratação moderada a grave em bebê?", opcoes: ["Pele elástica e olhos brilhantes", "Fontanela abaixada e lacrimação ausente", "Aumento de peso", "Sonolência leve"], resposta: 1, explicacao: "Desidratação grave: fontanela abaulada (hipertensão) ou deprimida, olho fundo, ausência de lacrimação, turgor reduzido.", dificuldade: "medio" },
  { id: 61, disciplina_id: "enf-obstet", pergunta: "A placenta normalmente se desprende em qual período do trabalho de parto?", opcoes: ["Período de dilatação", "Período expulsivo", "Período placentário", "Logo após o nascimento"], resposta: 2, explicacao: "A eliminação da placenta ocorre no período placentário, após o nascimento do bebê, geralmente em 15-30 minutos.", dificuldade: "fácil" },
  { id: 62, disciplina_id: "primeiros-soc", pergunta: "Em queimadura com mais de qual porcentagem da superfície corporal é considerada grave?", opcoes: ["5%", "10%", "20%", "50%"], resposta: 2, explicacao: "Queimadura > 20% da superfície corporal é considerada grave, com risco de choque hipovolêmico e necessita centro queimado.", dificuldade: "medio" },
  { id: 63, disciplina_id: "micro-parasit", pergunta: "A hepatite B tem vacina eficaz com qual esquema?", opcoes: ["1 dose única", "2 doses", "3 doses (0-1-6 meses)", "4 doses"], resposta: 2, explicacao: "Esquema vacinal Hep B: 3 doses (0, 1 e 6 meses). Profissionais de saúde devem ser vacinados e verificar anti-HBs.", dificuldade: "medio" },
  { id: 64, disciplina_id: "etica-leg", pergunta: "A Lei 8080/90 estabelece qual princípio do SUS como prioritário?", opcoes: ["Pagamento por desempenho", "Universalidade da Saúde", "Privatização", "Coparticipação"], resposta: 1, explicacao: "Universalidade: saúde é direito de todos e dever do Estado, sem discriminação. Base do SUS.", dificuldade: "fácil" },
  { id: 65, disciplina_id: "primeiros-soc", pergunta: "Na RCP, se a pessoa para de respirar mas ainda tem pulso, o profissional deve:", opcoes: ["Esperar 5 minutos", "Iniciar ventilação de resgate (15-20/min)", "Apenas monitorar", "Dar medicação oral"], resposta: 1, explicacao: "Parada respiratória com pulso: ventilação de resgate a 15-20/min em adulto e 20/min em criança, até retorno da respiração espontânea.", dificuldade: "medio" },
  { id: 66, disciplina_id: "anat-fisio", pergunta: "Qual o papel principal do fígado no metabolismo de medicamentos?", opcoes: ["Filtrar toxinas renais", "Metabolizar drogás via citocromo P450", "Armazenar vitamina C", "Produzir insulina"], resposta: 1, explicacao: "O fígado é o principal órgão de metabolismo de drogás, através do sistema citocromo P450, transformando medicamentos para excreção renal.", dificuldade: "medio" },
  { id: 67, disciplina_id: "farmaco", pergunta: "Qual é a diferença entre medicamento genérico e similar?", opcoes: ["Não existe diferença", "Genérico tem o mesmo princípio ativo e bioequivalência, similar pode não ter", "Similar é sempre mais barato", "Genérico só pode ser comprado com receita"], resposta: 1, explicacao: "Genérico: mesmo princípio ativo, bioequivalência comprovada (laudo ANVISA). Similar: mesmo princípio ativo, mas sem bioequivalência obrigatória.", dificuldade: "medio" },
  { id: 68, disciplina_id: "enf-medicir", pergunta: "Qual o principal cuidado ao remover uma sonda vesical de demora?", opcoes: ["Puxar rápidamente", "Esvaziar a bexiga primeiro, depois desinflar o balão e puxar suavemente", "Não precisa de cuidado especial", "Aplicar anestesia local"], resposta: 1, explicacao: "Antes de remover, esvazie a bexiga, desinfle o balão completamente (10-15mL de água) e puxe suavemente. Pode causar trauma se não desinfado.", dificuldade: "medio" },
  { id: 69, disciplina_id: "enf-saúdecol", pergunta: "Qual a principal causa de mortalidade materna no Brasil?", opcoes: ["Infecção", "Hemorragia pós-parto", "Hipertensão", "Embolia"], resposta: 1, explicacao: "Hemorragia pós-parto é a principal causa de morte materna. Prevenção: massagem uterina, oxitocina e controle ativo do período placentário.", dificuldade: "medio" },
  { id: 70, disciplina_id: "enf-pediatria", pergunta: "Qual a dosagem correta de Paracetamol para criança de 15kg?", opcoes: ["100mg", "150mg", "225mg", "300mg"], resposta: 2, explicacao: "15kg x 15mg/kg = 225mg por dose. Dose maxima 60mg/kg/dia. Intervalo mínimo de 6 horas.", dificuldade: "medio" },
  { id: 71, disciplina_id: "enf-obstet", pergunta: "O que é a manobra de Kristeller e por que é desaconselhada?", opcoes: ["Manobra para acelerar parto normal, compressão sobre utero", "Manobra para retorno de placenta", "Manobra para descolamento de placenta", "Manobra para rotação de feto"], resposta: 0, explicacao: "Kristeller: compressão sobre fundo uterino para auxiliar expulsão. Desaconselhada por risco de descolamento de placenta, ruptura uterina e trauma fetal.", dificuldade: "dificil" },
  { id: 72, disciplina_id: "enf-psiq", pergunta: "Qual é o tratamento de primeira linha para esquizofrenia refrataria?", opcoes: ["Haloperidol", "Risperidona", "Clozapina", "Lítio"], resposta: 2, explicacao: "Clozapina é indicada para esquizofrenia refrataria (que não responde a outros antipsicóticos). Exige monitoramento hematológico semanal.", dificuldade: "dificil" },
  { id: 73, disciplina_id: "micro-parasit", pergunta: "Qual o Período de incubação da hepatite B?", opcoes: ["1-2 semanas", "4-6 semanas", "3-4 meses", "1 ano"], resposta: 1, explicacao: "Hepatite B tem período de incubação médio de 4-6 semanas (varia 30-180 dias). Sintomas aparecem após este período.", dificuldade: "medio" },
  { id: 74, disciplina_id: "etica-leg", pergunta: "O profissional de enfermagem tem o dever de recusar ordens que:", opcoes: ["Difiram do horário de trabalho", "Estejam em desacordo com normas éticas e legais", "Sejam dadas por enfermeiros", "Requeram esforço físico"], resposta: 1, explicacao: "Art. 9 do Código de Ética: direito de recusar determinação em desacordo com normas éticas, legais ou institucionais, comunicando ao superior.", dificuldade: "fácil" },
  { id: 75, disciplina_id: "primeiros-soc", pergunta: "Qual é o tempo máximo de aplicação de torniquete em membro?", opcoes: ["5 minutos", "10 minutos", "30 minutos", "1 hora"], resposta: 2, explicacao: "Torniquete deve ser anotado e não pode ficar mais que 30 minutos. A cada 15-20 minutos, deve ser afrouxado brevemente.", dificuldade: "medio" },
  { id: 76, disciplina_id: "anat-fisio", pergunta: "Qual tipo sanguíneo é considerado doador universal?", opcoes: ["A positivo", "B negativo", "O negativo", "AB positivo"], resposta: 2, explicacao: "O negativo é doador universal (não tem A, B nem Rh). AB positivo é receptor universal (não rejeita nenhum tipo).", dificuldade: "fácil" },
  { id: 77, disciplina_id: "farmaco", pergunta: "Qual via de administração é mais rápida para agir no organismo?", opcoes: ["Oral", "Subcutânea", "Intravenosa", "Tópica"], resposta: 2, explicacao: "Via IV é a mais rápida: medicamento vai direto na corrente sanguínea, sem necessidade de absorção.", dificuldade: "fácil" },
  { id: 78, disciplina_id: "enf-medicir", pergunta: "A profilaxia de trombose venosa profunda no pós-operatório inclui:", opcoes: ["Repouso absoluto na cama", "Mobilização precoce + heparina profilática", "Compressas frias nas pernas", "Elevação dos pes sem mobilização"], resposta: 1, explicacao: "Mobilização precoce + heparina profilática (enoxaparina) reduzem risco de TVP. Repouso absoluto aumenta risco.", dificuldade: "medio" },
  { id: 79, disciplina_id: "enf-saúdecol", pergunta: "Qual o número mínimo de doses da vacina Pentavalente para imunização basal?", opcoes: ["1 dose", "2 doses", "3 doses", "4 doses"], resposta: 2, explicacao: "Pentavalente: esquema basal de 3 doses (2, 4 e 6 meses) + dose reforco (15 meses).", dificuldade: "medio" },
  { id: 80, disciplina_id: "enf-pediatria", pergunta: "Qual sinal clínico indica desnutrição aguda grave em criança?", opcoes: ["Peso levemente abaixo da curva", "Edema de abdome, magreza extrema, irritabilidade", "Falta de apetite por 2 dias", "Perda de 200g em 1 mês"], resposta: 1, explicacao: "Desnutrição aguda grave (Kwashiorkor/Marasmática): edema, magreza extrema, pele descascando, irritabilidade. Emergência nutricional.", dificuldade: "medio" },
  { id: 81, disciplina_id: "enf-obstet", pergunta: "Qual o principal cuidado de enfermagem na hemorragia pós-parto imediata?", opcoes: ["Esperar 30 minutos", "Massagem uterina bimanual + oxitocina IV", "Colocar soro frio no abdomen", "Posição de Trendelenburg"], resposta: 1, explicacao: "Massagem uterina bimanual + oxitocina IV são as primeiras condutas. Se não resolver: exploração manual, cirurgia.", dificuldade: "medio" },
  { id: 82, disciplina_id: "enf-psiq", pergunta: "Qual o principal efeito colateral dos antipsicóticos típicos que exige intervenção de enfermagem?", opcoes: ["Hipotensão", "Rigidez extrapiramidal e parkinsonismo", "Insônia", "Aumento de peso"], resposta: 1, explicacao: "Efeitos extrapiramidais (rigidez, tremor, akathisia) são comuns em antipsicóticos típicos. Tratamento: anticolinérgicos (Biperideno).", dificuldade: "medio" },
  { id: 83, disciplina_id: "micro-parasit", pergunta: "Qual o tratamento de eleição para malária por Plasmodium falciparum?", opcoes: ["Amoxicilina", "Cloroquina", "Artemisina + Lumefantrina", "Ibuprofeno"], resposta: 2, explicacao: "Artemisina combinada (ACT) e tratamento de primeira linha para P. falciparum. Cloroquina pode ser usada em P. vivax.", dificuldade: "medio" },
  { id: 84, disciplina_id: "etica-leg", pergunta: "A Lei 10.216/2001 garante ao paciente psiquiátrico o direito a:", opcoes: ["Internação permanente", "Tratamento em liberdade, comunitário e substitutivo", "Tratamento apenas com medicamentos", "Isolamento total"], resposta: 1, explicacao: "Lei 10.216/01 prioriza atendimento comunitário (CAPS), tratamento em liberdade e substituição de asilos.", dificuldade: "medio" },
  { id: 85, disciplina_id: "primeiros-soc", pergunta: "Qual o sinal clínico mais precoce de choque hipovolêmico?", opcoes: ["Cianose", "Taquicardia compensatória", "Hipotensão", "Oliguria"], resposta: 1, explicacao: "Taquicardia é o sinal mais precoce (corpo tenta compensar). Hipotensão é sinal tardio (quando compensação falha).", dificuldade: "dificil" },
  { id: 86, disciplina_id: "anat-fisio", pergunta: "Qual é a função dos linfocitos T helper (CD4) no sistema imunológico?", opcoes: ["Destruir diretamente bactérias", "Coordenar a resposta imunológica ativando outros linfocitos", "Produzir anticorpos", "Fagocitar patógenos"], resposta: 1, explicacao: "CD4 coordenam resposta imune: ativam CD8 (citotóxicos), B (anticorpos) e macrófagos. Queda de CD4 = imunossupressão (AIDS).", dificuldade: "medio" },
  { id: 87, disciplina_id: "farmaco", pergunta: "Qual antibiótico é NEFROTÓXICO e exige monitoramento de picos e vales?", opcoes: ["Azitromicina", "Amoxicilina", "Amicacina", "Ciprofloxacino"], resposta: 2, explicacao: "Aminoglicosídeos (Amicacina, Gentamicina) são nefro e ototóxicos. Exigem coleta de pico (30min pós-dose) e vale (antes próxima dose).", dificuldade: "medio" },
  { id: 88, disciplina_id: "enf-medicir", pergunta: "Qual a velocidade correta de infusão de 1000mL de SF 0.9% em 8 horas com equipo macro (20 gotas/mL)?", opcoes: ["25 gotas/min", "42 gotas/min", "50 gotas/min", "75 gotas/min"], resposta: 1, explicacao: "(1000 x 20) / 8 = 41,6 ≈ 42 gotas/min. Fórmula: (Volume x Fator) / Horas.", dificuldade: "medio" },
  { id: 89, disciplina_id: "enf-saúdecol", pergunta: "Qual o índice que indica uma epidemia quando acima do esperado na comunidade?", opcoes: ["Taxa de mortalidade", "Taxa de incidência acima do esperado", "Prevalência de doença crônica", "Número de nascidos vivos"], resposta: 1, explicacao: "Epidemia: incidência de casos novos muito acima do esperado para aquela População é período.", dificuldade: "fácil" },
  { id: 90, disciplina_id: "enf-pediatria", pergunta: "Qual o principal risco de uso de aspirina em crianças com febre viral?", opcoes: ["Reye's syndrome (encefalopatia + falência hepática)", "Gastrite", "Alergia", "Hipoglicemia"], resposta: 0, explicacao: "Síndrome de Reye: rara mas grave, associada a aspirina em viral. Encéfalopatia + falência hepática. NUNCA usar < 16 anos.", dificuldade: "medio" },
  { id: 91, disciplina_id: "enf-obstet", pergunta: "Qual o período considerado como puerpério?", opcoes: ["Primeiros 7 dias após parto", "6 semanas (42 dias) após parto", "3 meses após parto", "1 ano após parto"], resposta: 1, explicacao: "Púerpério: periodo de recuperação pós-parto, dura 42 dias (6 semanas). Corresponde a involução uterina e retorno ao estado normal.", dificuldade: "fácil" },
  { id: 92, disciplina_id: "enf-psiq", pergunta: "Qual é a diferença entre ideação suicida e tentativa de suicidio?", opcoes: ["Não existe diferença", "Ideação é o desejo de morrer, tentativa é a ação concreta", "Tentativa é menos grave que ideação", "Ideação só ocorre em esquizofrenia"], resposta: 1, explicacao: "Ideação: pensamento/plano de suicidio. Tentativa: ação concreta. Ambas exigem intervenção imediata, mas tentativa é emergência médica.", dificuldade: "medio" },
  { id: 93, disciplina_id: "micro-parasit", pergunta: "Qual o principal mecanismo de transmissão da tuberculose?", opcoes: ["Via fecal-oral", "Via aerossol (gotículas respiratórias)", "Via sanguínea", "Via sexual"], resposta: 1, explicacao: "TB se transmite por aerossol. Gotas de Pflugge (tossir, falar, espirrar) contaminam o ar. Prevenção: mascara N95 e ventile ambiente.", dificuldade: "fácil" },
  { id: 94, disciplina_id: "etica-leg", pergunta: "O sigilo profissional do enfermeiro e técnico abrange:", opcoes: ["Apenas dados clínicos", "Todas as informações do paciente, inclusive em redes sociais", "Apenas dados durante o plantão", "Apenas dados de pacientes internados"], resposta: 1, explicacao: "Sigilo e absoluto: dados clínicos, sociais, emocionais, tudo. Vale inclusive após o atendimento e em redes sociais.", dificuldade: "medio" },
  { id: 95, disciplina_id: "primeiros-soc", pergunta: "Qual a profundidade recomendada para compressões torácicas em lactente (menor de 1 ano)?", opcoes: ["1-2 cm", "2-3 cm", "3-4 cm", "5-6 cm"], resposta: 2, explicacao: "Lactente: 1/3 do diâmetro torácico (aprox 3-4cm). Usa 2 dedos no esterno. Lactente: 30:2 (1 socorrista) ou 15:2 (2 socorristas).", dificuldade: "medio" },
  { id: 96, disciplina_id: "anat-fisio", pergunta: "Qual a função principal do ácido fólico na gestação?", opcoes: ["Prevenir anemia", "Prevenir defeitos do tubo neural do feto", "Aumentar produção de leite", "Regular pressão arterial"], resposta: 1, explicacao: "Ácido fólico (400-800mcg/dia) previne defeitos do tubo neural (anencefalia, espinha bifida). Deve ser iniciado antes da concepção.", dificuldade: "fácil" },
  { id: 97, disciplina_id: "farmaco", pergunta: "Qual o antídoto utilizado em intoxicação por opioides (morfina, codeina)?", opcoes: ["Atropina", "Naloxone (Narcan)", "Flumazenil", "Acetilcisteina"], resposta: 1, explicacao: "Naloxone (Narcan) e antagonista de opioides. Reverte depressão respiratória. Dose: 0,4-2mg IV, pode repetir a cada 2-3min.", dificuldade: "medio" },
  { id: 98, disciplina_id: "enf-medicir", pergunta: "Qual o tempo maximo para troca de equipo de infusão venosa?", opcoes: ["12 horas", "24 horas", "48 horas", "72 horas"], resposta: 1, explicacao: "Equipo e bujão devem ser trocados a cada 24 horas para manter assepsia e prevenir multiplicação bacteriana.", dificuldade: "fácil" },
  { id: 99, disciplina_id: "enf-saúdecol", pergunta: "Qual a porcentagem de água no corpo humano adulto?", opcoes: ["40-50%", "60-70%", "80-90%", "30-40%"], resposta: 1, explicacao: "Adulto: 60-70% do peso corporal é água. Bebê: até 80%. Idoso: 50-60%. Mulheres: 5-10% menos que homens (gordura).", dificuldade: "fácil" },
  { id: 100, disciplina_id: "enf-pediatria", pergunta: "Qual a posição correta para aspiração de secreção em neonato?", opcoes: ["Decúbito dorsal com cabeça elevada", "Decúbito lateral esquerdo", "Sentado no colo", "Decúbito ventral"], resposta: 0, explicacao: "Neonato: decúbito dorsal com cabeça ligeiramente elevada para aspiração oronasal. Aspirar primeiro nariz, depois boca.", dificuldade: "medio" },
  { id: 101, disciplina_id: "enf-obstet", pergunta: "Qual o principal exame para avaliar sofrimento fetal durante trabalho de parto?", opcoes: ["Ultrassom", "Cardiotocografia (CTG)", "Raio-X", "Exame de sangue"], resposta: 1, explicacao: "CTG monitora FC fetal e contrações uterinas. Identifica padroes sugestivos de sofrimento fetal (desacelerações, taquicardia).", dificuldade: "medio" },
  { id: 102, disciplina_id: "enf-psiq", pergunta: "Qual a diferença entre CAPS I e CAPS III?", opcoes: ["Não existe diferença", "CAPS I atende demanda básica, CAPS III é de alta complexidade", "CAPS III é apenas para internação", "CAPS I é exclusivo para crianças"], resposta: 1, explicacao: "CAPS I: demanda básica, atendimento em horário comercial. CAPS III: alta complexidade, atendimento 24h, para casos graves.", dificuldade: "medio" },
  { id: 103, disciplina_id: "micro-parasit", pergunta: "Qual o exame laboratorial mais sensível para diagnóstico de malária aguda?", opcoes: ["Hemograma completo", "Gotas espessas e esfregaço sanguíneo", "Sorologia", "Urinálise"], resposta: 1, explicacao: "Gotas espessas e esfregaço sanguíneo (gota espessa) são padrão ouro para diagnóstico de malária. Detectam parasitas no sangue.", dificuldade: "medio" },
  { id: 104, disciplina_id: "etica-leg", pergunta: "O COREN-AP é composto por quantos membros?", opcoes: ["3 conselheiros", "5 conselheiros", "9 conselheiros", "Varia conforme edital"], resposta: 2, explicacao: "Conselho Regional: composto por 9 conselheiros (3 enfermeiros, 3 técnicos, 3 representantes do Ministério da Saúde).", dificuldade: "dificil" },
  { id: 105, disciplina_id: "primeiros-soc", pergunta: "Qual a causa mais comum de parada cardíaca em adultos em ambiente extra-hospitalar?", opcoes: ["Asfixia", "Fibrilação ventricular / Taquicardia ventricular sem pulso", "Embolia pulmonar", "Hemorragia"], resposta: 1, explicacao: "FV/TV sem pulso e causa mais comum de PCR em adultos extra-hospitalar. Tratamento: RCP + DEA o mais rápido possível.", dificuldade: "medio" },
  { id: 106, disciplina_id: "etica-prof", pergunta: "Qual princípio ético determina que o profissional deve agir sempre em benefício do paciente?", opcoes: ["Autonomia", "Beneficência", "Não-maleficência", "Justiça"], resposta: 1, explicacao: "Beneficência: obrigatoriedade de agir em benefício do paciente, buscando sempre seu bem-estar e saúde.", dificuldade: "fácil" },
  { id: 107, disciplina_id: "etica-prof", pergunta: "O que caracteriza o consentimento presumido?", opcoes: ["Paciente assina TCLE normalmente", "Paciente inconsciente e risco de vida iminente", "Familiar autoriza tratamento eletivo", "Médico autoriza sem orientar paciente"], resposta: 1, explicacao: "Consentimento presumido ocorre quando paciente está inconsciente com risco de vida, e impossível obter autorização, e presume-se que concordaria com o tratamento.", dificuldade: "medio" },
  { id: 108, disciplina_id: "etica-prof", pergunta: "Quando o sigilo profissional PODE ser quebrado?", alternativas: ["A pedido de famíliares", "Por determinação judicial", "Em conversação com Colárguas", "Para fins acadêmicos"], opcoes: ["A pedido de famíliares", "Por determinação judicial", "Em conversação com Colárguas", "Para fins acadêmicos"], resposta: 1, explicacao: "O sigilo só pode ser quebrado por determinação judicial, por doenças de notificação obrigatória ou por risco a terceiros documentado.", dificuldade: "medio" },
  { id: 109, disciplina_id: "etica-prof", pergunta: "Qual é a consequência legal de quebra de sigilo profissional?", opcoes: ["Apenas advertência verbal", "Indenização civil e penalidade COREN", "Não há consequência", "Apenas suspensão temporária"], resposta: 1, explicacao: "Quebra de sigilo gera responsabilidade civil (indenização), administrativa (penalidade COREN) e criminal (detenção 1 a 6 meses).", dificuldade: "medio" },
  { id: 110, disciplina_id: "etica-prof", pergunta: "Qual princípio ético está em conflito quando um paciente recusa tratamento salva-vidas?", opcoes: ["Autonomia x Não-maleficência", "Autonomia x Beneficência", "Justiça x Veracidade", "Não-maleficência x Justiça"], resposta: 1, explicacao: "Conflito entre autonomia (decisão do paciente de recusar) e beneficência (obrigação de fazer o bem ao paciente).", dificuldade: "medio" },
  { id: 111, disciplina_id: "etica-prof", pergunta: "O que é considerado negligência profissional?", opcoes: ["Agir com pressa", "Omissão do que deveria fazer", "Errar dosagem por desconhecimento", "Ferir paciente intencionalmente"], resposta: 1, explicacao: "Negligência é a omissão - deixar de fazer algo que o profissional deveria ter feito, como não monitorar paciente.", dificuldade: "medio" },
  { id: 112, disciplina_id: "etica-prof", pergunta: "Quem é responsabilizado por erro em prescrição médica?", opcoes: ["Técnico de enfermagem", "Enfermeiro chefe", "Médico prescrito", "Hospital"], resposta: 2, explicacao: "Erro em prescrição médica é responsabilidade do médico. O técnico de enfermagem responde apenas por erros de administração.", dificuldade: "medio" },
  { id: 113, disciplina_id: "etica-prof", pergunta: "Qual documento é OBRIGATÓRIO para todo procedimento em pesquisa com seres humanos?", opcoes: ["Autorização do COREN", "Termo de Consentimento (TCLE)", "Termo de responsabilidade civil", "Certificado de curso ético"], resposta: 1, explicacao: "O TCLE é obrigatório em toda pesquisa com seres humanos, documentando consentimento informado do participante.", dificuldade: "fácil" },
  { id: 114, disciplina_id: "etica-prof", pergunta: "É ético fotografar paciente com autorização verbal?", opcoes: ["Sim, desde que sem rosto", "Não, fotografar paciente é sempre proibido", "Sim, apenas para arquivo pessoal", "Sim, apenas em casos especiais"], resposta: 1, explicacao: "Fotografar paciente é proibido mesmo com autorização verbal. Câmeras devem ser institucionais e uso deve seguir protocolo.", dificuldade: "medio" },
  { id: 115, disciplina_id: "etica-prof", pergunta: "Qual é uma função do Comitê de Ética em Pesquisa (CEP)?", opcoes: ["Avaliar projetos e monitorar estudos", "Escrever artigos científicos", "Treinar pesquisadores", "Alocar verbas de pesquisa"], resposta: 0, explicacao: "CEP avalia projetos analisando riscos, benefícios e consentimento, e monitora execução dos estudos.", dificuldade: "fácil" },
  { id: 116, disciplina_id: "etica-prof", pergunta: "O que é DYSTANASIA?", opcoes: ["Eutanasia ativa", "Suspensão de tratamento quando não há mais benefício", "Manter suporte vital indefinidamente", "Acabar com sofrimento do paciente"], resposta: 1, explicacao: "Dystanasia é suspender suporte quando não há mais benefício clínico, e considerada ética quando justificada.", dificuldade: "medio" },
  { id: 117, disciplina_id: "etica-prof", pergunta: "Qual é a máscara do profissional que NUNCA deve ser revelada?", opcoes: ["Mascara de proteção", "Rosto do paciente em redes sociais", "Nome do médico", "Setor de trabalho"], resposta: 1, explicacao: "Rosto e identidade do paciente são dados pessoais sensíveis e protegidos por sigilo absoluto.", dificuldade: "fácil" },
  { id: 118, disciplina_id: "etica-prof", pergunta: "Autonomia do paciente significa:", opcoes: ["Paciente decide sozinho sem orientação", "Respeitar decisões informadas e conscientes do paciente", "Profissional decide por ele", "Familiar decide pelo paciente"], resposta: 1, explicacao: "Autonomia: respeitar decisões do paciente quando informado e consciente sobre sua situação e opções de tratamento.", dificuldade: "fácil" },
  { id: 119, disciplina_id: "etica-prof", pergunta: "Princípio da justiça na Saúde significa:", opcoes: ["Tratar todos exatamente igual", "Distribuir recursos com equidade e imparcialidade", "Dar mais atenção aos ricos", "Priorizar quem chega primeiro"], resposta: 1, explicacao: "Justiça: distribuir recursos e atenção de forma equitativa, considerando necessidades e prioridade clínica.", dificuldade: "fácil" },
  { id: 120, disciplina_id: "etica-prof", pergunta: "O que é veracidade profissional?", opcoes: ["Mentir para não angustiar paciente", "Dizer a verdade ao paciente sobre sua condição", "Ocultar diagnóstico grave", "Contar apenas o que paciente quer ouvir"], resposta: 1, explicacao: "Veracidade: obrigação de dizer a verdade, informando paciente sobre diagnóstico e prognóstico de forma sensível.", dificuldade: "fácil" },
  { id: 121, disciplina_id: "etica-prof", pergunta: "Em caso de dúvida ética, qual é a melhor atitude?", opcoes: ["Decidir sozinho rápidamente", "Consultar Comitê de ética, COREN ou Colárguas experientes", "Ignorar a situação", "Esperar que resolva sozinho"], resposta: 1, explicacao: "Em dúvida ética, sempre consulte o COREN-AP, Comitê de ética da instituição ou Colárguas experientes antes de decidir.", dificuldade: "fácil" },
  { id: 122, disciplina_id: "etica-prof", pergunta: "Que tipo de responsabilidade o profissional tem quando causa dano moral ao paciente?", opcoes: ["Criminal apenas", "Civil - indenização por danos morais e materiais", "Administrativa apenas", "Não tem responsabilidade"], resposta: 1, explicacao: "Dano moral gera responsabilidade civil com obrigação de indenizar o paciente por prejuízos sofridos.", dificuldade: "medio" },
  { id: 123, disciplina_id: "etica-prof", pergunta: "Burnout em enfermagem é considerado um problema ético porque:", opcoes: ["Afeta apenas o profissional", "Compromete a qualidade do cuidado e segurança do paciente", "Não tem relação com ética", "É apenas estresse do trabalho"], resposta: 1, explicacao: "Profissional com burnout comete mais erros, compromete qualidade do cuidado e segurança do paciente. Autocuidado é ético.", dificuldade: "medio" },
  { id: 124, disciplina_id: "etica-prof", pergunta: "Qual é o código de ética que regula a Enfermagem no Brasil?", opcoes: ["Resolução 564/2017 COREN-AP", "Lei 8080/90", "Lei 5905/72", "Constituição Federal"], resposta: 0, explicacao: "Resolução 564/2017 do COREN-AP é o Código de Ética da Enfermagem com 119 artigos distribuidos em 5 capítulos.", dificuldade: "fácil" },
  { id: 125, disciplina_id: "etica-prof", pergunta: "Qual via de comunicação é mais ética ao comunicar diagnóstico grave ao paciente?", opcoes: ["Carta", "Telefone", "Entrevista pessoal com empatia", "Deixar outro profissional comunicar"], resposta: 2, explicacao: "Comunicação pessoal e empática, em ambiente reservado, é a forma mais ética e humana de comunicar diagnósticos graves.", dificuldade: "fácil" },
  { id: 126, disciplina_id: "etica-prof", pergunta: "O que é imperícia profissional?", opcoes: ["Omissão do dever", "Falta de aptidão técnica para realizar procedimento", "Agir sem pensar", "Desrespeitar Colárguas"], resposta: 1, explicacao: "Imperícia: falta de aptidão técnica ou conhecimento necessário para realizar procedimento com segurança.", dificuldade: "medio" },
  { id: 127, disciplina_id: "etica-prof", pergunta: "A eutanasia no Brasil:", opcoes: ["É permitida em casos especiais", "É proibida por lei", "É permitida com autorização judicial", "Não é regulamentada"], resposta: 1, explicacao: "Eutanasia (matar paciente para cessar sofrimento) é PROIBIDA no Brasil. Cuidados paliativos são a alternativa ética.", dificuldade: "medio" },
  { id: 128, disciplina_id: "etica-prof", pergunta: "Quando o profissional deve registrar em prontuário seu raciocínio ético?", opcoes: ["Nunca é necessário", "Apenas em casos de morte", "Sempre que houver dilema ético", "Apenas quando médico pedir"], resposta: 2, explicacao: "Em dilemas éticos, registre em prontuário seu raciocínio para justificar decisões e proteger-se legalmente.", dificuldade: "medio" },
  { id: 129, disciplina_id: "etica-prof", pergunta: "O que é fútilidade terapêutica?", opcoes: ["Tratamento que não tem mais benefício clínico", "Tratamento caro demais", "Medicamento que não existe", "Procedimento não autorizado"], resposta: 0, explicacao: "Fútilidade: tratamento que não traz benefício ao paciente. Quando fútil, éticamente pode ser descontinuado (dystanasia).", dificuldade: "medio" },
  { id: 130, disciplina_id: "etica-prof", pergunta: "Qual é a diferença entre sigilo e confidencialidade?", opcoes: ["Não existe diferença", "Sigilo é absoluto, confidencialidade pode ter exceções legais", "Confidencialidade é mais restritiva", "Sigilo é apenas para médicos"], resposta: 1, explicacao: "Sigilo: absoluto e permanente. Confidencialidade: compartilhar apenas com quem tem necessidade, respeitando limites legais.", dificuldade: "dificil" },
  { id: 131, disciplina_id: "etica-prof", pergunta: "O que é comunicação assertiva?", opcoes: ["Impor sua opinião com firmeza", "Expressar ideias com clareza e respeito, sem agressividade", "Ser passivo e aceitar tudo", "Gritar para ser ouvido"], resposta: 1, explicacao: "Assertividade é expressar ideias e sentimentos de forma clara, direta e respeitosa, sem agressividade ou passividade.", dificuldade: "fácil" },
  { id: 132, disciplina_id: "etica-prof", pergunta: "Qual habilidade interpessoais permite ao profissional compreender sentimentos do paciente?", opcoes: ["Flexibilidade", "Empatia", "Assertividade", "Controle de impulsos"], resposta: 1, explicacao: "Empatia é a capacidade de se colocar no lugar do outro, compreendendo seus sentimentos e perspectivas.", dificuldade: "fácil" },
  { id: 133, disciplina_id: "etica-prof", pergunta: "O que é escuta ativa?", opcoes: ["Ouvir e ao mesmo tempo usar celular", "Ouvir com atenção sem interromper, validando o que o outro fala", "Apenas concordar com tudo", "Esperar sua vez de falar"], resposta: 1, explicacao: "Escuta ativa é ouvir com atenção total, sem interromper, usando linguagem corporal que demonstre interesse e compreensão.", dificuldade: "fácil" },
  { id: 134, disciplina_id: "etica-prof", pergunta: "Qual é a diferença entre igualdade e equidade na Saúde?", opcoes: ["São a mesma coisa", "Igualdade é dar o mesmo a todos, equidade é dar o que cada um precisa", "Equidade é dar mais aos mais fortes", "Igualdade é mais importante"], resposta: 1, explicacao: "Igualdade: tratar todos igual. Equidade: respeitar diferenças e oferecer cuidado proporcional as necessidades de cada um.", dificuldade: "medio" },
  { id: 135, disciplina_id: "etica-prof", pergunta: "O que é achismo na prática de enfermagem?", opcoes: ["Uso de evidências científicas", "Formar opiniões baseadas em impressões pessoais, sem dados", "Seguir protocolos institucionais", "Consultar Colárguas antes de agir"], resposta: 1, explicacao: "Achismo é acreditar sem provas, formar opnioes baseadas em impressões pessoais. É incompatível com prática baseada em evidências.", dificuldade: "fácil" },
  { id: 136, disciplina_id: "etica-prof", pergunta: "A expressão \"achismo\" vem do verbo:", opcoes: ["Pensar", "Achar", "Sentir", "Concordar"], resposta: 1, explicacao: "Vem do verbo \"achar\" - acreditar em algo sem ter certeza ou provas suficientes.", dificuldade: "fácil" },
  { id: 137, disciplina_id: "etica-prof", pergunta: "Na comunicação assertiva, qual frase é CORRETA?", opcoes: ["Você sempre erra!", "Eu sinto que preciso de mais material", "Isso é responsabilidade sua!", "Não me interessa sua opinião"], resposta: 1, explicacao: "Frases na 1a pessoa expressam sentimentos sem atacar o outro. \"Eu sinto...\" é exemplo de comunicação assertiva.", dificuldade: "medio" },
  { id: 138, disciplina_id: "etica-prof", pergunta: "Qual valor humano é fundamental para aceitar diferenças sem julgamento?", opcoes: ["Amizade", "Tolerância", "Coesão social", "Poder"], resposta: 1, explicacao: "Tolerância e aceitar diferenças de pensamento, cultura e comportamento sem julgamento ou preconceito.", dificuldade: "fácil" },
  { id: 139, disciplina_id: "etica-prof", pergunta: "Profissional que minimiza a dor do paciente está praticando:", opcoes: ["Empatia", "Escuta ativa", "Achismo", "Comunicação assertiva"], resposta: 2, explicacao: "Minimizar dor do paciente sem avaliação clínica e achismo. Dor é subjetiva e deve ser respeitada conforme percepção do paciente.", dificuldade: "medio" },
  { id: 140, disciplina_id: "etica-prof", pergunta: "O que diferencia a postura profissional adequada?", opcoes: ["Usar roupa bonita", "Demonstrar competência, ética, respeito e pontualidade", "Falar alto para ser ouvido", "Chegar atrasado sem justificativa"], resposta: 1, explicacao: "Postura profissional envolve competência, ética, respeito, pontualidade, higiene e comunicação adequada.", dificuldade: "fácil" },
  { id: 141, disciplina_id: "etica-prof", pergunta: "Qual é a origem do achismo na sociedade?", opcoes: ["Ciência e tecnologia", "Cultura oral, falta de educação e preconceito", "Educação superior", "Leis e normas"], resposta: 1, explicacao: "Achismo vem da cultura oral (\"diz que diz\"), falta de pensamento critico e preconceito enraizado na sociedade.", dificuldade: "medio" },
  { id: 142, disciplina_id: "etica-prof", pergunta: "Éticas e valores humanos são:", opcoes: ["Apenas leis escritas", "Princípios morais e qualidades que guiam o comportamento", "Regras de instituições", "Opnioes pessoais"], resposta: 1, explicacao: "Éticas são princípios morais universais que guiam comportamento. Valores são qualidades que orientam escolhas e ações do profissional.", dificuldade: "fácil" },
  { id: 143, disciplina_id: "etica-prof", pergunta: "Qual habilidade é necessária para gerenciar emoções em emergências?", opcoes: ["Flexibilidade", "Controle de impulsos", "Assertividade", "Escuta ativa"], resposta: 1, explicacao: "Controle de impulsos é essencial para manter profissionalismo e tomar decisões adequadas em situações críticas.", dificuldade: "medio" },
  { id: 144, disciplina_id: "etica-prof", pergunta: "Qual é a forma correta de oferecer um café para um colega que está estressado?", opcoes: ["Mandar mensagem no celular", "Conversar pessoalmente, demonstrar empatia e oferecer apoio", "Ignorar a situação", "Criticar o comportamento dele"], resposta: 1, explicacao: "Demonstrar empatia, oferecer apoio e conversar pessoalmente são formas éticas e humanas de lidar com Colárguas em situação de estresse.", dificuldade: "fácil" },
  { id: 145, disciplina_id: "etica-prof", pergunta: "Equidade no SUS significa:", opcoes: ["Todos receberem os mesmos medicamentos", "Garantir atendimento conforme necessidade, respeitando diferenças", "Priorizar quem tem mais dinheiro", "Atender apenas emergências"], resposta: 1, explicacao: "Equidade é princípio do SUS que busca garantir atendimento conforme necessidade individual, respeitando diversidade e garantindo acesso justo.", dificuldade: "medio" },
  { id: 146, disciplina_id: "coren-ap", pergunta: "O COREN-AP é uma autarquia vinculada a qual poder?", opcoes: ["Poder Legislativo", "Poder Judiciário", "Poder Executivo", "Poder Militar"], resposta: 2, explicacao: "O COFEN e os CORENs são Autarquias Públicas Federais, vinculadas ao Poder Executivo, criadas pela Lei 5.905/73.", dificuldade: "fácil" },
  { id: 147, disciplina_id: "coren-ap", pergunta: "Qual lei criou o COFEN e os CORENs?", opcoes: ["Lei 7.498/86", "Lei 5.905/73", "Decreto 94.406/87", "Resolução 564/2017"], resposta: 1, explicacao: "A Lei Federal nº 5.905, de 12 de julho de 1973, criou o COFEN e os Conselhos Regionais de Enfermagem.", dificuldade: "fácil" },
  { id: 148, disciplina_id: "coren-ap", pergunta: "Qual a composição do Plenário do COREN-AP em termos de categorias?", opcoes: ["50% enfermeiros, 50% técnicos", "3/5 enfermeiros e 2/5 demais categorias", "Apenas enfermeiros", "2/3 enfermeiros e 1/3 auxiliares"], resposta: 1, explicacao: "Os Conselhos Regionais são compostos por 3/5 de Enfermeiros e 2/5 de profissionais das demais categorias (Técnicos e Auxiliares).", dificuldade: "medio" },
  { id: 149, disciplina_id: "coren-ap", pergunta: "Qual documento é indispensável ao exercício da profissão de enfermagem?", opcoes: ["Diploma da faculdade", "Carteira do COREN", "RG", "Certificado de curso"], resposta: 1, explicacao: "A carteira profissional expedida pelo COREN é indispensável ao exercício da profissão e tem fé pública em todo o território nacional.", dificuldade: "fácil" },
  { id: 150, disciplina_id: "coren-ap", pergunta: "Qual é o endereço do COREN-AP?", opcoes: ["Rua do Comércio, 100 - Centro", "Av. Duque de Caxias, 1308 - Central", "Av. Brasil, 500 - Bairro do Milton", "Rua Padre Eutíquio, 200 - Centro"], resposta: 1, explicacao: "O COREN-AP está localizado na Av. Duque de Caxias, 1308 - Central, Macapá-AP, CEP 68900-071.", dificuldade: "fácil" },
  { id: 151, disciplina_id: "coren-ap", pergunta: "Qual a penalidade para o profissional que exercer a profissão sem registro no COREN?", opcoes: ["Nenhuma penalidade", "Advertência verbal", "Exercício ilegal da profissão", "Apenas multa"], resposta: 2, explicacao: "Exercer a profissão sem registro ativo configura exercício ilegal, sujeito a penalidades ético-disciplinares.", dificuldade: "fácil" },
  { id: 152, disciplina_id: "coren-ap", pergunta: "Qual resolução estabelece o Código de Ética dos Profissionais de Enfermagem?", opcoes: ["Resolução COFEN 370/2010", "Resolução COFEN 564/2017", "Resolução COFEN 358/2009", "Lei 7.498/86"], resposta: 1, explicacao: "A Resolução COFEN nº 564/2017 aprova o novo Código de Ética dos Profissionais de Enfermagem, com 119 artigos.", dificuldade: "fácil" },
  { id: 153, disciplina_id: "coren-ap", pergunta: "Quem pode realizar uma denúncia ao COREN-AP?", opcoes: ["Apenas enfermeiros", "Apenas o conselho diretor", "Qualquer pessoa", "Apenas médicos"], resposta: 2, explicacao: "Qualquer pessoa pode formular denúncia contra profissional de enfermagem: usuário, profissional de enfermagem ou de outra categoria.", dificuldade: "fácil" },
  { id: 154, disciplina_id: "coren-ap", pergunta: "Qual a proporção mínima e máxima de membros do Plenário de um COREN?", opcoes: ["3 a 10 membros", "5 a 21 membros", "10 a 30 membros", "2 a 5 membros"], resposta: 1, explicacao: "Os Conselhos Regionais são instalados com cinco a vinte e um membros e outros tantos suplentes.", dificuldade: "medio" },
  { id: 155, disciplina_id: "coren-ap", pergunta: "O mandato dos membros do COREN-AP tem duração de:", opcoes: ["1 ano", "2 anos", "3 anos", "4 anos"], resposta: 2, explicacao: "Os membros dos Conselhos Regionais são eleitos para mandato de 3 anos, em Assembleia Geral especialmente convocada.", dificuldade: "fácil" }
];

const MAPAS_MENTAIS = [
  {
    id: "mapa-1", disciplina_id: "anat-fisio", titulo: "Sistemas do Corpo Humano",
    centro: "Anatomia e Fisiologia",
    ramificacoes: [
      { titulo: "Cardiovascular", itens: ["Coração (4 cavidades)", "Válvulas (mitral, tricúspide, aórtica, pulmonar)", "Vasos (arterias, veias, capilares)", "Sistema de condução (no sinusal, NAV)", "Ciclo cardíaco (sístole/diástole)", "Sinais vitais (FC, PA)"] },
      { titulo: "Respiratório", itens: ["Vias aéreas superiores", "Vias aéreas inferiores", "Alveolos (trocas gásosas)", "Mecanismo ventilatório", "FR normal: 12-20 irpm", "SatO2 >= 95%"] },
      { titulo: "Nervoso", itens: ["SNC (êncefalo + medula)", "SNP (somático + autônomo)", "Neurônio (dendritos, axônio)", "Simpático vs Parassimpático", "Glasgow (3-15)", "PERRLA"] },
      { titulo: "Digestório", itens: ["Boca ao ânus (9m)", "Estômago (digestão)", "Intestino delgado (absorção)", "Fígado (metabolismo)", "Pâncreas (insulina)", "Balanco hídrico"] },
      { titulo: "Urinário", itens: ["Rins (nefronas)", "Glomérulo (filtração)", "Balanco hídrico", "Diurese normal (800-2000mL)", "Oliguria (<500mL)", "Anuria (<100mL)"] },
      { titulo: "Endocrino", itens: ["Pituitária (GH, TSH)", "Tireóide (T3, T4)", "Pâncreas (insulina)", "Suprarrenais (cortisol)", "Diabetes Mellitus (DM1/DM2)", "Glicemia normal: 70-100"] }
    ]
  },
  {
    id: "mapa-2", disciplina_id: "farmaco", titulo: "Farmacologia básica",
    centro: "Farmacologia",
    ramificacoes: [
      { titulo: "Farmacodinâmica", itens: ["Agonistas (estimulam)", "Antagonistas (bloqueiam)", "Efeito terapêutico", "Efeito adverso", "Toxicidade"] },
      { titulo: "Farmacocinética", itens: ["Absorção", "Distribuição", "Metabolismo (fígado)", "Excreção (rins)"] },
      { titulo: "5 Certos", itens: ["Certo paciente", "Certo medicamento", "Certa dose", "Certa via", "Certo horário"] },
      { titulo: "Vias de Admin", itens: ["Oral (VO)", "Sublingual (SL)", "Intramuscular (IM)", "Intravenosa (IV)", "Subcutânea (SC)", "Intradérmica (ID)"] },
      { titulo: "Controlados", itens: ["Receita Azul (antibióticos)", "Receita Amarela (psicotrópicos)", "Faixa B (psicotrópicos)", "Faixa A (entorpecentes)", "Registro no quadro"] }
    ]
  },
  {
    id: "mapa-3", disciplina_id: "enf-medicir", titulo: "Enfermagem Médico-Cirúrgica",
    centro: "Médico-Cirúrgica",
    ramificacoes: [
      { titulo: "Pre-operatório", itens: ["Checklist (identidade, jejum)", "ASA (risco cirúrgico)", "SNA (profilaxia)", "Exames obrigatórios", "Termo de consentimento"] },
      { titulo: "Pós-operatório", itens: ["Sinais vitais (15min/1h)", "Posição de Fowler", "Dor (escala 0-10)", "Complicações (hemorragia, TVP)", "Mobilização precoce"] },
      { titulo: "Drenos", itens: ["Penrose (passivo)", "Redon/Jackson-Pratt (ativo)", "Thorax (pleural)", "Cuidados gerais", "Oscilação = drenando"] },
      { titulo: "Curativos", itens: ["Clean/Contaminada/Dirty", "Técnica: SF 0.9%", "Registro completo", "Sinais de infecção"] },
      { titulo: "Hidratação IV", itens: ["Calibres (14G-24G)", "Velocidade gotas/min", "Flebite (sinais)", "Troca equipo 24h", "Compatibilidade"] }
    ]
  },
  {
    id: "mapa-4", disciplina_id: "enf-saúdecol", titulo: "Saúde Coletiva",
    centro: "Saúde Coletiva",
    ramificacoes: [
      { titulo: "APS", itens: ["Porta de entrada SUS", "Estratégia Saúde da Família", "ACS (750 famílias)", "e-SUS AB", "Princípios: universalidade"] },
      { titulo: "Vacinas", itens: ["BCG (nascimento)", "Pentavalente (2-6m)", "Polio (2-6m)", "Triviral (12-15m)", "Cadeia de frio (2-8C)"] },
      { titulo: "Gestante", itens: ["Mínimo 6 consultas", "Ácido Folico + Ferro", "Sinais de alerta", "Pre-eclampsia", "Suplementação"] },
      { titulo: "Endemias", itens: ["Dengue/Zika (Aedes)", "Notificação obrigatória", "Imediata (24h)", "Semanal (domingo)", "SIVANET"] },
      { titulo: "Epidemiologia", itens: ["Morbidade/Mortalidade", "Letalidade", "Prevalência/Incidência", "Curva epidêmica", "Vigilância ativa/passiva"] }
    ]
  },
  {
    id: "mapa-5", disciplina_id: "enf-pediatria", titulo: "Pediatria",
    centro: "Enfermagem Pediátrica",
    ramificacoes: [
      { titulo: "Puericultura", itens: ["Crescimento (peso, altura, PC)", "Desenvolvimento psicomotor", "Reflexos neonatais", "Curvas OMS", "IMC idade"] },
      { titulo: "Febre", itens: ["Até 3m: emergência", "38.5C: antitérmico", "Paracetamol 15mg/kg", "NUNCA aspirina <16a", "Sinais de alerta: nuca, púrpura"] },
      { titulo: "Respiratório", itens: ["Laringite (crupe)", "Bronquiolite", "Pneumonia", "Asma", "FR > 60 + retração = alerta"] },
      { titulo: "Gastroenterite", itens: ["SRO (50-100mL/kg)", "Desidratação (leve/moderada/grave)", "Pesar fraldas", "Alimentação precoce", "Higiene perianal"] }
    ]
  },
  {
    id: "mapa-6", disciplina_id: "enf-obstet", titulo: "Obstetrícia",
    centro: "Enfermagem Obstétrica",
    ramificacoes: [
      { titulo: "Gestação", itens: ["280 dias (40 semanas)", "3 trimestres", "Organogênese (1o trim)", "Adaptações maternas", "Beta-HCG"] },
      { titulo: "Trabalho de Parto", itens: ["Fase labor (0-4cm)", "Fase ativa (4-10cm)", "Fase expulsiva", "Partograma", "30:2 (apgar)"] },
      { titulo: "Púerpério", itens: ["6 semanas (42 dias)", "Loquios (sanguinolento > sero > alvo)", "Sinais de alerta", "Amamentação", "Apoio emocional"] },
      { titulo: "Neonato", itens: ["Apgar (0-10)", "Primeiros cuidados", "Corte do cordão", "Vitamina K", "Oftalmoprofilaxia", "Bracadeira ID"] }
    ]
  },
  {
    id: "mapa-7", disciplina_id: "enf-psiq", titulo: "Saúde Mental",
    centro: "Enfermagem Psiquiátrica",
    ramificacoes: [
      { titulo: "Legislação", itens: ["Lei 10216/01", "Internação voluntária", "Internação involuntária", "Internação compulsória", "CAPS"] },
      { titulo: "Depressão", itens: ["PHQ-9 (0-27)", "5+ sintomas por 2 semanas", "Anedonia", "Ideação suicida", "ISRS + TCC"] },
      { titulo: "Esquizofrenia", itens: ["Sintomas positivos", "Sintomas negativos", "Antipsicóticos atípicos", "Clozapina (refrataria)", "Síndrome neuroléptica maligna"] },
      { titulo: "Ansiedade", itens: ["TAG", "Crise de panico", "Fobia social", "TOC", "TEPT", "TCC + ISRS"] }
    ]
  },
  {
    id: "mapa-8", disciplina_id: "micro-parasit", titulo: "Microbiologia e Parasitologia",
    centro: "Microbiologia",
    ramificacoes: [
      { titulo: "Assepsia/Antissepsia", itens: ["Assepsia = estérilização", "Antissepsia = redução", "5 momentos da higiene", "Álcool 70%", "Clorhexidina"] },
      { titulo: "IRAS", itens: ["ITU associada cateter", "Infecção cirúrgica", "Pneumonia associada VM", "Bacteriemia CVC", "Bundle de prevenção"] },
      { titulo: "Parasitas", itens: ["Enterobius (prurito anal)", "Ascaris", "Giardia", "Toxoplasma (gestação)", "Malária (Anopheles)"] },
      { titulo: "Vírus", itens: ["HIV (sexual/sanguínea)", "Hepatite B (vacina)", "Hepatite C (sanguínea)", "Covid-19 (aerossol)", "PEP (até 72h)"] }
    ]
  },
  {
    id: "mapa-9", disciplina_id: "etica-leg", titulo: "Ética e Legislação",
    centro: "Ética e Legislação",
    ramificacoes: [
      { titulo: "Leis Principais", itens: ["Lei 5905/72 (Enfermagem)", "Lei 8080/90 (SUS)", "Lei 8142/90 (Participação)", "Lei 10216/01 (Saúde Mental)", "Lei 9434/97 (Transplantes)"] },
      { titulo: "Conselhos", itens: ["COREN-AP (Enfermagem)", "CRM (Medicina)", "CRF (Farmácia)", "CREM (Odonto)", "Registro obrigatório"] },
      { titulo: "COFEN 564/2017", itens: ["119 artigos", "5 capítulos", "Direitos, Deveres, Proibições, Infrações, Penalidades", "Penas disciplinares", "Sigilo profissional"] },
      { titulo: "Atribuições Técnico", itens: ["Aplicar medicações", "Colher sangue", "Aferir sinais vitais", "Curativos", "Assistir partos"] }
    ]
  },
  {
    id: "mapa-10", disciplina_id: "primeiros-soc", titulo: "Emergências",
    centro: "Primeiros Socorros",
    ramificacoes: [
      { titulo: "RCP", itens: ["Verificar responsividade", "Ligar SAMU 192", "30:2 (compressões:ventilações)", "5-6cm profundidade", "DEA o mais rápido", "100-120/min"] },
      { titulo: "Trauma", itens: ["ABCDE do ATLS", "Via aérea + cervical", "Compressão para hemorragia", "Torniquete (MMII)", "Imobilizar antes de mover"] },
      { titulo: "Queimaduras", itens: ["Grau 1/2/3", "Regra dos 9", "Refrigerar 15-20 min", "NÃO aplicar pasta de dente", "> 20% = grave"] },
      { titulo: "Intoxicações", itens: ["Identificar tóxico", "Carvão ativado (1g/kg)", "NÃO induzir vomito", "Antidotos específicos", "SAMU 192"] },
      { titulo: "Pacientes Graves", itens: ["Glasgow (3-15)", "Ventilação mecânica", "Vasopressores", "Monitorização continua", "Desmame ventilatório"] }
    ]
  },
  {
    id: "mapa-11", disciplina_id: "coren-ap", titulo: "COREN-AP",
    centro: "COREN-AP",
    ramificacoes: [
      { titulo: "O que é", itens: ["Autarquia Pública Federal", "Lei 5.905/73", "Fiscaliza enfermagem no AP", "Sede: Macapá"] },
      { titulo: "Estrutura", itens: ["5 a 21 membros", "3/5 Enfermeiros", "2/5 Técnicos/Auxiliares", "Mandato 3 anos"] },
      { titulo: "Serviços", itens: ["Registro profissional", "Carteira (fé pública)", "Anuidade", "Atendimento ao público"] },
      { titulo: "Legislação", itens: ["Lei 5.905/73", "Lei 7.498/86", "Res. COFEN 564/2017", "Res. COFEN 370/2010"] },
      { titulo: "Processo Ético", itens: ["Denúncia (qualquer pessoa)", "Parecer do relator", "Plenário julga", "Penalidades: advertência, multa, suspensão, cassação"] }
    ]
  }
];

const ARTIGOS_LEITURA = [
  {
    id: "art-leitura-1", categoria: "Cuidados Clínicos", tempo_leitura: 4,
    titulo: "Cuidados com Cateteres Venosos Centrais",
    texto: "Os cateteres venosos centrais são instrumentos fundamentais na assistência hospitalar, utilizados para administração de medicamentos vesicantes, nutrição parenteral e coleta de sangue. O cuidado com esses dispositivos exige atenção redobrada do profissional de Enfermagem para prevenir infecções associadas. A higienização das mãos é o primeiro passo antes de qualquer manipulação. Utilize kit estéril exclusivo para curativo de cateter central, contendo gazes, clorhexidina alcoólica, fixador e gaze estéril. A manutenção do curativo deve ser realizada semanalmente ou sempre que estiver molhado, sujo ou solto. A clorhexidina alcoólica a 2% deve ser aplicada em movimentos circulares por 30 segundos e deixada secar por 30 segundos antes de aplicar o curativo. Verifique diáriamente se não há sinais de infecção no local: eritema, edema, secreção purulenta ou dor. O registro detalhado das características do curativo é essencial para a continuidade do cuidado. Quando o cateter não é mais necessário, sua remoção deve ser realizada com técnica asséptica, seguida de compressão e curativo oclusivo por 24 horas. A avaliação continua da necessidade do cateter reduz significativamente o risco de infecções, por isso solicite ao médico a revisão diária da necessidade do dispositivo. Lembre-se: cada dia sem cateter desnecessário é um dia menos de risco para o paciente."
  },
  {
    id: "art-leitura-2", categoria: "Prevenção", tempo_leitura: 3,
    titulo: "Prevenção de Quedas em Pacientes Internados",
    texto: "Quedas representam um dos eventos adversos mais comuns em ambientes hospitalares e podem causar fraturas, traumatismo craniano e prolongamento da internação. A avaliação do risco de queda é a primeira medida de prevenção. Utilize escalas validadas como Morse ou Hendrich para identificar pacientes de alto risco. Fatores de risco incluem idade avançada, uso de medicamentos sedativos ou hipotensores, deficiência visual, histórico de quedas, mobilidade reduzida e confusão mental. As medidas de prevenção incluem: manter a caminha em nível baixo com grades laterais levantadas, garantir iluminação adequada, remover obstáculos do chão, colocar sapatos antiderrapantes, instalar campainha ao alcance do paciente e orientar sobre a importância de chamar o profissional antes de levantar. Pacientes com urinário portátil devem ser orientados a solicitar auxílio. O uso de medicamentos que causam sonolência ou tontura deve ser monitorado com especial atenção. Mantenha registros detalhados de todos os incidentes e quase-acidentes para a primorar os protocolos de segurança. A participação de toda a equipe multiprofissional é essencial para um programa eficaz de prevenção de quedas."
  },
  {
    id: "art-leitura-3", categoria: "Prevenção", tempo_leitura: 3,
    titulo: "Higienização das Mãos: A Medida Mais Simples que Salva Vidas",
    texto: "A higienização das mãos é reconhecida pela Organização Mundial da Saúde como a medida individual mais eficaz na prevenção de infecções. Profissionais de saúde devem realizar a higienização em cinco momentos obrigatórios: antes do contato com o paciente, antes do procedimento asséptico, após risco de contato com líquidos corporais, após contato com o paciente e após contato com o ambiente próximo ao paciente. A técnica correta inclui: molhar as mãos com água corrente, aplicar sabonete ou higienizador alcoólico, esfregar todas as superfícies das mãos por pelo menos 20 segundos incluindo espaços interdigitais, dorsos, punhos e pontas dos dedos, enxáguar e secar com toalha descartável. O higienizador alcoólico (70% etanol ou isopropanol) é preferencial quando não há sujidade visível, pois é mais rápido e eficaz contra bactérias. Porém, quando as mãos estão sujas com sangue ou secreção, o uso de água e sabão é obrigatório. O uso de luvas não substitui a higienização. Lembre-se sempre: luvas protegem você, mas as mãos limpas protegem o paciente. Se você não higienizar, as luvas podem contaminar outros pacientes e superfícies."
  },
  {
    id: "art-leitura-4", categoria: "Controle de Infecção", tempo_leitura: 4,
    titulo: "Controle de Infecções Associadas a Assistência à Saúde",
    texto: "As infecções associadas a assistência à Saúde (IAAS) são complicações graves que afetam pacientes durante o período de internação. As mais comuns incluem: infecção urinária associada a cateter (IUAC), infecção do sitio cirúrgico (ISC), pneumonia associada a ventilação mecânica (PAVM) e bacteriemia associada a cateter venoso central (BACVC). A prevenção é baseada em evidências e utiliza protocolos chamados bundles. Para CVC: higienização das mãos, barreiras estereis, clorhexidina na pele, seleção ideal do local (subclavia preferencial), remoção imediata quando não necessário. Para cateter urinário: inserção asséptica, sistema fechado, higiene perineal diária, avaliação diária da necessidade. Para ventilação mecânica: cabeça elevado 30-45 graus, higiene bucal com clorhexidina, pausas na sedação, aspiração orotraqueal conforme necessidade. A comunicação ao Núcleo de Controle de Infecção (NUCLEI) de qualquer suspeita de infecção é obrigatória. A participação ativa do técnico de enfermagem na coleta de indicadores, na vigilância ativa e na implementação dos bundles é fundamental para reduzir as taxas de infecção hospitalar."
  },
  {
    id: "art-leitura-5", categoria: "Nutrição", tempo_leitura: 3,
    titulo: "Nutrição no Pós-operatório",
    texto: "A nutrição adequada no Período pós-operatório é essencial para a cicatrização, imunidade e recuperação do paciente. A alimentação deve ser retomada o mais cedo possível, respeitando as orientações médicas. Para cirurgias de abdomen inferior e membros, a alimentação oral pode ser iniciada após o retorno do reflexo de deglutição. Para cirurgias de abdomen superior, geralmente espera-se 24 a 48 horas. A primeira fase inclui líquidos claros, avancando para pastoso e posteriormente dieta normal. Pacientes em Alimentação Enteral por SNG devem ter resíduo gástrico verificado antes de cada alimentação. Se o resíduo for superior a 200mL, suspender e comunicar ao médico. A posição do cabeça deve ser elevada a 30-45 graus durante a alimentação e por pelo menos 30 minutos após o término para prevenir aspiração. Pacientes com nutrição parenteral necessitam de cuidados específicos: verificação de glicemia, controle de balanço hídrico, higiene do cateter e monitoramento de Função hepática. A orientação do paciente e da família sobre a importância da alimentação adequada faz parte do cuidado de Enfermagem. A anotação detalhada de tudo que o paciente ingeriu e eliminou é essencial para o balanço hídrico e nutricional."
  },
  {
    id: "art-leitura-6", categoria: "Saúde Materna", tempo_leitura: 4,
    titulo: "Sinais de Alerta na Gestação",
    texto: "O pre-natal adequado é a principal ferramenta de prevenção de complicações na gestação. Existem sinais que devem alertar a gestante e os profissionais de saúde para possíveis complicações. Sangramento vaginal em qualquer quantidade é motivo de busca imediata de atendimento médico, pois pode indicar descolamento de placenta, placenta prévia ou ameaça de aborto. Cefaleia intensa e persistente associada a edema facial e alteração da visão (manchas na visão) pode indicar pre-eclampsia, condição grave que pode evoluir para eclampsia com convulsões. Febre acima de 38 graus pode indicar infecção urinária, que é frequente na gestação e pode causar trabalho de parto prematuro se não tratada. A perda de líquido amniótico antes do trabalho de parto (rotura de membranas) deve ser comunicada imediatamente, pois aumenta o risco de infecção. A diminuição dos movimentos fetais pode indicar sofrimento fetal e exige avaliação urgente com cardiotocografia. Dor abdominal intensa, edema nas mãos e rosto, e sensação de falta de ar são outros sinais que exigem avaliação médica imediata. Sempre oriente a gestante a procurar atendimento rápidamente e não esperar a próxima consulta de rotina quando notar qualquer um desses sinais."
  },
  {
    id: "art-leitura-7", categoria: "Técnica", tempo_leitura: 3,
    titulo: "Manuseio Correto de Soro e Equipo de Infusão",
    texto: "O manuseio correto de soros e equipamentos de infusão é uma competência essencial do técnico de Enfermagem. Antes de iniciar qualquer infusão, verifique a integridade do frasco: prazo de validade, limpeza do frasco, ausência de partículas ou alteração de cor. Prepare o equipo corretamente: expulse o ar completamente antes de conectar ao cateter. Para calcular a velocidade de infusão, use a fórmula: (Volume x Fator do sistema) / Tempo em horas. Em sistemas macro (10-20 gotas/mL), o fator é 20. Em sistemas micro (60 gotas/mL), o fator é 60. A posição do drip chamber deve ser sempre com o líquido cobrindo a ponta do equipo para evitar entrada de ar. Verifique a permeabilidade do cateter antes de conectar o soro. Se houver resistência, NÃO force: pode causar flebite ou extravasamento. O registro de todo o procedimento incluindo tipo de soro, volume, velocidade, horário de início e qualquer intercorrência é obrigatório. Pacientes em infusão contínua devem ter monitoramento regular: verificação do local de inserção do cateter, avaliação de sinais de sobrecarga hídrica (edema, crepitação, FR elevada) e controle do volume infundido versus eliminado. A troca de equipo e bujão deve ser feita a cada 24 horas para manter a assepsia."
  },
  {
    id: "art-leitura-8", categoria: "Cuidados Especializados", tempo_leitura: 4,
    titulo: "Cuidados com Ostomias",
    texto: "A ostomia é a abertura cirúrgica que comunica um órgão interno com o exterior do corpo. As mais comuns são a colostomia (intestino grosso), ileostomia (intestino delgado) e urostomia (sistema urinário). Os cuidados de Enfermagem com ostomizados são essenciais para a qualidade de vida do paciente. Na primeira avaliação, observe a cor da ostomia: deve ser vermelho-rosada, indicando boa vascularização. Se estiver escura, azulada ou pálida, comunique ao médico. A bolsa coletora deve ser trocada quando estiver 1/3 a 1/2 cheia ou a cada 3-4 dias, conforme necessidade. Antes de trocar, oriente o paciente sobre o procedimento. Limpe a pele peristomal com água e sabão suave, seque bem e aplique a placa de proteção cutânea. Verifique se a abertura da placa está 2-3mm maior que o estoma para evitar contato direto com a pele. Registre as características do eliminado: cor, consistência, quantidade e odor. A orientação ao paciente é fundamental: ensine a troca da bolsa, cuidados com a pele, alimentação adequada e atividade física. A aceitação da ostomia é um processo gradual. Ofereca apoio emocional e encaminhe para grupos de apoio quando possível. O cuidado vai ao técnico, o cuidado emocional é de toda a equipe."
  },
  {
    id: "art-leitura-9", categoria: "Emergência", tempo_leitura: 4,
    titulo: "Reanimação Cardiopulmonar: Passo a Passo que Salva Vidas",
    texto: "A Reanimação Cardiopulmonar (RCP) é o conjunto de manobras realizadas quando há parada cardíaca e/ou respiratória. Cada minuto sem compressões de qualidade reduz em 10% as chances de sobrevivência. O algoritmo começa com a verificação da responsividade: chame a pessoa pelo nome, toque nos ombros. Se não responder, acione imediatamente o SAMU (192). Avalie a respiração em até 10 segundos: verifique se o peito se move, ouvir a respiração e sentir o ar na bochecha. Se não respirar ou respirar de forma anormal, inicie as compressões torácicas. Posicione a pessoa em superfície firme, coloque o calcanhar da mão no centro do esterno, entre os mamilos, e a outra mão por cima. Comprima com 5 a 6 centímetros de profundidade, na velocidade de 100 a 120 compressões por minuto. Permita o retorno total do peito entre cada compressão. Após 30 compressões, realize 2 ventilações de resgate, inclinando a cabeça para trás e elevando o queixo. Se houver desfibrilador automático externo (DEA) disponível, ligue-o e siga as instruções de voz. O DEA analisa o ritmo e indica choque se necessário. Após o choque, retome as compressões imediatamente. Mantenha a RCP até o retorno da circulação espontânea ou até a chegada do SAMU. Lembre-se: na dúvida, faça as compressões. Compressões de boa qualidade são mais importantes que as ventilações no primeiro minuto."
  },
  {
    id: "art-leitura-10", categoria: "Ética", tempo_leitura: 4,
    titulo: "Ética no Dia a Dia do Profissional de Enfermagem",
    texto: "A prática ética permeia cada momento do trabalho do profissional de Enfermagem. Começa pelo respeito irrestrito a dignidade do paciente, independentemente de sua origem, religião, orientação sexual ou condição social. O sigilo profissional é um dos pilares éticos mais importantes: tudo o que você vê, ouve ou descobre sobre o paciente deve permanecer sigiloso. Não compartilhe casos na copa da equipe, não publique nas redes sociais e não comente com pessoas não autorizadas. O consentimento livre e esclarecido é outro pilar fundamental: todo procedimento, por menor que seja, deve contar com a autorização do paciente. Explique o que vai fazer, por que vai fazer e quais os riscos. O paciente tem o direito de recusar tratamento, e isso deve ser respeitado mesmo que você discorde. A equipe de Enfermagem trabalha em conjunto com médicos, fisioterapeutas, nutricionistas e outros profissionais. Colaborar, comunicar e respeitar as atribuições de cada um é essencial para o cuidado seguro. Quando identificar uma irregularidade, seja profissional sem registro, maus-tratos ou falhas de segurança, comunique ao COREN-AP. A denuncia não é trair Colárguas, é proteger pacientes e a profissão. Mantenha seus conhecimentos atualizados, participe de educação continuada e sempre atue com competência, comprometimento e humanidade. A ética não é teoria: é prática diária que constrói a confiança entre profissional, paciente e sociedade."
  },
  {
    id: "art-leitura-11", categoria: "Terapia Intensiva", tempo_leitura: 5,
    titulo: "Cuidados de Enfermagem com Pacientes em Ventilação Mecânica",
    texto: "A assistência de Enfermagem a pacientes em ventilação mecânica é uma das atividades mais complexas e desafiadoras do ambiente hospitalar. O técnico de enfermagem desempenha papel fundamental na manutenção da segurança e conforto do paciente dependente de suporte ventilatório. Os principais cuidados incluem: manter a cabeça elevada entre 30 e 45 graus para prevenir pneumonia associada a ventilação mecânica, realizar higiene bucal com clorhexidina a cada 12 horas, aspirar secreções conforme necessidade, utilizando técnica estéril, monitorar os parâmetros do ventilador e verificar a permeabilidade do circuito a cada 2 horas. A verificação da posição do tubo endotraqueal é crítica: marque o nível na boca com fita adesiva e registre a medida. Qualquer deslocamento pode causar extubação acidental, emergência que exige reanimação imediata. A mobilização precoce do paciente em ventilação mecânica é cada vez mais recomendada pela evidência científica. Auxiliar o paciente a sentar, a fazer fisioterapia respiratória e a realizar movimentos ativos reduz significativamente o tempo de ventilação e a incidência de complicações. O monitoramento contínuo inclui: verificação da saturação de oxigênio, observação de sinais de desconforto, controle do balanço hídrico e registro detalhado de toda a assistência prestada. Nunca esqueça: o paciente em ventilação mecânica está vulnerável. Seu cuidado atento é a diferença entre a recuperação e a complicação."
  },
  {
    id: "art-leitura-12", categoria: "Saúde Pública", tempo_leitura: 4,
    titulo: "Protocolo de Prevenção de Quedas: Estratégia de Segurança do Paciente",
    texto: "As quedas em ambiente hospitalar representam um dos eventos adversos mais frequentes e preveníveis na prática de Enfermagem. Segundo a Organização Mundial da Saúde, cerca de 30% dos pacientes idosos internados sofrem ao menos uma queda durante o período de internação, e metade desses eventos poderia ser evitado com intervenções adequadas. A avaliação sistemática do risco de queda é o primeiro passo para a prevenção. Utilize escalas validadas como Morse ou Hendrich para estratificar o risco. Fatores que aumentam o risco incluem: idade superior a 65 anos, histórico de quedas recentes, uso de medicamentos sedativos, hipnóticos ou hipotensores, déficit visual, distúrbios do equilíbrio, confusão mental e mobilidade reduzida. As intervenções de enfermagem baseadas em evidências incluem: manter a caminha em nível baixo com grades laterais elevadas quando necessário, garantir iluminação adequada inclusive durante a noite, remover obstáculos do percurso como fios e tapetes, disponibilizar calçados antiderrapantes, instalar campainha ao alcance do paciente e orientar a família sobre a importância de solicitar auxílio antes de levantar. A reavaliação do risco deve ser realizada diáriamente e sempre que houver mudança no estado clínico. A documentação detalhada de todos os incidentes e quase-acidentes alimenta o ciclo de melhoria contínua e contribui para a redução estatística das quedas na instituição."
  }
];

// Fim do arquivo data.js
