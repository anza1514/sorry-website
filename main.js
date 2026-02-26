
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Mein Apki Birtday bhool gya na 🥺";
 
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
gif.style.width = "400px"; 
  noBtn.innerHTML = "No sorry";
  yesBtn.innerHTML = "Jain Maaaf Keya";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Thank you Janah g!";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Please Sorry naa!";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Accha thik hai";
    noBtn.innerHTML = "Nahi ";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Thank you Janah g!";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "Mein Booht sherminda hun 🥺";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "Chalo maaf gai";
      noBtn.innerHTML = "Bilkul nhii";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Thank you Janah g !";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "Mein esy nhi jany don ga";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "Achaa Maaf keya";
        noBtn.innerHTML = "Thk hey";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "Thank you Janah g !!";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })
        // Hover effect for the "yes" button
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50; // Margin from each side
        
          // Calculate maximum available space for the button
          const maxX = screenWidth - yesBtnRect.width - margin * 2; // Considering margin on both sides
          const maxY = screenHeight - yesBtnRect.height - margin * 2; // Considering margin on both sides
        
          // Generate random position within the available space
          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin; // Add margin to X position
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin; // Add margin to Y position
        
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });
        
        
      });
    });
  });
});




