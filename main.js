var reasons = [
    " My Family",
    "Amaira Dhawan",
    "Yuvaan Jain",
    "Thrish Arora",
    "Dhruv Arora",
    "Shubham Kakkar",
    "Juhi Kakkar",
    "Ishita Arora",
    "Isha Arora",
    "Piyush Dhawan",
    "Taran Arora",
    "Kavita Arora",
    "Lata Kakkar",
    "Parveen Kumar Arora",
    "Rakesh Kakkar"
  ];
  var images = [
    "Family Photo.jpg",
    "Amaira Dhawan.jpg",
    "Yuvaan Jain.jpg",
    "Thrish Arora.jpg",
    "Dhruv Arora.jpg",
    "Shubham Kakkar.jpg",
    "Juhi Kakkar.jpg",
    "Ishita Arora.jpg",
    "Isha Arora.jpg",
    "Piyush Dhawan.jpg",
    "Taran Arora.jpg",
    "Kavita Arora.jpg",
    "Parveen Kumar Arora.jpg",
    "Rakesh Kakkar.jpg"
  ];
  var next = 0;
  function nextslide() {
    document.getElementById("namefamily").innerHTML = reasons[next];
    document.getElementById("album").src = images[next];
    next++;
    document.getElementById("audio").play();
  }
  

