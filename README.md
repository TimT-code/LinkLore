# LinkLore
Have fun Listing Links - Hobby / Experiments
with audio / video popups

-build history of codepen.io

Started this at codepen.io messing around trying to sharpen my skills adding to arrays, and making linked lists
had an idea to try to make code for fun that would put together a unique linked list of anything and that would compare, collect, and assemble to a saved file.

Wanted it to reject same links, and visually build a list live instead of reloading the page. Some some more good experience using innerHTML to make sure I didn't have to reload page.

Built the linkings system, and text feedback system first, and the pic launcher and youtube launcher features started arriving later.

Quickly separated the pic and youtube systems so I could harness features of what each needed separately.

-general features of the all components working together-
  javascript console feedback for input reactions and events

    a handy youtube component for popping up embedded videos.
      -features -
      adding optional start and end points
      delay video display - to start playing video with sound only and to sometimes hide loader bar
      end video display - to fine tune end a video even if the start and end times cant be finely looped.
      easy to implement
      code snippets in the url to control parameters best for embeds

    a component for embedding gifs/images into an iframe like the youtube launcher except using strictly pictures
      similar features to the youtube component
      timers
      not the same url system since youtube uses start and end points and chunks of text to form whole urls
  
  -to do-

TimT_code@twitter.com
Tim Tesner
