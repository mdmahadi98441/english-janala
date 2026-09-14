const loadLesson = ()=> {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json => console.log(json))
}
const displayLesson = (lessons)=>{
    
}
loadLesson()