// Functions

const link_spanish = [
  '<b>Desarrollador de Software</b> - <a href="https://pasiona.com/" target="_blank" class="links">Pasiona </a>',
  '<b>Desarrollador frontend</b> - <a href="https://www.gedesco.es" target="_blank" class="links">Gedesco Services Spain </a>',
  '<b>Desarrollador de Software</b> - <a href="https://epidata.net/" target="_blank" class="links">Epidata </a>',
  '<b>Business Operations Associate</b> - <a href="https://www.accenture.com/ar-es" target="_blank"class="links">Accenture Service Center SRL </a>',
  '<b>Ejecutivo de cuentas</b> - <a href="https://www.telecentro.com.ar/" target="_blank" class="links" >TeleCentro </a>',
];

const link_english = [
  '<b>Software developer</b> - <a href="https://pasiona.com/" target="_blank" class="links">Pasiona </a>',
  '<b>Frontend developer</b> - <a href="https://www.gedesco.es/en/" target="_blank" class="links">Gedesco Services Spain </a>',
  '<b>Software developer</b> - <a href="https://epidata.net/en/" target="_blank" class="links">Epidata </a>',
  '<b>Business Operations Associate</b> - <a href="https://www.accenture.com/ar-es" target="_blank"class="links">Accenture Service Center SRL </a>',
  '<b>Account Executive</b> - <a href="https://www.telecentro.com.ar/" target="_blank" class="links" >TeleCentro </a>',
];

function change_dark() {
  document
    .getElementsByTagName("body")[0]
    .classList.remove("body_colour_light");
  document.getElementsByTagName("body")[0].classList.add("body_colour");
  document
    .getElementById("first_block")
    .classList.remove("blocks_format_light");
  document.getElementById("first_block").classList.add("blocks_format");
  document
    .getElementById("second_block")
    .classList.remove("blocks_format_light");
  document.getElementById("second_block").classList.add("blocks_format");
  document
    .getElementById("third_block")
    .classList.remove("blocks_format_light");
  document.getElementById("third_block").classList.add("blocks_format");
  document
    .getElementById("fourth_block")
    .classList.remove("blocks_format_light");
  document.getElementById("fourth_block").classList.add("blocks_format");
  line_separation = document.getElementsByTagName("hr");
  for (i = 0; i < line_separation.length; i++) {
    line_separation[i].classList.remove("hr_light");
    line_separation[i].classList.add("hr");
  }
  html_font = document.getElementsByTagName("p");
  for (i = 0; i < html_font.length; i++) {
    html_font[i].classList.add("text_colour");
  }
  span_format = document.getElementsByClassName("p");
  for (i = 0; i < span_format.length; i++) {
    span_format[i].classList.add("text_colour_skills");
  }
  h3_format = document.getElementsByTagName("h3");
  for (i = 0; i < h3_format.length; i++) {
    h3_format[i].classList.add("text_colour");
  }
  h4_format = document.getElementsByTagName("h4");
  for (i = 0; i < h4_format.length; i++) {
    h4_format[i].classList.add("text_colour");
  }
  h5_format = document.getElementsByTagName("h5");
  for (i = 0; i < h5_format.length; i++) {
    h5_format[i].classList.add("text_colour");
  }
  link_format = document.getElementsByTagName("a");
  for (i = 0; i < 7; i++) {
    link_format[i].style.color = "#d6d4d4";
  }
  onresize_body();
}

