document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formularioreg').addEventListener('submit', function(event) {
        event.preventDefault();
    
    
        // Crear un objeto FormData para obtener los valores del formulario
        const formData = new FormData(event.target);
      
        // Convertir los datos del formulario en un objeto JSON
        const jsonObject = {};
        formData.forEach(function(value, key) {
          jsonObject[key] = value;
        });
      
        // Solicitud método POST, header para indicar que estamos enviando datos en formato JSON
        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // Convierto el objeto jsonObject en una cadena JSON
          body: JSON.stringify(jsonObject)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta del servidor:', data);
        })
        
        .catch(error => {
          console.error('Error en la solicitud:', error);
        });
      });
    });

