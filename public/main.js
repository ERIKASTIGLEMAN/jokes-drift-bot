//global variables
let xhr = new XMLHttpRequest()
var conversationId = ''
var mulberry = ''

//function/ method GET from API
const getData = () => {
  axios
    .get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      mulberry = response.data.joke
      console.log(mulberry)
    })
}

//POST to Drift - CORS error causing POST to fail
const sendMessage = (conversationId, mulberry) => {
  xhr.open(
    'POST',
    `https://driftapi.com/v1/conversations/${conversationId}/messages`
  ),
    {
      'Content-Type': 'application/json',
    }

  xhr.send(mulberry)
}

//Event Listeners
//drift.on('button:click', sendMessage)
drift.on('message:sent', sendMessage)
drift.on('startConversation', getData)
drift.on('startConversation', function (data) {
  conversationId = data.conversationId
})
