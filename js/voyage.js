/* Données imposées par le sujet */
let slider_data = [
    {
        nom: "homme à pied",  
        vitesse : 10.0
    },
    {
        nom: "cheval pur-sang",      
        vitesse: 65.0
    },
    {
        nom: "voiture ferrari",       
        vitesse: 325
    },
    {
        nom: "avion jet",        
        vitesse: 740
    },
    {
        nom: "avion de ligne A380",        
        vitesse: 1185
    },
    {
        nom: "fusée Apollo 11",
        vitesse: 5500
    }

]


/* Fonction qui compare la valeure choisie par l'utilisateur 
    avec les valeurs de vitesse de chaque véhicules
    afin d'associer la vitesse choisis au véhicule trouvé*/
function data_research(user_choice) {
    console.log(user_choice);
    for (let i = 0; i < slider_data.length; i++) {
        if (i!==slider_data.length - 1) {

            if (user_choice >= slider_data[i].vitesse && user_choice <= slider_data[i+1].vitesse /2) {
                console.log("YO");
                return slider_data[i].nom;
                }
                else if ( user_choice >= slider_data[i+1].vitesse /2 && user_choice <=slider_data[i+1].vitesse){
                return slider_data[i+1].nom ;
                }else continue ;

        }else slider_data[i].nom;
    }
}

/* Fonction qui convertit une donnée de temps en milliseconds 
    en heure , minutes ,secondes */
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


/*  Slider interface , permet à l'utilisateur 
    de choisir une vitesse en km/h */
slider.oninput = function () {
    output.innerHTML = this.value;
    user_choice = this.value;
    console.log(msToTime(user_choice));
    timer.innerHTML = msToTime((distance / user_choice) * Ms_in_one_hour);
    vehicules.innerHTML = data_research(user_choice);
    
}


/* Quand on click sur le test_button
    affichage des valeurs de temps 
    et du véhicule trouvé   */








