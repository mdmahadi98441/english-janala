const loadLesson = ()=> {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json => {
        console.log(json.data)
        displayLesson(json.data)
    })
}
const displayLesson = (lessons)=>{
    const lessonContainer = document.getElementById('lesson-container')
    lessonContainer.innerHTML = ``

    for(let lesson of lessons){
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
                
        <button class="btn btn-outline btn-primary font-bold"><i class="fa-solid fa-book-open"></i> Learn-${lesson.level_no}</button>
                        
        `
        lessonContainer.append(newDiv)
    }
}
loadLesson()