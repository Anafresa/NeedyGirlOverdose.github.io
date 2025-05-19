document.addEventListener('DOMContentLoaded', () => {

    const articles = document.querySelectorAll('.articulos');

    articles.forEach(article => {
        const elementosdeClick = article.querySelectorAll('img, h1, ul');
        const infoComplementaria = article.querySelector('.info-complementaria');

        if(infoComplementaria){
            elementosdeClick.forEach(element =>{
                element.addEventListener('click', () =>{
                    if (infoComplementaria.style.display === 'none' ||
                        infoComplementaria.style.display === ''){
                            infoComplementaria.style.display = 'block';
                        }
                        else{
                            infoComplementaria.style.display = 'none';
                        }
                });
            });
        }
    });
 });