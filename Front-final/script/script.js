////////////////////////////

var stat = $("#statistics");
var navBar=$("#web_navbar");
var header=$("#header");

$(document).ready(function(){
    //scroll functions
    //scroll navbar
    
    $(window).scroll(function(){
        if ($(window).scrollTop()>$(header).height()) {
            $(navBar).css({"background":"white","position":"fixed","top":"0" });
        }
        else{
            $(navBar).css({"background":"rgba(255, 255, 255, 0.5)","position":"relative", "z-index":"2"});
        }
    });

    ///scroll statistic
    var count1 = 0;
    var count2=0;
    var count3=0;
    var count4=0;
    $(window).scroll(function(){
            
        if ($(window).scrollTop()>$(stat).offset().top) {
            var interval1= setInterval(cauntPatients,10);
            var interval2= setInterval(doctorCount,10);
            var interval3= setInterval(missionCount,10);
            var interval4= setInterval(surgerieCount,10);
            function cauntPatients (){
                if (count1<=2340) {
                    count1+=10;
                }
                
                $(".patientsCount").html(count1);
                if(count1>=2340){
                   
                    clearInterval(interval1);
                }
            }
            function doctorCount (){
                if(count2<=335){
                    count2+=1;
                }

                $(".doctorCount").html(count2);
                if(count2>=335){
                    
                    clearInterval(interval2);
                }
            }
            function missionCount (){
                if(count3<=1305){
                    count3+=5;
                }
                
                $(".missionCount").html(count3);
                if(count3>=1305){
                    
                    clearInterval(interval3);
                }
            }

            function surgerieCount (){

                if(count4<=1540){
                    count4+=5;
                }
                $(".surgerieCount").html(count4);
                if(count4>=1540){
                    
                    clearInterval(interval4);
                }
            }
        }
        else{
          
        }
    });
    // end of scroll functions
  
    // sidebar functions
    //open sidebar
    var sideBar=document.getElementById("sideBar");
    $(".btn_menu").click(openMenu);
    function openMenu() {
        sideBar.style.left="0px";
    }
    //close sidebar
    $(".close").click(closeMenu);
    function closeMenu() {
        sideBar.style.left="-400px";
    }
    //rotate sign 
    var expandSigns=$(".expandSign");
    var menuItems= $(".menu_item");
    var degree= 0;
    $.each(menuItems, function (index, menuItem) { 
        $(expandSigns).css("transform", "rotate(0deg)");
        $(menuItem).click(function () {
            $(expandSigns).css("transform", "rotate(0deg)");
            if($(this).attr("aria-expanded")=="true"){
                $(this).children(".expandSign").css("transform", "rotate(0deg)");
            }
            else{
                $(this).children(".expandSign").css("transform", "rotate(45deg)");
            }
        });
    });
    ///sidebar hover effects
    var cardHeaders = $(".card-header ");
    $.each(cardHeaders, function (index, header) { 
        $(header).hover(function(){
            $(this).parent().find(".list-group-item").css("background-color", "#2EC8A6");
            }, function(){
            $(this).parent().find(".list-group-item").css("background-color", "#2a2727");
        });
    });
    var menuSubItems= $(".card").find(".list-group-item");
    $.each(menuSubItems, function (index, SubItem) { 
        $(SubItem).hover(function(){
            $(this).parent().parent().eq(0).css("background-color", "#2EC8A6");
            }, function(){
            $(this).parent().parent().eq(0).css("background-color", "white");
        });
        $(SubItem).hover(function(){
            $(this).parent().find(".list-group-item").css("background-color", "#2EC8A6",);
            }, function(){
            $(this).parent().find(".list-group-item").css("background-color", "#2a2727");
        });
        $(SubItem).hover(function(){
            $(this).parent().parent().find(".menu_item").css("color", "white");
            }, function(){
            $(this).parent().parent().find(".menu_item").css("color", "black");
        });
        
    });
    //end of sidebar functions

    //accardion rotate sign
    var arrowSigns=$(".arrowSign");
    var accordionItems= $(".accordion_items");
    var deg= 0;
    $.each(accordionItems, function (index, accordionItem) { 
        $(".arrowSign").css("transform", "rotate(0deg)");
    //    $(".arrowSign").css({"transform": "rotate(0deg)", "background":"#2EC8A6"});
        $(accordionItem).click(function () {
            $(arrowSigns).css("transform", "rotate(0deg)");
            $(arrowSigns).css({ "background":"#2EC8A6"});
            $(accordionItems).parent().css("border", "none");
            if($(this).children().eq(0).attr("aria-expanded")=="false"){
                
                console.log("yes");
                $(this).parent().css("border", "1px solid #F4AB01");
                $(this).children().eq(0).children().eq(0).css({"transform": "rotate(90deg)", "background":"#F4AB01"});
               
            }
            else{
                $(this).parent().css("border", "none");
                $(this).children().eq(0).children().eq(0).css({"transform": "rotate(0deg)", "background":"#2EC8A6"});
                console.log("no");  
            }
        });
    });

   

});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 40.377337, lng:49.854021};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}


