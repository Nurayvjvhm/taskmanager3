function signUpUser(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (name !== '' && email !== '' && password !== '') {
    fetch('https://6578d1aaf08799dc80461841.mockapi.io/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Sign up successful! You can now log in.');
          window.location.href = 'login.html'; // Redirect to login page
        } else {
          alert('Sign up failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Sign up failed. Please try again.');
      });
  } else {
    alert('Please fill in all fields.');
  }
}

// Event listener for signing up
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', signUpUser);
