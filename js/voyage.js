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

        for (let j in slider_data[i]){

            if(user_choice >= slider_data[i].vitesse_min && user_choice <= slider_data[i].vitesste_max){
                
            console.log(slider_data[i].nom);
            }
        

        }
    }
}

data_research(3000);



