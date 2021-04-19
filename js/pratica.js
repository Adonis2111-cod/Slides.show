function mudar_slides(){
  document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2018/10/07/10/24/sail-3729599__340.jpg";
}

function mudar_slides2(){
    document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2017/09/17/16/35/boats-2758962__340.jpg";
  }

  function mudar_slides3(){
    document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__340.jpg";
  }

  function mudar_slides4(){
    document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg";
  }
  
  function mudar_slides5(){
      document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png";
    }
  
    function mudar_slides6(){
      document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857__340.jpg";
    }

    function mudar_slides7(){
      document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2016/07/05/18/35/aircraft-1499171__340.jpg";
    }
    
    function mudar_slides8(){
        document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2017/09/28/13/38/aircraft-2795557__340.jpg";
      }
    
      function mudar_slides9(){
        document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2018/03/19/20/57/aircraft-3241229__340.jpg";
      }

  function mostrar_tela(){
      let tela = document.getElementById("img1");
      tela.style.display="block";
      tela.src="https://cdn.pixabay.com/photo/2018/10/07/10/24/sail-3729599__340.jpg";
      let slide = document.getElementsByClassName("dot");
      slide[0].style.display="block";
      slide[1].style.display="block";
      slide[2].style.display="block";
      slide[3].style.display="none";
      slide[4].style.display="none";
      slide[5].style.display="none";
      slide[6].style.display="none";
      slide[7].style.display="none";
      slide[8].style.display="none";
  }

  function mostrar_parque(){
    let parque = document.getElementById("img1");
    parque.style.display="block";
    parque.src="https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg";
    let slide = document.getElementsByClassName("dot");
      slide[0].style.display="none";
      slide[1].style.display="none";
      slide[2].style.display="none";
      slide[3].style.display="block";
      slide[4].style.display="block";
      slide[5].style.display="block";
      slide[6].style.display="none";
      slide[7].style.display="none";
      slide[8].style.display="none";
  }

  function mostrar_navio(){
    let parque = document.getElementById("img1");
    parque.style.display="block";
    parque.src="https://cdn.pixabay.com/photo/2016/07/05/18/35/aircraft-1499171__340.jpg";
    let slide = document.getElementsByClassName("dot");
      slide[0].style.display="none";
      slide[1].style.display="none";
      slide[2].style.display="none";
      slide[3].style.display="none";
      slide[4].style.display="none";
      slide[5].style.display="none";
      slide[6].style.display="block";
      slide[7].style.display="block";
      slide[8].style.display="block";
  }

  

