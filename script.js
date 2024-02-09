        const menuBarIcon = document.querySelector('.menu-bar');
        const navLinks = document.querySelector('.nav-links');
        menuBarIcon.addEventListener('click', function() {  
            navLinks.classList.toggle('show');
            menuBarIcon.classList.add('hide');
        });
         

        const cancelIcon = document.querySelector('.cancelIcon');

        cancelIcon.addEventListener('click', function() {  
            navLinks.classList.remove('show');
            menuBarIcon.classList.remove('hide');
            
        });