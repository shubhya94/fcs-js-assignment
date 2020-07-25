

async function fetchAsync () {
    // await response of fetch call
    let response = await fetch('https://jsonplaceholder.typicode.com/todos ');
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
  }
  
  // trigger async function
  // log response or catch error of fetch promise
  fetchAsync()
      .then(data => console.log(data))
      .catch(reason => console.log(reason.message))