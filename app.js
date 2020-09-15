var countdown = new Date('November 23, 2020 00:00:00').getTime();


var x = setInterval(function()  {
    var current = new Date().getTime();
    var final = countdown - current;

    var days = Math.floor( final/(1000*60*60*24));
    var hrs = Math.floor(( final % (1000*60*60*24)) / (1000*60*60));
    var mins = Math.floor(( final % (1000*60*60)) / (1000*60));
    var sec = Math.floor( (final % (1000*60)) / 1000);

    document.getElementById('Days').textContent = days;
    document.getElementById('Hours').textContent = hrs;
    document.getElementById('Mins').textContent = mins;
    document.getElementById('Sec').textContent = sec;
    if(final == 0 ){
        alert('CountDown Ended');
    }
},1000);