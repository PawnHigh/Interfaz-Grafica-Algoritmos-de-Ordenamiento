var v_1 = document.querySelector('.v_1');
var v_2 = document.querySelector('.v_2');
var v_3 = document.querySelector('.v_3');
var v_4 = document.querySelector('.v_4');
var v_5 = document.querySelector('.v_5');
var v_6 = document.querySelector('.v_6');
var v_7 = document.querySelector('.v_7');
var v_8 = document.querySelector('.v_8');
var v_9 = document.querySelector('.v_9');
var v_10 = document.querySelector('.v_10');
var v_11 = document.querySelector('.v_11');
var v_12 = document.querySelector('.v_12');
var v_13 = document.querySelector('.v_13');
var v_14 = document.querySelector('.v_14');
var v_15 = document.querySelector('.v_15');
var v_16 = document.querySelector('.v_16');
var v_17 = document.querySelector('.v_17');
var v_18 = document.querySelector('.v_18');
var v_19 = document.querySelector('.v_19');
var v_20 = document.querySelector('.v_20');
var v_21 = document.querySelector('.v_21');
var v_22 = document.querySelector('.v_22');
var v_23 = document.querySelector('.v_23');
var v_24 = document.querySelector('.v_24');
var v_25 = document.querySelector('.v_25');
var v_26 = document.querySelector('.v_26');
var v_27 = document.querySelector('.v_27');
var v_28 = document.querySelector('.v_28');

// INICIO DE REPRODUCIR TODO 
var reproducirTodo = document.getElementById("reproducirTodo");
function togglePlayPauseAll(){
    v_1.play();
    v_2.play();
    v_3.play();
    v_4.play();
    v_5.play();
    v_6.play();
    v_7.play();
    v_8.play();
    v_9.play();
    v_10.play();
    v_11.play();
    v_12.play();
    v_13.play();
    v_14.play();
    v_15.play();
    v_16.play();
    v_17.play();
    v_18.play();
    v_19.play();
    v_20.play();
    v_21.play();
    v_22.play();
    v_23.play();
    v_24.play();
    v_25.play();
    v_26.play();
    v_27.play();
    v_28.play();
}
reproducirTodo.onclick = function(){
    togglePlayPauseAll();
}
// FIN DE REPRODUCIR TODO