function change_light() {
  document.getElementsByTagName("body")[0].classList.remove("body_colour");
  document.getElementsByTagName("body")[0].classList.add("body_colour_light");
  document.getElementById("first_block").classList.add("body_colour_light");
  document.getElementById("first_block").classList.remove("blocks_format");
  document.getElementById("first_block").classList.add("blocks_format_light");
  document.getElementById("second_block").classList.remove("blocks_format");
  document.getElementById("second_block").classList.add("blocks_format_light");
  document.getElementById("third_block").classList.remove("blocks_format");
  document.getElementById("third_block").classList.add("blocks_format_light");
  document.getElementById("fourth_block").classList.remove("blocks_format");
  document.getElementById("fourth_block").classList.add("blocks_format_light");
  line_separation = document.getElementsByTagName("hr");
  for (i = 0; i < line_separation.length; i++) {
    line_separation[i].classList.remove("hr");
    line_separation[i].classList.add("hr_light");
  }
  paragraph = document.getElementsByTagName("p");
  for (i = 0; i < paragraph.length; i++) {
    paragraph[i].classList.remove("text_colour");
  }
  span_format = document.getElementsByClassName("p");
  for (i = 0; i < span_format.length; i++) {
    span_format[i].classList.remove("text_colour_skills");
  }
  h3_format = document.getElementsByTagName("h3");
  for (i = 0; i < h3_format.length; i++) {
    h3_format[i].classList.remove("text_colour");
  }
  h4_format = document.getElementsByTagName("h4");
  for (i = 0; i < h4_format.length; i++) {
    h4_format[i].classList.remove("text_colour");
  }
  h5_format = document.getElementsByTagName("h5");
  for (i = 0; i < h5_format.length; i++) {
    h5_format[i].classList.remove("text_colour");
  }
  link_format = document.getElementsByTagName("a");
  for (i = 0; i < 7; i++) {
    link_format[i].style.color = "#757575";
  }
  onresize_body();
}

function spanish_cv() {
  document.getElementsByClassName("cv")[0].href =
    "https://drive.google.com/file/d/1L7PEHuBqKsbqiIHETOYrfCuMgQXjgvP-/view?usp=sharing";
  document.getElementsByClassName("cv")[0].dowload =
    "CV Colaneri, Christian Gaston.pdf";
}

function english_cv() {
  document.getElementsByClassName("cv")[0].href =
    "https://drive.google.com/file/d/1slN4M3R9QAMlnWDQVVytYvJD50jZLo9f/view?usp=sharing";
  document.getElementsByClassName("cv")[0].dowload =
    "Resume Colaneri, Christian Gaston.pdf";
}

