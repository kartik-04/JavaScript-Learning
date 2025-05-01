const selectRef = document.querySelector('.filter select')
const moviesref = document.querySelectorAll('.movies');

selectRef.addEventListener('change', function(event){
    moviesref.forEach(movieref =>{
        const genre = movieref.getAttribute('data-genre');
        if(genre === event.target.value || genre === 'All'){
            movieref.classList.remove('hide');
        }else{
            movieref.classList.add('hide');
        }
    })
});

