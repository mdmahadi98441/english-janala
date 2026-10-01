const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => {
            
            displayLesson(json.data)
        })
}

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn")
    // console.log(lessonButtons)
    lessonButtons.forEach(btn => btn.classList.remove("active"))
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            removeActive()
            const clickBtn = document.getElementById(`lesson-btn-${id}`)
            clickBtn.classList.add("active")
            displayWord(json.data)
        })
}

    const displayWord = (words) => {
        //     {
        //     "id": 5,
        //     "level": 1,
        //     "word": "Eager",
        //     "meaning": "আগ্রহী",
        //     "pronunciation": "ইগার"
        // }

        const wordContainer = document.getElementById('word-container')
        wordContainer.innerHTML = ``

        if (words.length == 0) {
            wordContainer.innerHTML = `
        
        <div class="bangla text-center bg-gray-100 col-span-full py-5 rounded-xl space-y-2">
            
            

                <img class="mx-auto"  src="english-janala-resources/assets/alert-error.png" alt="">
            
            <p class="text-xl font-semibold text-gray-400 py-4">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-3xl font-bold text-gray-700">নেক্সট Lesson এ যান</h2>

        </div>


        `
            return
        }

        words.forEach(word => {
            
            const card = document.createElement('div')
            card.innerHTML = `
         <div class="bg-white px-5 py-10 text-center space-y-3 rounded-md shadow-sm">
            <h2 class="text-2xl font-semibold">${word.word ? word.word : 'শব্দ পাওয়া যায়নি।'}</h2>
            <p>Meaning /Pronounciation</p>

            <div class="bangla text-xl font-medium">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি।"} / ${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি।"}"</div>
            <div class="flex justify-between ">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume"></i></button>


            </div>
        </div>
        `

            wordContainer.append(card)
        })
    }
    const displayLesson = (lessons) => {
        const lessonContainer = document.getElementById('lesson-container')
        lessonContainer.innerHTML = ``



        for (let lesson of lessons) {

            const newDiv = document.createElement('div')
            newDiv.innerHTML = `
                
        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary font-bold lesson-btn"><i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}</button>
                        
        `
            lessonContainer.append(newDiv)
        }
    }
    loadLesson()