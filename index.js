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
  $("#textoCentral").html("<a href='https://imgur.com/2olflKp'><img src='https://i.imgur.com/2olflKp.png' title='source: imgur.com' style='height: 100%; width: 100%; object-fit: contain'/></a>");
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
