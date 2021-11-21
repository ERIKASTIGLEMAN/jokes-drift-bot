<script>
  axios.get('https://jsonplaceholder.typicode.com/user')
  .ten(response => {
    console.log(response.data);
  })
  .catch(error => console.error(error));
