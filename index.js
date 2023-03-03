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
        // console.log(singleData.id)
        const {name,features,image,published_in,id} =singleData;
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
      <button onClick=loadSingleDataDetails('${id}') class="btn btn-outline ms-auto " ><img src="./image/btn.png" class=" img-fluid " alt="" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
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
 const  loadSingleDataDetails =(id) =>{

    const URL =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
    .then(res =>res.json())
    .then(data =>showSingleDataDetails(data))
    // .catch(err =>{
    //     console.log(err)
    // })

  }
  const  showSingleDataDetails =(data =>{
//    console.log(data.data.pricing[0].price)
//         console.log(data.data.pricing[0].plan)
//         console.log(data.data.pricing[1].price)
//         console.log(data.data.pricing[1].plan)
//         console.log(data.data.pricing[2].price)
//         console.log(data.data.pricing[2].plan)


 console.log(data.data.input_output_examples[0].input)
        // console.log(data.data.features[2].feature_name)
        // console.log(data.data.features[3].feature_name)

    const showSingleData = document.getElementById('show-single-data');
    const {description} = data.data;
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
    <div   class="row">
    <div  class="card col-md-6">
    <h4>${description}</h4>
    <div class="d-flex justify-content-between gap-2">
    <div class="card p-2">
      <p class="card-text"><span>${data.data.pricing[0].price}</span>   <span>${data.data.pricing[0].plan}</span></p>
    </div>
    <div class="card p-2">
      <p class="card-text"><span>${data.data.pricing[1].price}</span>   <span>${data.data.pricing[1].plan}</p>
    </div>
    <div class="card p-2">
      <p class="card-text"><span>${data.data.pricing[2].price}</span>   <span>${data.data.pricing[2].plan}</p>
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
    <div class="card col-md-6 ms-auto">
    <div class="p-3  position-relative">
            <img src="${data.data.image_link[0]}" class="card-img-top rounded " alt="...">
            <p class="btn btn-danger p-0 m-3 w-50  position-absolute top-0  start-50 translate-middle" ><span>${data.data.accuracy.score}</span>% accuracy</p>
        </div>
        <div class="text-center">
            <h5 class="mt-3">${data.data.input_output_examples[0].input}</h5>
            <p class="mt-3">${data.data.input_output_examples[0].output}</p>
        </div>
  </div>
    `
showSingleData.appendChild(createDiv)
    })