function change_spanish() {
  changes = document.getElementsByClassName("language_change");
  texts = [
    '<i class="fas fa-briefcase icons_color"></i> Desarrollador de Software',
    '<i class="fas fa-download icons_color icons_size"></i>Descargar CV',
    '<i class="fa fa-cogs icons_color"></i>Habilidades técnicas',
    '<i class="fas fa-user-tie icons_color"></i>Habilidades personales',
    "Comunicación escrita y verbal",
    "Autodidacta",
    "Resolución de conflictos",
    "Trabajo en equipo",
    "Administración del tiempo",
    " Adaptabilidad ",
    " Dedicación ",
    " Organización ",
    '<i class="fas fa-language icons_color"></i><span key="Idioma">Idiomas</span>',
    "Español",
    "Inglés",
    '<i class="fas fa-suitcase icons_color"></i>Experiencia laboral',
    '<i class="far fa-calendar-alt cons_color icons_size"></i>Septiembre 2022 - <span class="button_present">Actualidad </span>',
    "Desarrollo Frontend utilizando React. <br /> Testing con Jest y React Testing Library.<br />Otras herramientas utilizadas: Redux - GraphQL - Postman - VS code - Azure DevOps",
    '<i class="far fa-calendar-alt cons_color icons_size"></i>Febrero 2022 - Septiembre 2022',
    "Desarrollo web utilizando React. <br />Otras herramientas utilizadas: TypeScript - PrimeReact - VS Code -SourceTree",
    '<i class="far fa-calendar-alt cons_color icons_size"></i>Junio 2021 - Febrero 2022',
    "Desarrollo web utilizando React y Svelte <br> Desarrollo mobile utilizando React Native. <br> Otras herramientas utilizadas: Material UI - Gitlab - VS Code",
    '<i class="far fa-calendar-alt cons_color icons_size"></i>Noviembre 2019 - Junio 2021',
    "Desarrollo e implementación de automatizaciones utilizando Python y sus librerías.<br> Ejecución de operaciones corporativas dentro del área de impuestos internacionales. <br> Elaboración de reportes y análisis de manera mensual, trimestral y anual.<br>Contacto con agentes externos tanto dentro como fuera de la compañía.",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Abril 2015 - Octubre 2019',
    "Contacto a profesionales y empresas vía mail o telefónicamente, para ofrecerles el servicio que brinda la compañía. <br> Gestión de la venta de productos de la empresa Papelera Tucumán. <br> Confección de reportes, análisis y propuesta de ideas para generar un incremento en las ventas del sector. <br>",
    '<i class="fas fa-user-graduate icons_color"></i> Educación',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Abril 2021 - Abril 2022',
    "Especialización en Desarrollo Mobile",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Septiembre 2021 - Diciembre 2021',
    "Desarrollo web Full Stack con Java",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Marzo 2021 - Agosto 2021',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Agosto 2020 - Diciembre 2020',
    "Python para análisis de datos",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Marzo 2020 - Abril 2020',
    "Introducción a base de datos y SQL",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Febrero 2020 - Marzo 2020',
    "Python para no programadores",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Enero 2020 - Febrero 2020',
    "Licenciatura en Comercio Internacional</a>",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Abril 2014 - Julio 2019',
    '<i class="fas fa-laptop-code icons_color"></i>Proyectos',
    '<i class="far fa-clock icons_color icons_size"></i>1 mes <i class="fas fa-info-circle icons_size ml-4"></i>Aplicación para conocer el clima de las ciudades que busques - Proyecto grupal',
    '<i class="far fa-clock icons_color icons_size"></i>2 meses <i class="fas fa-info-circle icons_size ml-4"></i>Página web para encontrar juegos gratuitos - Proyecto final',
    '<i class="far fa-clock icons_color icons_size"></i>En proceso <i class="fas fa-info-circle icons_size ml-4"></i>Buscador de mascotas perdidas - Proyecto personal',
    '<i class="far fa-clock icons_color icons_size"></i> 1 mes <i class="fas fa-info-circle icons_size ml-4"></i>Portfolio digital - Proyecto personal',
    '<i class="far fa-clock icons_color icons_size"></i> 3 semanas <i class="fas fa-info-circle icons_size ml-4"></i>Fitness Style - Proyecto final',
  ];
  for (i = 0; i < changes.length; i++) {
    changes[i].innerHTML = texts[i];
  }
  spanish_cv();
  onresize_body();
}

