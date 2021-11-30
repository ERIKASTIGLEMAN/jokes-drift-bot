let xhr = new XMLHttpRequest()

var conversationId = ''
var mulberry = ''

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
/*const receiveJoke = function (message) {
  let request_arg = {
    method: 'POST',
    url: `https://driftapi.com/v1/conversations/${conversationId}/messages`,
    json: true,
    headers: {
      'User-Agent': 'request',
    },
    data: {
      messages: [
        {
          conversationId: conversationId,
          body: mulberry,
        },
      ],
    },
  }
}*/
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

drift.on('message:sent', sendMessage)
drift.on('startConversation', getData)
drift.on('startConversation', function (data) {
  conversationId = data.conversationId
})
//
//document.addEventListener('DOMContentLoaded', main)
