var forum = document.getElementById("Discourse_Forum");

    // Discourse forum  popup and the live support feature goes here
var discourse_msg_active=false;
         $(document).ready(function(){

             $('#Discourse_button').click(function(){
               if(discourse_msg_active==false){
                 $('#Discourse_Forum').addClass("fadeMe");
                 $('#Discourse_Forum').css("display","block");
                 discourse_msg_active=true;
               }else{
                 $('#Discourse_Forum').css("display","none");
                 discourse_msg_active=false;

               }

            });
            $('#Discourse_close').click(function(){

                $('#Discourse_Forum').css("display","none");
                discourse_msg_active=false;

            });
  })
