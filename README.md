## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


General concept, computer picks rock paper or scissors, user picks one of three options, wins, losses, draws, total games kept track of

HTML
list to explain rules `<list>`
3 radio buttons
    `<input>` wrapped by `<label>`
    give type of radio 
        `type="radio"`
    have it correspond to the desired value
        `value="rock/paper/etc"`
    needs a name to be mutually exculisve (all three have same name)
        `name="choice"`
 Button to start play
div to display number of wins
div to display number of losses
div to display what computer played
div to display what user played ????
div to display result       
Import all needed elements specify using El

Script
Need to keep track of of wins and draws, (losses can be derived `total - wins` ), total
    initialize with:
         `let total = 0`
        `let wins = 0`
        `let draws = 0`
start gameplay on button click
Increment games played for each click
    `total++`

Create a function to get computer play
    generate a random number `Math.ceil(Math.random() * 3)`
    have the function assign the computer play based on random number
        `if (randomNum === 1) {return rock} `
        do this for each possible play ^^

Figure out what user selected 
    set a variable = to the currently selected radio button (should have this be highlited in css??)
    `const currentlySelectedButton = document.querySelector('input:checked)`
    extract the value (specified in HTML)
    `const userPlay = currentlySelectedButton.value`

Create function to decide win, lose or draw
    need user selection and computer selection
    ` function declareWinner(computerPlay, userPlay) `
        `if (userPlay === computerPlay) {draws++} `
       ` if (userPlay === 'paper && computerPlay === scicorrs) {draws++}`
       and so on....
       push current round winner to `resultDisplayEl.textContent`
       push what computer played? 
    
 Update state
 `totalPlayed.textContent =  total`
  `totalWins.textContent = totalWins
  totalDrawsel.textcontent = totalDraws
  total losses.textContent = totalGames - totalWins - totalDraws         




Create a function to figure out who won
