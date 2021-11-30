
const toolTipElements = document.querySelectorAll('.tooltip');


if(toolTipElements){
    toolTipElements.forEach(function(element){
        //utworzenie elementów
        const aElement = document.createElement('a');
        const spanElement = document.createElement('span');
        const imgElement = document.createElement('img');

        //przypisanie atrybutów
        if(element.dataset.tooltipType === 'image'){
            spanElement.setAttribute('class','tooltip__box tool tip__box--image');
            spanElement.appendChild(imgElement);
            imgElement.setAttribute('src',element.dataset.tooltipContent);
        }
        else{
            spanElement.setAttribute('class','tooltip__box tooltip__box--text');
            spanElement.innerHTML = element.dataset.tooltipContent;
        }

        aElement.setAttribute('href',element.dataset.url);

        //usunięcie text i dodanie go do znacznika <a></a> jako anchor text
        const anchorText = element.innerText;
        element.innerText = '';
        aElement.innerText = anchorText;

        // wstawienie dzieci
        element.appendChild(aElement);
        element.appendChild(spanElement);
    });

}