import Accordion from "@/app/components/layout/Accordion";
import Image from "next/image";

export default function SaoJoaoDelRei() {
  const accordionItems = [
    {
      id: "id1",
      title: "ADMINISTRAÇÃO (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas:</strong> 40 vagas para cada turno</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O perfil do(a) egresso(a) do Curso de Administração da UFSJ se define fundamentalmente pela conjunção dos princípios éticos e morais e das competências e habilidades necessárias ao exercício da Administração. Esse perfil deverá consubstanciar um(a) cidadão(ã) com visão global, atuante na comunidade, com capacidade de promoção do bem-estar social de forma pró-ativa, empreendedora e ética. O(a) futuro(a) profissional precisará estar apto(a) para compreender questões técnicas, científicas e socioeconômicas, com capacidade empreendedora e inovadora por meio de iniciativa e capacidade de liderança, para o desenvolvimento de empreendimentos interdisciplinares e de transformação da realidade local, regional e nacional.</p>
        </>
      ),
    },
    {
      id: "id2",
      title: "ARTES APLICADAS (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 30 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) Bacharel em Artes Aplicadas – ênfase em Cerâmica é um(a) profissional capaz de:</p>
          <ul>
            <li>Especificar, planejar, instalar e operar equipamentos em um atelier ou pequena manufatura de cerâmica.</li>
            <li>Desenvolver conhecimentos sólidos de matérias primas cerâmicas suas características, tratamento e uso para pequenos empreendimentos.</li>
            <li>Observar, fazer prospecção qualitativa, caracterizar, avaliar e utilizar matérias primas in natura, regionais e locais.</li>
            <li>Conhecer técnicas para a formulação e fabricação de massas e barbotinas.</li>
            <li>Ter competência, unidade curricular e habilidade para projetar e conformar objetos cerâmicos, usando técnicas de modelagem manual, em torno de oleiro, formas de gesso e outras.</li>
            <li>Formular, produzir e aplicar esmaltes cerâmicos de alta e baixa temperaturas.</li>
            <li>Formular, produzir e aplicar engobes, terra sigillatas e barbotinas vitrificáveis para queima única.</li>
            <li>Utilizar técnicas de decoração e pigmentos cerâmicos.</li>
            <li>Projetar, construir e utilizar fornos cerâmicos com o uso de diferentes formas de energia (glp, gás natural, lenha, eletricidade, óleo combustível).</li>
            <li>Projetar, produzir e avaliar objetos cerâmicos de qualidade, sendo capaz de julgar técnica e esteticamente a forma, textura, adequação, funcionalidade e qualidade das peças produzidas.</li>
          </ul>
        </>
      ),
    },
    {
      id: "id3",
      title: "ARQUITETURA E URBANISMO (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 30 vagas por semestre</p>
          <p><strong>Periodicidade de ingresso:</strong> Semestral</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>Garante-se para o(a) egresso(a), uma formação generalista na área de projeto arquitetônico e urbano além de uma sólida instrumentação e sensibilização crítica para a análise, concepção e a representação em várias escalas e em situações de intervenção; o conhecimento dos sistemas construtivos e sua adequação cultural, econômica e socioambiental; o conhecimento dos sistemas estruturais e das instalações prediais com suas repercussões nas soluções projetuais e os demais conhecimentos técnicos necessários à prática projetual previstos nas atribuições profissionais. Busca-se desenvolver e estimular a capacidade de atuação nas seguintes áreas:</p>
          <ul>
            <li>Obra civil, integrando a concepção e a execução do projeto.</li>
            <li>Planejamento urbano e regional.</li>
            <li>Preservação e intervenção no patrimônio construído.</li>
          </ul>
        </>
      ),
    },
    {
      id: "id4",
      title: "BIOTECNOLOGIA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 40 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do egresso:</strong></p>
          <p>O(a) biotecnologista graduado(a) pela UFSJ possui formação generalista e tipicamente multidisciplinar, em áreas das ciências exatas e da vida, bem como da engenharia. Está capacitado(a) para gerar conhecimentos científicos e desenvolver novas tecnologias de base biológica. Sua formação permite atuar no mercado de trabalho nas seguintes demandas críticas da humanidade: geração de alimentos, energia renovável, medicamentos e de produtos de origem animal, vegetal e microbiana; bem como no manejo, conservação e uso sustentável da biodiversidade. Suas especialidades são as biotecnologias vegetal e agrícola, animal, ambiental, industrial, farmacêutica e médica.</p>
        </>
      ),
    },
    {
      id: "id5",
      title: "CIÊNCIAS BIOLÓGICAS (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do egresso:</strong></p>
          <p>O(a) Bacharel em Ciências Biológicas formado(a) pela UFSJ será um(a) profissional com capacidade para atuar tanto na área acadêmica, desenvolvendo pesquisa nas diversas áreas das Ciências Biológicas, como atuar também diretamente nas áreas relacionadas ao meio ambiente, biodiversidade, recursos naturais, saúde e biotecnologia. Apresentando formação com conhecimento das principais metodologias de trabalho relacionadas à Biologia utilizadas tanto em campo como em laboratório. Terá senso crítico para analisar, interpretar fenômenos biológicos, bem como propor soluções, desenvolver e aplicar tecnologias com a finalidade de conciliar os avanços socioeconômicos e tecnológicos com a conservação dos recursos naturais e garantia de qualidade de vida.</p>
        </>
      ),
    },
    {
      id: "id6",
      title: "CIÊNCIAS BIOLÓGICAS (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) Licenciado(a) em Ciências Biológicas pela UFSJ deverá:</p>
          <ul>
            <li>Possuir conhecimento sólido e abrangente na área de atuação.</li>
            <li>Possuir capacidade crítica para analisar de maneira ética os seus próprios conhecimentos.</li>
            <li>Ter uma visão crítica com relação ao papel social da Ciência.</li>
            <li>Ter formação humanística que lhe permita exercer plenamente sua cidadania e, enquanto profissional, respeitar o direito à vida e ao bem-estar dos cidadãos.</li>
            <li>Ter habilidades que os(as) capacitem para a preparação e desenvolvimento de recursos didáticos e instrucionais, além de ser preparado(a) para atuar como pesquisador(a) no ensino de Ciências Biológicas.</li>
            <li>Estar engajado(a) na luta pela cidadania como condição para a construção de uma sociedade justa, democrática e responsável.</li>
          </ul>
        </>
      ),
    },
    {
      id: "id7",
      title: "CIÊNCIAS CONTÁBEIS (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 40 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) Bacharel em Ciências Contábeis é um(a) profissional capaz e apto(a) a: analisar, compreender e apresentar soluções pertinentes às questões econômicas e financeiras, e suas interfaces com diversas dimensões, como a social, a ambiental, a política e a espacial, de forma ampla e fazendo ligações necessárias com outras áreas afins do conhecimento, visando, sobretudo, à análise da contabilidade brasileira e também mundial; buscar permanentemente resultados coerentes com o paradigma da Ciência Contábil que lhe parecer mais adequado ao desenvolvimento das atividades econômicas e financeiras, com sólida consciência social e ambiental.</p>
        </>
      ),
    },
    {
      id: "id8",
      title: "CIÊNCIAS ECONÔMICAS (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas:</strong> 40 vagas no integral e 60 vagas no noturno</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O objetivo do Curso de Ciências Econômicas da UFSJ capacita o(a) egresso(a) a compreender os processos econômicos de forma ampla, fazendo as ligações necessárias com outras áreas afins do conhecimento, visando, sobretudo, à análise da economia brasileira e também a mundial. Forma ainda um(a) profissional que tenha capacidade técnica para analisar e apresentar soluções pertinentes a questões econômicas nas suas diversas dimensões e áreas. Este profissional tão completo atua nos setores privado, público, meio acadêmico ou como autônomo(a), sendo essencial que este se interesse pelo ser humano, dado que sua atuação está consoante à forma como as pessoas se relacionam com o ambiente social à sua volta (caráter mais prático, embora o curso aborde Filosofia, Sociologia em algumas subáreas). Dito isso, pode-se elencar alguns traços que podem auxiliar em tal tarefa, quais sejam: dinamismo, relativa facilidade na comunicação, senso crítico, capacitação contínua e atenção às mudanças nacionais e internacionais.</p>
        </>
      ),
    },
    {
      id: "id9",
      title: "CIÊNCIA DA COMPUTAÇÃO (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 45 vagas/semestre</p>
          <p><strong>Periodicidade de ingresso:</strong> Semestral</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso de Ciência da Computação forma profissionais dotados do conhecimento da compreensão do impacto da computação e suas tecnologias na sociedade, no que concerne ao atendimento e à antecipação estratégica das necessidades sociais. O curso oferece uma sólida formação em Ciência da Computação e Matemática, com ampla fundamentação teórica e estimula a capacidade de análise, abstração, especificação, projeto e avaliação nas diversas áreas da Computação, capacitando o(a) profissional para atuar desde o desenvolvimento de soluções de propósito geral à geração de conhecimento científico e inovação. Tudo isso permite o(a) egresso(a) visão crítica e criativa na identificação e resolução de problemas. Com as inúmeras possibilidades em pesquisas na área, os(as) egressos(as) saem muito bem capacitados(as), com conhecimentos avançados em programação, matemática, e computação aplicada, se posicionando bem no mercado de trabalho.</p>
        </>
      ),
    },
    {
      id: "id10",
      title: "COMUNICAÇÃO SOCIAL - JORNALISMO (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 50 anuais</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>Constituem esse perfil:</p>
          <ul>
            <li>A capacidade de criação, produção, distribuição, recepção e análise crítica.</li>
            <li>A habilidade de refletir sobre a variedade e mutabilidade de demandas sociais e profissionais na área.</li>
            <li>A visão integradora e horizontalizada, genérica e ao mesmo tempo especializada de seu campo de trabalho.</li>
            <li>A utilização crítica do instrumental teórico-prático oferecido pelo curso.</li>
          </ul>
        </>
      ),
    },
    {
      id: "id11",
      title: "EDUCAÇÃO FÍSICA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 20 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) bacharel em Educação Física deverá estar habilitado(a):</p>
          <ul>
            <li>Conhecer a realidade social, visando intervir por meio das manifestações do movimento humano.</li>
            <li>Intervir profissionalmente, respeitando as leis da profissão nos campos de atuação, mas também, da formação cultural, da (re)educação motora e do desempenho físico.</li>
            <li>Participar, assessorar e/ou coordenar equipes multiprofissionais na área da Saúde.</li>
            <li>Utilizar recursos da tecnologia e/ou comunicação para ampliar as formas de interação com as fontes de conhecimentos.</li>
            <li>Diagnosticar as necessidades e expectativas das pessoas visando oferecer o melhor projeto e programas de atividades físicas, recreativas e/ou esportivas.</li>
            <li>Acompanhar as transformações acadêmico-científicas relacionadas à Educação Física.</li>
          </ul>
        </>
      ),
    },
    {
      id: "id12",
      title: "ENGENHARIA DE PRODUÇÃO (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Santo Antônio (CSA)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 60 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O Curso de Engenharia de Produção na UFSJ é fruto da expansão do Programa do Governo, o REUNI, onde foram criados vários cursos nas Universidades Brasileiras. A Engenharia de Produção teve início em 2009 com a entrada de 60 alunos anuais e na sua primeira avaliação obteve nota 4.0 em uma escala de avaliação de 0 a 5.0. O curso foi criado com a adesão de professores oriundos de vários departamentos, com maior peso no DEMEC - Departamento de Mecânica e o DECAC – Departamento de Administração. O objetivo do curso é fornecer habilidades dentro da grade curricular para proporcionar aos(as) alunos(as) as competências para atuarem nas diversas áreas da Engenharia de Produção.</p>
        </>
      ),
    },
    {
      id: "id13",
      title: "ENGENHARIA ELÉTRICA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Santo Antônio (CSA)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas:</strong> 150 vagas/ano</p>
          <p><strong>Periodicidade de ingresso:</strong> Integral: semestral. Noturno: anual.</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O Curso de Engenharia Elétrica visa capacitar profissionais, com sólida formação de caráter científico e tecnológico, capazes de identificar, formular e resolver problemas, além de absorver, desenvolver e aplicar novas tecnologias, com visão crítica e criativa, considerando aspectos econômicos, sociais, ambientais e políticos para o desenvolvimento sustentável da sociedade. Por meio do ensino, pesquisa e extensão, o curso prepara o(a) profissional para atividades na indústria, nas áreas de concepção, projeto, operação e manutenção; nas empresas de geração, transmissão, distribuição e comercialização de energia elétrica; nas áreas de assistência técnica, consultoria e assessoria e ainda nas universidades e centros de pesquisas.</p>
        </>
      ),
    },
    {
      id: "id14",
      title: "ENGENHARIA MECÂNICA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Santo Antônio (CSA)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas:</strong> 200 vagas/ano</p>
          <p><strong>Periodicidade de ingresso:</strong> Semestral (1º semestre: integral e noturno; 2º semestre: integral e noturno)</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso de Engenharia Mecânica proporciona ao(a) aluno(a) um forte embasamento científico, preparando-o(a) para atuar em uma realidade de contínua evolução tecnológica. A Engenharia Mecânica é o ramo da engenharia que cuida do projeto, construção, análise e operação de sistemas mecânicos. O(a) engenheiro(a) mecânico é responsável por projetar e desenvolver motores, máquinas e sistemas termodinâmicos para todo tipo de indústria. Além de desenvolver e projetar máquinas e sistemas, o(a) engenheiro(a) mecânico também pode atuar em pesquisa de tecnologias de ponta, liderar equipes de produção e manutenção, atuar no controle de qualidade e projetar usinas e fábricas. Além disso, o(a) aluno(a) tem forte base de matemática aplicada, usada para compreender como funciona cada etapa do processo industrial, que pode ir desde o projeto de fabricação de um parafuso até a construção de uma usina hidrelétrica.</p>
        </>
      ),
    },
    {
      id: "id15",
      title: "FILOSOFIA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 15 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso forma profissionais para atuarem como pesquisadores de áreas básicas da filosofia.</p>
        </>
      ),
    },
    {
      id: "id16",
      title: "FILOSOFIA (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 40 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>Espera-se que o(a) egresso(a) do Curso de Filosofia, relativo ao grau acadêmico Licenciatura, seja capaz de exercer a docência em Filosofia no âmbito da Educação Básica, demonstrando segurança e seriedade no que se refere ao ensino de Filosofia, bem como habilidade no uso dos recursos metodológicos disponíveis. Do mesmo modo, que o(a) egresso(a) se revele capaz de realizar pesquisas, elaborar ensaios teóricos e resenhas críticas a respeito da produção filosófica e educacional existente, posicionando-se diante da tradição e dos debates atuais; além de revelar-se profissional comprometido com a construção de uma sociedade republicana e democrática que deve, prioritariamente, promover a igualdade e a inclusão.</p>
        </>
      ),
    },
    {
      id: "id17",
      title: "FÍSICA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso forma profissionais para atuarem como pesquisadores de áreas básicas da física.</p>
        </>
      ),
    },
    {
      id: "id18",
      title: "FÍSICA (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O Curso de Física, grau acadêmico Licenciatura, da UFSJ tem por objetivo formar professores de Física para atuar na Educação Básica, numa perspectiva de articulação do domínio de conhecimentos físicos e pedagógicos com o desenvolvimento humano e social, além da capacidade de transformação, por meio da ação pedagógica baseada no método científico e na análise crítica e ética da realidade. O(a) Licenciado(a) em Física deve ter uma formação generalista, mas sólida e abrangente em conteúdo dos diversos campos da Física, preparação adequada à aplicação pedagógica do conhecimento e experiências de Física e de áreas afins na atuação profissional como educador(a) na educação básica.</p>
        </>
      ),
    },
    {
      id: "id19",
      title: "GEOGRAFIA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) geógrafo(a) bacharel deve compreender os elementos e processos concernentes ao meio natural e ao construído pela humanidade, com base nos fundamentos filosóficos, teóricos e metodológicos da Geografia. Dominar e aprimorar as abordagens científicas pertinentes ao processo de produção e aplicação do conhecimento geográfico. O entendimento dos elementos e processos que conduzem à dinâmica da estruturação e organização do espaço contribuem para a gestão e para o planejamento territorial, incluindo a análise dos diversos problemas e questões que envolvem a problemática ambiental. Também busca-se compreender os processos de configuração do caráter urbano e rural da sua prática profissional.</p>
        </>
      ),
    },
    {
      id: "id20",
      title: "GEOGRAFIA (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) licenciando(a) em Geografia, formado(a) por esta instituição, deverá estar habilitado a assumir funções relacionadas ao exercício do magistério na educação básica, promovendo a pesquisa, o diálogo com outras áreas do conhecimento e com os saberes locais. Interagir e contribuir com as diferentes demandas sociais no âmbito da educação e da produção do conhecimento geográfico. Objetiva-se qualificar os futuros profissionais com vistas a sua atuação como professor(a) de Geografia na escola básica.</p>
        </>
      ),
    },
    {
      id: "id21",
      title: "HISTÓRIA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 10 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) bacharel em História formado(a) pela UFSJ é um(a) profissional capaz de produzir e divulgar, por diferentes meios, conhecimento histórico. Para isso, deve dominar as diferentes concepções teóricas e metodológicas que orientam a produção desse saber, problematizar as formas de atuação dos sujeitos e suas relações espaço-temporais, dialogar com outras áreas de saber, conhecer os aspectos fundamentais de diferentes sociedades e épocas históricas.</p>
        </>
      ),
    },
    {
      id: "id22",
      title: "HISTÓRIA (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 30 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) licenciado(a) em História deverá ser um(a) profissional capaz de produzir e divulgar, por diferentes meios e em especial no espaço escolar, o conhecimento histórico. Para isso, ele(ela) deve dominar as diferentes concepções teóricas e metodológicas que orientam a produção desse saber, problematizar as formas de atuação dos sujeitos e suas relações espaço-temporais, dialogar com outras áreas de saber, conhecer os aspectos fundamentais de diferentes sociedades e épocas históricas, utilizar e desenvolver metodologias de ensino, entender a sala de aula como um local de transmissão e de produção de conhecimento.</p>
        </>
      ),
    },
    {
      id: "id23",
      title: "LETRAS - LÍNGUA INGLESA E SUAS LITERATURAS (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 30 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso prepara não apenas professores(as) de Língua Inglesa para atuar em escolas e até mesmo em universidades, mas também revisores(as) de textos para empresas, tradutores(as) e outros trabalhos profissionais, uma vez que ele permite o desenvolvimento de múltiplas competências e habilidades durante sua formação acadêmica.</p>
        </>
      ),
    },
    {
      id: "id24",
      title: "LETRAS - LÍNGUA PORTUGUESA E SUAS LITERATURAS (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 40 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>Ser profissional autônomo(a) e proativo(a), capaz de trabalhar em equipe, tomar decisões e comunicar-se dentro da multidisciplinaridade dos diversos saberes que compõem a formação universitária em Letras.</p>
        </>
      ),
    },
    {
      id: "id25",
      title: "MATEMÁTICA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Santo Antônio (CSA)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 20 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual, no segundo semestre</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) egresso(a) do curso de Bacharelado em Matemática poderá, tanto seguir a carreira acadêmica, quanto seguir carreira em empresas. Na carreira acadêmica tem-se a possibilidade de cursar mestrado e doutorado e se tornar um(a) professor(a)-pesquisador(a), ministrando aulas em universidades, por exemplo. No setor empresarial tem-se buscado cada vez mais o perfil de um(a) profissional que tenha capacidade de abstração e a habilidade para formular e resolver problemas, como acontece nas áreas de finanças e logística presentes em indústrias, bancos e agências financeiras.</p>
        </>
      ),
    },
    {
      id: "id26",
      title: "MATEMÁTICA (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Santo Antônio (CSA)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 40 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) professor(a) de Matemática da escola básica deve ser um(a) profissional capaz de apresentar um bom domínio de conteúdos matemáticos e uma compreensão do papel da matemática no mundo, assumindo uma postura crítica frente às situações e exercendo sua autonomia intelectual na construção de uma consciência de cidadania. O(a) professor(a) de matemática deve ter habilidade para refletir sobre sua prática, tomá-la como objeto de investigação e ser capaz de compreendê-la.</p>
        </>
      ),
    },
    {
      id: "id27",
      title: "MEDICINA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 20 vagas/semestre</p>
          <p><strong>Periodicidade de ingresso:</strong> Semestral</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso de Graduação em Medicina da UFSJ, orientado pelas DCN, define como perfil do(a) profissional médico(a), um(a) profissional com &quot;formação generalista, humanista, crítica e reflexiva. Profissional com capacidade para atuar, pautado em princípios éticos, no processo de saúde-doença em seus diferentes níveis de atenção. Incluir ações de promoção, prevenção, recuperação e reabilitação à saúde na perspectiva da integralidade da assistência. Isto tendo por princípio o senso de responsabilidade social e compromisso com a cidadania, como promotor da saúde integral do ser humano&quot; (CNE/CES 2014). A formação do(a) médico(a) pela UFSJ contempla um(a) profissional com o seguinte perfil: formação geral, humanista, crítica, reflexiva e ética, com capacidade de atuação nos diferentes níveis de atenção à saúde, com ações de promoção, prevenção, recuperação e reabilitação da saúde, nos âmbitos individual e coletivo; responsabilidade social e compromisso com a defesa da cidadania, da dignidade humana, da saúde integral do ser humano; competências transculturais em sua prática, buscando intervir na determinação social do processo de saúde e doença.</p>
        </>
      ),
    },
    {
      id: "id28",
      title: "MÚSICA (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 40 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O Curso de Licenciatura em Música da UFSJ oferece as ênfases (habilitações) em Educação Musical - para quem se interessa em atuar como professor(a) de música em instituições de ensino musical e de educação básica; e em Instrumento/Canto – Canto Lírico, Canto popular, Clarinete, Flauta transversal, Percussão, Piano, Saxofone, Trombone, Trompete, Viola, Violão, Violino e Violoncelo - para quem tem interesse em atuar como performer individualmente e/ou em grupo, como condutor(a) de diferentes formações musicais e como professor(a) de instrumento e de música. O(a) aluno(a) também pode complementar a sua formação como artista, professor(a) e pesquisador(a) através de ações diversificadas dos Programas e Projetos de Extensão desenvolvidos no curso, além de realizar pesquisas interdisciplinares, relacionando a performance e o ensino musical a várias áreas do conhecimento, como a Pedagogia, a Musicologia Histórica, a Etnomusicologia, a Filosofia, a Neurociência, visando a compreensão, a difusão e o desenvolvimento cultural das áreas mencionadas.</p>
        </>
      ),
    },
    {
      id: "id29",
      title: "PEDAGOGIA (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 50 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso de Pedagogia forma pedagogos(as) para: a) O exercício da docência na Educação Infantil e Séries Iniciais do Ensino Fundamental; b) Outras áreas nas quais sejam previsto conhecimento pedagógico (Resolução CNE/CP nº1/2006). O(a) pedagogo(a) trabalha com um repertório de informações e habilidades composto por pluralidade de conhecimentos teóricos e práticos, tendo em vista o desenvolvimento humano. As principais áreas de atuação do(a) pedagogo(a) são: ·O cuidado e a educação de crianças de zero a cinco anos. ·O ensino de Língua Portuguesa, Matemática, Ciências, História, Geografia, Arte e Educação Física, de forma interdisciplinar nos anos iniciais do Ensino Fundamental. ·A participação na organização e gestão de sistemas e instituições de ensino, englobando: I – planejamento, execução, coordenação, acompanhamento e avaliação de atividades próprias dos setores da Educação, bem como de projetos e experiências educativas. II – produção e difusão do conhecimento científico-tecnológico do campo educacional, em contextos escolares e não-escolares.</p>
        </>
      ),
    },
    {
      id: "id30",
      title: "PSICOLOGIA (Bacharelado/Formação de Psicólogo)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas:</strong> 35 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> (1º semestre: integral; 2º semestre: noturno)</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso tem duas ênfases de formação: Psicologia Clínica e Saúde Mental e Processos Psicossociais e Socioeducativos. A formação do(a) discente envolve conhecimentos da história da Psicologia, teorias psicológicas, desenvolvimento humano, interface com outras áreas, compreensão e intervenções em diferentes contextos. O curso tem como finalidade formar o(a) discente em conhecimentos bastante diversificados, previstos nas Diretrizes Curriculares, tais como a fundamentação histórica e epistemológica, os conhecimentos de outras áreas que fazem interface com a Psicologia, como as Neurociências e Ciências Sociais e Humanas, os fundamentos teórico-metodológicos de produção do conhecimento e as habilidades instrumentais básicas (diferentes metodologias de pesquisa, instrumentos de medida e estratégias de avaliação e estatística) e os conhecimentos dos fenômenos e processos psicológicos básicos, que constituem classicamente objeto de investigação da Psicologia. Além disso, o curso prevê a formação do(a) aluno nas habilidades e competências básicas da Psicologia que envolvam a observação e intervenção individual e grupal em diversos contextos e áreas como: Psicologia Clínica e Saúde Mental, Psicologia Escolar/Educacional, Psicologia Social, Psicologia Organizacional e do Trabalho e Psicologia Experimental. O(a) egresso(a) estará preparado(a) para trabalhar como psicólogo(a) em organizações públicas e privadas, clínicas multidisciplinares, hospitais, consultórios, instituições e escolas, participando de equipes que atuam no âmbito da saúde, educação, trabalho e comunidade, a partir de conhecimentos que se baseiam em diferentes abordagens teóricas.</p>
        </>
      ),
    },
    {
      id: "id31",
      title: "QUÍMICA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) Bacharel em Química da UFSJ possuirá uma formação generalista, com domínio das técnicas básicas de utilização de laboratórios e equipamentos, capaz de atuar nos campos de atividades científicas e socioeconômicas que envolvam as transformações da matéria, direcionando essas transformações, controlando os seus produtos, interpretando criticamente as etapas, efeitos e resultados, aplicando abordagens criativas à solução dos problemas e desenvolvendo novas aplicações e tecnologias, levando em conta os princípios éticos e a preservação do meio ambiente.</p>
        </>
      ),
    },
    {
      id: "id32",
      title: "QUÍMICA (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Dom Bosco (CDB)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) Licenciado(a) em Química da UFSJ possuirá uma formação generalista, bem fundamentada e abrangente nos diversos campos da Química e do seu ensino, com preparação adequada para atuação profissional na educação fundamental e média. Também deverá apresentar interesse pelo próprio aprimoramento profissional; capacidade de observação, raciocínio abstrato, inspiração, imaginação, dinamismo e seriedade; pensamento lógico, objetivo e habilidade numérica. Sua ação deve ser pautada pela flexibilidade, habilidade de liderança e de relacionamento interpessoal e responsabilidade diante das diferentes possibilidades de aplicação dos conhecimentos químicos, tendo em vista o diagnóstico e o equacionamento de questões sociais e ambientais.</p>
        </>
      ),
    },
    {
      id: "id33",
      title: "TEATRO (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) egresso(a) do curso pode atuar como: ator ou atriz, diretor(a), produtor(a), dramaturgo(a), cenógrafo(a), pesquisador(a), entre outras possibilidades. Há diversos projetos no curso que contribuem com uma formação de excelência ao egresso(a), entre eles: Núcleo da Poética do Invisível (cultura teatral japonesa); Palhaços de Hospital (com objetivo de levar alegria aos portadores de alguma enfermidade ou em Casas de Acolhida em São João del-Rei); Caixa Preta (laboratório de ensino, pesquisa, apresentação de espetáculos e peças teatrais); Diversidade sexual no Brasil (visibilidade, minoritarismo e representações); Casa Aberta (cujo objetivo é ampliar as relações entre os profissionais e estudantes do teatro, música e a comunidade artística externa); Núcleo Lúdico (Criação, interatividade e improvisação); Entre Atos, Falas e Imagens (sexualidade e identidade de gênero dissidentes no teatro e cinema); Grupo de Pesquisa em História, Política e Cena (ações de ensino, pesquisa e extensão); Núcleo de Estudo de Técnicas e Ofícios da Cena (com o objetivo de desenvolver investigações acerca da história do fazer teatral, com ênfase em iluminação cênica); Núcleo de Estudos em Teatro Político (presença do político na cena contemporânea) e Coletivo Fuzuê do Teatro.</p>
        </>
      ),
    },
    {
      id: "id34",
      title: "TEATRO (Licenciatura)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Noturno</p>
          <p><strong>Número de vagas:</strong> 25 vagas</p>
          <p><strong>Periodicidade de ingresso:</strong> Anual</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O Licenciado em Teatro é um profissional capaz de: • Ministrar cursos de Teatro na educação formal e não formal; • Estabelecer um diálogo contínuo entre processos artísticos e pedagógicos; • Desenvolver nos alunos a sensibilidade, a imaginação, a criatividade, bem como a capacidade de expressão e conceituação cênica; • Apropriar-se de estratégias pedagógicas, adaptando-as à prática contínua de ensino teatral em suas diversas instâncias e funções; • Investigar e refletir criticamente sobre os processos estéticos e pedagógicos do fazer teatral; • Considerar os princípios da transdisciplinaridade, da diversidade cultural, da inclusão social e da formação continuada; • Lidar de forma ética e socialmente comprometida com as questões sociais contemporâneas; • Agir na comunidade, favorecendo a transformação da sociedade brasileira pela experiência artística e educativa; • Atuar no campo da pesquisa em teatro.</p>
        </>
      ),
    },
    {
      id: "id35",
      title: "ZOOTECNIA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Tancredo Neves (CTAN)</p>
          <p><strong>Turno:</strong> Integral</p>
          <p><strong>Número de vagas:</strong> 50 vagas/semestre</p>
          <p><strong>Periodicidade de ingresso:</strong> Semestral</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) Bacharel em Zootecnia formado na UFSJ deverá atuar no campo da produção animal de forma técnica, prezando sempre pela ética e a moral. O(a) profissional deverá também ser dotado(a) de consciência crítica e científica, que o(a) torne capaz de solucionar problemas relativos a sua área de atuação, bem como se adaptar aos novos paradigmas e mudanças da produção animal. O(a) egresso(a) deverá agir estimulando a produção animal de forma ambientalmente sustentável, socialmente e economicamente viável, prezando pelo bem-estar humano e animal e fazendo uso de avanços científicos e tecnológicos.</p>
        </>
      ),
    },
  ];
  return (<>

    <div className="pl-sm-3">
      <div className="w-full h-96 relative overflow-hidden">
        <Image
          src="/proen/saojoaodelrei.jpg" // Caminho da imagem (público ou remoto)
          alt="Foto de São João Del Rei"
          fill // Ocupa todo o espaço do container
          className="object-cover"// Mantém a proporção da imagem
        />
      </div>
    </div>
    <div className="main-content pl-sm-3 mt-4" id="main-content">
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4">São João Del Rei</h1>
        <span className="text-justify leading-relaxed"><p><strong>São João del-Rei</strong> é um município brasileiro do estado de <strong>Minas Gerais</strong>. Polo para cidades do Sul e Sudeste de Minas Gerais, é uma das maiores cidades setecentistas mineiras. Considera-se o bandeirante paulista <strong>Tomé Portes del-Rei</strong> como seu fundador.</p>

          <p>Localizado na <strong>Bacia do Rio Grande</strong>, tem seu relevo formado pelas serras do complexo da <strong>Serra da Mantiqueira</strong>.</p>

          <p>O <strong>aeroporto Prefeito Otávio de Almeida Neves</strong>, localizado na <strong>Regional Colônia</strong> (Zona Norte da cidade), é o mais importante da região.</p>

          <p>Dotada de uma vasta gama arquitetônica, na qual não se restringe apenas ao <strong>Barroco</strong>, <strong>São João del-Rei</strong> pode ser entendida até os dias atuais como um exemplo de cidade atemporal ao sul da capital mineira. Marcada por diversos ciclos econômicos que refletem em sua enorme gama arquitetônica.</p>

          <p><strong>São João del-Rei</strong> é conhecida também por ser uma <strong>cidade universitária</strong> devido à presença da <strong>Universidade Federal de São João del-Rei</strong>, do <strong>Centro Universitário Presidente Tancredo Neves</strong> e do <strong>Campus do Instituto Federal do Sudeste de Minas</strong>, além do grande número de repúblicas estudantis espalhadas pela cidade.</p>

          <p>Nasceram em <strong>São João del-Rei</strong> o presidente eleito do Brasil <strong>Tancredo Neves</strong>, o cardeal <strong>Dom Lucas Moreira Neves</strong>, <strong>Otto Lara Resende</strong>, <strong>Padre José Maria Xavier</strong> (compositor sacro), <strong>Nhá Chica</strong> e o violeiro cantador <strong>Chico Lobo</strong>.</p>
        </span></div>
      <Accordion items={accordionItems} />
    </div>
  </>
  );
}