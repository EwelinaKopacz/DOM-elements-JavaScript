const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];

const mainElement = document.querySelector('.article__list');

function createUlElement(){
    return ulElement = document.createElement('ul');
}

function createLiElement(itemLi,itemAttr){
    itemLi = document.createElement('li');
    itemLi.setAttribute('data-id', itemAttr)
    return itemLi;
}

function createLinkElement(itemA,itemAttr) {
    itemA = document.createElement('a');
    itemA.setAttribute('href', itemAttr);
    return itemA;
}

function changeText(element,textToChange){
    element.innerText = textToChange;
}

if(mainElement){
    const tableOfContent = createUlElement();

    list.forEach(function(element,index){
        if(list[index]['parentId'] === null){
            const firstLevel = createLiElement(element,list[index]['id']);
            const firstLevelLink = createLinkElement(element,list[index]['link']);
            tableOfContent.appendChild(firstLevel).appendChild(firstLevelLink);
            changeText(firstLevelLink,list[index]['text']);
        }
    });

    mainElement.appendChild(tableOfContent);

    const allLi = mainElement.querySelectorAll('li');

     allLi.forEach(function(element){
        const takeId = Number(element.dataset.id);
        const children = list.filter(function(item) {
            return item.parentId === takeId;
        });

        const secondUl = createUlElement();
        if(children.length !== 0){
        element.appendChild(secondUl);
        }

        children.forEach(function(value){
            const secondLiLevel = createLiElement(element); 
            const secondALevel = createLinkElement(element,value.link);
            secondUl.appendChild(secondLiLevel).appendChild(secondALevel);
            changeText(secondALevel,value.text);
        })
    });
}



