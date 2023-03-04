{/* <d-iv   class="row g-4  ">
    <div  class="card col-md-6 p-5  " ">
    <h4>${description}</h4>
    <div class="d-flex justify-content-between gap-2">
    <div class="card p-2">
        <p class="card-text">${data.pricing[0].price + data.pricing[0].plan?data.pricing[0].price + data.pricing[0].plan:''}</p>
        </div>
        <div class="card p-2">
        <p class="card-text">${data.pricing[1].price + data.pricing[1].plan?data.pricing[1].price + data.pricing[1].plan:''}</p>
        </div>
        <div class="card p-2">
        <p class="card-text">${data.pricing[2].price + data.pricing[2].plan?data.pricing[2].price + data.pricing[2].plan:''}</p>
        </div>
        </div>
        <div class="d-flex justify-content-between my-2  gap-4">
            <div >
                <h4>Feature</h4>
                    <ul>
                        <li>${features[1].feature_name}</li>
                        <li>${features[2].feature_name}</li>
                        <li>${features[3].feature_name}</li>
                    </ul>
            </div>
        <div class="pe-0 me-0 ms-auto" >
        <h4 class="me-2">integration</h4>
                <ul>
                    <li>${data.integrations[0]}</li>
                    <li>${data.integrations[1]}</li>
                    <li>${data.integrations[2]}</li>
                </ul>
            </div>
        </div>
        </div>
        <div class="card col-md-6  ">
    <div class="p-3  position-relative">
    <img src="${data.image_link[0]}" class="card-img-top rounded " alt="...">
    <p class="btn  p-0 m-3 w-50  position-absolute top-0  start-50 translate-middle" >${data.accuracy?.score?"" + data.accuracy.score +"% accuracy":''}</p>
    </div>
  
    </div>
    `
    showSingleData.appendChild(createDiv) */}













        // console.log(data.data.features[1].feature_name)
        // console.log(data.data.features[2].feature_name)
        // console.log(data.data.features[3].feature_name)

// console.log(data.data.integrations[0])
// console.log(data.data.integrations[1])
// console.log(data.data.integrations[2])

//  console.log(data.data.input_output_examples[0].input)
//  console.log(data.data.input_output_examples[0].output)
//  console.log(data.data)







        <div class="d-flex justify-content-between gap-2">
            <div class="card p-2">
                <p class="card-text">${data.pricing?data.pricing[0].price && data.pricing[0].plan:'Free Of Cost/Pro'}</p>
            </div>
            <div class="card p-2">
              <p class="card-text">${data.pricing?data.pricing[1].price && data.pricing[1].plan:'Free Of Cost/Pro'}</p>
            </div>
            <div class="card p-2">
                <p class="card-text">${data.pricing?data.pricing[2].price &&   data.pricing[2].plan:'Free of Cost /Enterprise'}</p>
            </div>
        </div>



// document.getElementById('sort-by-date').addEventListener('click',function(){
//     const sorting = sortAllData =>{
//         sortAllData.sort(
//             (a,b)=>new Date(a.published_in)-new Date(b.published_in)
//         );
//         const seeMoreBtn = 
//     }
// })


const tools =  document.getElementById('sort-by-date')
tools.sort((a, b) => new Date(b.published_in) - new Date(a.published_in))