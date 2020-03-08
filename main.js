jQuery(document).ready(function($){
    $('.video-item iframe').on('mouseover',function(){
        var self = $(this);
            player = new Vimeo.Player(self);
        player.play();
        player.on('ended', function(en) {
            self.parents('.video-item').addClass('finished');
        });
    });
});