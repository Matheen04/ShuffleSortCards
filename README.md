# ShuffleSortCards
This repo is for the cards UI where user can sort and shuffle the set of cards

We can run this application by opening the Cards.html file in chrome or any other browser

Assumptions: 

We assumed that the cards max limit is 9 which is defined as constant in JS file

The UI has been designed responsive assuming the mobile width is 375px and rest belongs to ipad or desktop screen. I have not added any conditional for 960px as desktop as anything other than mobile is handled with default stylings.

This UI is designed using simple HTML, CSS and JS. No frameworks or libraries are used.

Few of the cards have different colors than mentioned in the assignment as those colors where black and white which did not allow the text to be shown and also did not matcht eh design. Hence i assumed few of my own colors

The font style and sizes are assumed here.

Functionalities:
It has 9 cards shown in sorted order on load.
We can shuffle the cards in random order using shuffle button
We can sort back the shuffled cardr by clicking on the sort button
It has responsive design based on mobile(375px) or other screen

Additional Functionality:

Added a additional functionality where the sort button is disabled if once cliked as there is not point in clicking sort again on the sorted cards.
This button is enabled once shuffle is clicked. Ideally on load  as well the sort button should be disabled, however I have not disabled it on purpose, just to maintain the design fiven in the assignment