function change_english() {
  changes = document.getElementsByClassName("language_change");
  texts_english = [
    '<i class="fas fa-briefcase icons_color"></i> Software Developer',
    '<i class="fas fa-download icons_color icons_size"></i>Download Resume',
    '<i class="fa fa-cogs icons_color"></i>Technical Skills',
    '<i class="fas fa-user-tie icons_color"></i>Personal Skills',
    "Written and verbal communication",
    "Self-learner",
    "Problem solving",
    "Teamwork",
    "Time-management",
    " Adaptability ",
    " Dedication ",
    " Organization ",
    '<i class="fas fa-language icons_color"></i><span key="Idioma">Languages</span>',
    "Spanish",
    "English",
    '<i class="fas fa-suitcase icons_color"></i>Work Experience',
    '<i class="far fa-calendar-alt cons_color icons_size"></i>September 2022 - <span class="button_present">Present </span>',
    "Frontend developtment using React. <br /> Testing with Jest and React Testing Library.<br />Other used tools: Redux - GraphQL - Postman - VS code - Azure DevOps",
    '<i class="far fa-calendar-alt cons_color icons_size"></i>February 2022 - September 2022',
    "Web development using React. <br />Other used tools: TypeScript - PrimeReact - VS Code -SourceTree",
    '<i class="far fa-calendar-alt cons_color icons_size"></i>Junio 2021 - Febrero 2022',
    "Web development using React and Svelte <br />Mobile development using React Native. <br />Other used tools: Material UI - Gitlab - VS Code",
    '<i class="far fa-calendar-alt cons_color icons_size"></i>November 2019 - June 2021',
    "Development and implementation of automation using Python and its libraries.<br> Execution of corporate operations within the area of international taxes. <br> Elaboration of reports on a monthly, quarterly and annual basis.<br> Contact with external agents both inside and outside the country.",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>April 2015 - October 2019',
    "Contact to professionals and businesses by email or by telephone, to provide them the services of the company. <br> Sale of products of the company Papelera Tucumán. <br> Preparation of reports and proposal of ideas to generate an increase in sales. <br>",
    '<i class="fas fa-user-graduate icons_color"></i> Education',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>April 2021 - April 2022',
    "Mobile Development Specialization",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>September 2021 - December 2021',
    "Web development Full Stack with Java",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>March 2021 - August 2021',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>August 2020 - December 2020',
    "Python for Data Analysis",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>March 2020 - April 2020',
    "Introduction to Databases and SQL",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>February 2020 - March 2020',
    "Python for Non-Developers",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>January 2020 - February 2020',
    "Bachelor's degree in International Trade</a>",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>April 2014 - July 2019',
    '<i class="fas fa-laptop-code icons_color"></i>Projects',
    '<i class="far fa-clock icons_color icons_size"></i>1 month <i class="fas fa-info-circle icons_size ml-4"></i>Mobile App to know the weather of the cities you search - Group project',
    '<i class="far fa-clock icons_color icons_size"></i>2 month <i class="fas fa-info-circle icons_size ml-4"></i>Website to find free games - Final proyect',
    '<i class="far fa-clock icons_color icons_size"></i>In progress <i class="fas fa-info-circle icons_size ml-4"></i>Lost pets browser - Own project',
    '<i class="far fa-clock icons_color icons_size"></i>1 month <i class="fas fa-info-circle icons_size ml-4"></i>Digital porfolio - Own project',
    '<i class="far fa-clock icons_color icons_size"></i>3 weeks <i class="fas fa-info-circle icons_size ml-4"></i>Fitness Style - Final proyect',
  ];
  for (i = 0; i < changes.length; i++) {
    changes[i].innerHTML = texts_english[i];
  }

  english_cv();
  onresize_body();
}

function change_spanish_link_dark() {
  changes_link = document.getElementsByClassName("change_language_link");
  for (i = 0; i < changes_link.length; i++) {
    changes_link[i].innerHTML = link_spanish[i];
  }
  change_dark();
  change_spanish();
  document
    .querySelector(".onoffswitch-inner")
    .setAttribute("data-content", "Oscuro");
}

function change_spanish_link_light() {
  changes_link = document.getElementsByClassName("change_language_link");

  for (i = 0; i < changes_link.length; i++) {
    changes_link[i].innerHTML = link_spanish[i];
  }
  change_light();
  change_spanish();
  document
    .querySelector(".onoffswitch-inner")
    .setAttribute("data-content", "Claro");
}

function change_english_link_dark() {
  changes_link = document.getElementsByClassName("change_language_link");
  for (i = 0; i < changes_link.length; i++) {
    changes_link[i].innerHTML = link_english[i];
  }
  change_dark();
  change_english();
  document
    .querySelector(".onoffswitch-inner")
    .setAttribute("data-content", "Dark");
}

function change_english_link_light() {
  changes_link = document.getElementsByClassName("change_language_link");
  for (i = 0; i < changes_link.length; i++) {
    changes_link[i].innerHTML = link_english[i];
  }
  change_light();
  change_english();
  document
    .querySelector(".onoffswitch-inner")
    .setAttribute("data-content", "Light");
}

