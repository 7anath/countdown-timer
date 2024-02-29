<script></script>
var target_mili_sec = new Date("01 March, 2024 12:00:00 ").getTime();
function timer(){
    var now_mili_sec = new Date().getTime();
    var remaining_sec = Math.floor ( (target_mili_sec - now_mili_sec) / 1000)

    var Days = Math.floor(remaining_sec / (3600 * 24));
    var Hours = Math.floor( (remaining_sec / (3600 * 24)) / 3600);
    var Minutes = Math.floor((remaining_sec % 3600) / 60);
    var Seconds = Math.floor(remaining_sec % 60);

    document.querySelector("#Days").innerHTML = Days 
    document.querySelector("#hours").innerHTML =  Hours
    document.querySelector("#minutes").innerHTML =  Minutes
    document.querySelector("#seconds").innerHTML = Seconds

    setInterval(timer(), 1000); //1000it means 1 sec
}
