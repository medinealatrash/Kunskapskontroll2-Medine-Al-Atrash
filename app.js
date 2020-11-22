//select the necessary elements from the HTML document
let container = document.querySelector('.container');
let containerTop = document.querySelector('.container-top');
let messageAccepted = document.querySelector('.accepted');
let messageError = document.querySelector('.error');
let errorFetch = document.querySelector('.errorFetch')
let inputForm = document.querySelector('.input-form');
let containerCenter = document.querySelector('.container-center');
let difference = document.querySelector('.difference');
let containerBottom = document.querySelector('.container-bottom');
let loadingImg = document.querySelector('.loading') 
let input = document.querySelector('.my-input');
let btn = document.querySelector('.my-btn');

//API key here
//const apiKey = `b5ba791bba7c54df7c0894859744af9e`; 



//create an action when the button is clicked
inputForm.addEventListener('submit', function(e){
    console.log(e.target);
    
   
  //create a variable that will take values from the input field 
    cityName = input.value;
    input.value = ' ';


   let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
  

   //the middle part of the document becomes visible, the loading element appears
    containerCenter.style.display = 'grid';
    loadingImg.style.display = 'block';


//We create blocks (div) that will display the information of interest to us
    let card = document.createElement('div');
    card.setAttribute('class','card');
    containerCenter.appendChild(card);
    let allCard = document.querySelectorAll('.card');
    let tempDiff;
    
//create an element that will display icons corresponding to the weather in a given city
    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('class','weather-icon');
    card.appendChild(weatherIcon);
//create a block that will contain information about the weather in the city of interest to us
    let weatherInfo = document.createElement('div');
    weatherInfo.setAttribute('class','weather-info');
    card.appendChild(weatherInfo);


    let h3City = document.createElement('h3');
    h3City.setAttribute('class','city');

    weatherInfo.appendChild(h3City)
   
    let ul = document.createElement('ul');
    weatherInfo.appendChild(ul);



    let liTemp = document.createElement('li');
    liTemp.setAttribute('class','temperature');
    
   

    let liHumidity = document.createElement('li');
    liHumidity.setAttribute('class','humidity');
    

    let liDecription = document.createElement('li');
    liDecription.setAttribute('class','description');

    let liPressure = document.createElement('li');
    liPressure.setAttribute('class','pressure');

    let liWindSpeed = document.createElement('li');
    liWindSpeed.setAttribute('class','wind-speed');

    
  
    e.preventDefault();
});