

const textInput= document.querySelector('.input-text')
const searchBtn = document.querySelector('button')
const speaker = document.querySelector('audio')
const ShowWord = document.querySelector('.result')



const url ='https://api.dictionaryapi.dev/api/v2/entries/en/'

   
searchBtn.addEventListener('click', fectchData);




        
    function fectchData(){
      
        fetch(`${url}${textInput.value}`)
    .then(response=>{
        if(!response.ok){
            alert('words not availabe from Api')
           
        }
        return response.json()
    })
.then (data=>{
console.log(data)
    ShowWord.innerHTML = `
    <div class="words-container">
    <h2 class="words-search">word: ${textInput.value}</h2>
  <button onclick="playsound()"  class= "speaker" >
  <span class="material-symbols-outlined">volume_up</span>
        </button>
    
    </div>
      
            <div class="meaning-coniatainer">
            <h2 class= 'partofspeech'> part-of-speech:<br> ${data[0].meanings[0].partOfSpeech} </h2>
            <h2 class = 'phonetics'> phonetic<br> ${data[0].phonetic} </h2>
            <p class="meaning"><span class='definition'>Definition1:<br>${data[0].meanings[0].definitions[0].definition}<span></p>
    
            <p class="world-example"> <span>Example <span>:<br><br> ${data[0].meanings[0].definitions[0].example }</p>
        
            </div>
            </div`

            const audiosrc = `${data[0].phonetics[0].audio}`
            speaker.setAttribute('src',`${data[0].phonetics[0].audio}`);   
         
            textInput.value =''
})
  
}
  

    

    function playsound(){
          speaker.play()

        }
    
     




// function fecthdata(){
//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/love`)
//     .then(response=>{
//         if(!response.ok) {
//             throw new Error('new eeror');
//         }
//         return response.json()
//     })
//     .then(data=>console.log(data[0].meanings[0]
//         ))
//     .catch(error=>console.error(error))
// }

// window.addEventListener('load', fecthdata)


