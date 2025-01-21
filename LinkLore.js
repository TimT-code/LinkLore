(function changer(){
  let changer_interval=setInterval(
    ()=>{
      let metaTag = document.getElementById('meta_id');
      let rndClr = "#" + Math.floor(Math.random() * 16777215).toString(16);
      metaTag.setAttribute('content', rndClr);
    },100);
 setTimeout(clearInterval(changer_interval), 4000);
  })();

var code_stamp = function(){
  console.clear();
  console.log('Code Author - Tim Tesner');
  console.log('https://codepen.io/TimT_code');
  console.log('my_links[]');
  console.log('Add Links to List');
  myForm.focus();
};
code_stamp();
/*
Tim Tesner
https://github.com/TimT-code
https://codepen.io/TimT_code
*/
//underscore.js to use ._sample()

//Browser Speech
function say(text){
  if('speechSynthesis' in window){
    const the_saying=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(the_saying);
  }
}

//__________________________________________

var vid=[];//dvt=delay_visible_time, evt=end_visible_time - pass in a 2nd argument of 'v0' for 'no-video' for audio only zindex hiding iframe
//I would like to also write no-video into the array/object parameters instead of currently only being able to pass it thru arguments[]
//vid[#]={vid_info:'', dvt:0, evt:0};//template for info
vid[0]={vid_info:'gYNUOkqzcVA?start=07&end=11', dvt:1450, evt:4160};//gladiator - thumbs down clip
vid[1]={vid_info:'IxAKFlpdcfc?start=01&end=8', dvt:0, evt:3000};//crowd applause clip
vid[2]={vid_info:'Byq09pDAmeg?start=32&end=64', dvt:1000, evt:22000};//matrix - part1
vid[3]={vid_info:'Byq09pDAmeg?start=60&end=80', dvt:0, evt:8950};//matrix - part2
vid[4]={vid_info:'U-SaVjydLyg?start=13&end=18', dvt:0, evt:4700};//Vader - Yes Master
vid[5]={vid_info:'qHK4YjgDV9s?start=38&end=47', dvt:0, evt:7000};//aliens?
vid[6]={vid_info:'vi1-IihX6yY?start=03&end=16', dvt:1950, evt:8400};//Jim Carrey - Ray Finkle - shorts
vid[7]={vid_info:'1n2CSxpHVcs?start=110&end=123', dvt:2000, evt:15300};//hal 9000 - no mistakes clip
vid[8]={vid_info:'JbgbeHja2dQ?start=00&end=10', dvt:3000, evt:6000};//computer processing sounds
vid[9]={vid_info:'eeOHEU7Ykyg?start=13&end=18', dvt:2000, evt:3800};//war games - glimpse of machinery
vid[10]={vid_info:'B53Vlje7mcM?start=00&end=04', dvt:0, evt:3970};//war games - shall we play a game
vid[11]={vid_info:'mtTi5yG0Qnw?start=00&end=06', dvt:0, evt:5970};//robot sounds

var media_url = [];
media_url[1] = 'https://media.giphy.com/media/7rj2ZgttvgomY/giphy.gif'; //clapping
media_url[2] = 'https://33.media.tumblr.com/c85db198e229666cce94d3b1e3e8c067/tumblr_msjr0z1PmG1sgl0ajo1_500.gif';

//__________________________________________

IDx = function(id) {return document.getElementById(id)};

//__________________________________________

var my_links = []; //create an empty array to add to

var plural_check; //declare variable first outside of function
function plural_checker_func(){
  if (my_links.length === 1){//if equal to 1 - then 0 and 2 are "links"
    plural_check = 'Link';//1
  }else{
    plural_check = 'Links'; //0 or 2
  }
}
//plural_checker_func();

//__________________________________________

function empty_add_links(){
  IDx('links_area').innerHTML='<span class="add_links_span">Add Links to List</span><br>';
}

//__________________________________________

function links_listed(){
  plural_checker_func();
  IDx("links_area").innerHTML = '<span id="link_banner_id"><span class="links_count_span">' + my_links.length + '</span><span class="links_listed_span">' + plural_check + ' Listed Here</span></span><br><br>';
}

//__________________________________________

function links_and_favicons_lister(){
  for (var i = 0; i < my_links.length; i++) {
    IDx("links_area").innerHTML += '<img src="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://' + my_links[i] + '&size=32"></img><a target="_blank" href="http://' + my_links[i] + '">' + my_links[i] + '</a><br>';
    IDx('theLink').value = '';
  }
  plural_checker_func();//bring in plural_check variable
  var stringz = JSON.stringify(my_links);
  console.log('my_links' + stringz);
  console.log(' ' + my_links.length + ' - ' + plural_check + ' ' + 'Listed! ');
  code_stamp();
}

