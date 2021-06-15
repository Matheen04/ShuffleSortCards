// Define the constants that will be used in this file
const MAX_CARDS_LIMIT = 9;
const CARDS_COLOR_ARRAY = {
  1: "#BFAEAE",
  2: "#333333",
  3: "#96967F",
  4: "#746464",
  5: "#72C3DC",
  6: "#2B8EAD",
  7: "#6F98A8",
  8: "#BFBFBF",
  9: "#2F454E",
};
const MOBILE_WIDTH = "375px";
const MOBILE_CARD_BACKGROUND_COLOR = "#E0D7D7";
const CARDS_LIST_CONTAINER_ID = "cards-list-container";
const SHUFFLE_BUTTON_ID = "#shuffle-button";
const SORT_BUTTON_ID = "#sort-button";

// cardsList - Fetch the id of cards lit container. Creating this as global variable, using let since this is used across the program
let cardsList = document.getElementById(CARDS_LIST_CONTAINER_ID);

// displayArray - This is an which is always updated based on sort or shuffle. This will always have latest value that is shown on UI.
let displayArray = [];

// windowWidth - Used to find the windowWidth to apply different styles based on screen size. In this case fo mobile version.
const windowWidth = window.matchMedia(`(max-width: ${MOBILE_WIDTH})`);

// updateColorAndNumberBasedOnStyle - This method is used to check the window size and assign appropriate color and border
const updateColorAndNumberBasedOnStyle = (element, itemNumber) => {
  if (windowWidth?.matches) {
    element.style.backgroundColor = MOBILE_CARD_BACKGROUND_COLOR;
    // This is used to show the color of the card as a margin on the left in case of mobile version
    element.style.borderLeft = `10px solid ${CARDS_COLOR_ARRAY[itemNumber]}`;
  }
  // Below condition is to check if its not a mobile version i.e. if its greater than mobile that may be ipda, desktop etc.
  else {
    element.style.backgroundColor = CARDS_COLOR_ARRAY[itemNumber];
    element.style.borderLeft = "";
  }
};

// setElementOnload - This method creates the cards with its appropriate color
const setElementOnload = (maxcardsLimit) => {
  // Used native for loop so that i can loop until maximum card limit i.e. in this case it is 9.
  for (let itemNumber = 1; itemNumber <= maxcardsLimit; itemNumber++) {
    let eachCardDivElement = document.createElement("div");
    eachCardDivElement.innerText = itemNumber;
    updateColorAndNumberBasedOnStyle(eachCardDivElement, itemNumber);
    cardsList.appendChild(eachCardDivElement, itemNumber);
    displayArray.push(itemNumber);
  }
};

// Create card elements on load with its matching color
setElementOnload(MAX_CARDS_LIMIT);

// getShuffledArray -  This method is used to return the shuffled array
const getShuffledArray = (cardsArray) => {
  return [...cardsArray].map((_, i, cardsArrayCopy) => {
    let random = i + Math.floor(Math.random() * (cardsArrayCopy.length - i));
    [cardsArrayCopy[random], cardsArrayCopy[i]] = [
      cardsArrayCopy[i],
      cardsArrayCopy[random],
    ];
    return cardsArrayCopy[i];
  });
};

// updateCardNumber - This is a re-usable method used to update the card number and its color on sort/shuffle.
const updateCardNumber = (cardsList) => {
  displayArray = cardsList;
  cardsList?.forEach((item, index) => {
    const cardListChildNodes = document?.getElementById("cards-list-container")
      ?.childNodes[index];
    cardListChildNodes.innerText = item;
    updateColorAndNumberBasedOnStyle(cardListChildNodes, item);
  });
};

// onShuffleClickHandler - This is an on click handler which is triggered on click of shuffle button.
const onShuffleClickHandler = () => {
  const shuffledArray = getShuffledArray(displayArray);
  updateCardNumber(shuffledArray);
};

// onSortClickHandler - This is an on click handler which is triggered on click of shuffle button.
const onSortClickHandler = () => {
  const sortedArray = displayArray.sort();
  updateCardNumber(sortedArray);
};

// Add onClick event for shuffle button
document.querySelector(SHUFFLE_BUTTON_ID).addEventListener("click", () => {
  onShuffleClickHandler();
});

// Add onClick event for sort button
document.querySelector(SORT_BUTTON_ID).addEventListener("click", () => {
  onSortClickHandler();
});

// This is used to update the background color based on resizing of the screen.
document.getElementsByTagName("BODY")[0].onresize = function () {
  updateCardNumber(displayArray);
};
