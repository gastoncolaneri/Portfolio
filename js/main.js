window.addEventListener('load', spinner);

function spinner(e){ 
    e.preventDefault() 
    setTimeout(function(){
        document.getElementById('spinner').style.visibility ="visible";
        document.getElementById('spinner').style.opacity = "1";
    }, 3000);
}

// Functions

function change_dark(){
    document.getElementsByTagName("body")[0].classList.remove('body_colour_light');    
    document.getElementsByTagName("body")[0].classList.add('body_colour');
    document.getElementById("first_block").classList.remove('blocks_format_light');
    document.getElementById("first_block").classList.add('blocks_format');
    document.getElementById("second_block").classList.remove('blocks_format_light');
    document.getElementById("second_block").classList.add('blocks_format');
    document.getElementById("third_block").classList.remove('blocks_format_light');
    document.getElementById("third_block").classList.add('blocks_format');
    document.getElementById("fourth_block").classList.remove('blocks_format_light');
    document.getElementById("fourth_block").classList.add('blocks_format');
    line_separation = document.getElementsByTagName('hr');
    for (i=0; i<line_separation.length; i++){
        line_separation[i].classList.remove('hr_light');
        line_separation[i].classList.add('hr');
    };
    html_font = document.getElementsByTagName('p');
    for (i=0; i<html_font.length; i++){
        html_font[i].classList.add('text_colour');  
    };
    h3_format = document.getElementsByTagName('h3')
    for (i=0; i<h3_format.length; i++){
        h3_format[i].classList.add('text_colour');   
    };
    h4_format = document.getElementsByTagName('h4')
    for (i=0; i<h4_format.length; i++){
        h4_format[i].classList.add('text_colour');   
    };
    h5_format = document.getElementsByTagName('h5')
    for (i=0; i<h5_format.length; i++){
        h5_format[i].classList.add('text_colour');   
    };
    link_format = document.getElementsByTagName('a')
    for (i=0; i<7; i++){
        link_format[i].style.color="#d6d4d4";   
    };
};

function change_light(){
    document.getElementsByTagName("body")[0].classList.remove('body_colour');
    document.getElementsByTagName("body")[0].classList.add('body_colour_light');
    document.getElementById("first_block").classList.add('body_colour_light');
    document.getElementById("first_block").classList.remove('blocks_format');
    document.getElementById("first_block").classList.add('blocks_format_light');
    document.getElementById("second_block").classList.remove('blocks_format');
    document.getElementById("second_block").classList.add('blocks_format_light');
    document.getElementById("third_block").classList.remove('blocks_format');
    document.getElementById("third_block").classList.add('blocks_format_light');
    document.getElementById("fourth_block").classList.remove('blocks_format');
    document.getElementById("fourth_block").classList.add('blocks_format_light');
    line_separation = document.getElementsByTagName('hr')
    for (i=0; i<line_separation.length; i++){
        line_separation[i].classList.remove('hr');
        line_separation[i].classList.add('hr_light');
    };
    paragraph = document.getElementsByTagName('p')
    for (i=0; i<paragraph.length; i++){
        paragraph[i].classList.remove('text_colour');   
    };
    h3_format = document.getElementsByTagName('h3')
    for (i=0; i<h3_format.length; i++){
        h3_format[i].classList.remove('text_colour');   
    };
    h4_format = document.getElementsByTagName('h4')
    for (i=0; i<h4_format.length; i++){
        h4_format[i].classList.remove('text_colour');   
    };
    h5_format = document.getElementsByTagName('h5')
    for (i=0; i<h5_format.length; i++){
        h5_format[i].classList.remove('text_colour');   
    };
    link_format = document.getElementsByTagName('a')
    for (i=0; i<7; i++){
        link_format[i].style.color="#514f4f";   
    };
};


