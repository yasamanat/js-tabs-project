const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.tab_content')
// console.log(contents);
console.log(tabs);
tabs.forEach(tab => {tab.addEventListener('click' , () => {
    console.log("click");
    
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    console.log(target);
    
    document.getElementById(`tab-${target}`).classList.add('active');
});
    
});