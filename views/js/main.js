    
                $(function(){
                    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                    var ticks = 0;
                    $('#cover').show();


     
                    $.getJSON("http://dannyarnold.com:5984/cards", function (data) {
                        $("#notice").append(data);
                    });



                   // $("#notice").append("\n");
                   //$("#notice").append(w.toString());
                   // $("#notice").append("X");
                   // $("#notice").append(h.toString());
                   // $("#notice").append("\n\r<br>");
                    //$("#notice").append("\nUnder Construction\n<br><img src='/img/undercon.png' width='325px' height='325px'></img>");



                    clock = setInterval(function(){

                    if (ticks < 600){
                        //$("#notice").append(".");
                        ticks++;
                    }
                    else {                   
                        clearInterval(clock);
                        $("#notice").text("This site is in development. Please check again later.");  
                    }
                    }, 500);
                    window.addEventListener('UNITYReady', UnityReady);
                }
                );


    var gameInstance = UnityLoader.instantiate("gameContainer", "Build/unityout.json", {
        compatibilityCheck: function (unityInstance, onsuccess, onerror) {
          if (!UnityLoader.SystemInfo.hasWebGL) {
            unityInstance.popup("Your browser does not support WebGL",
              [{text: "OK", callback: onerror}]);
          } else if (UnityLoader.SystemInfo.mobile) {
            window.location.href = "/mobile";
            onsuccess();
          } else if (["Edge", "Firefox", "Chrome", "Safari"].indexOf(UnityLoader.SystemInfo.browser) == -1) {

            Uini
            unityInstance.popup("Please note that your browser is not currently supported for this Unity WebGL content. Press OK if you wish to continue anyway.",
              [{text: "OK", callback: onsuccess}]);
          } else {
            onsuccess();
          }
        }
      });

      
    function UnityReady(){
        
       clearInterval(clock);
        
       $('#cover').hide();
        
       console.log(localStorage.getItem("ID"));
        
    }  
