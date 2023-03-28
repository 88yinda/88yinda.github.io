function Time() {

     // Creating object of the Date class
     var date = new Date();
    
     // Get current hour
     var hour = date.getHours();
     // Get current minute
     var minute = date.getMinutes();
     // Get current second
     var second = date.getSeconds();
    
     // Variable to store AM / PM
     var period = "";
    
     // Assigning AM / PM according to the current hour
     if (hour >= 12) {
     period = "PM";
     } else {
     period = "AM";
     }
    
     // Converting the hour in 12-hour format
     if (hour == 0) {
     hour = 12;
     } else {
     if (hour > 12) {
     hour = hour - 12;
     }
     }
    
     // Updating hour, minute, and second
     // if they are less than 10
     hour = update(hour);
     minute = update(minute);
     second = update(second);
    
     // Adding time elements to the div
     document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    
     // Set Timer to 1 sec (1000 ms)
     setTimeout(Time, 1000);
    }
    
     // Function to update time elements if they are less than 10
     // Append 0 before time elements if they are less than 10
    function update(t) {
     if (t < 10) {
     return "0" + t;
     }
     else {
     return t;
     }
    }
    
    Time();
    function startTime() {
        var today = new Date();
        var hr = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;
        //Add a zero in front of numbers<10
        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);
        document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
        
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var curWeekDay = days[today.getDay()];
        var curDay = today.getDate();
        var curMonth = months[today.getMonth()];
        var curYear = today.getFullYear();
        var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
        document.getElementById("date").innerHTML = date;
        
        var time = setTimeout(function(){ startTime() }, 500);
    }
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    startTime();