var username = localStorage.getItem("username");
  var dispElement = document.getElementById("disp");
  dispElement.textContent = "Welcome, " + username + "!";
  document.querySelector('#gojo').onclick=() =>{
    document.querySelector('.chatbot').classList.toggle('active')
}
document.getElementById("open-popup-btn").addEventListener("click",function() {
	const emailInput = document.getElementById('email');
        const email = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (emailPattern.test(email)) {
            alert('Thank You for subscribing to us look out to your mail for daily updates regarding us.');
        } else {
            alert('Please enter a valid email address.');
        }
    }
);
document.getElementById("open-btn").addEventListener("click",function() {
	const emailInput = document.getElementById('mail');
        const email = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (emailPattern.test(email)) {
            alert('Thank You for contacting to us look out to your mail for daily updates regarding us.');
        } else {
            alert('Please enter a valid email address.');
        }
    }
);  