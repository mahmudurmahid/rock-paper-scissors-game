# Cosmic Clash 

Cosmic Clash is an interactive static website which allows a user to play the game rock, paper, scissors against the computer opponent. We added additional fetaures such as a space theme with the moves such as lizard and spock for a fun variation of the tradional game.  

[Cosmic Clash Live Site](https://mahmudurmahid.github.io/rock-paper-scissors-game/)

![Am I responsive](readme/am%20i%20resp.png)

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
  * [Use of AI](#use-of-AI)

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

Yes

Have you chosen fonts that are dyslexia/accessible friendly?

Yes

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

MM used Copilot with this prompt to obtain card images: I am developing a rock, paper, scissors, lizard, spock game that is astronaut and space themed. I need 5 different images for each option (e.g. rock, lizard). Please provide 5 separate images, one for each option.

</details>

Evaluation of our AI usage: 

My use of AI for images was very helpful. DALL E required a series of simple prompts about my website (e.g. space-themed rock, paper, scissors, lizard, spock game website) to create images. These images helped our group to decide color schemes too.
The use of AI for debugging and coding was a mixed bag. It was very good at simple things like writing boiler plate code and creating bootstrap cards. However, less great at more complex problems (e.g. creating a win/loss/draw scoreboard feature functionality). I imagine with. better prompts from my end in terms of wording or a higher number of prompts it could have improved on these tasks. - MM

I utilised Co-pilot to assist me with styling queries which was very useful as I was able to use the code and add the class names speeding up the process of styling. It was extremely useful in pointing out issues within the code, pinpointing the issue with the Bootstrap JS link. Due to tech issues I did not use Github co-pilot, however I felt that co-pilot in the browser helped me more and I feel it is less intrusive. - PW

The hackathon showcased AI's transformative impact on development workflows. I leveraged AI-powered design tools to rapidly prototype user interfaces and generate responsive layouts, significantly accelerating the UX/UI design process. On the debugging front, AI code analysis tools helped identify potential issues early. This integration of AI not only reduced development time but also enabled me and my colleagues to focus more on innovative features rather than technical debugging, resulting in higher quality project submissions. - EK

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

We utilised Google Developer Tools as part of the ongoing testing of the site, allowing us to troubleshoot and pinpoint issues.

We have used the W3 Validator to test the html and css used on our site.

Jshint was used to validate the Javascript used. 

We have used WAVE to test the accessibility of our site. 

We have used Lighthouse to check the performance of the site. 


### Automated Testing 

<details>
<summary>W3C Validator</summary>
<p>Site validation: passed. The screenshots below highlight the warnings that occurred with the validation of the html and css pages.<p>
<br>

![HTML](readme/ValidatorWarning.png)
![CSS](readme/ValidatorCSS.png)

</details>

<details>
<summary>JS Hint</summary>
<br>

![JS Hint](readme/js%20hint.png)

</details>

<details>
<summary>WAVE</summary>
<br>

![Wave](readme/wave.png)

</details>

<details>
<summary>Lighthouse</summary>
<br>

![Lighthouse mob](readme/mob%20lighth.png)
![Lighthouse desktop](readme/lighth%20desk.png)


</details>

### Manual Testing 

### Testing User Stories 

![User Story testing](readme/user%20story%20testing.png)



### Full Testing 

Full testing was performed on an iPhone X, iPad Air 2020, windows HP laptop.

Each device used the following browsers: 

IOS Safari, Google Chrome

MVP achieved on all devices. 

Other comments: 

All features work on iPhone/safari

All features work on PC/Google chrome


### Bugs 

### Known Bugs

| Known Bug No | Bug Issue | Plan to Resolve |
| :--- | :--- | :--- |
| - |   |  |

### Solved Bugs

| Bug No | Bug Issue | How Resolved |
| :--- | :--- | :--- |
| 1 | The background affecting our ability to click onto cards and other buttons | The fix was z-index and pointer events |

## Credits

### Code Used

- Shooting Star Effect: https://codepal.ai/code-generator/query/aQ9s3clw/javascript-shooting-star-animation?utm_source=chatgpt.com#google_vignette; https://codepen.io/bobwonch/pen/KwYEwx?utm_source=chatgpt.com; 

### Content

We utilised AI to create the text within the page and modal. 

Code was used from this YouTube sources: 

- (https://www.youtube.com/watch?v=jaVNP3nIAv0&t=179s)
- (https://www.youtube.com/watch?v=3uKdQx-SZ5A)


ReadMe: 

[ReadMe Template](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md)


###  Media

Media was produced via Dall-E.

###  Acknowledgments

Amy Richardson - our Bootcamp group facilitator, thank you for your constant positive energy and feedback!

The South Yorkshire group - thanks for the support on Slack!

Thank you to our SME Spencer Barriball and Coding Coach Roo MacArthur for their help and advice. 
