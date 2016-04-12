var vid=[];//dvt=delay_visible_time, evt=end_visible_time
//vid[#]={vid_info:'', dvt:0, evt:0};//template for info
vid[0]={vid_info:'gYNUOkqzcVA?start=07&end=11', dvt:1450, evt:4160};//gladiator - thumbs down clip
vid[1]={vid_info:'IxAKFlpdcfc?start=01&end=8', dvt:0, evt:3000};//crowd applause clip
vid[2]={vid_info:'Byq09pDAmeg?start=32&end=65', dvt:0, evt:6000};//matrix - part1
vid[3]={vid_info:'Byq09pDAmeg?start=60&end=80', dvt:0, evt:3850};//matrix - part2
vid[4]={vid_info:'U-SaVjydLyg?start=13&end=18', dvt:0, evt:4500};//Vader - Yes Master
vid[5]={vid_info:'qHK4YjgDV9s?start=38&end=45', dvt:0, evt:3000};//aliens?
vid[6]={vid_info:'vi1-IihX6yY?start=03&end=16', dvt:1950, evt:8550};//Jim Carrey - Ray Finkle - shorts
vid[7]={vid_info:'1n2CSxpHVcs?start=110&end=123', dvt:2000, evt:15000};//hal 9000 - no mistakes clip
vid[8]={vid_info:'JbgbeHja2dQ?start=00&end=10', dvt:3000, evt:6000};//should not appear - so just using sound not video


var media_url = [];
media_url[1] = 'https://media.giphy.com/media/7rj2ZgttvgomY/giphy.gif'; //clapping
media_url[2] = 'http://33.media.tumblr.com/c85db198e229666cce94d3b1e3e8c067/tumblr_msjr0z1PmG1sgl0ajo1_500.gif';


IDx = function(id) { //part of the IDz library i made - instead of $ / jquery
  return document.getElementById(id)
};

var code_stamp = function() {
  console.clear();
  console.log('Code Author - Tim Tesner');
  console.log('my_links[]');
  console.log('Add Links to List');
  myForm.focus();
};
code_stamp();
var my_links = []; //create an empty array to add to
var plural_check; //declare variable first outside of function
function plural_checker_func() {
  if (my_links.length === 1) { //if equal to 1 - then 0 and 2 are "links" 
    plural_check = 'Link'; //1
  } else {
    plural_check = 'Links'; //0 or 2
  }
}
plural_checker_func();
//var stringz = JSON.stringify(my_links);

function add_links_function() {
  console.clear();
  var add_it = IDx('theLink').value;
  if (add_it === '') {
    alert('Input Empty');
    if (my_links.length) {
      IDx("links_area").innerHTML = '<span class="links_listed_span">Links Listed Here</span><br><br>';
    } else {
      IDx('links_area').innerHTML = '<span class="add_links_span">Add Links to List</span><br>';
    }
    var repeat_func = function() { //start reusable function test
      for (var i = 0; i < my_links.length; i++) {
        IDx("links_area").innerHTML += '<a href="http://' + my_links[i] + '">' + my_links[i] + '</a><br>';
        IDx('theLink').value = '';
      }

      console.log('test3 - ' + stringz);
      save_file();
      plural_checker_func();

      var stringz = JSON.stringify(my_links);
      console.log('my_links' + stringz);
      if (my_links.length !== 0) {
        console.log(' ' + my_links.length + ' - ' + window.plural_check + ' ' + 'Listed! ');

        console.log('test');
      } else {
        code_stamp();
      }
    }; //end  reusable function test - "repeat_func"
    repeat_func(); //function launch "repeat_func" first time
  }

  if (my_links != add_it && add_it) { //if it doesn't equal the value, and the value exists
    if (!my_links) { //if my_links doesn't exist
      my_links.push(add_it); //add to end or bottom of array list
    } else {
      my_links.unshift(add_it); //add to top of array list
    }
    IDx("links_area").innerHTML = '<span class="links_listed_span">Links Listed Here</span><br><br>';

    for (var i = 0; i < my_links.length; i++) {
      IDx("links_area").innerHTML += '<a href="http://' + my_links[i] + '">' + my_links[i] + '</a><br>';
      IDx('theLink').value = '';
    }
    
    plural_checker_func();

    var stringz = JSON.stringify(my_links);
    console.log('my_links' + stringz);
    console.log(' ' + my_links.length + ' - ' + plural_check + ' ' + 'Listed! ');
  }
}

