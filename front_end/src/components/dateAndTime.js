
    //  curent time 
    let dateTitle =  document.querySelector('.date-title');
    ////format current date 
    let currentDay = function() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
    
        today = mm + '/' + dd + '/' + yyyy;
         return today 
    }
     dateTitle.innerHTML = currentDay()


     //// Flickr DatePicker 

     $("#basicDate").flatpickr({
        enableTime: false,
        dateFormat: "F, d Y "
           });   
       
           $("#startPicker").flatpickr({
               enableTime: true,
               noCalendar: true,
               defaultHour: 12,
              time_24hr: false,
               dateFormat: "H:i",
           });
       
           $("#endPicker").flatpickr({
               enableTime: true,
               noCalendar: true,
                time_24hr: false,
               dateFormat: "H:i",
           });
       
           $(".resetDate").flatpickr({
               wrap: true,
               weekNumbers: true,
           });