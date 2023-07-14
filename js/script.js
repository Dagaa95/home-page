{
  const welcome = () => {
    console.log("Witam wszystkich!");
  }

  const init = () => {
    const button = document.querySelector(".js-button");
    const photo = document.querySelector(".js-photo");


    button.addEventListener("click", () => {
      photo.remove();
    });


    welcome();
  };

  init();
};