const descriptionText =
  'Hi everyone, this website is a project for the University of Vistula, have a nice viewing';
const autorText = ' Vadzim Zubouski 70670';
const descriptionContainer = document.getElementById('home__description');

function typeEffect(container, text) {
  return new Promise((resolve) => {
    let index = 0;
    let content = container.innerHTML;

    const step = () => {
      content += text[index];
      container.innerHTML = content;
      index++;

      if (index < text.length) {
        const time = Math.round(Math.random() * 70);
        setTimeout(step, time);
      } else {
        resolve();
      }
    };

    step();
  });
}

const pasteBr = (container) => {
  return new Promise((resolve) => {
    const br = document.createElement('br');
    container.appendChild(br);
    resolve();
  });
};

const pasteCursor = (container) => {
  return new Promise((resolve) => {
    const cursor = document.createElement('span');
    cursor.innerHTML = '|';
    cursor.className = 'cursor';
    container.appendChild(cursor);
    resolve();
  });
};

async function pasteDescription() {
  await typeEffect(descriptionContainer, descriptionText);
  await pasteBr(descriptionContainer);
  await pasteBr(descriptionContainer);
  await typeEffect(descriptionContainer, autorText);
  await pasteCursor(descriptionContainer);
}

if (descriptionContainer) {
  pasteDescription();
}


//contact 
const handleForm = (e) => {
  e.preventDefault();

  alert("The form was succesfully sent");
}