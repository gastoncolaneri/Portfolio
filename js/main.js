window.addEventListener('load', spinner);

function spinner(e){ 
    e.preventDefault() 
    setTimeout(function(){
        document.getElementById('spinner').style.visibility ="visible";
        document.getElementById('spinner').style.opacity = "1";
    }, 3000);
}

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
    console.log(link_format)
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
    for (i=0; i<7; i++){
        link_format[i].style.color="#514f4f";   
    };
};

function change_colour(){
    if (document.getElementById("myonoffswitch").checked === true){
        change_light();
    } else {
        change_dark();
    }
};