// Get the form element
const form = document.getElementById('my-form');

// Listen for form submit event
form.addEventListener('submit', submitForm);

// Define submitForm function
function submitForm(e) {
  // Prevent form from submitting
  e.preventDefault();

  // Get form values
  const syllabus = document.getElementById('syllabus').value;
  const pdfFile = document.getElementById('pdfFile').files[0];

  // Validate form values
  if (!syllabus || !pdfFile) {
    alert('Please fill out the form completely.');
    return;
  }

  // Create new FormData object
  const formData = new FormData();

  // Add form data to FormData object
  formData.append('syllabus', syllabus);
  formData.append('pdfFile', pdfFile);

  // Send form data to server
  fetch('api/generate-notes', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Check for success message
    if (data.success) {
      // Show success message
      alert('Study notes generated successfully!');

      // Redirect to download page
      window.location.href = `/download/${data.notesId}`;
    } else {
      // Show error message
      alert('Error generating study notes.');
    }
  })
  .catch(error => console.error(error));
}