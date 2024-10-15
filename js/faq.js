function toggleFaq(element) {
  const answer = element.nextElementSibling;
  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    answer.style.opacity = "0";
    setTimeout(() => {
      answer.style.visibility = "hidden";
    }, 400); // Match the transition duration in CSS
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    answer.style.opacity = "1";
    answer.style.visibility = "visible";
  }
}
