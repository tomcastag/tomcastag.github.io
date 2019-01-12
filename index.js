$("#bio").on("click", function(event) {
  $("#bio .tab-pane").toggleClass("active");
  $("#textoCentral").html("<p>Buenos Aires, 1986. Es artista, creadora, curadora y gestora de artes escénicas y performativas. En su infancia practicó acrobacia equina. A los 14 años leyó Medea y se dijo a sí misma “quiero ser actriz”. Integró grupos de diversas índoles y tamaños: asambleas estudiantiles, elencos profesionales, asociaciones de salas independientes, equipos de soporte de producciones internacionales y alianzas de investigación en performatividades y afecto. Siempre imagina proyectos grandes, siempre en colaboración con otres. Sus procesos creativos son constantes y en simultáneo. Toman la forma de espacios, encuentros, festivales, laboratorios, talleres, investigaciones, ensayos de cosas que muchas veces no quieren ser obras y cada tanto cosas que quieren abrirse y publicarse para volver a pensarse o para poder finalmente pensar en otras cosas. Todos estos espacios se retroalimentan. Entiende que la logística es una poética y viceversa. Su trabajo más reciente indaga en la herencia del imaginario erótico porteño entre los años ‘60 y 2000. Su obsesión actual es la posibilidad de crear y manipular el tiempo.</p><p>En los últimos cinco años crea y presenta sus propias investigaciones escénicas, obras y performances: ELA (2014, dirección Laura Figueiras), VISA LISBOA (2016), MONTAÑA (2016), TAURE (2017), PALESTRA CAMPAL, (2017, co-dirección Nina Giovelli), Pérdoname Señor! He sido Mala. De todo me arrepiento (2018, en colaboración con la poeta Flavia Calise).</p><p>Dirige la plataforma de seminarios y laboratorios DOCE VEINTICUATRO y el encuentro internacional de artes performativas ARQUEOLOGÍAS DEL FUTURO en asociación con Alina Folini.</p>");
});

$("#gestion").on("click", function(event) {
  $("#gestion .tab-pane").toggleClass("active");
});

$("li").on("click", function(event) {
  $("li").each(function() {
    $(this).removeClass("activo");
  });
  $(this).addClass("activo");
});

$("li li").click( function(event) {
    event.stopPropagation();
} );




$("#extensa").on("click", function() {
  $("#textoCentral").html("<p>En 2004 ingresó a la escuela Andamio 90'. En 2007 obtuvo el título de Actriz y en 2008 de Profesora Nacional de Artes con orientación en Teatro con una tesis de pedagogía teatral en la escuela Waldorf - Perito Moreno. Entre 2009 y 2011 asistió a la escuela de danza Arte XXI.</p><p>En 2011, decide, junto a Rosario Albornoz, abrir el espacio ZAFRA de producción, formación y exhibición escénica, perteneciente la agrupación ESCENA (Espacios Escénicos Autónomos). Paralelamente, crea el ciclo 1,2,3 DANZA (cuatro ediciones realizadas entre 2011 y 2015, la última en Lisboa, Portugal), se desarrolla como docente de formación y entrenamiento actoral  en los Talleres AbadiLescano, junto a María Abadi y realiza la Producción y Management del Trío CDT de Wuppertal Alemania, conformado por bailarines del Tanztheater Wuppertal Pina Bausch en Buenos Aires, Azul, Génova y Santiago de Chile.</p><p>En 2013 produce, en asociación con Alejandra Libertella, el Festival DANZA EN EL CONTI en el Centro Cultural de la Memoria Haroldo Conti y es una de las organizadoras del Festival ESCENA.</p><p>En 2014 cierra ZAFRA y da paso a una etapa en asociación con Juan Tobal y Gonzalo Tobal en el proyecto Fábrica PERÚ donde se desarrolla como Directora Artística y Programadora de Fábrica ESCÉNICA. A fines de ese mismo año, se asocia con Alina Folini en el proyecto ARQUEOLOGÍAS DEL FUTURO - Encuentro Internacional de danza contemporánea, performance y conocimiento (cuatro ediciones realizadas entre 2014 y 2017 y en preproducción de la quinta edición).</p><p>En 2016 es invitada por Espaço Bento Martins de Lisboa a realizar una residencia artística, una performance y una edición de su ciclo 1,2,3 DANZA. A fines de enero es invitada al festival MONTANHA en la Islas Azores a realizar una performance y dictar talleres para niños.</p><p>A su regreso a Buenos Aires, diseña y produce DOCE VEINTICUATRO, un programa de entrenamiento escénico-performático en formato de festival extendido de seminarios y laboratorios.</p><p>En 2017 comienza a cursar la Licenciatura en Curaduría en UNA. En junio es admitida en CEM Lisboa Portugal para cursar el programa intensivo O Risco da Dança desde octubre 2017 hasta abril 2018.</p><p>En 2018 es convocada como asistente de dirección y dramaturgia del proceso creativo de la obra CORTADO POR TODOS LADOS/ABIERTO POR TODOS LOS CANTOS de Gustavo Ciríaco, a estrenar en el marco del Festival Alkantara en el teatro Nacional d.M.II. Durante  de junio y julio es invitada por la coreógrafa Tamara Cubas a realizar la gira por Italia y España de sus piezas MULTITUD en el marco del Festival Santarcángelo (Italia) y Trilogía Antropofágica en el contexto de Veranos de la Villa en Naves Mataderos (España). En agosto realiza una residencia de creación junto a Carolina Bianchi, Rodrigo Andreolli y Carolina Mendoça en espacio Charriot, Salvador de Bahía (Brasil). A su regreso a Buenos Aires, en noviembre, es invitada a participar de Macriteatro en Estudio Los Vidrios.</p><p>En los últimos cinco años crea y presenta sus propias investigaciones escénicas, obras y performances: ELA (2014, dirección Laura Figueiras), VISA LISBOA (2016), MONTAÑA (2016), TAURE (2017), PALESTRA CAMPAL, (2017, co-dirección Nina Giovelli), Pérdoname Señor! He sido Mala. De todo me arrepiento (2018). </p><p>Actualmente, se encuentra trabajando  como performer y productora de  CÓMO EXPLICARLE EL ARTE A UNA LIEBRE MUERTA EN 2059,  de Rodrigo Arena.  Estreno  Co-producción Teatro Bombón - FIBA 2019. </p><p>El Febrero de 2019 es invitada a realizar una residencia junto a Sonia Sobral en el marco del encuentro GEOPOÉTICAS  DO  SUL - Encontro Latino-americano de Gestão e Criação em Dança- SP.</p>");
});

