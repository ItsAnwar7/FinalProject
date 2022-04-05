console.log(`ازدحام`);

document.getElementById('MyButton').onclick = function(){
  var myName = document.getElementById("fname").value;
  console.log("اسم المُبلغ", myName);
  var myNumber = document.getElementById("lname").value;
  console.log("رقم المُبلغ ", myNumber);
  var effects = document.getElementById("effects").value;
  console.log("الاضرار الجانبية ", effects);
}
function restricAlphabets(e){
  var x = e.which || e.keycode;
  if((x >= 48 && x <= 57))
  return true;
  else
  return false;
}


const findMyLocation =() =>{

    const status = document.querySelector(`.status`);

    const success =(position)=> {
       console.log(position)
       const latitude = position.coords.latitude;
       const longitude = position.coords.longitude;

       const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ar`

       fetch(geoApiUrl)
       .then(res => res.json())
       .then(data =>{
         status.textContent = data.principalSubdivision
       })
    }

    const error = () => {
        status.textContent = 'غير مسموح للوصول للموقع';
    }
    navigator.geolocation.getCurrentPosition(success, error);

}

document.querySelector('.location').addEventListener('click', findMyLocation);


const form = document.querySelector('#report');
const usernameInput = document.querySelector('#fname');
const usernumberInput = document.querySelector('#lname');
const  effectsInput = document.querySelector('#effects');

form.addEventListener('ارسال', (event)=>{
   event.preventDefault();

   validateForm();
});

function validateForm(){
  if(usernameInput.value.trim()==''){
    setError (usernameInput, 'الرجاء إضافة الاسم ')
  }
}

function setError(element, errorMassage){
  const parent = element.parentElement
  parent.classList.add('error');
}
