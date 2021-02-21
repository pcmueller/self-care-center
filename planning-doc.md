# Solo Challenge - Self Care Center

#### Project Resources
- **Specs**: https://frontend.turing.io/projects/module-1/self-care-center.html
- **GitHub repo**: https://github.com/pcmueller/self-care-center
- **GitHub page**: https://pcmueller.github.io/self-care-center/

#### Planning Form: Questions & Answers
2.18.21

*What are my strengths as a developer? With which Mod 1 concepts do I feel comfortable?* 
 
I think my strengths lie in visualizing and mapping out the work flow in a program/app, and in JavaScript functionality up until DOM manipulation, esp. with basic logic and data access/manipulation (loops, conditionals, etc.).  I'm also pretty competent with basic HTML and CSS, and the interaction between these and JS (again, at a lower-level than the DOM).  
 
*In what areas could I grow? With which Mod 1 concepts do I struggle?*
 
I could grow by better understanding and utilizing the DOM.  I think I get it on a conceptual level, but I need to gain familiarity with its actual functionality, esp. in relation to the Data Model (i.e. the methodologies used in accessing each of these and the order of operations / best practices in manipulating them).

### Iteration 0: Build Out Comp					
target: *9pm on Thurs 2.18.21*

Images are below
An assets directory is provided in the repo, and colors and fonts are provided in the CSS file.

### Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation & Mantra Feature
target: *9pm on Fri 2.19.21*

When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
When the message appears, the meditation icon disappears from the message area

### Choose Your Own Adventure
target: *9pm on Sat 2.12.21*

In the interest of giving you opportunities to individualize the skills you build, this project’s main goal is to provide various different paths you can take. Along these different paths you will encounter different problems and solve them in different ways. As you make choices about which features to add, you should consider which features align with your strengths, which features would challenge you to grow, and which features you’d find to be useful in this application. Choose one or more of the following features to add. Some of them build on others, so be sure to read them all before choosing.
When you choose a feature, you must complete all bullet points!
NOTE: You should absolutely not be working on this unless your UI is solid and you are 100% sure that your MVP is fully functional and bug free.

#### All Messages interface

Add a “View All Messages” button.
When that button is clicked, the user is taken to a new page that displays all messages, sorted by message type.
On this page, the user should have the ability to add/edit/delete messages.

#### User can add their own message

Add an “Add Message” button in a logical spot.
When the user clicks “Add Message” a form will appear in the message box. The form should contain two inputs - one to specify which type of message is being added, and another to add the text of the message itself. The form should also contain a “Submit” button.
If the user doesn’t specify the type of message, they should get an error and be unable to submit their message until the type is specified.
When the user clicks the “Submit” button and that message will be added to the appropriate list of messages.
When a new message is added, that message should automatically be displayed in the message box, instead of the meditation icon.
As you add these new elements to the page, be sure to match the style of existing elements.
NOTE: None of this needs to persist on page refresh, unless you also complete the local storage feature

#### Error handling and clear button

User should not be able to click the “Receive Message” button unless they have selected a message option.
The user can click a clear button, which clears the page of any message.
User should only be able to click the clear button if a message is visible.
When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
If you’ve added other buttons or inputs, be sure to add some error handling for them as well.
Note: You can disable these buttons, hide them, or display a message to the user for error handling. The choice is yours!

---

## Pseudocode


### Iteration 0: Build Out Comp

HTML
- [ √ ] Add “Self Care Center” h1
- [ √ ]	Add message div, “Which type of message?” h2 above, and “Receive Message” button inside
- [ √ ]	Add “affirmation” and “mantra” radio buttons
- [ √ ]	Add lower div and include meditation icon

CSS
- [ √ ]	Set background, add any necessary gradient effects
- [ √ ]	Create classes for title (h1), question (h2), radio box, receive message button, and lower div.
- [ √ ]	Add styling to all five classes


- [ √ ]	Complete all by 9pm on Thursday 2/18
---

### Iteration 1: MVP - Generate & Display Random Mantra or Affirmation

HTML
- [ √ ]	Inside main-lower-box element add message-display element with placeholder text, and assign a class of ‘hidden’

CSS
- [ √ ]	Create .hidden class
- [ √ ]	Create class and styling for message-display HTML element

JS
- [ √ ]	Declare ‘mantra’ and ‘affirmation’ array variables and add values
- [ √ ]	Target both radio input buttons using: var radioInput = document.querySelectorAll(‘input[name=”choice”’]);
- [ √ ]	Target receive message button element, icon element, and lower box element
- [ √ ]	Attach event listener function to receive message button variable: (‘click’, displayMessage)
- [ √ ] Create getRandomMantra function to assign random message from ‘mantra’ array to currentMessage variable
- [ √ ] Create getRandomAffirm function to assign random message from ‘affirmation’ array to currentMessage variable
- [ √ ]	Create randomIndex function to find a random index value within the length of any array parameter.
- [ √ ]	Create displayMessage function to add/remove ‘hidden’ from meditation-icon and message-display elements
- [ √ ]	In displayMessage, use a conditional to run either getRandomMantra or getRandomAffirm function - depending on value of ‘checked’ property of radioInput variable - and return currentMessage variable value.

- [ √ ]	Complete all by 9pm on ~~Friday 2/19~~ Saturday 2/20

---
### Choose Your Own Adventure

#### Adventure #1: All Messages Interface

JS
- [  ]	

HTML
- [  ] 

CSS
- [  ] 

- [  ] Complete all by 9pm on Sunday 2/21
