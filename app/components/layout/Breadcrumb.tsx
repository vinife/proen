"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Mapeamento de caminhos para nomes amigáveis
const friendlyNames: { [key: string]: string } = {
  categoria: 'Categorias',
  'divinopolis': 'Divinópolis',
  'ourobranco': 'Ouro Branco',
  'saojoaodelrei': 'São João Del-Rei',
  'setelagoas': 'Sete Lagoas',

};

export default function Breadcrumb() {
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const generateBreadcrumbs = () => {
      // Divide o caminho em segmentos e remove segmentos vazios
      const pathSegments = pathname.split('/').filter(segment => segment !== '');

      // Ignora o primeiro segmento (pasta de organização)
      const filteredSegments = pathSegments.slice(1);

      setBreadcrumb(filteredSegments);
    };

    generateBreadcrumbs();
  }, [pathname]);

  // Função para obter o nome amigável de um segmento ou caminho
  const getFriendlyName = (segment: string, fullPath: string): string => {
    // Tenta encontrar um nome amigável para o caminho completo
    if (friendlyNames[fullPath]) {
      return friendlyNames[fullPath];
    }
    // Se não houver um nome para o caminho completo, tenta encontrar um nome para o segmento individual
    return friendlyNames[segment] || segment;
  };

  return (
    <nav className="br-breadcrumb" aria-label="Breadcrumbs">
      <ol className="crumb-list" role="list">
        <li className="crumb home">
          <Link className="br-button circle" href="/">
            <span className="sr-only">Página inicial</span>
            <i className="fas fa-home"></i>
          </Link>
        </li>
        {breadcrumb.map((segment, index) => {
          const isLast = index === breadcrumb.length - 1;
          const fullPath = `/${breadcrumb.slice(0, index + 1).join('/')}`; // Caminho completo até o segmento atual
          const friendlyName = getFriendlyName(segment, fullPath); // Obtém o nome amigável

          return (
            <li key={index} className="crumb" data-active={isLast ? 'active' : ''}>
              {index !== 0 && <i className="icon fas fa-chevron-right"></i>} {/* Exibe ">" entre os itens */}
              {!isLast ? (
                <Link href={fullPath}>{friendlyName}</Link>
              ) : (
                <span aria-current="page">{friendlyName}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// "use client"

// import { useEffect } from 'react';

// export default function Breadcrumb() {
//   useEffect(() => {
//     // const breadcrumbList = []
//     // for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
//     //   breadcrumbList.push(new core.BRBreadcrumb('br-breadcrumb', brBreadcrumb))
//     // }

//   }, []);

//   return (
//     <nav className="br-breadcrumb" aria-label="Breadcrumbs">
//       <ol className="crumb-list" role="list">
//         <li className="crumb home"><a className="br-button circle" href="javascript:void(0)"><span className="sr-only">Página inicial</span><i className="fas fa-home"></i></a></li>
//         <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="javascript:void(0)">Página Ancestral 01</a>
//         </li>
//         <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="javascript:void(0)">Página Ancestral 02</a>
//         </li>
//         <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="javascript:void(0)">Página Ancestral 03</a>
//         </li>
//         <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="javascript:void(0)">Página Ancestral Com Título Grande</a>
//           <div className="br-tooltip" role="tooltip"><span className="text" role="tooltip">Página Ancestral Com Título Grande</span>
//           </div>
//         </li>
//         <li className="crumb" data-active="active"><i className="icon fas fa-chevron-right"></i><span aria-current="page">Página atual</span>
//         </li>
//       </ol>
//     </nav>

//   );
// }