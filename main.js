//Older
// const TypeWriter = function(txtElement, words, waitTime = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.waitTime = parseInt(waitTime, 10);
//   this.type();
//   this.isDeliting = false;
// };

// TypeWriter.prototype.type = function() {
//   const currentIndex = this.wordIndex % this.words.length;
//   const fullText = this.words[currentIndex];
//   console.log(fullText);

//   if (this.isDeliting) {
//     this.txt = fullText.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullText.substring(0, this.txt.length + 1);
//   }

//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   let typeSpeed = 300;

//   if (this.isDeliting) {
//     typeSpeed /= 2;
//   }

//   if (!this.isDeliting && this.txt === fullText) {
//     typeSpeed = this.waitTime;

//     this.isDeliting = true;
//   } else if (this.isDeliting && this.txt === "") {
//     this.isDeliting = false;

//     this.wordIndex++;
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

//ES6
class TypeWriter {
  constructor(txtElement, words, waitTime = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.waitTime = parseInt(waitTime, 10);
    this.type();
    this.isDeliting = false;
    this.typeSpeed = 150;
  }

  type() {
    const currentIndex = this.wordIndex % this.words.length;
    const fullText = this.words[currentIndex];
    console.log(fullText);

    if (this.isDeliting) {
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullText.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = this.typeSpeed;

    if (this.isDeliting) {
      typeSpeed /= 2;
    }

    if (!this.isDeliting && this.txt === fullText) {
      typeSpeed = this.waitTime;

      this.isDeliting = true;
    } else if (this.isDeliting && this.txt === "") {
      this.isDeliting = false;

      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init on DOM load
document.addEventListener("DOMContentLoaded", init);
//Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const waitTime = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, waitTime);
}
