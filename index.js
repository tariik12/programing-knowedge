
   let isSorted = false;
   let isLoad = false;
   const dataLoad = ()=>{
            fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res =>res.json())
            .then(data =>{
                if(isSorted && isLoad ==false){
                    const result = data.data.tools.sort((a, b) => new Date(b.published_in) - new Date(a.published_in))
                    displayData(result.slice(0,6))
                }
                else if(isSorted ===false && isLoad){
                    displayData(data.data.tools)
                }
                else if(isSorted && isLoad){
                    const result = data.data.tools.sort((a, b) => new Date(b.published_in) - new Date(a.published_in))
                    displayData(result)
                }
               else{
                displayData(data.data.tools.slice(0,6))
               }
            })    
            toggleSpinner(true);
    }
/* show six Data */
    const displayData =(data) =>{
            toggleSpinner(false);
        const displayContainer = document.getElementById('display-container');
            displayContainer.innerHTML = '';
        if(data.length === 6){
            document.getElementById('show-all-data').classList.remove('d-none'); 
        }
        else{
            document.getElementById('show-all-data').classList.add('d-none');
        }
        data.forEach(singleData =>{
            const {name,features,image,published_in,id}=singleData; 
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
                        <div>
                            <h5>${name}</h5>
                            <p class="card-text"><img src="./image/Vector.png" alt=""> ${published_in}</p>
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
            isLoad = true;
           
            dataLoad()
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
        const {description,features,image_link,input_output_examples,accuracy,pricing,integrations} = data;
        const integration =integrations?.map((integration)=>`<li>${integration?integration:''}</li>`).join('');       
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
                            <div>
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
                        <p class="btn btn-danger ${(accuracy.score)?accuracy.score:'d-none'}  p-0  w-50  position-absolute top-0  start-50 translate-middle" >${(accuracy.score)?accuracy.score+'% accuracy' :''}</p>
                    <div class="card-body text-center">
                        <h5 class="card-title">${input_output_examples?input_output_examples[0].input:'Can you give any example?'}</h5>
                        <p class="card-text">${input_output_examples?input_output_examples[0].output:'No! Not Yet! Take a break!!!'}</p>
                    </div> 
                </div>
            </div>
        </div>
        `
        showSingleData.appendChild(createDiv)
    })

const sortByDate = ()=>{
    isSorted = true;
    dataLoad()
}