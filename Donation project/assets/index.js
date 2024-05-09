
 
console.log('hello ready to go');

 let scrollbtn = document.querySelector('#scrollTop');


       window.addEventListener('scroll', function () {
           if (window.pageYOffset > 300) {
            scrollbtn.style.display = 'block';
           } else {
            scrollbtn.style.display = 'none';
           }
       });

       scrollbtn.addEventListener('click', function () {
          window.scrollTo({
            top : 0,
            behavior: "smooth"
          })
       })


       /*-----------------nav----on------scroll---------------------------------*/


       let nav = document.querySelector('.navbar');

       window.addEventListener('scroll', function () {
           if (window.pageYOffset > 300) {
            nav.style.backgroundColor = "black";
           }
           else{
             nav.style.backgroundColor = '';
           }
       });

