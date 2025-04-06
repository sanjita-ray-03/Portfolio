AOS.init()

// Working code
let form = document.querySelector(".third .main-body form");
        // The document.querySelector() method returns the first element that matches a specified CSS selector.
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // The preventDefault() method stops the form from submitting and prevents the page from refreshing.
            document.querySelector("#sub").value = "Submitting..";
            // Change the value of the submit button to "Submitting..." while the form is being submitted.
            let data = new FormData(form);
            // The FormData() method creates a new FormData object that contains the values of all the form fields.
            fetch('https://script.google.com/macros/s/AKfycbxCC1Y-T9tUNPFPCASNvRWP0KNS1N1yf6ma06eorRj0x_OIuQExThxmt8jzUveLJiaFYA/exec', {
                    method: "POST",
                    body: data
                })
                // The fetch() method is used to make a request to the server and retrieve data.
                // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
                .then(res => res.text())
                // The .then() method is used to handle the response from the server.
                // The response is converted to text using the res.text() method.
                .then(data => {
                    // document.querySelector("#msg").innerHTML = data;
                    alert("Your response is recorded ")
                    console.log(data)
                    // The innerHTML property sets or returns the HTML content of an element.
                    // Here, we are setting the content of the <h1> element to the response from the server.
                    document.querySelector("#sub").value = "Submit"
                    // Change the value of the submit button back to "Submit" after the form has been submitted.
                });
        });
        

     