//Get referwncea to the foem and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLFormElement;

//Handle form submission 
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); //prevent page reload

    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiance = (document.getElementById('experiance') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
   
     // generate the resume content dynamically
     const resumeHTML = `
     <h2><b> Editable Resume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name</b> <span contenteditable="true">${name}</span></p>
      <p><b>Email</b><span contenteditable="true">${email}</span></p>
       <p><b>Phone</b><span contenteditable="true">${phone}</span></p>

       <h3>Education</h3>
       <p contenteditable="true">${education}</p>

       <h3>Experiance</h3>
       <p contenteditable="true">${experiance}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
                 
        `;

        //Display the genrated resume
        if(resumeDisplayElement){
            resumeDisplayElement.innerHTML=resumeHTML;
        }else{
            console.error(`The resume display element is missing`);
            
        }
});
