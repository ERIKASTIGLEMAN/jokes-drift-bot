const getBtn = () => {
  return document.getElementById('btn')
}

const getData = () => {
  axios
    .get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      document.querySelector('#dadJokes').textContent = response.data.joke
    })
}

function main() {
  if (document.querySelector('#btn')) {
    getBtn().addEventListener('click', getData)
  }
}

//
document.addEventListener('DOMContentLoaded', main)
