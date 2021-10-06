let i = 0 ;
let slider = ['img/1.jpg' , 'img/2.jpg' , 'img/3.jpg' , 'img/4.jpg' , 'img/5.jpg'];
let slid2 = function () {
    document.slid.src = slider[i];

    if (i < slider.length -1 ) {
        i++;
    } else {
        i=0;
    }
    setTimeout('slid2()' , 3000)
}
slid2()


class icons {

    constructor (){
         this.icoo = document.getElementById('icoo');
         this.iconsa = document.getElementById('iconsa')
         this.test;
         this.iconsa.addEventListener ("click", ()=> {
         
            this.icona()
         

         });

         this.icona()
    }

icona(){

    if(this.test == false){

        this.test = true;
        this.iconsa.style.color = "red";


      
    }else{
        this.test = false;
        this.iconsa.style.color = "white";
       

        

    }
}
}
onload = new icons();



class icons1 {

    constructor (){
         this.icoo1 = document.getElementById('icoo1');
         this.iconsa1 = document.getElementById('iconsa1');
         this.test1;

         this.iconsa1.addEventListener ("click", ()=> {
         
            this.icona1()
         

         });

         this.icona1()
    }

icona1(){

    if(this.test1 == false){

        this.test1 = true;
        this.iconsa1.style.color = "red";
        


      
    }else{
        this.test1 = false;
        this.iconsa1.style.color = "white";
       

        

    }
}
}

onload = new icons1();



class icons2 {

    constructor (){
         this.icoo2 = document.getElementById('icoo2');
         this.iconsa2 = document.getElementById('iconsa2')
         this.pars = document.getElementById('pars');
         this.car = document.getElementById('car')
         this.spa = document.getElementById('spa')
         this.test2;
         this.iconsa2.addEventListener ("click", ()=> {
         
            this.icona2()
         

         });

         this.icona2()
    }

icona2(){

    if(this.test2 == false){

        this.test2 = true;
        this.iconsa2.style.color = "red";
       

      
    }else{
        this.test2 = false;
        this.iconsa2.style.color = "white";
        
        

    }
}
}
onload = new icons2();




// let themodel = document.getElementById('themodel');
// let theimg = document.getElementById('theimg');
// let imgstop = document.getElementById('imgstop');
// let close = document.getElementById('close');

// theimg.onclick = function () {
//     themodel.style.display = 'block';
//     imgstop.src = this.src
// }

// close.onclick = function () {
//     themodel.style.display = 'none';
// }
