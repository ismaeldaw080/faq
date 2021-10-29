const preguntas=document.querySelectorAll(".faq-preguntas");
const respuestas=document.querySelectorAll(".faq-respuestas");
function esconderRespuestas(){
    respuestas.forEach(respuesta => {
        respuesta.style.display="none";    
    });
}
function esconderPregunta(){
    preguntas.forEach(pregunta => {
        pregunta.style.fontWeight=400;
    });
}
preguntas.forEach(function (pregunta) {
    pregunta.addEventListener('click', function (i) {
        let idPregunta=pregunta.getAttribute("data-faq-pregunta")-1;
        esconderPregunta();
        esconderRespuestas();
        pregunta.style.fontWeight=700;
        respuestas[idPregunta].style.display="block";
    })
})