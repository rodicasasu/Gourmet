function loadpage(page){
    $.ajax({
      url:page,
      beforeSend:function(){
        $('#page_loader').html("Please wait...");
      },
      success:function(data){
        $('#page_loader').html(""); // to empty previous page contents.
        $('#page_loader').html(data);
      }
    });
  }
  