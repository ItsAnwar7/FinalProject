const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change",  function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image =reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

console.log(`مشاكل رصيف`);

document.getElementById('MyButton').onclick = function(){
  var myName = document.getElementById("fname").value;
  console.log("اسم المُبلغ", myName);
  var myNumber = document.getElementById("lname").value;
  console.log("رقم المُبلغ ", myNumber);
  var effects = document.getElementById("effects").value;
  console.log("الاضرار الجانبية ", effects);
  var img = document.getElementById("image_input").value;
  console.log("صورة ", img);
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
