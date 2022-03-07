import card from './components/Card.js';
let page = 0
fetch("https://api.doge-meme.lol/v1/memes/?skip=0&limit=20")
.then((res)=>res.json())
.then((response)=>{
    console.log(response)
    const data = (response.data)
    display(data)
})
document.getElementById("pageright").addEventListener("click",()=>{
    pageadd(1)
})
    document.getElementById("pageleft").addEventListener("click",()=>{
        pageadd(-1)
    })


function pageadd(value){
    if(value==-1){
        if(page==0){
            return 
        }
    }
    page = page + value
    let skip = page*20
    fetch(`https://api.doge-meme.lol/v1/memes/?skip=${skip}&limit=20`)
.then((res)=>res.json())
.then((response)=>{
    console.log(response)
    const data = (response.data)
    display(data)
})

}

function display(data){
    document.getElementById('second').innerHTML = null

    data.map((e)=>{
        if(e.submission_url){
            let mainDiv = document.createElement('div')
        mainDiv.setAttribute('class','card')
        let imgDiv = document.createElement('div')
        imgDiv.setAttribute('class','card-image')
        let img = document.createElement('img');
        img.src=e.submission_url
        imgDiv.append(img)
        let titleDiv = document.createElement('div')
        titleDiv.setAttribute('class','title')
        let h3 = document.createElement('h3')
        h3.textContent = e.submission_title
        titleDiv.append(h3)
        let container = document.createElement('div')
        container.innerHTML = card()
        mainDiv.append(imgDiv,titleDiv,container)

       let a =  document.getElementById('second').append(mainDiv)

        }
        
       

    })
}