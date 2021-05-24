<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Logística y transporte 

    figure.mb-5
      .video
        iframe(width="969" height="545" src="https://www.youtube.com/embed/jB13jaw_HPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Logistica y transporte
    
    p.mb-4 El éxito de toda empresa está en ser eficiente y eficaz en su sistema logístico, en donde todos los elementos y actores que intervienen en ella optimicen los recursos para satisfacer las necesidades del consumidor final. Para cumplir este fin deben tenerse eficientes modos y medios de transporte que permitan transportar todo tipo de mercancía de un lugar a otro con calidad y confiabilidad en el menor tiempo posible.
    p.mb-4 Los diversos tipos existentes de transporte se relacionan en la cadena logística entre los actores:  productores, fabricantes, comerciales y distribuidores, y se conoce como última milla.

    .row.mb-4
      .col-lg-7
        figure
          img(src="@/assets/curso/img3.svg", alt="Elementos del sistema")
      .col-lg-5.align-self-center
        p.mb-4 Un despacho incompleto, equivocado o en malas condiciones para el cliente final, afecta el buen nombre de la empresa, conlleva a la posible pérdida del cliente y propicia en otros clientes poca credibilidad en el servicio, por esta razón es importante fidelizar a los clientes contando con herramientas tecnológicas donde puedan hacer la trazabilidad de sus envíos.
        p En la siguiente imagen se pueden observar los elementos del sistema de distribución.

    .row.mb-5
      .cajon.color-primario.p-4.mb-4
        p En la logística se asocian varios recursos innovadores que mediante una combinación eficiente ofrecen al cliente un nivel elevado de calidad y confiabilidad, buscando soluciones, y de esta forma incrementan la competitividad y sostenimiento de la empresa.  La experiencia y la competencia permiten encontrar soluciones acordes a cada necesidad.  A continuación, relacionamos los aspectos más relevantes del proceso.
    
    h4.mb-5.text-center Estructura de Logística
    
    .row.mb-5.justify-content-center
      .col-lg-9.mt-2
        figure
          img(src="@/assets/curso/img4.svg", alt="Estructura Logistica")
    #t_2_1.titulo-segundo.titulo-margin
      .h4 2.1 Naturaleza de la carga (medios y modos de transporte)

    p.mb-5 Para poder definir las formas de transportación, se deben conocer en primera instancia los tipos de productos (características, pesos, compatibilidad etc.), así como la operación logística del transporte (sitios, frecuencia, volúmenes y pesos), con el objeto de escoger la manera apropiada para un adecuado transporte en función de la naturaleza de la carga, normatividad, economías de escala, costos y tiempos de entrega deberán ser una de las prioridades a nivel de transportación.	
    
    .bloque-texto-d.color-secundario.p-4.mb-5
      .bloque-texto-d__texto.mb-2
        .row
          .col-lg-1.bloque-comilla-superior
            i.fas.fa-quote-left
          .col-lg-11
            span.h6.text-regular El transporte juega un papel capital en la interpretación de las interrelaciones físicas y socioeconómicas entre los individuos y grupos en la sociedad; en los análisis de los movimientos de mercancías, personas e información; y en la exploración morfométrica y funcional de las infraestructuras, con el objetivo último de relacionar las restricciones espaciales y los atributos con el origen, extensión, naturaleza y propósito del movimiento. El espacio (geográfico) y movimiento (desplazamiento, intercambio, relación), son dos conceptos básicos que expresan de manera clara el fenómeno del transporte. De dichos conceptos se desprenden tres consideraciones espaciales que debemos examinar con detenimiento. En primer lugar, las redes de transporte, su estructura y organización espacial; en segundo lugar, la demanda espacial de los servicios de transporte y, en tercer lugar, los sistemas surgidos en la compleja dialéctica (redes-demanda-espacio). Desde un punto de vista funcional y sistémico, las redes de transporte constituyen el sistema arterial de la organización regional. Están definidas por la estructura de las rutas de carreteras, ferrocarriles o los corredores marítimos y aéreos, entendiéndose como ruta la simple relación o arco entre los nodos que son parte de la red. Los nodos constituyen los focos de generación y atracción de flujos, estos últimos, los elementos transportados a través de las redes (personas, mercancías, información) Sin embargo, el sector económico es importante en el desarrollo del transporte en todas sus esferas. (p.161-174)
      .bloque-texto-d__autor
        .row
          .col-11
            .h6.mb-0 Para Martínez, F (2009)
          .col-1
            i.fas.fa-quote-right

    .row.mb-5
      .col-lg-6.p-4.align-self-center
        .p.mb-4 Los modos de transporte son los sistemas para la movilización, utilizados en el traslado de la mercancía desde el punto de origen al punto de destino. Combinan redes, vehículos y operaciones. Los medios de transporte hacen referencia al tipo de vehículos requeridos para la transportación de acuerdo al modo escogido (avión, barco, camión y ferrocarril).
        .p En la siguiente tabla podemos observar cuáles son los modos y medios de transporte y qué ventajas ofrece cada uno de ellos.
      .col-lg-6
        figure
          img(src="@/assets/curso/img5.svg", alt="Medios y Modos de Transporte")

    
    .tabla-b.mb-5 
      table
        caption Tabla 1. Medios y modos de transporte. Bowersox, Closs y Cooper, 2007
        thead.color-table.text-center
          tr
            th MODO
            <th colspan="4"> MEDIOS </th>
        tbody
          tr.tabla-custom
            th.text-center Terrestre
            th.text-center Camiones
            th.text-center Camionetas
            th.text-center Carrotanques
            th.text-center Camabajas niñeras
          tr.tabla-custom-medios
            <td colspan="5" style="text-align: center; padding: 28px;">Es muy versátil. Por su velocidad frente a la capacidad para prestar servicio puerta a puerta, este modo es el más asequible para cualquier tipo de empresa.</td>
          tr.tabla-custom
            th.text-center Marítimo
            th.text-center Buques petroleros, portacontenedores
            th.text-center Buques graneleros
            th.text-center Buques frigoríficos
            th.text-center Buques carga general
          tr.tabla-custom-medios
            <td colspan="5" style="text-align: center; padding: 28px;"> Tienen ventajas sobre los otros modos, porque pueden cargar embarques de grandes dimensiones y peso. Es tan dinámico que ofrece un tipo de buque para cada tipo de carga que se necesite transportar, no importa la naturaleza. </td>
          tr.tabla-custom
            th.text-center Aéreo
            <th colspan="2" style="text-align: center;"> Avión </th>
            <th colspan="2" style="text-align: center;"> Helicóptero </th>
          tr.tabla-custom-medios
            <td colspan="5" style="text-align: center; padding: 28px;">Es el más veloz, pero también resulta el más costoso de todos los medios de transporte; se hace indispensable en envíos urgentes principalmente para mercancías perecederas o de alto valor.</td>
          tr.tabla-custom
            th.text-center Férreo o Ferroviario
            <th colspan="4" style="text-align: center;"> Tren -Ferrocarril</th>
          tr.tabla-custom-medios
            <td colspan="5" style="text-align: center; padding: 28px; backgroung-color:none;">Equipos especializados con vagones sellados, sillas, vagones planos con contenedores. Generalmente cargan mercancías a granel como carbón, granos, y también los hay como planchones para cargar contenedores.  En Colombia no se tiene infraestructura de vías ferroviarias.</td>
    
    .col-lg.mb-5
      .cajon.color-secundario.p-4.mb-5.mb-lg-0
        p Tenga en cuenta que, en el cálculo, determinación, evaluación de la capacidad y número de modos de transporte a utilizar, es necesario considerar los aspectos que pueden determinar la comparación de alternativas para estructurar los costos. Entre ellos se encuentra la velocidad de circulación, disponibilidad, confiabilidad, capacidad y frecuencia. En la siguiente tabla se presentan algunos elementos que permiten analizar las diferentes alternativas.

    .tabla-b.mb-5
      .tabla-b__header
        .h6.mb-0 Elementos para capacidad según medios y modos de transporte
      table
        caption Tabla 2. Elementos según modos y medios. Bowersox, Closs y Cooper, 2007
        tr
          th La velocidad de circulación
          td Son los tiempos transcurridos durante el movimiento o tráfico. El flete aéreo es el más rápido de todos los modos de transporte. La mercancía se encuentra quieta (en sentido que está en tránsito), dispuesta, para los embarques o transbordos, salidas o llegadas.
        tr
          th.tabla-custom-b La disponibilidad
          td Se refiere a la capacidad de un modo de transporte para dar servicio a cualquier lugar. Los camiones tienen la mayor disponibilidad porque se pueden conducir directamente a los puntos de origen y destino, y la oferta en la mayoría de los casos supera la demanda. El punto diferencial puede ser la tecnología y la calidad del servicio.
        tr
          th.tabla-custom-b La confiabilidad
          td Es la confianza, el goodwill o buena fama. Es la posible variación entre lo programado en la entrega de mercancía esperada u ofertada. Los ductos, debido a su servicio continuo y escasas interferencias por el clima o congestionamientos, son los de mayor confiabilidad.
        tr
          th La capacidad
          td La constituye el peso aceptado en el medio seleccionado y las dimensiones de la mercancía en los diferentes implementos usados. Es la posibilidad de que un modo de transporte referido, maneje cualquier requerimiento del transporte como el tamaño de la carga. El transporte acuático es el de mayor capacidad.
        tr
          th La frecuencia
          td Está relacionada con la cantidad de movimientos programados. Los ductos destacan la frecuencia para dar un servicio continuo entre los puntos de origen y destino. Da confianza en el transporte relacionado con el flete.
    
    .col-lg.mb-5
      .cajon.color-secundario.p-4.mb-5.mb-lg-0
        p Finalmente, una vez se tengan identificados los medios y modos de transporte, se deben contemplar medidas que permitan un sistema de transporte intermodal, en donde se realiza la identificación de centros industriales, puertos y fronteras; cadenas logísticas para transporte; localización de puntos estratégicos para intercambio modal de la mercancía o carga.

    #t_2_2.titulo-segundo
      .h4 2.2 Tipos de carga y transporte (características carga)

    figure.mb-5
      .video
        iframe(width="734" height="413" src="https://www.youtube.com/embed/Ud-Kt10HbDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Tipos de carga

    p.mb-5 Para determinar cuáles son las actividades a realizar en la cadena de suministro, buscando una agilidad en el despacho, es necesario identificar los tipos de carga logística, así evitaremos dificultades en el transporte de cualquier tipo de mercancías y cumpliremos llevando un desarrollo sin retrasos en el proceso. La mercancía que requiere ser movilizada físicamente por cualquier modo de transporte, debe estar protegida por un embalaje para facilitar su manejo, con el propósito de realizar una manutención eficaz para su despacho. A continuación, se presentan los tipos de carga más utilizados:

    TabsC.color-primario.mb-5
      
      .py-3.py-md-4(titulo="Carga general")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img6.svg', alt='Carga general')
              
          .col-md-6.align-self-center
            p 
            strong Carga general: 
            |es toda clase de carga que se transporta en cantidades pequeñas y en unidades independientes. Ejemplos: cajas, frascos y botellas.
        
      .py-3.py-md-4(titulo="Carga suelta")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/img7.svg', alt='Carga suelta')

          .col-md-6.mb-4.mb-md-0.align-self-center
            p 
            strong Carga suelta: 
            |compuesta por productos sueltos por unidades de tamaño, manipulados y transportados como unidades separadas. Ejemplos: llantas, madera y cilindros.
        
          
      .py-3.py-md-4(titulo="Carga paletizada")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img8.svg', alt='Carga paletizada')
              
          .col-md-6.align-self-center
            p 
            strong Carga paletizada: 
            |compuesta por una cantidad de productos agrupados sobre una estiba para ser almacenada y transportada en una operación más sencilla.
      
      .py-3.py-md-4(titulo="Carga contenedorizada")
        .row        
          .col-md-6
            figure
              img(src='@/assets/curso/img9.svg', alt='Carga contenedorizada')

          .col-md-6.mb-4.mb-md-0.align-self-center 
            p 
            strong Carga contenedorizada: 
            |es el tipo de carga que utiliza el contenedor como unidad de transporte, el cual permite el traslado seguro e inviolable de la mercancía.
    
    #t_2_3.titulo-segundo
      .h4 2.3 Naturaleza de la carga

    p.mb-4 La carga se conoce como un conjunto de mercancías protegidas por un embalaje de manera apropiada para facilitar su movilización. En sí, existen dos tipos principales de carga, la general y a granel. De igual forma, por su naturaleza se clasifica en peligrosa, perecedera y extradimensionada. A continuación, se encontrará una clasificación de manera detallada:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center
          .col-10
            ul.fa-ul
              li.mb-4 #[span.li--clr.fa-li #[i.fas.fa-check]] #[strong Peligrosa:] es la mercancía que posee propiedades explosivas, venenosas, oxidantes, radioactivas que, durante su manipulación, transporte y almacenamiento, representa riesgo para la vida humana. Según la Organización Marítima Internacional OMI (Organismo especializado de las Naciones Unidas, responsable de la seguridad de la navegación y la prevención de la contaminación marina por los buques), la carga peligrosa está clasificada en categorías de acuerdo al riesgo.
      .col-lg-5
        figure
          img(src="@/assets/curso/img10.svg", alt="Carga peligrosa")

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        p.p-2 A partir de la clasificación de peligro, es importante conocer las áreas de almacenamiento, alistamiento y despacho de mercancías, lo cual permite conocer la compatibilidad o incompatibilidad para el transporte y el almacenamiento de sustancias químicas, tal como se observa a continuación:

    .row.mb-5.justify-content-center
        figure
          img(src='@/assets/curso/img11.svg', alt='Matriz de productos peligrosos')
    
    hr

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center
          .col-10 
             ul.fa-ul
              li.mb-4 #[span.li--clr.fa-li #[i.fas.fa-check]] #[strong Perecedera:] por su misma naturaleza de vencimiento rápido para el consumo, requiere de rapidez y de condiciones especiales en el transporte y el almacenamiento, como por ejemplo: las frutas, las verduras, la carne fresca, el  pescado y las flores.
      .col-lg-5
        figure
           img(src='@/assets/curso/img12.svg', alt='Carga perecedera')
      
    hr
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center
          .col-10
            ul.fa-ul
              li.mb-4 #[span.li--clr.fa-li #[i.fas.fa-check]] #[strong Extradimensionada:] es la carga que excede en peso y volumen el flete convencional, es decir, rebasa las dimensiones de la carrocería de los vehículos autorizados por el Ministerio de Transporte.
         
      .col-lg-5
        figure
           img(src='@/assets/curso/img13.svg', alt='Carga extradimensionada')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