function change_colour_localstorage() {
  if (
    localStorage.getItem("light") === "true" &&
    localStorage.getItem("english").checked === "true"
  ) {
    change_english_link_light();
    document.getElementById("myonoffswitch").checked = true;
    document.getElementById("myonoffswitch2").checked = true;
  } else if (
    localStorage.getItem("light") === "true" &&
    localStorage.getItem("english") === "false"
  ) {
    change_spanish_link_light();
    document.getElementById("myonoffswitch").checked = true;
    document.getElementById("myonoffswitch2").checked = false;
  } else if (
    localStorage.getItem("light") === "false" &&
    localStorage.getItem("english") === "false"
  ) {
    change_spanish_link_dark();
    document.getElementById("myonoffswitch").checked = false;
    document.getElementById("myonoffswitch2").checked = false;
  } else if (
    localStorage.getItem("light") === "false" &&
    localStorage.getItem("english") === "true"
  ) {
    change_english_link_dark();
    document.getElementById("myonoffswitch").checked = false;
    document.getElementById("myonoffswitch2").checked = true;
  }
}

function change_colour_localstorage2() {
  if (
    localStorage.getItem("light") === "true" &&
    localStorage.getItem("english").checked === "true"
  ) {
    change_english_link_light();
  } else if (
    localStorage.getItem("light") === "true" &&
    localStorage.getItem("english") === "false"
  ) {
    change_spanish_link_light();
  } else if (
    localStorage.getItem("light") === "false" &&
    localStorage.getItem("english") === "false"
  ) {
    change_spanish_link_dark();
  } else if (
    localStorage.getItem("light") === "false" &&
    localStorage.getItem("english") === "true"
  ) {
    change_english_link_dark();
  }
}

function change_colour() {
  if (
    document.getElementById("myonoffswitch").checked === true &&
    document.getElementById("myonoffswitch2").checked === true
  ) {
    localStorage.clear();
    change_english_link_light();
    localStorage.setItem("light", "true");
    localStorage.setItem("english", "true");
  } else if (
    document.getElementById("myonoffswitch").checked === true &&
    document.getElementById("myonoffswitch2").checked === false
  ) {
    localStorage.clear();
    change_spanish_link_light();
    localStorage.setItem("light", "true");
    localStorage.setItem("english", "false");
  } else if (
    document.getElementById("myonoffswitch").checked === false &&
    document.getElementById("myonoffswitch2").checked === false
  ) {
    localStorage.clear();
    change_spanish_link_dark();
    localStorage.setItem("light", "false");
    localStorage.setItem("english", "false");
  } else if (
    document.getElementById("myonoffswitch").checked === false &&
    document.getElementById("myonoffswitch2").checked === true
  ) {
    localStorage.clear();
    change_english_link_dark();
    localStorage.setItem("light", "false");
    localStorage.setItem("english", "true");
  }
}

function onload_body() {
  setTimeout(function () {
    var firstBlock = document.getElementById("first_block");
    var rightContainer1 = document.getElementById("right_container_1");
    var rightContainer2 = document.getElementById("right_container_2");
    var rightContainer3 = document.getElementById("right_container_3");

    if (window.innerWidth > 767) {
      total =
        rightContainer1.clientHeight +
        rightContainer2.clientHeight +
        rightContainer3.clientHeight +
        32;
      firstBlock.style.minHeight = total + "px";
    }
  }, 1000);

  if (
    (localStorage.getItem("light") !== "") &
    (localStorage.getItem("english") !== "")
  ) {
    change_colour_localstorage();
  }
}

function onresize_body() {
  var firstBlock = document.getElementById("first_block");
  var rightContainer1 = document.getElementById("right_container_1");
  var rightContainer2 = document.getElementById("right_container_2");
  var rightContainer3 = document.getElementById("right_container_3");

  if (window.innerWidth > 767) {
    total =
      rightContainer1.clientHeight +
      rightContainer2.clientHeight +
      rightContainer3.clientHeight +
      32;
    firstBlock.style.minHeight = total + "px";
  } else {
    firstBlock.style.minHeight = 0;
  }
}
