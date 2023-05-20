(function(){
    'use strict';

    let myImage=[
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg'
    ];
        let currentImage = 0;

        let nextBtn = document.getElementById('next');
        let prvBtn = document.getElementById('previous');
        let container = document.getElementById('content');

        nextBtn.addEventListener('click', function(event){
            event.preventDefault();

            currentImage++;
            if(currentImage > myImage.length-1){
                currentImage = 0;
            }
            swapimage();
        })
        prvBtn.addEventListener('click', function(event){
            event.preventDefault();

            currentImage--;
            if(currentImage < 0){
                currentImage = myImage.length-1;
            }
            swapimage();

            if(container.children.length > 2){
                container.removeChild(container.children[0]);
            }
            
        })
        function swapimage(){
            let newSlide = document.createElement('img');
            newSlide.src = myImage[currentImage];
            newSlide.className = 'fadeinimg';
            container.appendChild(newSlide);

            if(container.children.length > 2){
                container.removeChild(container.children[0]);
            }
        }

        

})();