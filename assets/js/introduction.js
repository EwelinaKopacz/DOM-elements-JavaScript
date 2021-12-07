
const toolTipElements = document.querySelectorAll('.tooltip');

function createLinkElement(itemA,itemURL) {
    itemA = document.createElement('a');
    itemA.setAttribute('href',itemURL);
    return itemA;
}

function createSpanElement(itemSpan, itemSpanType, itemSpanContent) {
    itemSpan = document.createElement('span');
    if(itemSpanType === 'text'){
        itemSpan.setAttribute('class','tooltip__box tool tip__box--text');
        itemSpan.innerHTML = itemSpanContent;
        return itemSpan;
    }
    else {
        itemSpan.setAttribute('class','tooltip__box tooltip__box--image');
        return itemSpan;
    }
}

function createImgElement(itemImg, ItemImgContent) {
    itemImg = document.createElement('img');
    itemImg.setAttribute('src',ItemImgContent)
    return itemImg;
}

function addText(textToChange,aElement){
    aElement.innerText = textToChange;
}


if(toolTipElements){
    toolTipElements.forEach(function(element){
        const aElement = createLinkElement(element,element.dataset.url);
        const spanElement = createSpanElement(element,element.dataset.tooltipType,element.dataset.tooltipContent);

        addText(element.innerText,aElement);
        element.innerText = '';

        if(element.dataset.tooltipType === 'image'){
            const imgElement = createImgElement(element,element.dataset.tooltipContent);
            spanElement.appendChild(imgElement);
        }
            element.appendChild(aElement);
            element.appendChild(spanElement);
    });
}
