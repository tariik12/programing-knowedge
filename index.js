const dataLoad = ()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data =>displayData(data.data.tools.slice(0,6)))
    .catch(err =>{
        console.log(err)
    })
}

const displayData =(data) =>{
    document.getElementById('show-all-data').classList.remove('d-none');
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerHTML = '';
    data.forEach(singleData =>{
        const {name,features,image,published_in} =singleData;
        
        const createDiv =document.createElement('div');
        createDiv.innerHTML =`
        
        <div class="col h-100">
        <div class="card h-100 p-2">
        <img src="${image}" class="card-img-top  rounded h-100 "  alt="...">
        <div class="h-100 card-body">
        <h5 class="card-title">Features</h5>
        <p class="card-text">${features}</p>
      <hr class="container">
      <h5>${name}</h5>
      <div class="d-flex ">
      <p class="card-text">${published_in}</p>
      <button class="btn btn-outline ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./image/btn.png" class=" img-fluid " alt=""></button>
      </div>    
      </div>
      </div>
      </div>    
      `
      displayContainer.appendChild(createDiv);
    })
    
}
dataLoad()

showAll =() =>{
  
    document.getElementById('show-all-data').classList.add('d-none');
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data =>displayData(data.data.tools))
    .catch(err =>{
        console.log(err)
    })
   
    
  }