//__________________________________________
  
  function add_links_function(){
    console.clear();
    var add_it = IDx('theLink').value;
    if(add_it === ''){//if nothing typed
      alert('Input Empty');
      if(my_links.length){
        links_listed();//run function after building
      }else{
        empty_add_links();
      }
    };
    links_and_favicons_lister();
    
    if(my_links != add_it && add_it) {//if it doesn't equal the value, and the value exists
      if(!my_links){//if my_links doesn't exist
      my_links.push(add_it);//add to end or bottom of array list
      }else{
        my_links.unshift(add_it); //add to top of array list
      }
      links_listed();
      links_and_favicons_lister();
      IDx('theLink').value = '';
    }
  }

//__________________________________________

function reset_array_function() {
  if(Array.isArray(my_links) && my_links.length){//if list exists and has content
    console.clear();
    plural_checker_func();
    var confirm_txt='Do you really want to clear the list? - You have, ' + my_links.length + ' ' + plural_check + ' listed!';//extra commas added for speech synth pauses
    var confirm_it=confirm_txt.replace(/,/g,"");//replaces all commas in confirm_txt used to add pause to speech-no need to output commas
    say(confirm_txt);
    var confirm_reset = confirm(confirm_it);//uses variable instead of direct text here so speech synth can share the quote( and without commas)
    
    if(confirm_reset === true){
      my_links = [];
      my_links.length = 0;
      empty_add_links();// Add Links- banner
      IDx('theLink').value = '';
      //console.log('my_links[' + my_links + ']');
      code_stamp(); //use function again
      return;
    }else{
      links_listed();
      links_and_favicons_lister();
      return;
    }
    plural_checker_func();
    IDx('links_area').innerHTML = '<span class="list_empty_span">List Empty - There are No Links Added to Clear!</span><br>';
    console.log('Array already empty');
    alert('Array already empty');
    console.clear();
    code_stamp();
    empty_add_links();
  }else{
    alert('List Empty - Cannot Reset!');
    
    var emptyReset_talk=[];
    emptyReset_talk[0]='There isn\'t anything listed to reset';
    emptyReset_talk[1]='There wasn\'t any info submitted to reset';
    emptyReset_talk[2]='No information submitted to reset';
    emptyReset_talk[3]='The list is empty no data has been submitted';
    emptyReset_talk[3]='Cannot reset an empty list.';
    
    say(_.sample(emptyReset_talk));
    addressBarColorFlasher();
}
  }

//__________________________________________

//uses filesaver.js

function save_file(){//Uses filesaver.js library - Save only if the list has contents
  if(Array.isArray(my_links) && my_links.length){
    var my_data=JSON.stringify(my_links);
    var str = my_data.replace(/"/g, '');//removes quotes
    var str2=str.replace(/,/g, '\n');//replaces commas to line breaks
    var str3=str2.replace(/[\[\]]/g, '');//eliminates square brackets
    var blob = new Blob([str3], {type: "text/plain;charset=utf-8"});
saveAs(blob, "Link_Lore-list.txt");
    }else{//List is Empty
      alert('List Empty - Cannot Save!');
      var emptySave_talk=[];
      emptySave_talk[0]='There isn\'t anything listed to save';
      emptySave_talk[1]='There wasn\'t any info submitted to save';
      emptySave_talk[2]='No information submitted to save';
      emptySave_talk[3]='Can\'t save an empty list when no data has been submitted';
      emptySave_talk[3]='Cannot save an empty list.';
      
      say(_.sample(emptySave_talk));
    }
}

//__________________________________________

function load_file(){
  var load_file_input = document.createElement('input');
  load_file_input.id = 'load_file_input_id';
  load_file_input.type = 'file';
  //load_file_input.name = 'myFile';
  var outer_wrap_link_area = IDx('outer_wrap_link_area_id');
  var links_form = IDx('myForm');
  outer_wrap_link_area.insertBefore(load_file_input, links_form);
  var load_list_button_lit=IDx('load_list_button_id');
  load_list_button_lit.style.backgroundColor='violet';
  load_list_button_lit.style.color='white';
  links_form.style.display='none';
  const fileContent = IDx('links_area');
  load_file_input.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
    IDx('load_file_input_id').style.display='none';
      links_form.style.display='block';
      reader.onload = (e)=>{
        const text_to_list=e.target.result;
        my_links=text_to_list.split('\n');
        
        links_listed();
        links_and_favicons_lister();
      };
    reader.readAsText(file);
    var fileLoaded_talk=[];
    fileLoaded_talk[0]='The file has been loaded into the list';
    fileLoaded_talk[1]='The list has been loaded from the file';
    fileLoaded_talk[2]='Loaded the file into the list';
    fileLoaded_talk[3]='The file has been loaded into the list';
    say(_.sample(fileLoaded_talk));
    });
}

