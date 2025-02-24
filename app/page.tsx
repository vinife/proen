'use client'

import Button from "./components/layout/Button";
import Image from "next/image";



export default function Home() {

  return (<>
    <div className="pl-sm-3">
      <div className="w-full h-96 relative overflow-hidden">
        <Image
          src="/proen/ufsj.png" // Caminho da imagem (público ou remoto)
          alt="Foto de Divinópolis"
          fill // Ocupa todo o espaço do container
          className="object-cover"// Mantém a proporção da imagem
        />
      </div>
    </div>
    <div className="main-content pl-sm-3 mt-4" id="main-content">
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4">A UFSJ</h1>
        <span className="text-justify leading-relaxed"><p>A <strong>Universidade Federal de São João del-Rei (UFSJ)</strong> tem uma história de <strong>65 anos</strong> de dedicação à formação de estudantes.</p>

          <p>Em suas raízes, estão a <strong>Faculdade Dom Bosco de Filosofia, Ciências e Letras (FADOM)</strong>, a <strong>Faculdade de Ciências Econômicas, Administrativas e Contábeis (FACEAC)</strong> e a <strong>Faculdade de Engenharia Industrial (FAEIN)</strong>, transferidas para a <strong>Fundação de Ensino Superior de São João del-Rei (FUNREI)</strong> em <strong>18 de dezembro de 1986</strong>, por meio da Lei nº <strong>7.555</strong>.</p>

          <p>Em <strong>19 de abril de 2002</strong>, a FUNREI foi transformada em Universidade, por meio da Lei nº <strong>10.425</strong>, adotando a sigla <strong>UFSJ</strong>.</p>

          <p>Hoje, a <strong>UFSJ</strong> está presente em <strong>5 municípios</strong>. São seis unidades educacionais (Campus), três centros culturais e duas fazendas. Em São João del-Rei, estão o <strong>Campus Santo Antônio</strong>, o <strong>Campus Dom Bosco</strong> e o <strong>Campus Tancredo Neves</strong>, além do <strong>Centro Cultural Solar da Baronesa</strong>, do <strong>Centro de Referência da Cultura Popular (Fortim dos Emboabas)</strong>, do <strong>Centro de Referência Musicológica</strong> e da <strong>Fazenda Boa Esperança</strong>, localizada no distrito de São Sebastião da Vitória.</p>

          <p>O <strong>Campus Alto Paraopeba</strong> está localizado nos municípios de <strong>Congonhas</strong> e <strong>Ouro Branco</strong>. O <strong>Campus Centro-Oeste Dona Lindu</strong> situa-se no município de <strong>Divinópolis</strong>. O <strong>Campus Sete Lagoas</strong> e a <strong>Fazenda Granja Manoa</strong> localizam-se no município de <strong>Sete Lagoas</strong>.</p>

          <p>Desde a sua criação, a <strong>UFSJ</strong> contribui para o <strong>desenvolvimento regional e nacional</strong>, produzindo e transmitindo conhecimento e formando profissionais e pesquisadores capazes de atuar de forma crítica e criativa na busca de soluções para os diferentes problemas da sociedade.</p>

          <p>Desenvolve atividades de <strong>ensino, pesquisa e extensão</strong> nas áreas das <strong>Artes, Ciências Agrárias, Ciências Biológicas, Ciências Exatas e da Terra, Ciências Humanas, Ciências Sociais Aplicadas, Engenharias, Letras, Linguística e Saúde</strong>.</p>

          <p>A <strong>UFSJ</strong>, como instituição pública, assume a <strong>Missão</strong> de educar, desenvolvendo com excelência atividades de Ensino, Pesquisa e Extensão e contribuindo na indução de mudanças e avanços na direção de uma sociedade justa e igualitária, por meio do encontro, da análise e da construção de práticas e conhecimentos, considerando os contextos acadêmicos, éticos, culturais, sociais e ambientais.</p>

          <p>Neste contexto, a <strong>Visão</strong> da <strong>UFSJ</strong> é ser uma universidade comprometida com a superação das desigualdades e com o desenvolvimento da humanidade.</p>

        </span>
      </div>

      <span className="br-divider lg my-20"></span>
      <div className="flex flex-col items-center">
        <span className="text-gray-800 text-xl mb-2">
          Para conhecer mais sobre a UFSJ.
        </span>
        <div className="flex justify-center items-center col-12 p-8">
          <Button label="Acesse nossa página" color="secondary" type="default" size="large" onClick={() => window.location.href = "https://www.ufsj.edu.br/"} />
        </div>

      </div>
    </div >
  </>
  );


}
