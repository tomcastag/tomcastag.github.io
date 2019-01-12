$("#bio").on("click", function(event) {
  $("#bio .tab-pane").toggleClass("active");
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













$("#mini").on("click", function() {
  $("#textoCentral").text("Buenos Aires, Argentina. Es actriz, bailarina, performer, creadora, profesora de artes del teatro, productora y gestora cultural. Dirige la plataforma de seminarios y laboratorios Doce Veinticuatro,  el centro de creación e investigación en artes Fábrica Perú junto a Juan Tobal, y en asociación con Alina Folini, el festival transnacional contemporáneo de Danza y performance Arqueologías del Futuro.  Como creadora de piezas se interesa desde el 2014 en dispositivos performativos que dialogan distintos campos del conocimiento.");
});

$("#extensa").on("click", function() {
  $("#textoCentral").html("<p>CATALINA LESCANO - Dirección Artística- Nace en Buenos Aires en 1986. Es actriz, bailarina, docente, gestora cultural y productora. A la temprana edad de 24 años, habiendo terminado su formación como Actriz (2007) y Pedagoga Teatral (2008) en las carreras de Actuación y Profesorado de Artes Escénicas y Comunicación, decide en el 2011 abrir ZAFRA, su primer espacio de producción, desarrollo, investigación, formación y exhibición escénica junto a Rosario Albornoz, perteneciente la agrupación ESCENA (Espacios Escénicos Autónomos). Se destaca durante ese período la creación del Ciclo 1, 2, 3 Danza que lleva 4 ediciones (la última realizada en LISBOA- Portugal) y su desarrollo como docente junto a María Abadi con quien en asociación crean Talleres AbadiLescano espacio de formación y entrenamiento actoral y la Producción y Management del Trío CDT de Wuppertal Alemania, conformado por bailarines del Tanztheater Wuppertal Pina Bausch en Buenos Aires, Azul (Argentina), Génova (Italia) y Santiago de Chile (Chile). En el 2013 produce en asociación con Alejandra Libertella “Festival Danza en el Conti” en el Centro Cultural de la Memoria Haroldo Conti y es una de las organizadoras del Festival ESCENA.</p><p>En el 2014 cierra Zafra y da paso a una etapa en asociación con Juan Tobal y Gonzalo Tobal en el proyecto Fábrica PERÚ. Se desarrolla como Directora Artística y Programadora de Fábrica ESCENICA. A fines de ese mismo año se asocia con Alina Folini en el proyecto Arqueologías del Futuro y dan nacimiento a la primera edición, que al día de hoy se encuentra en la preproducción de su cuarta edición.<p>Durante 2015 realiza junto Alina Folini y equipo la segunda edición de Arquelogías del Futuro - Encuentro Internacional de Danza Contemporánea performance y Conocimiento. En 2016 es invitada por Espaço Bento Martins en Lisboa a realizar una residencia artística y Presenta VISA -Lisboa. En el mismo espacio la invitan a realizar una edición de su ciclo 123 Danza. A fines de enero es invitada al festival MONTANHA en la Islas Azores a realizar una performance y dictar talleres para niños. A su regreso a Buenos Aires en marzo del corriente año diseña y produce DOCE VEINTICUATRO que inicia el 6 de Junio del corriente año. En el 2017 se encuentra cursando la Licenciatura en Curaduría en UNA. En junio del 2017 es admitida en CEM Lisboa Portugal para cursar el programa intensivo O Risco da Dança desde octubre 2017 hasta abril 2018.</p><p>En Lisboa es invitada a participar  en el proceso de creación como asistente de dirección y productora ejecutiva en la obra CORTADO POR TODOS LADOS/ABIERTO POR TODOS LOS CANTOS, de Gustavo Ciríaco, a estrenar en el marco del Festival Alkantara en el teatro Nacional d.M.II.</p>");
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
