window.onload = ()=>{
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    // console.log(tab_switcher);
    for(let i = 0; i < tab_switchers.length; i++){
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;
        // console.log(page_id);
        tab_switcher.addEventListener('click', ()=>{
            document.querySelector(".tabs .tab.is-active").classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');
            switchPage(page_id);
        })
    }
}

function switchPage(page_id){
    console.log(page_id);
    const currPage = document.querySelector('.pages .page.is-active');
    currPage.classList.remove('is-active');

    const nextPage = document.querySelector(`.pages .page[data-page='${page_id}']`);
    nextPage.classList.add('is-active')
}