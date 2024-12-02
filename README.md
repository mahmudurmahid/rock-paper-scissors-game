# Cosmic Clash 

👩🏻‍💻 View an example of this section [here](https://github.com/kera-cudmore/Bully-Book-Club#bully-book-club-website)

Cosmic Clash is an interactive static website which allows a user to play the game rock, paper, scissors against the computer opponent. We added additional fetaures such as a space theme with the moves such as lizard and spock for a fun variation of the tradional game.  

Add an image of the finished site here. I like to use [amiresponsive](https://ui.dev/amiresponsive) to get an image of my site on all device sizes, and amiresponsive allows you to click links on the page and scroll, so each device can show a different element of your site.

Add a link to the live site here, for Milestone 1 this will be the GitHub Pages Link from when you deployed the site.

If you want to add optional [shields.io](https://shields.io) badges to your README, I like to add them to this section.

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
  * [Use of AI](#AI)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### User Stories

First time and returning user stories: 

As a user, I want the game to correctly determine the winner based on RPSLS rules so that I can see who wins each round.

As a user, I want a limited number of tries in a game so that the game feels challenging and finite.

As a user, I want my scores to be tracked during the game so that I can see how well I perform in a session.

As a user, I want to play against a computer opponent so that I have a challenging and interactive experience.

As a user, I want clear instructions on how to play so that I can understand the rules and enjoy the game.

## As a user, I want a reset button so that I can start the game over at any time.

### Acceptance Criteria

### Reset Button Visibility

The "Reset Game" button is clearly visible and accessible on the game interface at all times.
The button is labeled "Reset Game" or uses a universally recognized reset icon.

### Reset Functionality

Clicking the "Reset Game" button resets the following elements:
Scoreboard (all player scores return to zero)
Round counter (returns to the initial round)
All UI elements (game board, player indicators, etc.) return to their initial state
Any ongoing game processes are immediately terminated upon reset.

### Confirmation Prompt

A confirmation prompt appears before the game is reset.
The prompt clearly warns the player that all progress will be lost.
The prompt offers "Confirm" and "Cancel" options.

### Reset Behavior

If the player confirms the reset, the game immediately resets to its initial state.
If the player cancels, the game continues from its current state without any changes.

### Performance

The reset process completes within 2 seconds of confirmation.

### Accessibility

The reset button is keyboard accessible.
Screen readers can interpret and announce the reset button and confirmation prompt.

### Tasks

UI Design and Implementation
Design the "Reset Game" button with appropriate styling.
Add the button to the game interface in a prominent, easily accessible location.
Ensure the button is responsive and works on various screen sizes.

### JavaScript Functionality

Write a function to reset all game variables (scores, rounds, etc.) to their initial values.
Implement logic to reset all UI elements to their starting state.
Create an event listener for the reset button click.

### Confirmation Modal

Design and implement a confirmation modal or prompt.
Write JavaScript to display the modal when the reset button is clicked.
Implement logic to proceed with reset only if confirmed.

### Reset Process

Develop the main reset function that calls all necessary sub-functions to completely reset the game.
Optimize the reset process to complete within the 2-second performance requirement.

### Testing

Create unit tests for the reset functionality.
Perform integration testing to ensure all game components reset correctly.
Conduct user acceptance testing to verify the reset feature meets player expectations.

### Accessibility Implementation

Add appropriate ARIA labels and roles to the reset button and confirmation modal.
Test with screen readers and keyboard navigation to ensure accessibility compliance.

### Documentation

Update the game's user manual or help section to include information about the reset feature.
Document the reset functionality in the codebase for future maintenance.

## As a user, I want a clear end-game message so that I know when the game is over.

### Acceptance Criteria

### Message Display

A prominent "Game Over" message is displayed when the game ends.
The message includes the player's final score (e.g., "Game Over! Your score: X").
The message appears immediately upon game completion, without any delay.

### Visual Design

The end-game message matches the space theme of the game.
The message is visually distinct from other game elements, ensuring it captures the player's attention.
Text is easily readable against the background.

### Message Content

The message clearly states that the game has ended.
The player's final score is prominently displayed.
Additional statistics or achievements may be included if relevant to the game.

### Play Again Option

A "Play Again" button is included within the end-game message.
Clicking the "Play Again" button resets the game and starts a new session.

### Accessibility

The end-game message is accessible to screen readers.
The message and "Play Again" button are keyboard navigable.

### Tasks

Implement End-Game Detection
Write JavaScript function to detect when the game ends (e.g., when number of tries reaches zero).
Ensure this function is called at appropriate points in the game logic.

### Create End-Game Message

Design the layout and content of the end-game message.
Implement HTML structure for the message, including placeholders for dynamic content (e.g., score).

### Style the Message

Create CSS styles for the end-game message that align with the space theme.
Ensure the message stands out visually from the game background.
Implement responsive design to ensure the message displays correctly on various screen sizes.

### Implement Message Display Logic

Write JavaScript function to show the end-game message.
Include logic to populate the message with the player's final score.
Ensure the message appears immediately when the game ends.

### Add Play Again Functionality

Design and implement a "Play Again" button within the message.
Write JavaScript to handle the button click event, resetting the game state.
Ensure the button is styled consistently with the space theme.

### Enhance Accessibility

Add appropriate ARIA labels to the end-game message and "Play Again" button.
Ensure the message can be navigated and activated using keyboard controls.
Test with screen readers to verify accessibility.

### Testing

Conduct thorough testing to ensure the end-game message appears correctly in all game-ending scenarios.
Test the "Play Again" functionality to verify it properly resets the game.
Perform cross-browser and cross-device testing to ensure consistent behavior.

### Performance Optimization

Optimize the end-game message display to ensure it doesn't impact game performance.
Minimize any potential lag between game end and message display.

## Design

👩🏻‍💻 View an example of a completed design section [here](https://github.com/kera-cudmore/earth-day-hackathon-2022#Design)

### Wireframes

Wireframes were created for mobile and desktop using Balsamiq.

<details>
<summary>Index Page Wireframe</summary>
<br>

![Index mobile page](readme/wireframes/game%20mock%20up%20draft%202%20mobile.png)
![Index desktop page](readme/wireframes/game%20mock%20up%20draft%202%20desk.png)

</details>

### Colour Scheme

Add all information about your colour scheme for your site here. You can explain why you choose the colours you did?

I like to include a palette of the colour scheme here, my favourite site for creating a colour palette is [coolors](https://coolors.co/), but there are lots of other sites that also do the same thing, like [ColorSpace](https://mycolor.space/?hex=%23F5F5F5&sub=1), [Muzli Colors](https://colors.muz.li/), [Adobe Colour Wheel](https://color.adobe.com/create/color-wheel) and [Canva](https://www.canva.com/colors/color-palette-generator/) to name a few.

### Typography

If you've imported fonts to use in your project, add some information about them here. You can include information like:

Why did you choose the font you have?
Is this an accessibly friendly font?
What weights have you included?

I also like to include an image of the fonts chosen as a reference.

[Google Fonts](https://fonts.google.com/) is a popular choice for importing fonts to use in your project, as it doesn't require you to download the fonts to use them.

### Imagery

Use this section to explain what sort of imagery you plan to use through your site.

## Features

👩🏻‍💻 View an example of a completed user experience section [here](https://github.com/kera-cudmore/TheQuizArms#Features)

This section can be used to explain what pages your site is made up of.

### General features on each page

If there is a feature that appears on all pages of your site, include it here. Examples of what to include would the the navigation, a footer and a favicon.

I then like to add a screenshot of each page of the site here, i use [amiresponsive](https://ui.dev/amiresponsive) which allows me to grab an image of the site as it would be displayed on mobile, tablet and desktop, this helps to show the responsiveness of the site.

### Future Implementations

What features would you like to implement in the future on your site? Would you like to add more pages, or create login functionality? Add these plans here.

### Accessibility

Be an amazing developer and get used to thinking about accessibility in all of your projects!

This is the place to make a note of anything you have done with accessibility in mind. Some examples include:

Have you used icons and added aria-labels to enable screen readers to understand these?
Have you ensured your site meets the minimum contrast requirements?
Have you chosen fonts that are dyslexia/accessible friendly?

Code Institute have an amazing channel for all things accessibility (a11y-accessibility) I would highly recommend joining this channel as it contains a wealth of information about accessibility and what we can do as developers to be more inclusive.

## Technologies Used

👩🏻‍💻 View an example of a completed Technologies Used section [here](https://github.com/kera-cudmore/Bully-Book-Club#Technologies-Used)

### Languages Used

HTML, CSS, JavaScript 

### Frameworks, Libraries & Programs Used

Add any frameworks, libraries or programs used while creating your project.

Make sure to include things like git, GitHub, the program used to make your wireframes, any programs used to compress your images, did you use a CSS framework like Bootstrap? If so add it here (add the version used).

A great tip for this section is to include them as you use them, that way you won't forget what you ended up using when you get to the end of your project.

Balsamiq - Used to create wireframes.

Github - To save and store the files for the website.

Google Fonts - To import the fonts used on the website.

Font Awesome - For the iconography on the website.

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

Favicon.io To create favicon.

### AI

## Deployment & Local Development

### Deployment

We utilised Github Pages to deploy the game site. Please find a guide on how to do so below:

1. Log in to Github.
2. Find the repository called Rock-paper-scissors-game.
3. Click on the settings icon.
4. On the left hand side in the navigation page, find the Pages link.
5. In the  Branch section of Build and Deploy, make sure to choose main from the drop down menu. then select Root in the folder drop menu.
6. Click Save. The site is now live and can be accessed via the URL. This can also be found on the repository homepage.

### Local Development

#### How to Fork

To fork the repository:

1. Log in to Github.
2. Find the Rock-paper-scissors-game repository.
3. Find the fork button in the top right hand corner.

#### How to Clone

To clone the Rock-paper-scissors-game repository:

1. Log in to Github.
2. Find the Rock-paper-scissors-game repository.
3. Click on the code button, in the clone section select the option you desire to clone the project with. Then copy the URL.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Start as you mean to go on - and get used to writing a TESTING.md file from the very first project!

Testing requirements aren't massive for your first project, however if you start using a TESTING.md file from your first project you will thank yourself later when completing your later projects, which will contain much more information.
  
Use this part of the README to link to your TESTING.md file - you can view the example TESTING.md file [here](milestone1-testing.md)

## Credits

### Code Used

If you have used some code in your project that you didn't write, this is the place to make note of it. Credit the author of the code and if possible a link to where you found the code. You could also add in a brief description of what the code does, or what you are using it for here.

- Shooting Star Effect: https://codepal.ai/code-generator/query/aQ9s3clw/javascript-shooting-star-animation?utm_source=chatgpt.com#google_vignette; https://codepen.io/bobwonch/pen/KwYEwx?utm_source=chatgpt.com; 

### Content

Who wrote the content for the website? Was it yourself - or have you made the site for someone and they specified what the site was to say? This is the best place to put this information.

ReadMe: 

[ReadMe Template](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md)


###  Media

If you have used any media on your site (images, audio, video etc) you can credit them here. I like to link back to the source where I found the media, and include where on the site the image is used.
  
###  Acknowledgments

Amy Richardson - our Bootcamp group facilitator, thank you for your constant positive energy and feedback!

The South Yorkshire group - thanks for the support on Slack!
