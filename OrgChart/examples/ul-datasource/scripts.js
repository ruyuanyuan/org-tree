'use strict';

(function($){

  $(function() {

    $('#chart-container').orgchart({
      'data' : $('#ul-data'),
      'nodeContent': 'title',
      'toggleSiblingsResp': true
    });

  });

})(jQuery);