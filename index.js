const dataLoad = ()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data =>displayData(data.data.tools.slice(0,6)))
  
    toggleSpinner(true);
}

/* show six Data */
const displayData =(data) =>{
    toggleSpinner(false);
    document.getElementById('show-all-data').classList.remove('d-none');
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerHTML = '';
    // console.log(data)
    data.forEach(singleData =>{
        console.log(singleData.features)
    const {name,features,image,published_in,id}=singleData; 
 
      const f =features.map((feature)=>`<li>${feature}</li>`).join('');
    //   console.log(f)

        
        const createDiv =document.createElement('div');
        createDiv.innerHTML =` 

        <div class="card h-100 p-2">
        <img src="${image}" class="card-img-top  rounded h-100 "  alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol class="">
                     ${f}
                </ol>
            </div>
            <div class="card-footer bg-white">
            <div class="d-flex align-items-center ">
            <div class="">
            <h5>${name}</h5>
            <p class="card-text">${published_in}</p>
            </div>
            <button onClick=loadSingleDataDetails('${id}') class="btn btn-outline ms-auto " ><img src="./image/btn.png" class=" img-fluid " alt="" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
            </div> 
            </div>
          </div>
      `
      displayContainer.appendChild(createDiv);
        
    })
    
}
/* show All Data */
showAll =() =>{
    document.getElementById('show-all-data').classList.add('d-none');
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data =>displayData(data.data.tools))
    .catch(err =>{
        console.log(err)
    })
}
/* spinner */
const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
      loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}
/* load Single Data */
const  loadSingleDataDetails =(id) =>{
    
    const URL =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
    .then(res =>res.json())
    .then(data =>showSingleDataDetails(data))
        toggleSpinner(true);
    }
/* show Single Data */
    const  showSingleDataDetails =(data =>{
        toggleSpinner(false);
        const showSingleData = document.getElementById('show-single-data');
        showSingleData.innerHTML = '';
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
        <d-iv   class="row g-4  ">
        <div  class="card col-md-6 p-5  " ">
        <h4>${data.data.description}</h4>
        <div class="d-flex justify-content-between gap-2">
        <div class="card p-2">
        <p class="card-text">${data.data.pricing[0].price + data.data.pricing[0].plan?data.data.pricing[0].price + data.data.pricing[0].plan:''}</p>
        </div>
        <div class="card p-2">
      <p class="card-text">${data.data.pricing[1].price + data.data.pricing[1].plan?data.data.pricing[1].price + data.data.pricing[1].plan:''}</p>
      </div>
      <div class="card p-2">
      <p class="card-text">${data.data.pricing[2].price + data.data.pricing[2].plan?data.data.pricing[2].price + data.data.pricing[2].plan:''}</p>
      </div>
      </div>
      <div class="d-flex justify-content-between my-2  gap-4">
      <div >
      <h4>Feature</h4>
    <ul>
    <li>${data.data.features[1].feature_name}</li>
    <li>${data.data.features[2].feature_name}</li>
    <li>${data.data.features[3].feature_name}</li>
    </ul>
    </div>
    <div class="pe-0 me-0 ms-auto" >
    <h4 class="me-2">integration</h4>
    <ul>
    <li>${data.data.integrations[0]}</li>
    <li>${data.data.integrations[1]}</li>
    <li>${data.data.integrations[2]}</li>
    </ul>
    </div>
    </div>
    </div>
    <div class="card col-md-6  ">
    <div class="p-3  position-relative">
    <img src="${data.data.image_link[0]}" class="card-img-top rounded " alt="...">
    <p class="btn btn-danger p-0 m-3 w-50  position-absolute top-0  start-50 translate-middle" ><span>${data.data.accuracy?.score?"" +data.data.accuracy.score +"% accuracy":''}</span></p>
    </div>
    <div class="text-center">
            <h5 class="mt-3">${data.data.input_output_examples[0].input}</h5>
            <p class="mt-3">${data.data.input_output_examples[0].output}</p>
            </div>
            </div>
            `
            showSingleData.appendChild(createDiv)
        })
        
        dataLoad()