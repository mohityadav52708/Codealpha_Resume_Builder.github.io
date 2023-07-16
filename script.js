document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var summary = document.getElementById("summary").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var image = document.getElementById("image").files[0];
  
    var resumeOutput = document.getElementById("resumeOutput");
    var imageOutput = "";
    if (image) {
      var imageURL = URL.createObjectURL(image);
      imageOutput = `<img src="${imageURL}" alt="Profile Image" width="200">`;
    }
  
    var experienceItems = experience.split('\n').map(function(item) {
      return `<li>${item}</li>`;
    }).join('');
  
    resumeOutput.innerHTML = `
      <h2>${fullName}</h2>
      ${imageOutput}
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
  
      <h3>About Me</h3>
      <p>${summary}</p>
  
      <h3>Experience</h3>
      <ul>${experienceItems}</ul>
  
      <h3>Education</h3>
      <p>${education}</p>
    `;
  });
  