const dataLoad = ()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data =>displayData(data.data.tools.slice(0,6)))
  
    toggleSpinner(true);
}

/* show six Data */
const displayData =(data) =>{
    toggleSpinner(false);
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerHTML = '';

    // const showAll = document.getElementById('show-all-data');
    if(data.length === 6){
        document.getElementById('show-all-data').classList.remove('d-none'); 
    }
    else{
        document.getElementById('show-all-data').classList.add('d-none');
    }

    // console.log(data)
    data.sort().forEach(singleData =>{
        // console.log(singleData.features)
        // console.log(singleData)
        const {name,features,image,published_in,id}=singleData; 
        // console.log(published_in)
        // const d = [...published_in]
        // console.log(d)
        // const sortByDate =  document.getElementById('sort-by-date');



        // let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

        // // sort the array in ascending order
        // arr.sort();
        // // console.log(arr); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
        
        // // sort the array in descending order
        // arr.sort(function(a, b) {
        //   return b - a;
        // });
        // console.log(arr); // [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]

        
        const feature =features.map((feature)=>`<li>${feature}</li>`).join('');
  
        
        
        const createDiv =document.createElement('div');
        createDiv.innerHTML =` 

        <div class="card h-100 p-2">
        <img src="${image}" class="card-img-top  rounded h-100 "  alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol class="">
                ${feature}
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
    
    // /* show All Data */
     showAll =() =>{
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
        .then(data =>showSingleDataDetails(data.data))
        toggleSpinner(true);
    }
/* show Single Data */
const  showSingleDataDetails =(data =>{
    toggleSpinner(false);
    // console.log(data.features)
    // console.log(data.integrations
    //   )
    
   
  console.log(data)

    //  data.features.forEach(feature=>console.log(feature))
    const {description,features,image_link,input_output_examples,accuracy,pricing,integrations} = data;
    // const {feature_name}=features
    
   
    

    const integration =integrations?.map((integration)=>`<li>${integration?integration:''}</li>`).join('');
    // console.log(features.feature_name)
  
    // console.log(integrations)
    // console.log(integration)
    
    // console.log(pricing[0].plan)
    // console.log(pricing[0].price)
  
        
    const showSingleData = document.getElementById('show-single-data');
    showSingleData.innerHTML = '';
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class=" col ">
      <div class="modal-color1 p-4  card h-100">
        <div class="card-body">
          <h5 class="card-title">${description}</h5>
        <div class="d-flex justify-content-between gap-2">
        <div class="card p-2">
            <p class="card-text">${pricing?pricing[0].price + '\n ' + pricing[0]. plan:'Free Of Cost/Pro'}</p>
        </div>
        
        
        <div class="card p-2">
          <p class="card-text">${pricing?pricing[1].price + '\n ' + pricing[1].plan:'Free Of Cost/Pro'}</p>
        </div>
        <div class="card p-2">
            <p class="card-text">${ pricing?pricing[2].price + '\n ' + pricing[2].plan:'Free of Cost /Enterprise'}</p>
        </div>
    </div> 
    <div class="d-flex justify-content-between my-2  gap-4">
    <div >
        <h4>Feature</h4>
        <ul>
            <li>${features[1].feature_name}</li>
            <li>${features[2].feature_name}</li>
            <li>${features[3].feature_name}</li>
            <li class=" ${(features[4])?features[4].feature_name:'d-none'}" >${features[4]?features[4].feature_name:''}</li>
        </ul>
    </div>
<div class="pe-0 me-0 ms-auto" >
        <h4 class="me-2">integration</h4>
        <ul>
    ${integrations?integration:'No data Found'}
    </ul>
    </div>
    
    </div>
        </div>
      </div>
    </div>


    <div class="col ">
      <div class="modal-color2  card p-4 h-100">
        <img src="${image_link[0]}" class="card-img-top rounded" alt="...">
        <p class="btn btn-danger ${(accuracy.score)?accuracy.score:'d-none'}  p-0 m-3 w-50  position-absolute top-0  start-50 translate-middle" >${(accuracy.score)?accuracy.score+'% accuracy' :''}</p>
        <div class="card-body text-center">
          <h5 class="card-title">${input_output_examples?input_output_examples[0].input:'No! Not Yet! Take a break!!!'}</h5>
          <p class="card-text">${input_output_examples?input_output_examples[0].output:'No! Not Yet! Take a break!!!'}</p>
        </div>
        
      </div>
    </div>
  </div>
    `
    showSingleData.appendChild(createDiv)
})


// const dates = ['2022-10-20', '2023-03-04', '2022-06-15'];

// const sortedDates = dates.sort((a, b) => new Date(a) - new Date(b));

// console.log(sortedDates); // output: ["2022-06-15", "2022-10-20", "2023-03-04"]
