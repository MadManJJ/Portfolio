const scrollToElement = (elementId) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Element with ID "${elementId}" not found.`);
  }
};

export default scrollToElement;