//__________________________________________

function disable_load_list_button(){//disable function so it doesn't let you push button again before file is uploaded
  window.load_file = function(){};
}

//__________________________________________

function non_working_feature() {//use to inform of trying to use not yet built features
  alert('Feature - Not Implemented Yet!\nMight be Coded into Newer Builds....');
}

//__________________________________________

function vidz(vid_number){
  var first_part='https://www.youtube.com/embed/';
  var end_part='&autoplay=1&showinfo=0&controls=0&autohide=1&disablekb=1&fs=0';  
  whole_url = first_part + vid[vid_number].vid_info + end_part;
  console.log(whole_url);
  return vid_number;  
}

//__________________________________________

// Vid - Launcher Youtube - "lyt"=LaunchYouTube
function lyt(vid_number) { //reusable for all - just pass in array index of lyt(vidz(4),'v0'), a 2nd argument 'v0' single quoted
  IDx('response_iframe_id').style='z-index:0;width:488px;height:300px';//resets iframe css incase it was altered when 'v0' was passed - no-video
  if(arguments[1]==='v0'){//check if there is a 2nd argument passed--if it is 'v0' 'video 0/video off/sound on' then do something..
    //console.log('no-video');
    //IDx('response_iframe_id').style.width='0';
    //IDx('response_iframe_id').style.height='0';
    //IDx('response_iframe_id').style.zIndex='-1';
    IDx('response_iframe_id').style='z-index:-1;position:absolute;top:250px;left:125px;width:0;height:0';//hide visible part of video clip
  }
  IDx('response_img_id').style.display = 'none'; /*clear img in the same spot if it is still playing-so they dont collide*/
  IDx('response_iframe_id').src = whole_url;
  setTimeout(action_after_delay_timer1, vid[vid_number].dvt); //delay before displaying iframe to not show vid load-also set back start vid time in youtube url to not miss anything
  function action_after_delay_timer1() {
    IDx('response_iframe_id').style.display = 'inline';
  }
  setTimeout(timerGo_vid, vid[vid_number].evt); //vid close.. display off timer -- looks for timer value passed into function
  function timerGo_vid() {
    IDx('response_iframe_id').src = ''; //makes iframe suddenly have no src turning to black background css
    IDx('response_iframe_id').style.display = 'none'; //makes iframe disappear abruptly
  }
}

//__________________________________________

//Pic_launcher
function limg(delay_start_timer_value, pic_url, shutoff_timer_value) { //reusable for all - just pass in array index of pic_url_array, and timer_value 
  //clearTimeout(myTimer_var);
  console.log(delay_start_timer_value);
  console.log(shutoff_timer_value);

  IDx('response_img_id').src = pic_url;
  setTimeout(action_after_delay_timer2, delay_start_timer_value); //delay before displaying pic to not show pic load-leftover copy from vid load feature

  function action_after_delay_timer2() {
    IDx('response_iframe_id').style.display = 'none';
    IDx('response_img_id').style.display = 'inline';
  }
  setTimeout(timerGo_pic, shutoff_timer_value); //vid close.. display off timer -- looks for timer value passed into function

  function timerGo_pic() {
    IDx('response_img_id').style.display = 'none'; //makes img disapear abruptly
  }
}

//__________________________________________

function readInput() {
  var inputForm = IDx('myForm'),
      inputTxt = IDx('theLink');
  addon_talk=[];
  addon_talk[0]=', has been added to the links list';
  addon_talk[1]=', was added to the list';
  addon_talk[2]=', has been listed';
  addon_talk[3]=', is now a part of the links list';
  addon_talk[4]=', has now been added to the links list';
  addon_talk[5]=', was just added.';
  
  var empty_talk=[];
  empty_talk[0]='There isn\'t any information submitted';
  empty_talk[1]='There wasn\'t any info submitted';
  empty_talk[2]='No information submitted';
  empty_talk[3]='No data submitted';
  empty_talk[4]='Your submission contained no information';
  
  if(inputTxt.value !== ''){
    say(inputTxt.value + _.sample(addon_talk));//The entry + added on talk
  }else{
    say(_.sample(empty_talk));
  }
}

//__________________________________________

function addressBarColorFlasher(){
  function addressBarColor(){
    let rndColorSetter=setInterval(
    ()=>{
      function meta_rnd_clr(){return "#" + Math.floor(Math.random() * 16777215).toString(16);}
      let meta_id=document.getElementById('meta_id');
      meta_id.setAttribute('content', ' + meta_rnd_clr() + ');
    },100);
}
  addressBarColor();
  setTimeout(clearInterval(rndColorSetter),5000);
}
//}
/*--To Do List/Fix/Redo--*/
