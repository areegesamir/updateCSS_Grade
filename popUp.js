// Open the modal
function openModal() {
    document.getElementById('deleteModal').style.display = 'block';
  }
  
  // Close the modal
  function closeModal() {
    document.getElementById('deleteModal').style.display = 'none';
  }
  
  // Handle user choice
  function deleteUser(confirmed) {
    if (confirmed) {
      // Implement your delete logic here
      console.log('User deleted!');
      closeModal();
    }
  }
  