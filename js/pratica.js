function mudar_slides(){
  document.getElementById("img1").src = "img/img1.jpg";
}

function mudar_slides2(){
    document.getElementById("img1").src = "img/img2.jpg";
  }

  function mudar_slides3(){
    document.getElementById("img1").src = "img/img3.jpg";
  }

  function mudar_slides4(){
    document.getElementById("img1").src = "img/Parque1.jpg";
  }
  
  function mudar_slides5(){
      document.getElementById("img1").src = "img/Parque2.jpg";
    }
  
    function mudar_slides6(){
      document.getElementById("img1").src = "img/Parque3.jpg";
    }

    function mudar_slides7(){
      document.getElementById("img1").src = "img/Navio_Pirata.jpg";
    }
    
    function mudar_slides8(){
        document.getElementById("img1").src = "img/Navio_Pirata2.jpg";
      }
    
      function mudar_slides9(){
        document.getElementById("img1").src = "img/Navio_Pirata3.jpg";
      }

  function mostrar_tela(){
      let tela = document.getElementById("img1");
      tela.style.display="block";
      tela.src="img/img1.jpg";
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
    parque.src="img/Parque1.jpg";
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
    parque.src="img/Navio_Pirata.jpg";
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

  

