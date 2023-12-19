let data = [];

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
                data = json;
                console.log(data);
            })
 
 document.querySelector('#input').addEventListener('keyup', () => {
    let search = document.querySelector('#input').value;
    let select = [];
    if(String(search).length >0) {
           select = data.filter(product => String(product.title).includes(search));
           selecteditem(select)
    }else{
      removeItems();
    }
 })           
 
 function selecteditem(products) {
        removeItems();
        products.forEach(product => {
        prodLists(product);
       })
 }
  
 let results = document.querySelector('.results');

 function prodLists(product) {

      let resultdiv = document.createElement('div')
      let pic = document.createElement('img')
      let title = document.createElement('h4')
      let price = document.createElement('p')
      let button = document.createElement('button')
  
      pic.src = product.image;
      title.innerText = product.title;
      price.innerText = product.price;
      button.innerText = 'Purchase';
  
      resultdiv.appendChild(pic);
      resultdiv.appendChild(title);
      resultdiv.appendChild(price);
      resultdiv.appendChild(button);
      resultdiv.className = 'result';
  
      results.appendChild(resultdiv);  
  }
 function removeItems() {
       document.querySelectorAll('.result').forEach(prod => {
       prod.remove();
    })
 }