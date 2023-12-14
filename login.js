function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (email !== '' && password !== '') {
    fetch('https://6578d1aaf08799dc80461841.mockapi.io/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Login successful!');
          window.location.href = 'taskmanager.html'; // Redirect to task manager page
        } else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Login failed. Please try again.');
      });
  } else {
    alert('Please fill in all fields.');
  }
}

// Event listener for logging in
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', loginUser);
