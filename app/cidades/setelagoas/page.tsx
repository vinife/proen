import Accordion from "@/app/components/layout/Accordion";
import Image from "next/image";

export default function SeteLagoas() {
  const accordionItems = [
    {
      id: "idsn30",
      title: "BIOQUÍMICA (Bacharelado)",
      content:
        "Campus: Campus Centro- Oeste Dona Lindu(CCO) Turno: Integral Número de vagas e periodicidade de ingresso: 100 vagas anuais, sendo 50 vagas oferecidas a cada semestre.Perfil do (a) egresso(a): Espera - se que o(a) egresso(a) do Curso de Bioquímica seja um(a) profissional com sólida formação básica, científica e tecnológica.Estará habilitado(a) a diagnosticar, analisar e solucionar problemas, aplicando conhecimentos já existentes ou produzindo novos, bem como contribuir para a formulação de políticas que permitam a melhoria da qualidade de vida.Com o desenvolvimento do espírito criativo, essa formação profissional permite ao egresso(a) desenvolver inovações, tanto em técnicas e métodos, quanto em produtos específicos.Em suma, podemos dizer que o Curso de Bioquímica da UFSJ forma um(a) profissional com qualidades técnicas, capacidade científica para aprender e criar, espírito de organização, liderança e sensibilidade para as questões humanas.",
    },
    {
      id: "idsn31",
      title: "ENFERMAGEM (Bacharelado)",
      content:
        "Campus: Campus Centro- Oeste Dona Lindu(CCO) Turno: Integral Número de vagas e periodicidade de ingresso: 80 vagas anuais, sendo 40 vagas oferecidas a cada semestre. Perfil do (a) egresso(a): A formação do (a) enfermeiro(a) deve atender às necessidades sociais de saúde do indivíduo, família e comunidade nos diferentes níveis de atenção, visando a promoção, proteção e recuperação da saúde com qualidade e resolutividade de forma integral e equânime.O Curso de Graduação em Enfermagem tem como perfil do (a) formando(a) egresso(a) / profissional, o(a) enfermeiro(a), com formação generalista, humanista, crítica e reflexiva.Profissional qualificado para o exercício de Enfermagem com base no rigor científico, intelectual e pautado em princípios éticos.Capaz de conhecer e intervir sobre os problemas / situações de saúde - doença mais prevalentes no perfil epidemiológico nacional identificando as dimensões biopsicossociais dos seus determinantes.",
    },
    {
      id: "idsn32",
      title: "FARMÁCIA (Bacharelado)",
      content:
        "Campus: Campus Centro-Oeste Dona Lindu (CCO) Turno: Integral Número de vagas e periodicidade de ingresso: 100 vagas anuais, sendo 50 vagas oferecidas a cada semestre. Perfil do(a) egresso(a): O objetivo do curso de Farmácia é formar profissionais para atuar na promoção, proteção e recuperação da saúde, tendo como atribuições essenciais o desenvolvimento de atividades relacionadas aos fármacos e aos medicamentos. Pretende - se ainda: a) promover a competência do(a) graduando(a), estabelecendo a necessária relação teoria- prática e as condições para que este tenha uma base de informação coerente e atualizada para atender às demandas da comunidade; b) incentivar a capacidade de análise profissional, apoiada em conhecimentos que permitam avaliar uma determinada situação vigente e trabalhar para a sua melhoria; c) organizar atividades de forma que o(a) graduando(a) perceba a importância da sua inserção social, atendendo às necessidades da população, inclusive de suas minorias, demonstrando o compromisso social.O grande diferencial para a formação dos(as) farmacêuticos(as) da UFSJ é a estrutura do curso.Os(as) acadêmicos(as) são inseridos nos diversos cenários de prática do (a) profissional farmacêutico(a) desde o início da graduação.Além disso, os cursos de farmácia normalmente se destacam pela excelência na formação tecnológica.Sem prejuízo para essa formação técnica, o(a) farmacêutico(a) formado(a) pela UFSJ destaca - se pela sólida formação no cuidado em saúde.",
    },
    {
      id: "idsn33",
      title: "MEDICINA (Bacharelado)",
      content:
        "Campus: Campus Centro-Oeste Dona Lindu (CCO) Turno: Integral Número de vagas e periodicidade de ingresso: 60 vagas anuais, sendo 30 vagas oferecidas a cada semestre. Perfil do(a) egresso(a): A partir dos objetivos estabelecidos com base nas Diretrizes Curriculares Nacionais, o Projeto Pedagógico do curso de Medicina do CCO propõe a graduação de um(a) profissional médico(a) com formação generalista, ética e humanista, crítica e reflexiva, com capacidade de atuação cooperativa e integrada com liderança e competência pedagógica.O curso tem currículo inovador, com destaque para a inserção precoce na prática clínica, integração entre os conteúdos, uso de metodologias ativas de aprendizagem e atividades científicas curriculares.",
    },
  ];
  return (<>

    <div className="pl-sm-3">
      <div className="w-full h-96 relative overflow-hidden">
        <Image
          src="/proen/setelagoas.jpg" // Caminho da imagem (público ou remoto)
          alt="Foto de Sete Lagoas"
          fill // Ocupa todo o espaço do container
          className="object-cover"// Mantém a proporção da imagem
        />
      </div>
    </div>
    <div className="main-content pl-sm-3 mt-4" id="main-content">
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4">Sete Lagoas</h1>
        <span className="text-justify leading-relaxed"><p><strong>Sete Lagoas</strong> é um município brasileiro do estado de <strong>Minas Gerais</strong>. Grande polo industrial, localizado a aproximadamente <strong>72 quilômetros de Belo Horizonte</strong>, possuía uma população estimada de <strong>241 835 habitantes</strong>, conforme dados do <strong>IBGE</strong> de 2020, sendo o município mais populoso de sua microrregião. Sua área de influência abrange cerca de <strong>38 municípios</strong>.</p>

        </span>
      </div>
      <Accordion items={accordionItems} />
    </div>
  </>
  );
}