function change_spanish(){
    /*document.getElementById("job_title").innerHTML = " <i class='fas fa-briefcase icons_color'></i> Aspirante a Desarrollador Web Full Stack";
    document.getElementById("first_block_title").innerHTML = '<b><i class="fa fa-cogs icons_color"></i>Habilidades</b>'
    document.getElementById("second_block_title").innerHTML = '<b><i class="fas fa-language icons_color"></i><span key="Idioma">Idiomas</span></b>'
    document.getElementById("first_language").innerHTML = 'Español'
    document.getElementById("second_language").innerHTML = 'Inglés'*/

    changes = document.getElementsByClassName("language_change")
    texts = ['<i class="fas fa-briefcase icons_color"></i> Aspirante a Desarrollador Web Full Stack',
    '<i class="fa fa-cogs icons_color"></i>Habilidades técnicas',
    '<i class="fas fa-user-tie icons_color"></i>Habilidades personales',
    '<i class="fas fa-comments icons_color"></i> Comunicación escrita y verbal</p>',
    '<i class="fas fa-chalkboard-teacher icons_color"></i> Autodidacta</p>',
    '<i class="fas fa-hands-helping icons_color"></i> Resolución de conflictos</p>',
    '<i class="fas fa-people-carry icons_color"></i> Trabajo en equipo</p>',
    '<i class="fas fa-business-time icons_color"></i> Administración del tiempo</p>',
    '<i class="fas fa-retweet icons_color"></i> Adaptabilidad</p>',
    '<i class="fas fa-clipboard-check icons_color"></i> Dedicación</p>',
    '<i class="fas fa-cubes icons_color"></i> Organización</p>',
    '<i class="fas fa-language icons_color"></i><span key="Idioma">Idiomas</span>',
    'Español',
    'Inglés',
    '<i class="fas fa-suitcase icons_color"></i>Experiencia laboral',
    '<i class="far fa-calendar-alt cons_color icons_size"></i>Noviembre 2019 - <span class="button_projects">Actualidad </span>',
    'Desarrollo e implementación de automatizaciones utilizando Python y sus librerías.<br> Ejecución de operaciones corporativas dentro del área de impuestos internacionales. <br> Elaboración de reportes y análisis de manera mensual, trimestral y anual.<br>Contacto con agentes externos tanto dentro como fuera de la compañía.',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Julio 2017 - Octubre 2019',
    'Contacto a profesionales y empresas vía mail o telefónicamente, para ofrecerles el servicio que brinda la compañía. <br> Gestión de la venta de productos de la empresa Papelera Tucumán. <br> Confección de reportes, análisis y propuesta de ideas para generar un incremento en las ventas del sector. <br>',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Abril 2015 - Junio 2017',
    'Contacto de potenciales clientes residenciales por email o telefónicamente, para ofrecerles el servicio que brinda la compañía.',
    '<i class="fas fa-user-graduate icons_color"></i> Educación',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Agosto 2020 - Diciembre 2020',
    'Python para análisis de datos',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Marzo 2020 - Abril 2020',
    'Introducción a base de datos y SQL',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Febrero 2020 - Marzo 2020',
    'Python para no programadores',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Enero 2020 - Febrero 2020',
    "Licenciatura en Comercio Internacional</a>",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>Abril 2014 - Julio 2019',
    '<i class="fas fa-laptop-code icons_color"></i>Proyectos',
    '<i class="far fa-clock icons_color icons_size"></i>Aproximadamente 6 meses - En curso <i class="fas fa-info-circle icons_size ml-4"></i>Buscador de mascotas perdidas - Proyecto Personal',
    '<i class="far fa-clock icons_color icons_size"></i>Aproximadamente 1 mes <i class="fas fa-info-circle icons_size ml-4"></i>Portfolio digital - Proyecto Personal',
    '<i class="far fa-clock icons_color icons_size"></i>Aproximadamente 3 semanas <i class="fas fa-info-circle icons_size ml-4"></i>Sitio web para emprendimiento personal - Proyecto Personal',
]    
    for (i=0; i<changes.length; i++){ 
        changes[i].innerHTML = texts[i];
    }
};


