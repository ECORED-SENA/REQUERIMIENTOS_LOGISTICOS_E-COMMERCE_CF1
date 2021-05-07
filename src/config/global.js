export default {
  global: {
    componenteFormativo:
      'Requerimientos en la logística de distribución para el e-commerce',
    descripcionCurso:
      'Las actividades diseñadas en este componente de formación, motivan a la participación y desarrollo de actividades de aprendizaje, que, permitirán el desarrollo de habilidades y destrezas requeridas para el desempeño laboral en la logística para el e-commerce; así mismo, tendrá oportunidad de integrar conocimientos asociados a los procesos logísticos de transporte de la carga, normativa y negociación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes y características e-commerce',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Logística y transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Naturaleza de la carga (medios y modos de transporte',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de carga y transporte (características carga',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Naturaleza de la carga',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa e-commerce (normas y leyes para modelo e-commerce)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Negociación digital (modelo de negociación)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Abebe, 2014; Organización para la Cooperación y el Desarrollo Económicos, 2017',
    },
    {
      referencia:
        'Fonseca S Alexandre  (2014) “Fundamentos de e-commerce” Alexandre Fonseca Lacomba',
    },
    {
      referencia:
        'Martínez, F. 2009, El sistema de transporte de carga en la ciudad de México.  Factores a considerar en el análisis del transporte de carga y movilidad de mercancías. Territorios, 20-21 pp 161-174',
    },
    {
      referencia:
        'Mora, L. (2010). Logística del transporte y distribución de carga. Bogotá, Colombia: ECOE.',
    },
    {
      referencia:
        'Observatorio de Comercio Electrónico en Colombia. (2018). Primera medición de Indicadores de consumo del eCommerce. Colombia. Recuperado de:',
      link:
        'https://www.observatorioecommerce.com.co/wp-content/uploads/2019/03/estudio-consumo-ecommerce-colombia-observatorio-2019.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Carga',
      significado:
        'Porcentaje de medida donde se determina la capacidad de mercancías.',
    },
    {
      termino: 'E-commerce',
      significado:
        'También conocida como comercio electrónico, consiste en la forma de realizar transacciones  y compartir información con otras empresas, consumidores mediante el uso de redes informáticas y telecomunicaciones, a través de Internet.',
    },
    {
      termino: 'Logística',
      significado:
        'Concepto total que abarca la planificación y organización del suministro y movimiento de materiales y mercancías desde una fuente a través de etapas de producción, montaje, embalaje, almacenamiento, manipulación y distribución hasta el consumidor final. La logística es una función importante dentro de las empresas que requiere una gestión profesional.',
    },
    {
      termino: 'Negociación',
      significado:
        'Proceso mediante el cual dos o más partes intentan resolver sus intereses contrarios, también es uno de los diversos mecanismos a través de los cuales las personas pueden resolver conflictos. Las situaciones de negociación tienen fundamentalmente las mismas características, ya sean negociaciones de paz entre países en guerra, negociaciones entre un comprador y un vendedor o entre los trabajadores y la administración entre otros (Fundamentos de negociación, MC Graw Hill).',
    },
    {
      termino: 'Transporte',
      significado:
        'Hablar de transporte en logística es hablar del movimiento de la carga en todos sus modos: aéreo, marítimo, terrestre, mediante los cuales se trasladan insumos, materias primas y productos terminados de un punto a otro según la planificación de la demanda.',
    },
  ],
  complementario: [
    {
      texto:
        'Valenzuela, 2019. Dos décadas de la ley de comercio electrónico en colombia',
      tipo: 'Artículo',
      link:
        'https://dernegocios.uexternado.edu.co/comercio-electronico/dos-decadas-de-la-ley-de-comercio-electronico-en-colombia/',
    },
  ],
}
