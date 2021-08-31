  
 const submitData = (name, email) => {
     const formData = { name, email };
    const dataToSubmit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
      
      return fetch("http://localhost:3000/users", dataToSubmit)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
            document.body.append(`<p>${object.id} ${object.name} ${object.email}</p>`)
          return object;
        })
        .catch(function (error) {
            document.body.append(`<p>${error.message}</p>`);
            return error.message;
        });
 } 