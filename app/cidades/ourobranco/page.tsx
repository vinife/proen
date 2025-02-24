import Accordion from "@/app/components/layout/Accordion";
import Image from "next/image";

export default function OuroBranco() {
  const accordionItems = [
    {
      id: "id1",
      title: "ENGENHARIA CIVIL (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Alto Paraopeba (CAP)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas e periodicidade de ingresso:</strong> 100 vagas anuais, divididas em duas entradas semestrais de 50 vagas cada.</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>A Engenharia Civil da UFSJ propicia a formação do(a) engenheiro(a) civil em todas as suas áreas:</p>
          <ul>
            <li><strong>Construção civil:</strong> Área que engloba todas as atividades de planejamento, execução e acompanhamento pós entrega de obras.</li>
            <li><strong>Estruturas:</strong> Onde o(a) engenheiro(a) vai definir as forças que estão atuando em um prédio ou em uma ponte, por exemplo.</li>
            <li><strong>Geotecnia:</strong> Área que atua, entre outras coisas, identificando o tipo de solo de uma região. Atua em projeto de barragem, por exemplo.</li>
            <li><strong>Infraestrutura:</strong> Responsável por projetos de sistemas de transporte, ou seja, projetos de estradas, ferrovias, etc.</li>
            <li><strong>Recursos hídricos e saneamento:</strong> Área na qual o(a) engenheiro(a) vai elaborar projetos relacionados à água, ao esgoto, a água de chuva, entre outros.</li>
          </ul>
          <p>A UFSJ conta com um corpo docente altamente qualificado e que trabalha com o conhecimento de forma humanizada e acolhedora, permitindo ao(a) egresso(a), por meio de sua formação, atuar em diversas áreas.</p>
        </>
      ),
    },
    {
      id: "id2",
      title: "ENGENHARIA DE BIOPROCESSOS (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Alto Paraopeba (CAP)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas e periodicidade de ingresso:</strong> 100 vagas anuais, sendo 50 vagas oferecidas no primeiro semestre para o noturno e 50 vagas no segundo semestre para o integral.</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) Engenheiro(a) de Bioprocessos da UFSJ tem formação nas áreas básicas de química, física, matemática, computação e biologia, estando(a) apto a desenvolver e aperfeiçoar produtos e processos baseados no emprego, em escala industrial, de enzimas, microrganismos e células vivas. Desse modo, esta engenharia constitui o campo profissional daquele que se utiliza da biotecnologia para produzir substâncias e materiais comercializáveis. Esse(a) engenheiro(a) deve estar preparado(a) para participar e tomar decisões em todas as etapas do desenvolvimento de um bioprocesso, desde a sua concepção até a obtenção do produto final.</p>
        </>
      ),
    },
    {
      id: "id3",
      title: "ENGENHARIA DE TELECOMUNICAÇÕES (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Alto Paraopeba (CAP)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas e periodicidade de ingresso:</strong> 100 vagas anuais, divididas em duas entradas semestrais de 50 vagas cada.</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O(a) egresso(a) do curso de Engenharia de Telecomunicações deve ser capaz de:</p>
          <ul>
            <li>Desenvolver projetos e pesquisas através de atividades criadoras e com senso crítico.</li>
            <li>Acompanhar e promover continuamente o progresso científico e tecnológico na área de Engenharia de Telecomunicações.</li>
            <li>Aplicar o método científico à análise e solução de problemas da área de Telecomunicações.</li>
          </ul>
          <p>Possuindo uma sólida base generalista, diferenciando seu perfil profissional através de escolha de unidades curriculares eletivas entre as áreas:</p>
          <ul>
            <li><strong>Redes de serviços:</strong> Com conhecimento de projeto, composição, segurança, gerência e aplicabilidades das redes de serviços de telecomunicações, criptografia.</li>
            <li><strong>Sistemas de transporte de informação:</strong> Sendo a informação voz, áudio, vídeo ou dados, computação quântica.</li>
            <li><strong>Eletromagnetismo:</strong> Com conhecimentos em antenas, propagação, dispositivos de micro ondas e em tecnologias ópticas modernas.</li>
            <li><strong>Eletrônica:</strong> Com conhecimento dos circuitos eletrônicos utilizados nas telecomunicações.</li>
            <li><strong>Gestão da economia:</strong> Aplicada aos produtos e sistemas de telecomunicações.</li>
          </ul>
          <p>O Curso de Bacharelado em Engenharia de Telecomunicações da UFSJ, Campus Alto Paraopeba, habilita um(a) profissional capaz de aplicar o método científico à análise e solução de problemas, de desenvolver pesquisas e projetos, de supervisionar a execução de projetos, de desenvolver atividades criadoras com senso crítico e de acompanhar e promover continuamente o progresso científico e tecnológico na área das telecomunicações.</p>
        </>
      ),
    },
    {
      id: "id4",
      title: "ENGENHARIA MECATRÔNICA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Alto Paraopeba (CAP)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas e periodicidade de ingresso:</strong> 100 vagas anuais, sendo 50 vagas oferecidas no 1º semestre para o noturno e 50 vagas no 2º semestre para o integral.</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>O curso de Engenharia Mecatrônica da UFSJ tem como objetivo geral formar profissionais com sólido preparo científico e tecnológico nas áreas: Elétrica, Mecânica, Computação, e Controle e Automação. Os(as) egressos(as) devem ter a capacidade de absorver e desenvolver novas tecnologias, atuar criticamente na identificação e resolução de problemas de engenharia, considerando seus aspectos políticos, econômicos, sociais, ambientais e culturais, na perspectiva ética e humanística, visando excelência no atendimento às demandas da sociedade. O curso tem como característica marcante a multidisciplinaridade entre fundamentos científicos, tecnológicos e processos que integram as diferentes áreas do conhecimento.</p>
        </>
      ),
    },
    {
      id: "id5",
      title: "ENGENHARIA QUÍMICA (Bacharelado)",
      content: (
        <>
          <p><strong>Campus:</strong> Campus Alto Paraopeba (CAP)</p>
          <p><strong>Turno:</strong> Integral e Noturno</p>
          <p><strong>Número de vagas e periodicidade de ingresso:</strong> 100 vagas anuais, sendo 50 vagas oferecidas no primeiro semestre para o noturno e 50 vagas no segundo semestre para o integral.</p>
          <p><strong>Perfil do(a) egresso(a):</strong></p>
          <p>A Engenharia Química trata de processos industriais nos quais transformações químicas estão presentes em etapas fundamentais. O curso forma profissionais com perfil generalista, aptos a atuar nas diversas áreas da profissão e com condições de acompanhar e participar do rápido desenvolvimento científico-tecnológico atual. O(a) Engenheiro(a) Químico(a) graduado(a) na UFSJ está apto(a) para exercer funções conforme descrito nos conselhos profissionais CREA e CRQ.</p>
        </>
      ),
    },
  ];
  return (<>

    <div className="pl-sm-3">
      <div className="w-full h-96 relative overflow-hidden">
        <Image
          src="/proen/ourobranco.png" // Caminho da imagem (público ou remoto)
          alt="Foto de Ouro Branco"
          fill // Ocupa todo o espaço do container
          className="object-cover"// Mantém a proporção da imagem
        />
      </div>
    </div>
    <div className="main-content pl-sm-3 mt-4" id="main-content">
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4">Ouro Branco</h1>
        <span className="text-justify leading-relaxed">
          <p><strong>Ouro Branco</strong> é um município brasileiro do estado de <strong>Minas Gerais</strong>, na <strong>Região Sudeste</strong> do Brasil. A cidade de <strong>Ouro Branco</strong> ocupou em 2010 a 1.ª posição no ranking das melhores cidades do estado de <strong>Minas Gerais</strong>.</p>

          <p>Segundo o <strong>Instituto Brasileiro de Geografia e Estatística (IBGE)</strong>, sua população em julho de <strong>2021</strong> foi estimada em <strong>40.220 habitantes</strong>. A área territorial do município é de <strong>258.726 km²</strong>.</p>

          <p>O município abriga uma das mais importantes siderúrgicas do Brasil, a <strong>Gerdau Açominas</strong>.</p>
        </span></div>
      <Accordion items={accordionItems} />
    </div>
  </>
  );
}