let tab = [];

let slider_data  = [
    {
        nom : "homme à pied",
        vitesse_min :0 ,
        vitesste_max : 10.0
    },
    {
        nom : "cheval pur-sang",
        vitesse_min :10.1 ,
        vitesste_max : 65.0
    },
    {
        nom : "voiture ferrari",
        vitesse_min :65.1,
        vitesste_max : 325
    },
    {
        nom : "avion jet",
        vitesse_min :325.1 ,
        vitesste_max : 740
    },
    {
        nom : "avion de ligne A380",
        vitesse_min :740.1 ,
        vitesste_max :1185
    },
    {
        nom : "fusée Apollo 11",
        vitesse_min :1185.1 ,
        vitesste_max : 5500
    }   

]





function data_research(user_choice){
    console.log(user_choice);
    for( let i = 0 ; i <slider_data.length ; i++){

        for (let clé in slider_data[i]){

            if(user_choice >= slider_data[i].vitesse_min && user_choice <= slider_data[i].vitesste_max){
                
            console.log(slider_data[i].nom);
           return (slider_data[i].nom);
        }
        

        }
    }
}


function msToTime(milliseconds) {
    //Get hours from milliseconds
    let hours = milliseconds / (1000 * 60 * 60);
    let absoluteHours = Math.floor(hours);
    let h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Get remainder from hours and convert to minutes
    let minutes = (hours - absoluteHours) * 60;
    let absoluteMinutes = Math.floor(minutes);
    let m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    let seconds = (minutes - absoluteMinutes) * 60;
    let absoluteSeconds = Math.floor(seconds);
    let s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    return h + 'h ' + m + 'min ' + s + 'sec';
}



const distance = 384400;
const Ms_in_one_hour = 3600000;
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const test_button = document.getElementById("test");
const timer = document.getElementById('time');
const vehicules = document.getElementById('vehicules')
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
user_choice = this.value;

}
test_button.onclick = function (){
console.log(msToTime(user_choice));
timer.innerHTML = msToTime((distance/user_choice)*Ms_in_one_hour);
vehicules.innerHTML = data_research(user_choice);

}







