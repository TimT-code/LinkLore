# LinkLore
Have fun Listing Links - My Hobby / Experiments
with audio / video popups along with links list collection and storage.

-build history of codepen.io

(this readme is a mess - looks different in the editor - tried to fix readabililty)

Started this project at codepen.io messing around trying to sharpen my skills adding to arrays, and making linked lists.
Had an idea to try to make code for fun that would put together a unique linked list of any links, and that would compare, collect, and assemble to a saved file.

Wanted it to reject same links, and visually build a list live instead of reloading the page. Got some more good experience using innerHTML to make sure I didn't have to reload page.Used blob save for first time, also tried out underscore.js for using _.sample code for a random number grab from an array and range...it works well if i reinsert that code for selecting from a possible range of random videos from the list.

I had Built the linkings system, and text feedback system first, and the ideas for the pic launcher and youtube launcher features started arriving later to spice it up a bit.

Quickly separated the pic and youtube systems so I could harness features of what each needed separately.

I thought to excessivley label/comment my code thinking other people might be learning from it, or to follow it....and as a reminder of what I did, and still wanna do.

-general description of all components working together-
  Javascript console feedback for input reactions and events
  Popups of Audio/Video/Pics
  List will have unique links as an option, or select links from same domain etc
  Links are typed live and already linked upon entry

    A handy youtube component for popping up embedded videos.
      -features -
      adding optional start and end points
      delay video display - to start playing video with sound only, and to sometimes hide loader bar if any
      end video display - to fine tune end a video even if the start and end times cant be finely looped.
      easy to implement
      code snippets in the url to control parameters best for embeds

    A component for embedding gifs/images into an iframe like the youtube launcher except using strictly pictures
      similar features to the youtube component
      timers
      not the same url system since youtube uses start and end points and chunks of text to form whole urls
  
  -To do-
    More code abbreviation and function reuse.
    Maybe mess around with APIs.
    Could build control panel directly into a button/popup that would let you edit/upload/insert/restore new videos/pics/sounds for actions/rewards for events and participation.
    
    Currently the list is in javascript form and manual edit...would be fun to edit, and add from within the html somewhere.
    
    More artificial intelligence actions based on events/input/interaction - I mean add a video tailored to each way to interact and for milestones of participation.
    
    Using more JS libraries when I know, or understand the code behind it, backed up my plain vanilla javascript.
    
    Fully Implement Save, Restore, Combine Lists functions.
    
  -Ideas-
    Rewards and hiscore listings for typing, or pasting in as many unique links as you can - no timer
    Same as above, but timed version...
        How many unique links can you add in chosen durations of time? Most of use can quicky type at least 10 websites from memory.
    Add parameters to hide video and use purely youtube audio from same videos.
    More list types - save as json, arrays, objects, multidimensionals, plain text, as a pic, as unlinked list also.
    Make Popups not smother eachother, and intelligently move to accomodate a new popup. Maybe sort these to visual areas etc.
    Make video/pics/audio assets internal/local/(Not hosted on youtube etc) for faster loading and precision with timers
        
  -Bugs/Quirks - fix/improve/add/redo code-
    setTimeout's timers need to be cancelled with clearTimeout's - have to name them and incorporate into the code
    Had blob code for saving lists into the filesystem working - broke it when I tried saving as a chosen name versus just file.filetype - should be all browser compatible file api etc

TimT_code@twitter.com
Tim Tesner
