
function reload(){
    var array = JSON.parse(localStorage.getItem('activities'));
    if(array === null){
        $("#list").fadeOut(2);
        $("#list").empty();
        $("#noEntries").fadeIn(); 
    }
    else {
        if(array.length > 0){
            $("#noEntries").hide()
            $("#list").show();
            $("#list").empty();
            for(item of array){
              $("#list").append($(`<li class="activityItem">${item}<button class='btn delete'>Delete</button></li>`).hide().fadeIn());
            }
          }
        else {
            $("#list").fadeOut(2);
            $("#noEntries").fadeIn();
        }
    }
    
}
