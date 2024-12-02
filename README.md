# Cosmic Clash 

Cosmic Clash is an interactive static website which allows a user to play the game rock, paper, scissors against the computer opponent. We added additional fetaures such as a space theme with the moves such as lizard and spock for a fun variation of the tradional game.  

[Cosmic Clash Live Site](https://mahmudurmahid.github.io/rock-paper-scissors-game/)

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

As a user, I want a reset button so that I can start the game over at any time.

As a user, I want a clear end-game message so that I know when the game is over.

## Design

### Wireframes

Wireframes were created for mobile and desktop using Balsamiq.

<details>
<summary>Index Page Wireframe</summary>
<br>

![Index mobile page](readme/wireframes/game%20mock%20up%20draft%202%20mobile.png)
![Index desktop page](readme/wireframes/game%20mock%20up%20draft%202%20desk.png)

</details>

### Colour Scheme

Once we decided on a space theme, images of galaxies came to mind and we decided to look at the colours within those images. 

<details>
<summary>Space Colour Scheme</summary>
<br>

![Space Theme Colours](readme/AdobeColor-space%20colours.jpeg)

</details>

 We utilised [Adobe Colour](https://color.adobe.com/create/color-wheel) to select the colours which would match our theme - using the colour picker tool from an image of a galaxy. 

### Typography

We utilised [Google Fonts](https://fonts.google.com/) to find the intergalactic style we were looking for. 

<details>
<summary>Space Themed Fonts</summary>
<br>

![Headings Font](readme/font%20zen.png)
![Main Font](readme/font%20exo.png)

</details>

### Imagery

The imagery was chosen to reflect the theme of space. The galaxy background with animated stars is designed to make the user feel as though they are in space whilst they complete the game in a 'mission' style layout. 

With assistance from Dall-E we were able to create intergalactic themed rock,paper,scissors. 

<details>
<summary>Space Themed Imagery</summary>
<br>

![Background](assets/images/background.webp)
![Cards](assets/images/rock.webp)
![Cards](assets/images/paper.webp)
![Cards](assets/images/scissors.webp)
![Cards](assets/images/lizard.webp)
![Cards](assets/images/spock.webp)

</details>

## Features

Cosmic Clash is made up of one index page, including a navigation bar, hero image, game section, score section and footer. 

The game begins when the player makes a choice of game move e.g. rock, paper, scissors, lizard, spock.

The computer responds with their choice and the result is announced. The score section is then updated, adding to the wins, losses or ties. 

It is a game based on best of five then it is game over and a final result message appears. 

### General features on each page

The general features include:

- A navigation bar which includes a modal to explain the instructions and a New Game button to start the game again.
- A favicon
- A footer including github profile links. 

### Future Implementations

Future features include: 

- A username input section so that the experience is more personal e.g. 'Jane vs. Computer', 'Jane chose Rock, Computer chose Spock'. 
- An increased difficulty section - with a timer perhaps to add pressure. 

### Accessibility

Have you used icons and added aria-labels to enable screen readers to understand these?

Yes, aria-labels have been used throughout the html. 

Have you ensured your site meets the minimum contrast requirements?



Have you chosen fonts that are dyslexia/accessible friendly?



## Technologies Used

### Languages Used

HTML, CSS, JavaScript 

### Frameworks, Libraries & Programs Used

Balsamiq - Used to create wireframes.

Github - To save and store the files for the website.

Google Fonts - To import the fonts used on the website.

Font Awesome - For the iconography on the website.

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

Favicon.io To create favicon.

Adobe Colors - to select a colour theme which matches our space theme. 

Bootstrap v5.3 - CSS framework used for design of the page.

### Use of AI

We have utilised Dall-E to create the images on the game cards. 

We have used Microsoft Co-pilot in the browser to aid with coding enquiries and de-bugging. 

Github Co-pilot was utilised to make changes to the code within VS Code. 

Chat GPT was also used. 

<details>
<summary>Use of AI Examples</summary>
<br>

[Example of Copilot aiding PW with CSS styling](readme/glowing.png)


</details>

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

Please view [Testing.md](/workspace/rock-paper-scissors-game/TESTING.md) for testing documentation. 

## Credits

### Code Used

- Shooting Star Effect: https://codepal.ai/code-generator/query/aQ9s3clw/javascript-shooting-star-animation?utm_source=chatgpt.com#google_vignette; https://codepen.io/bobwonch/pen/KwYEwx?utm_source=chatgpt.com; 

### Content

We utilised AI to create the text within the page and modal. 

ReadMe: 

[ReadMe Template](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md)


###  Media

If you have used any media on your site (images, audio, video etc) you can credit them here. I like to link back to the source where I found the media, and include where on the site the image is used.
  
###  Acknowledgments

Amy Richardson - our Bootcamp group facilitator, thank you for your constant positive energy and feedback!

The South Yorkshire group - thanks for the support on Slack!

Thank you to our SME Spencer Barriball and Coding Coach Roo MacArthur for their help and advice. 
