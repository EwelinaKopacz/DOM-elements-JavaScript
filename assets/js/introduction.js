
const toolTipElements = document.querySelectorAll('.tooltip');

function createLinkElement(itemA,itemURL) {
    itemA = document.createElement('a');
    itemA.setAttribute('href',itemURL);
    return itemA;
}

function createSpanElement(itemSpan) {
    itemSpan = document.createElement('span');
    return itemSpan;
    // if(itemType === 'image'){
    //     return itemSpan.setAttribute('class','tooltip__box tool tip__box--image');

    // }
    // else {
    //     return itemSpan.setAttribute('class','tooltip__box tooltip__box--text');
    // }
}

function createImgElement(itemImg) {
    itemImg = document.createElement('img');
    return itemImg;
}


if(toolTipElements){
    toolTipElements.forEach(function(element){
        //utworzenie elementów
        const aElement = createLinkElement(element,element.dataset.url);
        const spanElement = createSpanElement(element);
        const imgElement = createImgElement(element);

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

        //usunięcie text i dodanie go do znacznika <a></a> jako anchor text
        const anchorText = element.innerText;
        element.innerText = '';
        aElement.innerText = anchorText;

        // wstawienie dzieci
        element.appendChild(aElement);
        element.appendChild(spanElement);
    });

}



// PONIZEJ KOPIA ZOSTAWIC 

// if(toolTipElements){
//     toolTipElements.forEach(function(element){
//         //utworzenie elementów
//         const aElement = createLinkElement(element,element.dataset.url);
//         const spanElement = createSpanElement(element,element.dataset.tooltipType);
//         const imgElement = createImgElement(element);

//         // const aElement = document.createElement('a'); // do usuniecia
//         // const spanElement = document.createElement('span'); // do usuniecia
//         // const imgElement = document.createElement('img'); // do usuniecia 

//         //przypisanie atrybutów
//         if(element.dataset.tooltipType === 'image'){
//             spanElement.setAttribute('class','tooltip__box tool tip__box--image');
//             spanElement.appendChild(imgElement);
//             imgElement.setAttribute('src',element.dataset.tooltipContent);
//         }
//         else{
//             spanElement.setAttribute('class','tooltip__box tooltip__box--text');
//             spanElement.innerHTML = element.dataset.tooltipContent;
//         }

//         // aElement.setAttribute('href',element.dataset.url);  // do usuniecia 

//         //usunięcie text i dodanie go do znacznika <a></a> jako anchor text
//         const anchorText = element.innerText;
//         element.innerText = '';
//         aElement.innerText = anchorText;

//         // wstawienie dzieci
//         element.appendChild(aElement);
//         element.appendChild(spanElement);
//     });
// }