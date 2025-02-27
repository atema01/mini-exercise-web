   //list exercise by day
        //DAY 1
        const day1 = [        
            { img: "images/standard.gif", title: "Standard Push up" },
            { img: "images/archer.gif", title: "Archer Push up" },
            { img: "images/Pseudo Planche.gif", title: "Pseudo  Push up" },
            { img: "images/diamond.gif", title: "Diamond Push up" },
            {img: "images/overhead triceps extensions.gif", title:"overhead triceps"}
            ];
            //DAY 3
            const day3 = [        
            { img: "images/pull-up.gif", title: "Standard Pull up" },
            { img: "images/band rows.gif", title: "Band Rows" },
            { img: "images/decline.gif", title: "Decline  Push up" },
            { img: "images/chin up.gif", title: "Standard Chin up" },
            { img: "images/Dips.gif", title: "Dips  " },
            ];
            //DAY 5
            const day5 = [        
            { img: "images/pike push ups.gif", title: "Pike Push up" },
            { img: "images/band biceps curls.gif", title: "Band Biceps Curl" },
            { img: "images/single arm.gif", title: "Single Arm Push up" },
            { img: "images/cross arm push ups.gif", title: "Cross arm Push up" },
            { img: "images/diamond.gif", title: "Diamond Push up  " },
            ];
            //DAY 7
            const day7 = [        
            { img: "images/clap push up.gif", title: "Clap Push up" },
            { img: "images/archer.gif", title: "Archer Push up" },
            { img: "images/band biceps curls.gif", title: "band biceps curls" },
            { img: "images/diamond.gif", title: "Diamond Push up" },
            { img: "images/Dips.gif", title: "Dips  " },
        ];
    
            //to select days and corresponding exercises
            document.addEventListener("change",function (){
                const day=document.querySelector("select").value;
                textToSpeech("")
    
                checkInput(day)
    
            function checkInput(input){
            //it create empty elements to accept the value
            function createElement(){
            const exContainer=document.querySelector("ul");
            exContainer.insertAdjacentHTML("beforeend",
            `<li>
                <img src="">
                <p></p>
             </li>
            `)}
            //function to insert list of exercise in each day
            //for the first day
            function firstDay(){
                document.querySelector("ul").innerHTML="";
                var arrVal="0";
               
        maxVal=day1.length;
        for(i=0; i<maxVal; i++){
            createElement();
            const lastItem = document.querySelector(".ex-day").lastElementChild;
            lastItem.querySelector("li img").src=day1[arrVal].img;
            lastItem.querySelector("li p").innerHTML=day1[arrVal].title;
            arrVal++;
        }
         
            }
            
            //for the third day
            function ThirdDay(){
                document.querySelector("ul").innerHTML="";
                var arrVal="0";
                
        maxVal=day3.length;
        for(i=0; i<maxVal; i++){
            createElement();
            const lastItem = document.querySelector(".ex-day").lastElementChild;
            lastItem.querySelector("li img").src=day3[arrVal].img;
            lastItem.querySelector("li p").innerHTML=day3[arrVal].title;
            arrVal++;
        }
    
            }  
            //for the fifth day
            function fifthDay(){
                 document.querySelector("ul").innerHTML="";
                var arrVal="0";
               
        maxVal=day5.length;
        for(i=0; i<maxVal; i++){
            createElement();
            const lastItem = document.querySelector(".ex-day").lastElementChild;
            lastItem.querySelector("li img").src=day5[arrVal].img;
            lastItem.querySelector("li p").innerHTML=day5[arrVal].title;
            arrVal++;
        }
    
    
            } 
            //for the seventh day
            function seventhDay(){
                document.querySelector("ul").innerHTML="";
                var arrVal="0";
                
        maxVal=day1.length;
        for(i=0; i<maxVal; i++){
            createElement();
            const lastItem = document.querySelector(".ex-day").lastElementChild;
            lastItem.querySelector("li img").src=day7[arrVal].img;
            lastItem.querySelector("li p").innerHTML=day7[arrVal].title;
            arrVal++;
        }
    
            }
        
    
            //check exercise day and change the exercise based on the day
        if(day==="novalue") {
            document.querySelector(".bg-image").style.display="block ";
            document.querySelector(".exercices").style.display="none";
            document.querySelector(".ex-nav").style.display="none";
        }
        else if(day==="day1"){
            
            document.querySelector(".bg-image").style.display="none";
            document.querySelector(".exercices").style.display="block";
            document.querySelector(".ex-nav").style.display="flex";
            document.querySelector(".ex-nav h3").innerHTML="Exercise List"
            document.querySelector(".ex-nav div:nth-child(3)").style.display="block";
    
            firstDay();
           }
       
        else if(day=="day3"){
            document.querySelector(".bg-image").style.display="none";
            document.querySelector(".exercices").style.display="block";
            document.querySelector(".ex-nav").style.display="flex";
            document.querySelector(".ex-nav h3").innerHTML="Exercise List"
            document.querySelector(".ex-nav div:nth-child(3)").style.display="block";
    
            ThirdDay();
        }
        else if(day=="day5"){
            document.querySelector(".bg-image").style.display="none";
            document.querySelector(".exercices").style.display="block";
            document.querySelector(".ex-nav").style.display="flex";
            document.querySelector(".ex-nav h3").innerHTML="Exercise List"
            document.querySelector(".ex-nav div:nth-child(3)").style.display="block";
    
            fifthDay();
        }
        else if(day=="day7"){
            document.querySelector(".bg-image").style.display="none";
            document.querySelector(".exercices").style.display="block";
            document.querySelector(".ex-nav").style.display="flex";
            document.querySelector(".ex-nav h3").innerHTML="Exercise List"
            document.querySelector(".ex-nav div:nth-child(3)").style.display="block";
    
            seventhDay();
        }
        else{
            document.querySelector("ul").innerHTML="";
    
            document.querySelector(".bg-image").style.display="none";
            document.querySelector(".exercices").style.display="block";
            document.querySelector(".ex-nav").style.display="flex";
            document.querySelector(".ex-nav h3").innerHTML="Recovery Day"
        }
    
           
    }
            })
    
        
    
            //to go to home page
    function home(){
        document.querySelector(".bg-image").style.display="block ";
        document.querySelector(".exercices").style.display="none";
        document.querySelector(".ex-nav").style.display="none";
        document.querySelector("select").selectedIndex=0;
    
    }
            //to go to the exercise page
    function start(){
        ex=0;
        resetCount();
        document.querySelector(".set").innerHTML=setCount+"/4 sets ";
        document.querySelector(".set").style.display="block";
        document.querySelector(".next").style.display="block";
        document.querySelector(".skip").style.display="none";
        document.querySelector(".back").style.cssText="position:none; top:0;" ;
        document.querySelector(".bg-image,.exersice-tracker").style.display="none ";
        document.querySelector(".exercices").style.display="none";
        document.querySelector(".ex-nav").style.display="none";
        document.querySelector(".main-page ").style.display="block";
        document.querySelector(".title").style.display="none";
        document.querySelector(".navigation").style.display="flex";
        document.querySelector(".start").style.display="none";
        document.querySelector(".stop").style.display="none";
        document.querySelector(".main-page  img").style.display="block";
        document.querySelector(".count-down ").style.display="none";
        document.querySelector(".main-page img").style.display="blokc";
        excall();
    
    
    
    }
     //time counter
    
    let timer=null;
    function countDown(){
               function currentexersise(){
                const days=document.querySelector("select").value;
                if(days==="day1"){
                    textToSpeech(day1[ex ].title)
    
                }
                else if(days==="day3"){
                    textToSpeech(day3[ex ].title)
    
                }
                else if(days==="day5"){
                    textToSpeech(day5[ex ].title)
    
    
                }
                else if(days==="day7"){
                    textToSpeech(day7[ex ].title)
    
                }
               
               }
                if(seconds>0){
                    if(seconds===60){
                    textToSpeech("take a 60 second break");
    
    
                }
                seconds--;
                
                if(seconds===30){
                x="30 seconds left";
                textToSpeech(x);
    
                }
                else if(seconds===10){
                    x="10 seconds left";
                    textToSpeech(x);
    
    
                }
                
                document.querySelector(".time").innerHTML=seconds;
               }
               else{
                document.querySelector(".set").style.display="block";
                document.querySelector(".next").style.display="block";
                document.querySelector(".skip").style.display="none";
                document.querySelector(".start").style.display="none";
                document.querySelector(".stop").style.display="none";
                document.querySelector(".count-down").style.opacity="0";
                resetCount();
                textToSpeech("time is up, do exercise");
    currentexersise();
                seconds=60;
                
               }
               
          }
    function startCount(){
        document.querySelector(".start").style.display="none";
        document.querySelector(".stop").style.display="block";
        document.querySelector(".count-down").style.opacity="0.5";
    
        if(timer!=null){
            clearInterval(timer);
        }
    timer=setInterval(countDown,1000);
    
    }
    function stopCount(){
        clearInterval(timer);
        document.querySelector(".start").style.display="block";
        document.querySelector(".stop").style.display="none";
    }
    function resetCount(){
        seconds=60;
        document.querySelector(".time").innerHTML=seconds;
        clearInterval(timer)
    
       
    }
    
    let ex = 0; // initialize exercise index
    let setCount=1;
    
    function excall() {
        // ensure ex remains within valid range
        const day=document.querySelector("select").value;
    
        if (ex > 4) {
            if(setCount===4){
            const back=document.querySelector(".back");
            setCount=1;
            Object.assign(back.style,{
                position:'relative',
                top:'100px'
            })
            document.querySelector(".main-page img").style.display="none";
            document.querySelector(".main-page h2").innerHTML="You Are Doing Great, Keep Going ";
            document.querySelector(".count-down").style.display="none";
            document.querySelector(".start").style.display="none";
            document.querySelector(".stop").style.display="none";
            document.querySelector(".title").style.display="block";
            document.querySelector(".title").innerHTML="You have successfuly completed today's challenge!!!";
            document.querySelector(".navigation").style.display="none";
            }
            else{
                ex=0;
                document.querySelector(".set").innerHTML=1+setCount+"/4 sets ";
                setCount++;
            }
            
    
        };
        //update the image and text on the main exercise page
        if(day==="day1"){
           
        document.querySelector(".main-page img").src = day1[ex ].img;
        document.querySelector(".main-page h2").innerHTML = day1[ex].title;
        document.querySelector(".prev").style.display="block";
        textToSpeech("next up, "+day1[ex].title)
    
        
        }
        else if(day==="day3"){
    
            document.querySelector(".main-page img").src = day3[ex].img;
        document.querySelector(".main-page h2").innerHTML = day3[ex].title;
        document.querySelector(".prev").style.display="block";
        textToSpeech("next up, "+day3[ex].title);
    
    
    
        }
        else if(day==="day5"){
    
            document.querySelector(".main-page img").src = day5[ex].img;
        document.querySelector(".main-page h2").innerHTML = day5[ex].title;
        document.querySelector(".prev").style.display="block";
        textToSpeech("next up, "+day5[ex].title);
    
    
        }
        else if(day==="day7"){
            document.querySelector(".main-page img").src = day7[ex].img;
        document.querySelector(".main-page h2").innerHTML = day7[ex].title;
        document.querySelector(".prev").style.display="block";
        textToSpeech("next up, "+day7[ex].title);
    
    
        }
        else{
           
            document.querySelector(".main-page img").src="images/clock.png";
            document.querySelector(".main-page h2").innerHTML="Let Your muscle Recover";
            document.querySelector(".skip").style.display="none";
            document.querySelector(".next").style.display="none";
            document.querySelector(".start").style.display="none";
            document.querySelector(".set").style.display="none";
            document.querySelector(".prev").style.display="none";
    
        }
    }
    
      
    document.querySelector(".prev").addEventListener("click", () => {
        if(ex!==1){
        ex--;
        excall();
        document.querySelector(".count-down").style.opacity="0";
        document.querySelector(".skip").style.display="none";
        document.querySelector(".next").style.display="block";
        document.querySelector(".start").style.display="none";
        document.querySelector(".set").style.display="block";
        window.speechSynthesis.cancel();
        resetCount();
    
    }
    
    });
    //when next is pressed
    document.querySelector(".next").addEventListener("click", () => {
        resetCount();
        document.querySelector(".next").style.display="none";
        document.querySelector(".skip").style.display="block";
        document.querySelector(".set").style.display="none";
        document.querySelector(".count-down ").style.display="block";
        startCount();
        ex++;
        window.speechSynthesis.cancel();
        excall();
    });
    document.querySelector(".skip").addEventListener("click", () => {
        document.querySelector(".count-down").style.display="none";
        document.querySelector(".next").style.display="block";
        document.querySelector(".skip").style.display="none";
        document.querySelector(".start").style.display="none";
        document.querySelector(".stop").style.display="none";
        document.querySelector(".set").style.display="block";
        seconds=60;
        resetCount();
        window.speechSynthesis.cancel();
       for(let i=0;i<10;i++){
        textToSpeech("");

       }

        textToSpeech("do exercise");
        function currentexersise(){
            const days=document.querySelector("select").value;
            if(days==="day1"){
                textToSpeech(day1[ex].title)

            }
            else if(days==="day3"){
                textToSpeech(day3[ex].title)

            }
            else if(days==="day5"){
                textToSpeech(day5[ex].title)


            }
            else if(days==="day7"){
                textToSpeech(day7[ex].title)

            }
           
           }
           currentexersise();
    
    });
        // initial call to display first exercise
    excall();
        //to go to the exercise nav page
    function back(){
        document.querySelector(".bg-image").style.display="none";
        document.querySelector(".exersice-tracker").style.display="block ";
        document.querySelector(".exercices").style.display="block";
        document.querySelector(".ex-nav").style.display="flex";
        document.querySelector(".main-page").style.display="none";
        document.querySelector(".title").style.display="block";
        document.querySelector(".title").innerHTML="Exercise Tracker";
        document.querySelector(".navigation").style.display="none";
        document.querySelector(".start").style.display="none";
        document.querySelector(".set").style.display="none";
        document.querySelector(".stop").style.display="none";
        resetCount();
        window.speechSynthesis.cancel();
    
    }
    //text to speech function
    function textToSpeech(x){
    let speech=new SpeechSynthesisUtterance();
    let voices=[];
    voices=window.speechSynthesis.getVoices();
    
    speech.voice=voices[1];
    speech.text=x;
    window.speechSynthesis.speak(speech);
    document.querySelector("audio").volume=0.1;
    
     }    