// Add your code here

function submitData(name, email) {
  const body = document.body;
  
  return fetch("http://localhost:3000/users", configurationObject(name, email))
  .then(function (response) {          
    return response.json();
  })
  .then(function (object) {        
    body.innerHTML = object.id;
  })
  .catch(function (error) {
    body.innerHTML = error.message;
  });
  
  };

  function configurationObject(name, email) {
    let object = { method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email
    }),
  }
  return object
};

submitData();