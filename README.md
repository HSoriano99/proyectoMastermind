
#INTRODUCCION
##PROYECTO MASTERMIND - HECTOR
DEBIDO A TEMAS LABORALES, NO HE PODIDO DEDICARLE EL TIEMPO QUE ME HUBIERA GUSTADO Y POR CONSIGUIENTE LAS FUNCIONALIDADES Y METODOS QUE QUERÍA, AÚN ASI ME HE ENFRENTADO A NUEVOS RETOS COMO MANIPULAR MAS EN PROFUNDIDAD EL **DOM** Y TRAERNOS ESTILOS DE **CSS**, PARA PODER REALIZAR COSTANTES **MANIPULACIÓN DE ARRAYS** Y ALMACENAR ESA INFORMACIÓN EN EL **SESSION STORAGE** PARA UTILIZARLO DESPUÉS UTILIZANDO DIFERENTES **EVENTOS**.
ME HE LIMITADO A PERMITIRNOS JUGAR UNA PARTIDA EN NIVEL BEGINNER PUDIENDO PASAR ENTRE DIFERENTES PAGINAS CON UNA INTERFAZ SUPER BASICA:


##HOME Y ABOUT
PANTALLA DE INICIO DONDE PODEMOS ACCEDER A LA PAGINA DE ABOUT PARA INFORMARNOS SOBRE EN QUÉ CONSISTE EL JUEGO DEL MASTERMIND Y POR OTRO LADO ACCEDER AL JUEGO COMO TAL.

##NICKNAME
EN ESTA PRIMERA PAGINA GUARDAMOS EL NOMBRE DEL JUGADOR Y EL NIVEL DE DIFICULTAD, UTILIZANDO UN **IMPUT** Y UN **EVENTO DE CLICK**. LO GUARDAMOS EN EL **SESSION STORAGE** PARA SU POSTERIOR UTILIZACION.

##CHOOSE COLORS
EN ESTA PANTALLA TENEMOS LA OPCIÓN DE ELEGIR ENTRE DIVERSOS COLORES AQUELLOS CON LOS QUE QUEREMOS JUGAR DESPUÉS. UTILIZAMOS EL MISMO SISTEMA PARA GUARDAR LOS DATOS DE LAS MUESTRAS CON **EVENTOS DE CLICK** EN EL **SESSION STORAGE**, PARA PODER APLICARLOS EN LOS COLORES VACIOS QUE DISPONEMOS. PARA PODER HACERLO, A LAS MUESTRAS TUVE QUE SACAR EL **ESTILO DEL CSS** PARA QUE SEA EL VALOR QUE MODIFIQUEMOS EN LOS VACÍOS. A SU VEZ, GUARDAMOS LOS COLORES ELEGIDOS CON OTRO **EVENTO** PARA PODER GENERAR EN LA PARTIDA UNA COMBINACIÓN GANADORA.

##PARTIDA
SE MUESTRA EL NOMBRE DEL JUGADOR, EL NIVEL DE DIFICULTAD Y LOS COLORES ELEGIDOS PARA JUGAR, TRAYENDONOS LOS DATOS DEL **SESSION STORAGE**. AHORA, USANDO LA MISMA METODOLOGÍA ANTERIOR, PODREMOS SELECCIONAR DE ENTRE NUESTROS COLORES ELEGIDOS Y ASIGNAR EL ORDEN DE NUESTRO TURNO DE JUEGO. TRAS ELLO, PODREMOS **VALIDAR** NUESTRA CONBINACIÓN DE TURNO CON LA **GENERADA RANDOM** OCULTA. SI ES INCORRECTA NOS SALTARÁ UN MENSAJE(SI ME DA TIEMPO HAGO MAS INTENTOS) Y SI HEMOS GANADO NOS REDIRIGIRÁ A LA PAGINA **WINNER**

##WINNER
PANTALLA DONDE PODREMOS ELEGIR JUGAR DE NUEVO ACCEDIENDO A SELECCIONAR NIVEL Y USUARIO DE NUEVO O BIEN SALIR A NUESTRA PANTALLA HOME.

##HERRAMIENTAS UTILIZADAS
HEMOS UTILIZADO:
-HTML5
-CSS3
-JS

##AGRADECIMIENTOS
ESPECIAL MENCIÓN AL COMPAÑERO REYNALDO POR ESOS RATOS DE PENSAR JUNTOS PARA SACAR NUEVOS METODOS PARA NUESTROS PROYECTOS.
    


