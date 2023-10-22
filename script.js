/*fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(json => {
    console.log(json.name)
    document.getElementById("deneme").innerHTML = json.name
    document.getElementById("username").innerHTML = json.email
    

})
*/

/*
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      const userList = document.getElementById('username');
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
      
      const userEmail = document.getElementById('deneme');
      const emailItem = document.createElement('li');
      emailItem.textContent = user.email;
      userEmail.appendChild(emailItem);
    });
  })
  .catch(error => console.error('Error:', error));


*/
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const userList = document.getElementById('user-list');
    
    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;

      const emailItem = document.createElement('li');
      emailItem.textContent = user.email;

      const numberItem = document.createElement('li');
      numberItem.textContent = user.phone;

      // Ek olarak bir boşluk eklemek için bir boş `li` öğesi oluşturuyoruz.
      const spaceItem = document.createElement('li');
      spaceItem.innerHTML = "&nbsp;"; // Boşluk ekliyoruz.

      userList.appendChild(listItem);
      userList.appendChild(emailItem);
      userList.appendChild(numberItem);
      userList.appendChild(spaceItem); // Boşluğu ekliyoruz.
    });
  })
  .catch(error => console.error('Error:', error));