function reset_array_function() {
  console.clear();

  plural_checker_func();

  var confirm_reset = confirm('Do you really want to Clear the List? - You have ' + my_links.length + ' ' + plural_check + ' Listed!');
  if (confirm_reset === true) {
    my_links = [];
    my_links.length = 0;
    IDx('links_area').innerHTML = '<span class="add_links_span">Add Links to List</span><br>';
    IDx('theLink').value = '';
    //console.log('my_links[' + my_links + ']');
    code_stamp(); //use function again
    return;
  } else {
    document.getElementById("links_area").innerHTML = '<span class="links_listed_span">Links Listed Here</span><br><br>';
    for (var i = 0; i < my_links.length; i++) {
      IDx("links_area").innerHTML += '<a href="http://' + my_links[i] + '">' + my_links[i] + '</a><br>';
      IDx('theLink').value = '';
    }
    
    save_file();
    plural_checker_func();

    var stringz = JSON.stringify(my_links);
    console.log('my_links' + stringz);
    console.log(' ' + my_links.length + ' - ' + plural_check + ' ' + 'Listed! ');    
    return;
  }
  plural_checker_func();
  
  IDx('links_area').innerHTML = '<span class="list_empty_span">List Empty - There are No Links Added to Clear!</span><br>';
  console.log('Array already empty');
  alert('Array already empty');
  console.clear();
  code_stamp();
  IDx('links_area').innerHTML = '<span class="add_links_span">Add Links to List</span><br>';
}

//installed script - filesaver.js - shortcut....after a battle to code to name the file after the actual download was already working
var my_data=JSON.stringify(my_links);
console.log(my_data+'test5')
var blob = new Blob([my_data], {type: "text/plain;charset=utf-8"});

IDx('link').href = blob;
saveAs(blob, "hello world.txt");
/*
var save_file = function() { //reuse this function after each loop      
  //save as text file - code
  console.log('test - ' + my_links);
  //var stringz = JSON.stringify(my_links);
  //var my_data = my_links;
  var my_data = JSON.stringify(my_links);  
  properties = {
    type: 'octet/stream'
  }; // mime-type.
  try {
    // use of the File constructor..
    file = new File(my_data, 'test_text_blob_codepen.txt', properties)
  } catch (e) {
    // ... or fall back to Blob constructor
    my_blob = new Blob([my_data], properties)//added the brackets to make json format
  }
  url = URL.createObjectURL(my_blob);
  var a=document.createElement('a');
  
  a.download='blobby-backup.json';
 // a.href=url;
  IDx('link').href = url;//uncomment maybe  
}
save_file(); //launch function immediately
*/

function non_working_feature() {//use to inform of trying to use not yet built features
  alert('Feature - Not Implemented Yet!\nMight be Coded into Newer Builds....')
}

function vidz(vid_number){
  var first_part='https://www.youtube.com/embed/';
  var end_part='&autoplay=1&showinfo=0&controls=0&autohide=1&disablekb=1';  
  whole_url = first_part + vid[vid_number].vid_info + end_part;
  return vid_number;
  console.log(whole_url);
};

// Vid - Launcher Youtube - "lyt"=LaunchYouTube
function lyt(vid_number) { //reusable for all - just pass in array index of vid_url_array, and timer_value
  IDx('response_img_id').style.display = 'none'; /*clear img in the same spot if it is still playing-so they dont collide*/
  IDx('response_iframe_id').src = whole_url;
  setTimeout(action_after_delay_timer1, vid[vid_number].dvt); //delay before displaying iframe to not show vid load-also set back start vid time in youtube url to not miss anything
  function action_after_delay_timer1() {
    IDx('response_iframe_id').style.display = 'inline';
  }
  setTimeout(timerGo_vid, vid[vid_number].evt) //vid close.. display off timer -- looks for timer value passed into function

  function timerGo_vid() {
    IDx('response_iframe_id').src = ''; //makes iframe suddenly have no src turning to black background css
    IDx('response_iframe_id').style.display = 'none'; //makes iframe disappear abruptly
  }
}

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
  };
  setTimeout(timerGo_pic, shutoff_timer_value); //vid close.. display off timer -- looks for timer value passed into function

  function timerGo_pic() {
    IDx('response_img_id').style.display = 'none'; //makes img disapear abruptly
  };
};
