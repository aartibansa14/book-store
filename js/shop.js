
function addToCart(b_id, b_name, b_price, b_image,b_del_price) {
  const data = {
    b_id,
    b_name,
    b_price,
    b_image, 
    b_del_price
  };

  fetch('/add-to-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(() => {
    // Handle success, e.g., show a message to the user
    alert('Item added to the cart!');
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
