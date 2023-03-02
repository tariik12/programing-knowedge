const dataLoad = ()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data =>displayData(data.data))
}
dataLoad()
const displayData =(data) =>{
    // console.log(data.tools)
data.tools.forEach(singleData =>{
    console.log(singleData.name)
    const {name} =singleData;
    const displayContainer = document.getElementById('display-container');
    const createDiv =document.createElement('div');
    createDiv.innerHTML =`
    
                <div class="col">
                  <div class="card h-100">
                   <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
    
    `
    displayContainer.appendChild(createDiv);
})
}