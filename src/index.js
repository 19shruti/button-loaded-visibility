import "./styles.css";

// This code sets up a handler for the welcome panel's "LOADED" button
// that hides the welcome panel IF THE .HIDDEN PART IS TRUE ie. the loaded button is clicked .
document.getElementById("okButton").addEventListener(
  "click",
  function () {
    document.getElementById("welcome").hidden = true;
  },
  true
);
