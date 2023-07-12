// write js code here if required
    function updateTimer() {
      let now = new Date();

      let day = now.getDate();
      let month = now.getMonth() + 1; 
      let year = now.getFullYear();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Format single-digit values with leading zeros
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      if (hours < 10) hours = '0' + hours;
      if (minutes < 10) minutes = '0' + minutes;
      if (seconds < 10) seconds = '0' + seconds;

      var timerText = day + '/' + month + '/' + year + ', ' + hours + ':' + minutes + ':' + seconds;
      document.getElementById('timer').innerHTML = timerText;
    }

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);