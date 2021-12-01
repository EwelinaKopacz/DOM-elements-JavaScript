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

if(mainElement){
    const tableOfContent = document.createElement('ul');


    list.forEach(function(element,index){
        if(list[index]['parentId'] === null){
            const firstLevel = document.createElement('li');
            const firstLevelLink = document.createElement('a');
            tableOfContent.appendChild(firstLevel).appendChild(firstLevelLink);
            firstLevelLink.setAttribute('href',list[index]['link']);
            firstLevel.setAttribute('data-id',list[index]['id']);
            firstLevelLink.innerText = list[index]['text'];
        }
    });

    mainElement.appendChild(tableOfContent);

    const allLi = mainElement.querySelectorAll('li');

     allLi.forEach(function(element){
        const takeId = Number(element.dataset.id);
        const children = list.filter(function(item) {
            return item.parentId === takeId;
        });

        const secondUl = document.createElement('ul');
        if(children.length !== 0){
        element.appendChild(secondUl);
        }

        children.forEach(function(value){
            const secondLiLevel = document.createElement('li');
            const secondALevel = document.createElement('a');
            secondUl.appendChild(secondLiLevel).appendChild(secondALevel);
            secondALevel.setAttribute('href',value.link);
            secondALevel.innerText = value.text;
        })
    });
}



