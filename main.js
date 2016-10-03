(function($){
  $(function(){
    "use strict";

    $('.photo-album').hide();

    var albumContainer = $('.photo-container');

    // $('.photo-container')
    //   .parents('.row')
    //     .css('background-color', 'red')
    //   .end()
    //   .css({'font-weight': 'bold'});

    var albumItems = $('.photo-container')
                      .find('a')
                      .children()
                      .not('.photo-tile');

    albumItems.click(function(event){
      event.preventDefault();

      var $album = $(this),
          $albumContainer = $('.photo-catalog'),
          $photoContainer = $('.photo-album'),
          albumTitle = $album.siblings('div').text();

      $('#album-photo-container').find('h2').html(albumTitle);

      $albumContainer.hide();
      $photoContainer.show();

      console.log($album);
    });

    console.log(albumItems);

  });
}(jQuery));
