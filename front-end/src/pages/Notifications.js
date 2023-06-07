const logo = document.createElement('img');
logo.src = './Pinkture.jpg';
logo.alt = 'Logo';
logo.classList.add('logo');

const h1 = document.createElement('h1');
h1.textContent = 'Notifications';
h1.style.padding = '50px';

const notificationContainer = document.createElement('div');
notificationContainer.classList.add('notification-container');

const createNotification = (iconSrc, title, time, message) => {
  const notification = document.createElement('div');
  notification.classList.add('notification');

  const icon = document.createElement('img');
  icon.src = iconSrc;
  icon.alt = 'Notification Icon';
  icon.classList.add('notification-icon');

  const content = document.createElement('div');
  content.classList.add('notification-content');

  const notificationTitle = document.createElement('div');
  notificationTitle.classList.add('notification-title');
  notificationTitle.textContent = title;

  const notificationTime = document.createElement('div');
  notificationTime.classList.add('notification-time');
  notificationTime.textContent = time;

  const notificationMessage = document.createElement('div');
  notificationMessage.classList.add('notification-message');
  notificationMessage.textContent = message;

  content.appendChild(notificationTitle);
  content.appendChild(notificationTime);
  content.appendChild(notificationMessage);

  notification.appendChild(icon);
  notification.appendChild(content);

  return notification;
};

const notification1 = createNotification(
  './kedicik.jpg',
  'New Message',
  '2 hours ago',
  'You have a new message from John.'
);
const notification2 = createNotification(
  './kedicik.jpg',
  'New Comment',
  '4 hours ago',
  'Jane commented on your post.'
);
const notification3 = createNotification(
  './kedicik.jpg',
  'Friend Request',
  'Yesterday',
  'You have a new friend request from Alex.'
);

notificationContainer.appendChild(notification1);
notificationContainer.appendChild(notification2);
notificationContainer.appendChild(notification3);

document.body.appendChild(logo);
document.body.appendChild(h1);
document.body.appendChild(notificationContainer);