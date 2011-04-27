$(function(){
	$('dt.previewable + dd textarea')
		.after(
			$('<div>')
				.addClass('markdown-preview')
				.html('[No Preview]')
		);
})