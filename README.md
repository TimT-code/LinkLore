# LinkLore
Have fun Listing Links - Hobby / Experiments
with audio / video popups

-build history of codepen.io

Started this at codepen.io messing around trying to sharpen my skills adding to arrays, and making linked lists.
Had an idea to try to make code for fun that would put together a unique linked list of any links, and that would compare, collect, and assemble to a saved file.

Wanted it to reject same links, and visually build a list live instead of reloading the page. Got some more good experience using innerHTML to make sure I didn't have to reload page. Utilized code to try out underscore.js for first time using _.sample code for a random number grab from an array and range...it works well if i reinsert that code for selecting from a possible range of random videos from the list.

Built the linkings system, and text feedback system first, and the pic launcher and youtube launcher features started arriving later.

Quickly separated the pic and youtube systems so I could harness features of what each needed separately.

I thought to label/comment my code thinking other people might be learning from it or

-general features of the all components working together-
  javascript console feedback for input reactions and events

    a handy youtube component for popping up embedded videos.
      -features -
      adding optional start and end points
      delay video display - to start playing video with sound only, and to sometimes hide loader bar if any
      end video display - to fine tune end a video even if the start and end times cant be finely looped.
      easy to implement
      code snippets in the url to control parameters best for embeds

    a component for embedding gifs/images into an iframe like the youtube launcher except using strictly pictures
      similar features to the youtube component
      timers
      not the same url system since youtube uses start and end points and chunks of text to form whole urls
  
  -to do-
    more code abbreviation and function reuse
    maybe mess around with APIs
    could build control panel directly into a button/popup that would let you edit/upload/insert/restore new videos/pics/sounds for actions/rewards for events and participation. Currently the list is in javascript form and manual edit...would be fun to edit, and add from within the html somewhere.
    More artificial intelligence actions based on events/input/interaction - I mean add a video tailored to each way to interact and for milestones of participation.
    Using more JS libraries when I know, or understand the code behind it, backed up my plain vanilla javascript.
    
  -ideas-
    Rewards and hiscore listings for typing, or pasting in as many unique links as you can - no timer
    Same as above, but timed version...
        How many unique links can you add in chosen durations of time? Most of use can quicky type at least 10 websites from memory.

TimT_code@twitter.com
Tim Tesner
