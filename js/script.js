const imagesArr = [
    "./images/homepage/img-1.png",
    "./images/homepage/img-2.png",
    "./images/homepage/img-3.png"
    ];

  let imgIndex = 0;
  
  const imgElement = document.getElementById('img');

  function prev(){
    imgIndex==0 ? imgIndex = imagesArr.length - 1 : imgIndex--;

    imgElement.src=imagesArr[imgIndex]
  }

  function next(){
    (imgIndex == imagesArr.length - 1) ? imgIndex = 0 : imgIndex++;

    imgElement.src=imagesArr[imgIndex]
  }