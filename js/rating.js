
const labelColorAinActiv = "#eee";
const labelColorAActiv = "#ffcb31";

const ratingsLabels = document.querySelectorAll("form.star label");
const ratingsInputs = document.querySelectorAll("form.star input");

// make inputs disappear
ratingsInputs.forEach(function(anInput) {
  anInput.style.display = "none";
});

// manage label click & hover display
function notationLabels(e) {
  let currentLabelYellow = e.target;
  let currentLabelBlack = e.target;
  
  // console.log(e.target.localName);
  
  if (e.type == "mouseenter" || !e.target.control.checked) {
    // coloring yellow from the clicked/hovered label included, going backward till the node start - if we are hovering or the star isn't already checked.
    while (currentLabelYellow != null) {
      currentLabelYellow.style.color = labelColorAActiv;
      currentLabelYellow = currentLabelYellow.previousElementSibling;
    }

    // coloring black from the clicked/hovered label excluded, going forward till the node end
    while ((currentLabelBlack = currentLabelBlack.nextElementSibling) != null) {
      currentLabelBlack.style.color = labelColorAinActiv;
    }
  } else {
    // if the clicked label was already checked we uncheck it and prevent the click event from doing its job - defacto enabling zero star rating
    e.target.control.checked = false;
    e.preventDefault();
  }
  
}

function notationLabelsOut(e) {
  let notesNode = e.target.parentNode.querySelectorAll("label");
  let currentLabel = notesNode[notesNode.length - 1];
  
  // console.log("out : " + e.target.localName);
  // console.log("out checked: " + e.target.control.checked);
  
  notesNode.forEach(function yellowrum(starLabel) {
    starLabel.style.color = labelColorAActiv;
  });

  while (currentLabel != null && !currentLabel.control.checked) {
    currentLabel.style.color = labelColorAinActiv;
    currentLabel = currentLabel.previousElementSibling;
    
    //console.log("currentLabel null?: " + currentLabel);
    // previousElementSibling become the input ...
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ratingsLabels.forEach(function(aStar) {
    aStar.style.color="#eee";
    aStar.addEventListener("click", notationLabels);
    aStar.addEventListener("mouseenter", notationLabels);
    aStar.addEventListener("mouseout", notationLabelsOut);
  });

  // stop a callback to the label click event function notationLabels passed on the input element associated ... why ... that's behond me
  // alternatively we could check for e.target.localName in the notationLabels function
  ratingsInputs.forEach(function(aStarInput) {
    aStarInput.addEventListener("click", function(e) {
    e.stopPropagation();
    });
  });
});


//Service Rating
const rateItem = $('.inner-item');
const starsItem = $('.inner-item star');

const rate = rateItem.data('rate');
const percentage = rate/5 *100;

const rateProgressBar = $('.inner-item .progress .progress-bar');
rateProgressBar.width
console.log(percentage);
rateProgressBar.css({'width': `${percentage}%` });