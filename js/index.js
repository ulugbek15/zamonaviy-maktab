let infoList = document.querySelector(".info__list");
let infoAcademic = document.querySelector(".info__academic");
let infoItem = document.querySelectorAll(".info__item");
let infoAcademicBox = document.querySelectorAll(".info__academic-box");
let infoSubMenuWrapper = document.querySelectorAll(".info__submenu-wrapper");
let infoBoxWrapper = document.querySelectorAll(".info__academic-box-wrapper");

infoAcademic.addEventListener('click', (event) =>{
    let target = event.target

    if(target){
        for(let i = 0; i < 5; i++){
            if(target == infoAcademicBox[i]){
                infoAcademicBox[i].style.width = "850px";
                infoAcademicBox[i].classList.toggle("col-8");
                hideTabContent(0, infoSubMenuWrapper);
                showTabContent(i, infoSubMenuWrapper);
                break;
            }
        }
    }
})

function hideTabContent(a, b){
    for (let i = a; i < b.length; i++){
        b[i].classList.remove("show");
        b[i].classList.add("hide");
    }
}

hideTabContent(1, infoBoxWrapper)
hideTabContent(1, infoSubMenuWrapper)

function showTabContent(b, a){
    if(a[b].classList.contains("hide")){
        a[b].classList.remove("hide");
        a[b].classList.add("show");
    }
}

infoList.addEventListener('click', (event, anything, x) => {
    let target = event.target;
    console.log(x)

    if(target){
        for (let i = 0; i < infoItem.length; i++){
            if(target == infoItem[i]){
                hideTabContent(0, infoBoxWrapper);
                showTabContent(i, infoBoxWrapper);
                break;
            }
        }
    }
});