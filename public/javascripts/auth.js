//本例中，拥有.switch类的有2个标签对象，querySelectorAll表示选择所有包含.switch类的标签对象
//authSwitchLinks是标签对象的数组
const authSwitchLinks = document.querySelectorAll('.switch');
//父标签包含类.auth,自身类是.modal的标签对象
//authModals是标签对象的数组
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');



// login form
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
   // loginForm.action = "/users";        
  //  loginForm.method = "post";        
//	loginForm.submit();

location.href="/users?email=jichen@qq.com&password=123wertyu";
  // const email = loginForm.email.value;
  // const password = loginForm.password.value;
  // firebase.auth().signInWithEmailAndPassword(email, password)
    // .then(user => {
      // console.log('logged in', user);
      // loginForm.reset();
    // })
    // .catch(error => {
      // loginForm.querySelector('.error').textContent = error.message;
    // });
	console.log(123);
	 var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      var bongsContainer = document.querySelector('.login');
      if (request.status === 200) {
        // Replace the BONG text with the response from the API.
		//在节点api中定义了res.json(....),会被request.responseText获取
		//如果打开的是一个文件，则request.responseText是文件内容
        console.log(request.getAllResponseHeaders());
	 // bongsContainer.innerHTML =(JSON.parse(request.responseText).status1);
		bongsContainer.innerHTML =request.responseText;
		console.log(request.responseText);
      } else {
        bongsContainer.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  var tt=12345;
 var dataT = {"vehicleType":"train","maxSpeed":115,"avgSpeed":100,"speedUnit":"mph"};
   var t05="love my dog!";
 var dataJson=(JSON.stringify(dataT));
     var t02="2021190";
	//request.open('Post','/api/123');
   //request.open('Get','/api/1001?id='+t05+'');
	//URL参数不固定
var url = "/users?email=jichen@qq.com&password=123wertyu";
//var url = "https://1973-104-152-160-85.ngrok.io/resource123";
  //request.open('GET',url);
  request.open('GET',url);
  //request.setRequestHeader("Access-Control-Allow-Origin","*"); 
//  request.setRequestHeader("Ocp-Apim-Subscription-Key","19c375f658994b0ca46558a882e86c5d"); 
//  request.setRequestHeader('Ocp-Apim-Trace','true');
  request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  request.setRequestHeader("Accept","application/json");
  // Start the ajax request.
  //request.send();
  request.send();
	
});








