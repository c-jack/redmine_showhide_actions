(function() {

jQuery(document).ready(function() {
	var icons = $('div#content>div.contextual:has(a.icon)');
	
    if (icons.length === 0) {	return;	}
	
    var shbtn = $('a.show-hide');
	
    icons.each(function() {
		
        var showHideButton = shbtn.clone().css('display', 'inline')
		var editButton = $(this).find('a.icon-edit');
		if (editButton.length > 0) {    showHideButton.insertBefore(editButton);
        } else {            			$(this).append(showHideButton);	    	}
        });
	});
})();


function showHideNotes() {
    if ($('.journal.has-details:hidden').length) {
        $('.journal.has-notes.has-details ul.details').show(500,"swing")
        $('.journal.has-details ul.details').show();
        $('.journal.has-details').show(500,"swing");
        $('.show-hide-icon').text('Hide Actions');
    } else {
        $('.show-hide-icon').text('Show Actions');
        $('.journal.has-details').not('.journal.has-notes.has-details').hide(500,"swing");
        $('.journal ul.details').hide(500,"swing");
    }
}