$("#trabajos").on("click", function() {
  $("#textoCentral").html("<p><img src='https://i.imgur.com/2olflKp.png' title='perdoname' style='height: 100%; width: 100%; object-fit: contain'/></p><p><strong>Pérdoname Señor! He sido Mala. De todo me arrepiento.</strong></p><p>En escena: Catalina Lescano<br>Texto: Flavia Calise y Catalina Lescano<br>Dirección: Catalina Lescano<br>Colaboración Artística: Flavia Calise<br>Estreno Noviembre  2018. Ciclo Macriteatro Buenos Aires, Estudio Los Vidrios, CABA, Argentina.</p><p><i>Debajo del agua, ilumina y traiciona, ahora<br>La sangre que flota<br>¿acaso es mi boca que explotó en el río?<br>¿o un hombre desintegrado por mi lengua?</i></p><p>Poema confesional creado a partir de la filmografía de Armando Bó con Isabel Sarli entre los años 1958 y 1968.  Esta colaboración artística entre Catalina Lescano y Flavia Calise forma parte de una investigación sobre el imaginario erótico popular contemporáneo argentino.<br>Dirección General del proyecto: Catalina Lescano<br>Co-escritura: Flavia Calise y Catalina Lescano<br>Performance: Catalina Lescano</p><br><br><br><p><img src='https://i.imgur.com/1V0WIpW.png' title='palestra' style='height: 100%; width: 100%; object-fit: contain'/></p><p><strong>PALESTRA CAMPAL</strong></p><p>En escena: Catalina Lescano<br>Video: Pedro Ivo Carvalho<br>Música: Juan Carzoglio.<br>Montaje sonoro: Nina Giovelli<br>Dirección: Catalina Lescano - Nina Giovelli<br>Colaboración Artística: Ivo Pedro Carvalho.<br>Estreno Diciembre 2017. CEM- Lisboa</p><p>Palestra Campal hace el ejercicio físico de convertir la práctica de la exposición del conocimiento a través del habla  y de la palabra hacia la danza; de la práctica de la exposición a conversación. La lucha de un cuerpo que tuerce, curva, vibra, pulsa, indagando en la pluralidad discursiva. El interés en esta investigación de corporiedades, video y discursos (oficiales, históricos, científicos, discidentes,etc), es la creación de una palestra performativa  en la que co-existen diferentes disparadores no convergentes: <i>colonización, oscilaciones, pulso, repetición, ausencia-presencia</i>, que se provocan y retroalimentan en una búsqueda de comunicarse y pensarse danzando.</p><br><br><br><p><img src='https://i.imgur.com/nQ53yfQ.png' title='taure' style='height: 100%; width: 100%; object-fit: contain'/></p><p><strong>TAURE</strong></p><p>Idea, dirección, performance: ​​Catalina Lescano.<br>Colaboración artística y asistencia de dirección: Florencia Carrizo.<br>Colaboración artística, asesoramiento conceptual y filosófico: Tomás Castagnino.<br>Colaboraciòn artística, diseño sonoro y realización del dispositivo: Juan Carzoglio.<br>Colaboración dramatúrgica, artística y asesoramiento conceptual: Jazmín Titiunik.<br>Estreno Agosto 2017.  Casa Sofía. Micro-Residencias. Buenos Aires</p><p><i>¿Qué es el tiempo? —Cambio. —¿Qué es el cambio, el cambio real? —El dejar de ser de un objeto, la entrada en la existencia de otro objeto. ¿Puede algo cambiar? ¿Hay sujeto del cambio? —¿Qué garantiza que el tiempo exista? ¿Qué garantiza que el tiempo no se repita? —¿El aumento de entropía, la Segunda Ley de la Termodinámica?. — La irreversibilidad de los fenómenos físicos. ¿Qué es el tiempo? —Cambio. —¿Qué es el cambio, el cambio real?</i></p><p>Taure es una Mitología ficcional y un estudio sobre el tiempo habitado como una experiencia común. ¿Se puede inventar un mito en una obra? ¿Hasta dónde se pueden extender las nociones de tiempo y espacio?</p><br><br><br><p><img src='https://i.imgur.com/sI4GXmE.png' title='montaña' style='height: 100%; width: 100%; object-fit: contain'/></p><p><strong>MONTAÑA</strong></p><p>Performance: Catalina Lescano<br>Estreno Enero 2016 en el marco de Festival Montanha - Pico - Islas Azores.</p><p><i>O corpo em qualquer língua é verdadeiro</i><br>-Natalia Correia.</p><p>Performance creada y realizada durante enero del 2016 en el marco del Festival Montanha - Miratecarts. A partir de la experiencia de habitar durante 10 días la Isla de Pico, una isla-montaña-volcán y el encuentro con los poemas de Natalia Correia, poetisa azoriana, surge esta performance que se realizó una sola vez al aire libre, al pie del volcán, en medio de una tormenta con temperaturas inferiores a los 3 grados. </p><br><br><br><p><img src='https://i.imgur.com/6gQgsUs.png' title='visa' style='height: 100%; width: 100%; object-fit: contain'/></p><p><strong>VISA</strong></p><p>Creación de Catalina Lescano.<br>Colaboración artística: Rocío Matosas.<br>Música en vivo: Guilherme Águas Rodrigues<br>Estreno Enero 2016. Espaço Bento Martins- Lisboa.</p><p><i>La especificidad de lo humano no queda  determinada exclusivamente por por la posesión de un lenguaje. Existe otro elemento que involucra al Hombre: La mirada.<br>La singularidad del hombre reside tanto  en la propiedad de un lenguaje articulado como en la posesión de una mirada, anterior a la construcción del lenguaje.</i> -Eduardo del Estal</p><p>Desordenamos los procedimientos visuales, sonoros y performáticos de la creación escénica para mantenerla despierta. Un dispositivo performático con deseo de crearse obra. Una obra visual, rítmica y sonora va diseñando la intervención performática construyendo un lenguaje en común. Invitamos al público a ser parte de la creación, porque su observación y su mirada se traducen en pensamientos y el pensamiento es acción.</p><br><br><br><p><img src='https://i.imgur.com/NGtnadY.png' title='ela' style='height: 100%; width: 100%; object-fit: contain'/></p><p><strong>ELA</strong></p><p>En escena: Catalina Lescano, Lalo Moro<br>Idea y Coreografía: Laura Figueiras, Catalina Lescano.<br>Iluminación: Natacha Tati Visconti<br>Música: Ella Fitzgerald<br>Montaje sonoro: Pablo Berenstein<br>Dirección: Laura Figueiras<br>Estreno Noviembre 2014. Café Muller. Buenos Aires</p><p>ELA indaga en el difícil camino de la deconstrucción del amor romántico explorando una cuerpa-bicha que ama entrañablemente, pero que no sabe cómo habitar ese estado en este mundo. ELA insiste.</p><br><br><br>");
});



$("#inicio").on("click", function() {
  $("#textoCentral").text("");
});

$("#espacios").on("click", function() {
  $("#textoCentral").html("<p>FABRICA PERÚ</p><p>ESPACIO ZAFRA</p>");
});

$("#ciclos").on("click", function() {
  $("#textoCentral").html("<p>DOCE VEINTICUATRO</p><p>ARQUEOLOGIAS DEL FUTURO</p><p>123 DANZA</p><p>DANZA EN EL CONTI</p>");
});

$("#otros").on("click", function() {
  $("#textoCentral").html("<p>CORTADO ABIERTO</p><p>TRIGONO.</p><p>TRIO CDT</p>");
});