// VIDEO 1 ---------------------------------------------------------------------------------------------
var btn = document.getElementById("play-pause");
var juice = document.querySelector('.progress_juice');
function togglePlayPause() {
    /* 
    Si el video se esta reproduciendo el icono se 
    establece como pause, si el video esta en pause 
    el icono se cambia a reproducir, simple estética
    */ 
    if(v_1.paused) { 
        btn.className = 'pause'; // Icono cambia a pause
        v_1.play(); // El video se reproduce
    } else {
        btn.className = 'play'; // Icono cambia a reproducir
        v_1.pause(); // El video se pausa
    }
}
btn.onclick = function() { 
    //alert('play');
    togglePlayPause();
}
v_1.addEventListener('timeupdate',function(){ // Si el video se reproduce entonces ...
    var juiciPos = v_1.currentTime / v_1.duration;
    juice.style.width = juiciPos * 100 + "%"; // Completar la barra roja
    if(v_1.ended){ // Si el video termino el icono cambia a play
        btn.className = 'play';
        juice.style.width = 0+"%";
    }
})
// VIDEO 2 ---------------------------------------------------------------------------------------------
var btn2 = document.getElementById("play-pause2");
var juice2 = document.querySelector('.progress_juice2');
function togglePlayPause2() {
    if(v_2.paused) { btn2.className = 'pause';v_2.play(); } 
    else {btn2.className = 'play';v_2.pause(); }
}
btn2.onclick = function() { 
    togglePlayPause2();
}
v_2.addEventListener('timeupdate',function(){
    var juiciPos = v_2.currentTime / v_2.duration;
    juice2.style.width = juiciPos * 100 + "%"; 
    if(v_2.ended){
        btn2.className = 'play';
        juice2.style.width = 0+"%";
    }
})
// VIDEO 3 ---------------------------------------------------------------------------------------------
var btn3 = document.getElementById("play-pause3");
var juice3 = document.querySelector('.progress_juice3');
function togglePlayPause3() {
    if(v_3.paused) { btn3.className = 'pause';v_3.play(); } 
    else {btn3.className = 'play';v_3.pause(); }
}
btn3.onclick = function() { 
    togglePlayPause3();
}
v_3.addEventListener('timeupdate',function(){
    var juiciPos = v_3.currentTime / v_3.duration;
    juice3.style.width = juiciPos * 100 + "%"; 
    if(v_3.ended){
        btn3.className = 'play';
        juice3.style.width = 0+"%";
    }
})
// VIDEO 4 ---------------------------------------------------------------------------------------------
var btn4 = document.getElementById("play-pause4");
var juice4 = document.querySelector('.progress_juice4');
function togglePlayPause4() {
    if(v_4.paused) { btn4.className = 'pause';v_4.play(); } 
    else {btn4.className = 'play';v_4.pause(); }
}
btn4.onclick = function() { 
    togglePlayPause4();
}
v_4.addEventListener('timeupdate',function(){
    var juiciPos = v_4.currentTime / v_4.duration;
    juice4.style.width = juiciPos * 100 + "%"; 
    if(v_4.ended){
        btn4.className = 'play';
        juice4.style.width = 0+"%";
    }
})
// VIDEO 5 ---------------------------------------------------------------------------------------------
var btn5 = document.getElementById("play-pause5");
var juice5 = document.querySelector('.progress_juice5');
function togglePlayPause5() {
    if(v_5.paused) { btn5.className = 'pause';v_5.play(); } 
    else {btn5.className = 'play';v_5.pause(); }
}
btn5.onclick = function() { 
    togglePlayPause5();
}
v_5.addEventListener('timeupdate',function(){
    var juiciPos = v_5.currentTime / v_5.duration;
    juice5.style.width = juiciPos * 100 + "%"; 
    if(v_5.ended){
        btn5.className = 'play';
        juice5.style.width = 0+"%";
    }
})
// VIDEO 6 ---------------------------------------------------------------------------------------------
var btn6 = document.getElementById("play-pause6");
var juice6 = document.querySelector('.progress_juice6');
function togglePlayPause6() {
    if(v_6.paused) { btn6.className = 'pause';v_6.play(); } 
    else {btn6.className = 'play';v_6.pause(); }
}
btn6.onclick = function() { 
    togglePlayPause6();
}
v_6.addEventListener('timeupdate',function(){
    var juiciPos = v_6.currentTime / v_6.duration;
    juice6.style.width = juiciPos * 100 + "%"; 
    if(v_6.ended){
        btn6.className = 'play';
        juice6.style.width = 0+"%";
    }
})
// VIDEO 7 ---------------------------------------------------------------------------------------------
var btn7 = document.getElementById("play-pause7");
var juice7 = document.querySelector('.progress_juice7');
function togglePlayPause7() {
    if(v_7.paused) { btn7.className = 'pause';v_7.play(); } 
    else {btn7.className = 'play';v_7.pause(); }
}
btn7.onclick = function() { 
    togglePlayPause7();
}
v_7.addEventListener('timeupdate',function(){
    var juiciPos = v_7.currentTime / v_7.duration;
    juice7.style.width = juiciPos * 100 + "%"; 
    if(v_7.ended){
        btn7.className = 'play';
        juice7.style.width = 0+"%";
    }
})
// VIDEO 8 ---------------------------------------------------------------------------------------------
var btn8 = document.getElementById("play-pause8");
var juice8 = document.querySelector('.progress_juice8');
function togglePlayPause8() {
    if(v_8.paused) { btn8.className = 'pause';v_8.play(); } 
    else {btn8.className = 'play';v_8.pause(); }
}
btn8.onclick = function() { 
    togglePlayPause8();
}
v_8.addEventListener('timeupdate',function(){
    var juiciPos = v_8.currentTime / v_8.duration;
    juice8.style.width = juiciPos * 100 + "%"; 
    if(v_8.ended){
        btn8.className = 'play';
        juice8.style.width = 0+"%";
    }
})
// VIDEO 9 ---------------------------------------------------------------------------------------------
var btn9 = document.getElementById("play-pause9");
var juice9 = document.querySelector('.progress_juice9');
function togglePlayPause9() {
    if(v_9.paused) { btn9.className = 'pause';v_9.play(); } 
    else {btn9.className = 'play';v_9.pause(); }
}
btn9.onclick = function() { 
    togglePlayPause9();
}
v_9.addEventListener('timeupdate',function(){
    var juiciPos = v_9.currentTime / v_9.duration;
    juice9.style.width = juiciPos * 100 + "%"; 
    if(v_9.ended){
        btn9.className = 'play';
        juice9.style.width = 0+"%";
    }
})
// VIDEO 10 ---------------------------------------------------------------------------------------------
var btn10 = document.getElementById("play-pause10");
var juice10 = document.querySelector('.progress_juice10');
function togglePlayPause10() {
    if(v_10.paused) { btn10.className = 'pause';v_10.play(); } 
    else {btn10.className = 'play';v_10.pause(); }
}
btn10.onclick = function() { 
    togglePlayPause10();
}
v_10.addEventListener('timeupdate',function(){
    var juiciPos = v_10.currentTime / v_10.duration;
    juice10.style.width = juiciPos * 100 + "%"; 
    if(v_10.ended){
        btn10.className = 'play';
        juice10.style.width = 0+"%";
    }
})
// VIDEO 11 ---------------------------------------------------------------------------------------------
var btn11 = document.getElementById("play-pause11");
var juice11 = document.querySelector('.progress_juice11');
function togglePlayPause11() {
    if(v_11.paused) { btn11.className = 'pause';v_11.play(); } 
    else {btn11.className = 'play';v_11.pause(); }
}
btn11.onclick = function() { 
    togglePlayPause11();
}
v_11.addEventListener('timeupdate',function(){
    var juiciPos = v_11.currentTime / v_11.duration;
    juice11.style.width = juiciPos * 100 + "%"; 
    if(v_11.ended){
        btn11.className = 'play';
        juice11.style.width = 0+"%";
    }
})
// VIDEO 12 ---------------------------------------------------------------------------------------------
var btn12 = document.getElementById("play-pause12");
var juice12 = document.querySelector('.progress_juice12');
function togglePlayPause12() {
    if(v_12.paused) { btn12.className = 'pause';v_12.play(); } 
    else {btn12.className = 'play';v_12.pause(); }
}
btn12.onclick = function() { 
    togglePlayPause12();
}
v_12.addEventListener('timeupdate',function(){
    var juiciPos = v_12.currentTime / v_12.duration;
    juice12.style.width = juiciPos * 100 + "%"; 
    if(v_12.ended){
        btn12.className = 'play';
        juice12.style.width = 0+"%";
    }
})
// VIDEO 13 ---------------------------------------------------------------------------------------------
var btn13 = document.getElementById("play-pause13");
var juice13 = document.querySelector('.progress_juice13');
function togglePlayPause13() {
    if(v_13.paused) { btn13.className = 'pause';v_13.play(); } 
    else {btn13.className = 'play';v_13.pause(); }
}
btn13.onclick = function() { 
    togglePlayPause13();
}
v_13.addEventListener('timeupdate',function(){
    var juiciPos = v_13.currentTime / v_13.duration;
    juice13.style.width = juiciPos * 100 + "%"; 
    if(v_13.ended){
        btn13.className = 'play';
        juice13.style.width = 0+"%";
    }
})
// VIDEO 14 ---------------------------------------------------------------------------------------------
var btn14 = document.getElementById("play-pause14");
var juice14 = document.querySelector('.progress_juice14');
function togglePlayPause14() {
    if(v_14.paused) { btn14.className = 'pause';v_14.play(); } 
    else {btn14.className = 'play';v_14.pause(); }
}
btn14.onclick = function() { 
    togglePlayPause14();
}
v_14.addEventListener('timeupdate',function(){
    var juiciPos = v_14.currentTime / v_14.duration;
    juice14.style.width = juiciPos * 100 + "%"; 
    if(v_14.ended){
        btn14.className = 'play';
        juice14.style.width = 0+"%";
    }
})
// VIDEO 15 ---------------------------------------------------------------------------------------------
var btn15 = document.getElementById("play-pause15");
var juice15 = document.querySelector('.progress_juice15');
function togglePlayPause15() {
    if(v_15.paused) { btn15.className = 'pause';v_15.play(); } 
    else {btn15.className = 'play';v_15.pause(); }
}
btn15.onclick = function() { 
    togglePlayPause15();
}
v_15.addEventListener('timeupdate',function(){
    var juiciPos = v_15.currentTime / v_15.duration;
    juice15.style.width = juiciPos * 100 + "%"; 
    if(v_15.ended){
        btn15.className = 'play';
        juice15.style.width = 0+"%";
    }
})
// VIDEO 16 ---------------------------------------------------------------------------------------------
var btn16 = document.getElementById("play-pause16");
var juice16 = document.querySelector('.progress_juice16');
function togglePlayPause16() {
    if(v_16.paused) { btn16.className = 'pause';v_16.play(); } 
    else {btn16.className = 'play';v_16.pause(); }
}
btn16.onclick = function() { 
    togglePlayPause16();
}
v_16.addEventListener('timeupdate',function(){
    var juiciPos = v_16.currentTime / v_16.duration;
    juice16.style.width = juiciPos * 100 + "%"; 
    if(v_16.ended){
        btn16.className = 'play';
        juice16.style.width = 0+"%";
    }
})
// VIDEO 17 ---------------------------------------------------------------------------------------------
var btn17 = document.getElementById("play-pause17");
var juice17 = document.querySelector('.progress_juice17');
function togglePlayPause17() {
    if(v_17.paused) { btn17.className = 'pause';v_17.play(); } 
    else {btn17.className = 'play';v_17.pause(); }
}
btn17.onclick = function() { 
    togglePlayPause17();
}
v_17.addEventListener('timeupdate',function(){
    var juiciPos = v_17.currentTime / v_17.duration;
    juice17.style.width = juiciPos * 100 + "%"; 
    if(v_17.ended){
        btn17.className = 'play';
        juice17.style.width = 0+"%";
    }
})
// VIDEO 18 ---------------------------------------------------------------------------------------------
var btn18 = document.getElementById("play-pause18");
var juice18 = document.querySelector('.progress_juice18');
function togglePlayPause18() {
    if(v_18.paused) { btn18.className = 'pause';v_18.play(); } 
    else {btn18.className = 'play';v_18.pause(); }
}
btn18.onclick = function() { 
    togglePlayPause18();
}
v_18.addEventListener('timeupdate',function(){
    var juiciPos = v_18.currentTime / v_18.duration;
    juice18.style.width = juiciPos * 100 + "%"; 
    if(v_18.ended){
        btn18.className = 'play';
        juice18.style.width = 0+"%";
    }
})
// VIDEO 19 ---------------------------------------------------------------------------------------------
var btn19 = document.getElementById("play-pause19");
var juice19 = document.querySelector('.progress_juice19');
function togglePlayPause19() {
    if(v_19.paused) { btn19.className = 'pause';v_19.play(); } 
    else {btn19.className = 'play';v_19.pause(); }
}
btn19.onclick = function() { 
    togglePlayPause19();
}
v_19.addEventListener('timeupdate',function(){
    var juiciPos = v_19.currentTime / v_19.duration;
    juice19.style.width = juiciPos * 100 + "%"; 
    if(v_19.ended){
        btn19.className = 'play';
        juice19.style.width = 0+"%";
    }
})
// VIDEO 20 ---------------------------------------------------------------------------------------------
var btn20 = document.getElementById("play-pause20");
var juice20 = document.querySelector('.progress_juice20');
function togglePlayPause20() {
    if(v_20.paused) { btn20.className = 'pause';v_20.play(); } 
    else {btn20.className = 'play';v_20.pause(); }
}
btn20.onclick = function() { 
    togglePlayPause20();
}
v_20.addEventListener('timeupdate',function(){
    var juiciPos = v_20.currentTime / v_20.duration;
    juice20.style.width = juiciPos * 100 + "%"; 
    if(v_20.ended){
        btn20.className = 'play';
        juice20.style.width = 0+"%";
    }
})
// VIDEO 21 ---------------------------------------------------------------------------------------------
var btn21 = document.getElementById("play-pause21");
var juice21 = document.querySelector('.progress_juice21');
function togglePlayPause21() {
    if(v_21.paused) { btn21.className = 'pause';v_21.play(); } 
    else {btn21.className = 'play';v_21.pause(); }
}
btn21.onclick = function() { 
    togglePlayPause21();
}
v_21.addEventListener('timeupdate',function(){
    var juiciPos = v_21.currentTime / v_21.duration;
    juice21.style.width = juiciPos * 100 + "%"; 
    if(v_21.ended){
        btn21.className = 'play';
        juice21.style.width = 0+"%";
    }
})
// VIDEO 22 ---------------------------------------------------------------------------------------------
var btn22 = document.getElementById("play-pause22");
var juice22 = document.querySelector('.progress_juice22');
function togglePlayPause22() {
    if(v_22.paused) { btn22.className = 'pause';v_22.play(); } 
    else {btn22.className = 'play';v_22.pause(); }
}
btn22.onclick = function() { 
    togglePlayPause22();
}
v_22.addEventListener('timeupdate',function(){
    var juiciPos = v_22.currentTime / v_22.duration;
    juice22.style.width = juiciPos * 100 + "%"; 
    if(v_22.ended){
        btn22.className = 'play';
        juice22.style.width = 0+"%";
    }
})
// VIDEO 23 ---------------------------------------------------------------------------------------------
var btn23 = document.getElementById("play-pause23");
var juice23 = document.querySelector('.progress_juice23');
function togglePlayPause23() {
    if(v_23.paused) { btn23.className = 'pause';v_23.play(); } 
    else {btn23.className = 'play';v_23.pause(); }
}
btn23.onclick = function() { 
    togglePlayPause23();
}
v_23.addEventListener('timeupdate',function(){
    var juiciPos = v_23.currentTime / v_23.duration;
    juice23.style.width = juiciPos * 100 + "%"; 
    if(v_23.ended){
        btn23.className = 'play';
        juice23.style.width = 0+"%";
    }
})
// VIDEO 24 ---------------------------------------------------------------------------------------------
var btn24 = document.getElementById("play-pause24");
var juice24 = document.querySelector('.progress_juice24');
function togglePlayPause24() {
    if(v_24.paused) { btn24.className = 'pause';v_24.play(); } 
    else {btn24.className = 'play';v_24.pause(); }
}
btn24.onclick = function() { 
    togglePlayPause24();
}
v_24.addEventListener('timeupdate',function(){
    var juiciPos = v_24.currentTime / v_24.duration;
    juice24.style.width = juiciPos * 100 + "%"; 
    if(v_24.ended){
        btn24.className = 'play';
        juice24.style.width = 0+"%";
    }
})
// VIDEO 25 ---------------------------------------------------------------------------------------------
var btn25 = document.getElementById("play-pause25");
var juice25 = document.querySelector('.progress_juice25');
function togglePlayPause25() {
    if(v_25.paused) { btn25.className = 'pause';v_25.play(); } 
    else {btn25.className = 'play';v_25.pause(); }
}
btn25.onclick = function() { 
    togglePlayPause25();
}
v_25.addEventListener('timeupdate',function(){
    var juiciPos = v_25.currentTime / v_25.duration;
    juice25.style.width = juiciPos * 100 + "%"; 
    if(v_25.ended){
        btn25.className = 'play';
        juice25.style.width = 0+"%";
    }
})
// VIDEO 26 ---------------------------------------------------------------------------------------------
var btn26 = document.getElementById("play-pause26");
var juice26 = document.querySelector('.progress_juice26');
function togglePlayPause26() {
    if(v_26.paused) { btn26.className = 'pause';v_26.play(); } 
    else {btn26.className = 'play';v_26.pause(); }
}
btn26.onclick = function() { 
    togglePlayPause26();
}
v_26.addEventListener('timeupdate',function(){
    var juiciPos = v_26.currentTime / v_26.duration;
    juice26.style.width = juiciPos * 100 + "%"; 
    if(v_26.ended){
        btn26.className = 'play';
        juice26.style.width = 0+"%";
    }
})
// VIDEO 27 ---------------------------------------------------------------------------------------------
var btn27 = document.getElementById("play-pause27");
var juice27 = document.querySelector('.progress_juice27');
function togglePlayPause27() {
    if(v_27.paused) { btn27.className = 'pause';v_27.play(); } 
    else {btn27.className = 'play';v_27.pause(); }
}
btn27.onclick = function() { 
    togglePlayPause27();
}
v_27.addEventListener('timeupdate',function(){
    var juiciPos = v_27.currentTime / v_27.duration;
    juice27.style.width = juiciPos * 100 + "%"; 
    if(v_27.ended){
        btn27.className = 'play';
        juice27.style.width = 0+"%";
    }
})
// VIDEO 28 ---------------------------------------------------------------------------------------------
var btn28 = document.getElementById("play-pause28");
var juice28 = document.querySelector('.progress_juice28');
function togglePlayPause28() {
    if(v_28.paused) { btn28.className = 'pause';v_28.play(); } 
    else {btn28.className = 'play';v_2.pause(); }
}
btn28.onclick = function() { 
    togglePlayPause28();
}
v_28.addEventListener('timeupdate',function(){
    var juiciPos = v_28.currentTime / v_28.duration;
    juice28.style.width = juiciPos * 100 + "%"; 
    if(v_28.ended){
        btn28.className = 'play';
        juice28.style.width = 0+"%";
    }
})

