// Fotoğraf silme işlemi
const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const photo = button.parentNode.parentNode;
    photo.parentNode.removeChild(photo);
  });
});

// Fotoğraf düzenleme işlemi
const editButtons = document.querySelectorAll('.edit-button');
const editPanel = document.querySelector('.edit-panel');
const editForm = editPanel.querySelector('form');
const editInput = editForm.querySelector('input[type="file"]');
editButtons.forEach(button => {
  button.addEventListener('click', () => {
    editPanel.style.display = 'block';
    editInput.focus();
  });
});
editForm.addEventListener('submit', event => {
  event.preventDefault();
  const photo = document.createElement('div');
  photo.classList.add('photo');
  const img = document.createElement('img');
  img.src = URL.createObjectURL(editInput.files[0]);
  const buttons = document.createElement('div');
  buttons.classList.add('photo-buttons');
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Sil';
  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.textContent = 'Düzenle';
  buttons.appendChild(deleteButton);
  buttons.appendChild(editButton);
  photo.appendChild(img);
  photo.appendChild(buttons);
  const gallery = document.querySelector('.gallery');
  gallery.appendChild(photo);
  editPanel.style.display = 'none';
  editForm.reset();
});

// Fotoğraf büyütme işlemi
const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content');
const closeBtn = modal.querySelector('.close-button');
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
  const img = photo.querySelector('img');
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.src = img.src;
  });
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.src = '';
});