function change_spanish_link_dark(){
    changes_link = document.getElementsByClassName("change_language_link")
    link_spanish = ['<b>Business Operations Associate</b> - <a href="https://www.accenture.com/ar-es" target="_blank"class="links" style="color: rgb(214, 212, 212)">Accenture Service Center SRL </a>',
    '<b>Ejecutivo de cuentas</b> - <a href="https://www.telecentro.com.ar/" target="_blank" class="links" style="color: rgb(214, 212, 212)">TeleCentro </a>',
    '<b>Administrador de ventas</b> - <a href="https://www.telecentro.com.ar/" target="_blank"class="links" style="color: rgb(214, 212, 212)">TeleCentro </a>',
    ]

    for (i=0; i<changes_link.length; i++){ 
        changes_link[i].innerHTML = link_spanish[i];
    }
};

function change_spanish_link_light(){
    changes_link = document.getElementsByClassName("change_language_link")
    link_spanish = ['<b>Business Operations Associate</b> - <a href="https://www.accenture.com/ar-es" target="_blank"class="links" style="color: rgb(81, 79, 79)">Accenture Service Center SRL </a>',
    '<b>Ejecutivo de cuentas</b> - <a href="https://www.telecentro.com.ar/" target="_blank" class="links" style="color: rgb(81, 79, 79)">TeleCentro </a>',
    '<b>Administrador de ventas</b> - <a href="https://www.telecentro.com.ar/" target="_blank"class="links" style="color: rgb(81, 79, 79)">TeleCentro </a>',
    ]

    for (i=0; i<changes_link.length; i++){ 
        changes_link[i].innerHTML = link_spanish[i];
    }      
};    

function change_english_link_dark(){
    changes_link = document.getElementsByClassName("change_language_link")
    link_english = ['<b>Business Operations Associate</b> - <a href="https://www.accenture.com/ar-es" target="_blank"class="links" style="color: rgb(214, 212, 212)">Accenture Service Center SRL </a>',
    '<b>Account Executive</b> - <a href="https://www.telecentro.com.ar/" target="_blank" class="links" style="color: rgb(214, 212, 212)">TeleCentro </a>',
    '<b>Sales Manager</b> - <a href="https://www.telecentro.com.ar/" target="_blank"class="links" style="color: rgb(214, 212, 212)">TeleCentro </a>',
    ]

    for (i=0; i<changes_link.length; i++){ 
        changes_link[i].innerHTML = link_english[i];

    }
};

function change_english_link_light(){
    changes_link = document.getElementsByClassName("change_language_link")
    link_english = ['<b>Business Operations Associate</b> - <a href="https://www.accenture.com/ar-es" target="_blank"class="links" style="color: rgb(81, 79, 79)">Accenture Service Center SRL </a>',
    '<b>Account Executive</b> - <a href="https://www.telecentro.com.ar/" target="_blank" class="links" style="color: rgb(81, 79, 79)">TeleCentro </a>',
    '<b>Sales Manager</b> - <a href="https://www.telecentro.com.ar/" target="_blank"class="links" style="color: rgb(81, 79, 79)">TeleCentro </a>',
    ]
    console.log(changes_link)
    for (i=0; i<changes_link.length; i++){ 
        changes_link[i].innerHTML = link_english[i];
    }      
};     

