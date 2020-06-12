let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


//  btns.forEach(function (btn) {

//  btn.addEventListener("click",function (e) {
  
//    const style = e.currentTarget.classList;

//    if (style.contains("decrease")) {

//     count--;
//    }

//    value.textContent = count;
//  });

//  });

btns.forEach (function(obj) {

    obj.addEventListener('click', function(e) {

      const styles = (e.currentTarget.classList);  

      if (styles.contains('decrease')) {

 count = count -1 ;
      } else if (styles.contains('increase')) {
        count = count +1 ;

      } else if (styles.contains('reset')) {

        count = 0 ;
      }
     
    

if (count > 0) {

    value.style.color = 'green';
} else if (count < 0) {

    value.style.color = 'red';

} else {

    value.style.color = 'black';
}

      value.textContent = count ;
    });


    });




