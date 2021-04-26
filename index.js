
function btn_hamburguer() {
  if (document.getElementsByClassName("disabled")) {
    console.log("romeve disabled")
    document.getElementById("btn_primary").classList.add('active');
    document.getElementById("btn_primary").classList.remove('disabled');

  }
  else {
    console.log("remove active")
    document.getElementById("btn_primary").classList.remove('active');
  }
};