function change_english(){
    /*document.getElementById("job_title").innerHTML = " <i class='fas fa-briefcase icons_color'></i> Applicant to Full Stack Web Developer";
    document.getElementById("first_block_title").innerHTML = '<b><i class="fa fa-cogs icons_color"></i>Skills</b>'
    document.getElementById("second_block_title").innerHTML = '<b><i class="fas fa-language icons_color"></i><span key="Idioma">Languages</span></b>'
    document.getElementById("first_language").innerHTML = 'Spanish'
    document.getElementById("second_language").innerHTML = 'English '*/

    changes = document.getElementsByClassName("language_change")
    texts_english = ['<i class="fas fa-briefcase icons_color"></i> Applicant to Full Stack Web Developer',
    '<i class="fa fa-cogs icons_color"></i>Technical Skills',
    '<i class="fas fa-user-tie icons_color"></i>Personal Skills',
    '<i class="fas fa-comments icons_color"></i> Written and verbal communication</p>',
    '<i class="fas fa-chalkboard-teacher icons_color"></i> Self-learner</p>',
    '<i class="fas fa-hands-helping icons_color"></i> Problem solver</p>',
    '<i class="fas fa-people-carry icons_color"></i> Teamwork</p>',
    '<i class="fas fa-business-time icons_color"></i> Time manager</p>',
    '<i class="fas fa-retweet icons_color"></i> Adaptability</p>',
    '<i class="fas fa-clipboard-check icons_color"></i> Dedication</p>',
    '<i class="fas fa-cubes icons_color"></i> Organization</p>',
    '<i class="fas fa-language icons_color"></i><span key="Idioma">Languages</span><',
    'Spanish',
    'English',
    '<i class="fas fa-suitcase icons_color"></i>Work Experience',
    '<i class="far fa-calendar-alt cons_color icons_size"></i>November 2019 - <span class="button_projects">Present </span>',
    'Development and implementation of automation using Python and its libraries.<br> Execution of corporate operations within the area of international taxes. <br> Elaboration of reports on a monthly, quarterly and annual basis.<br> Contact with external agents both inside and outside the country.',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>July 2017 - October 2019',
    'Contact to professionals and businesses by email or by telephone, to provide them the services of the company. <br> Sale of products of the company Papelera Tucumán. <br> Preparation of reports and proposal of ideas to generate an increase in sales. <br>',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>April 2015 - June 2017',
    'Contact of potential residential customers by email or telephone, to offer them the service provided by the company.',
    '<i class="fas fa-user-graduate icons_color"></i> Education',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>August 2020 - December 2020',
    'Python for Data Analysis',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>March 2020 - April 2020',
    'Introduction to Databases and SQL',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>February 2020 - March 2020',
    'Python for Non-Developers',
    '<i class="far fa-calendar-alt icons_color icons_size"></i>January 2020 - February 2020',
    "Bachelor's degree in International Trade</a>",
    '<i class="far fa-calendar-alt icons_color icons_size"></i>April 2014 - July 2019',
    '<i class="fas fa-laptop-code icons_color"></i>Projects',
    '<i class="far fa-clock icons_color icons_size"></i>About 6 months <i class="fas fa-info-circle icons_size ml-4"></i>Lost pets browser - Own project',
    '<i class="far fa-clock icons_color icons_size"></i>About 1 month <i class="fas fa-info-circle icons_size ml-4"></i>Digital porfolio - Own project',
    '<i class="far fa-clock icons_color icons_size"></i>About 3 weeks <i class="fas fa-info-circle icons_size ml-4"></i>Website for own entrepreneurship - Own project',
]
    for (i=0; i<changes.length; i++){ 
        changes[i].innerHTML = texts_english[i];
    }

};



function change_colour(){
    if (document.getElementById("myonoffswitch").checked === true && document.getElementById("myonoffswitch2").checked === true){  
        change_light();
        change_english();
        change_english_link_light();
    } else if(document.getElementById("myonoffswitch").checked === true && document.getElementById("myonoffswitch2").checked === false) {
        change_light();
        change_spanish();
        change_spanish_link_light();
    } else if(document.getElementById("myonoffswitch").checked === false && document.getElementById("myonoffswitch2").checked === false) {
        change_dark();
        change_spanish();
        change_spanish_link_dark();
    } else if (document.getElementById("myonoffswitch").checked === false && document.getElementById("myonoffswitch2").checked === true) {
        change_dark();
        change_english();
        change_english_link_dark();
    }
};



function adjust_height(){
    var firstBlock = document.getElementById("first_block");
    var rightContainer = document.getElementById("right_container");
    //var thirdBlock = document.getElementById("third_block");
    //var fourthBlock = document.getElementById("fourth_block");

    console.log(firstBlock.clientHeight);
    console.log(firstBlock.clientWidth);

    rightContainer.style.height = "200px";
    //console.log(secondBlock.clientHeight);
    //console.log(thirdBlock.clientHeight);
    //console.log(fourthBlock.clientHeight);
    console.log(rightContainer.clientHeight);
    console.log(rightContainer.clientWidth);


    //total = secondBlock.clientHeight + thirdBlock.clientHeight + fourthBlock.clientHeight
    //console.log(total);



}