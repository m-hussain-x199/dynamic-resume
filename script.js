document.getElementById('generate-resume').addEventListener('click', function() {
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
  
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
  
    const workExperience = document.getElementById('work-experience').value;
    const skills = document.getElementById('skills').value;
  
    // Validate Input Fields
    if (!name || !email || !phone || !address || !degree || !institution || !year) {
      alert('Please fill all required fields!');
      return;
    }
  
    // Inject data into resume
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = `Email: ${email}`;
    document.getElementById('display-phone').textContent = `Phone: ${phone}`;
    document.getElementById('display-address').textContent = `Address: ${address}`;
  
    document.getElementById('display-education').textContent = `${degree} from ${institution}, ${year}`;
    document.getElementById('display-work').textContent = workExperience || "No work experience provided.";
    document.getElementById('display-skills').textContent = skills || "No skills provided.";
  
    // Show the resume with animation
    const resumeSection = document.getElementById('resume-section');
    resumeSection.classList.remove('hidden');
    resumeSection.classList.add('show');
  
    // Hide the form after generation
    document.getElementById('resume-form').classList.add('hidden');
  });
  
  document.getElementById('edit-resume').addEventListener('click', function() {
    // Toggle back to form editing
    document.getElementById('resume-form').classList.remove('hidden');
    document.getElementById('resume-section').classList.remove('show');
    document.getElementById('resume-section').classList.add('hidden');
  });
  