function addTask() {
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDeadline = document.getElementById('taskDeadline').value;

  const url = 'https://6578d1aaf08799dc80461841.mockapi.io/task';

  const newTask = {
      title: taskTitle,
      deadline: taskDeadline
  };

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
  })
  .then(response => {
      if (response.ok) {
          alert('Task added successfully!');
          // Additional logic if needed after adding the task
      } else {
          throw new Error('Failed to add task');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Failed to add task');
  });
}

