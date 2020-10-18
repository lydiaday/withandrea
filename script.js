document.getElementById("searchSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const keyword = document.getElementById("searchInput").value;
  if (keyword === "")
    return;
  console.log(keyword);

  const url = "https://app.ticketmaster.com/discovery/v2/events.json?&keyword=" + keyword + "&countryCode=US&apikey=H0UQAnA039lLbdJ742RKcDxnjZRuvA1c";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      if (json.page.totalElements === 0) {
        results += "<br><h2>No Results Found</h2>";
      } else {
        results += "<h1> Search Results (" + json._embedded.events.length + ")</h1>";
        results += "<div class=\"all-results-container\">";
        results += "<div class=\"all-results\">";
        for (let i=0; i < json._embedded.events.length; i++) {
          results += "<div class=\"outer-event-result-container\">";
          results += "<div class=\"event-result-container\">";
          results += "<div class=\"event-result\">";
          results += "<div class=\"event-photo\">";
          results += "<a href=" + json._embedded.events[i].url + " target=\"_blank\"><img src=\"" + json._embedded.events[i].images[0].url + "\"/></a>";
          results += "</div>";
          results += "<div class=\"event-information\">";
          results += "<h1>" + json._embedded.events[i].name + "</h1>";
          if (!json._embedded.events[i].dates.start.dateTBA) {
            const date = json._embedded.events[i].dates.start.localDate;
            const year = date.substring(0,4);
            const oldMonth = date.substring(5,7);
            const day = date.substring(8,10);

            let month = "";

            if (oldMonth === "01") {
              month += "January";
            } else if (oldMonth === "02"){
              month += "February";
            } else if (oldMonth === "03"){
              month += "March";
            } else if (oldMonth === "04"){
              month += "April";
            } else if (oldMonth === "05"){
              month += "May";
            } else if (oldMonth === "06"){
              month += "June";
            } else if (oldMonth === "07"){
              month += "July";
            } else if (oldMonth === "08"){
              month += "August";
            } else if (oldMonth === "09"){
              month += "September";
            } else if (oldMonth === "10"){
              month += "October";
            } else if (oldMonth === "11"){
              month += "November";
            } else if (oldMonth === "12"){
              month += "December";
            }

            if (!json._embedded.events[i].dates.start.noSpecificTime && !json._embedded.events[i].dates.start.timeTBA){
              const time = json._embedded.events[i].dates.start.localTime;
              const oldHour = parseInt(time.substring(0,2));
              const minute = time.substring(3,5);
              let ampm = "";
              let hour = 0;

              if (oldHour > 12) {
                hour = oldHour - 12;
                ampm += "pm";
              } else {
                hour += oldHour;
                ampm = "am";
              }
              results += "<p>" + month + " " + day + ", " + year + " at ";
              results += hour + ":" + minute + " " + ampm + "</p>";
            }
          }

          for (let j=0; j <  json._embedded.events[i]._embedded.venues.length; j++) {
            results += "<p>" + json._embedded.events[i]._embedded.venues[j].city.name + ", " + json._embedded.events[i]._embedded.venues[j].state.name + "</p>";
          }
          results += "<p><a href=" + json._embedded.events[i].url + " target=\"_blank\">Find Tickets</a></p>";
          results += "</div>";
          results += "</div>";
          results += "</div>";
          results += "</div>";
        }
        results += "</div>";
        results += "</div><br><br>";
      }

      document.getElementById("searchResults").innerHTML = results;
    });
});
