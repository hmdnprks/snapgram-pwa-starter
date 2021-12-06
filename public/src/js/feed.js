

var postFeedArea = document.querySelector('#feed-post-wrapper');

function createSvg() {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', 'currentColor');
  iconSvg.setAttribute('viewBox', '0 0 20 20');
  iconSvg.setAttribute('class', 'fill-current text-red-400 w-5 mr-2');

  iconPath.setAttribute(
    'd',
    'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
  );
  iconPath.setAttribute('fill-rule', 'evenodd');
  iconPath.setAttribute('clip-rule', 'evenodd');

  iconSvg.appendChild(iconPath);

  return iconSvg;
}

function createCard(data) {
  var cardWrapper = document.createElement('div');
  cardWrapper.className = 'card text-left shadow-2xl mb-5 post-card-group';
  var cardImageWrapper = document.createElement('figure');
  var cardImage = document.createElement('img');
  cardImage.src = data.image;
  cardImage.className = 'rounded-xl rounded-b-none h-60 object-cover';
  cardImageWrapper.appendChild(cardImage);
  var cardBody = document.createElement('div');
  cardBody.className = 'card-body p-5';
  var locationWrapper = document.createElement('div');
  locationWrapper.className = 'flex mb-2';
  var locationText = document.createElement('p');
  locationText.textContent = data.location;
  locationText.className = 'font-medium';
  locationWrapper.appendChild(createSvg());
  locationWrapper.appendChild(locationText);
  var captionTextWrapper = document.createElement('p');
  captionTextWrapper.className = 'font-normal';
  var caption = data.caption;
  var usernameText = document.createElement('span');
  usernameText.className = 'text-black font-bold';
  usernameText.textContent = data.username;
  captionTextWrapper.append(usernameText);
  captionTextWrapper.append(' ' + caption);
  cardBody.appendChild(locationWrapper)
  cardBody.appendChild(captionTextWrapper);
  cardWrapper.appendChild(cardImageWrapper);
  cardWrapper.appendChild(cardBody);
  postFeedArea.appendChild(cardWrapper);
}