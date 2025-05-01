document.addEventListener('keydown', function(event){
    if(event.key == '1'){
        const scrollref = document.querySelector('#s1');
        scrollref.scrollIntoView();
    }else if(event.key == '2'){
        const scrollref = document.querySelector('#s2');
        scrollref.scrollIntoView();
    }else if(event.key == '3'){
        const scrollref = document.querySelector('#s3');
        scrollref.scrollIntoView();
    }else if(event.key == 't'){
        window.scrollBy(0, document.querySelector('html').getBoundingClientRect().top);
    }else if(event.key == 'b'){
        window.scrollBy(0, document.querySelector('html').getBoundingClientRect().bottom);
    }
})