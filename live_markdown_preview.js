$(function(){
	$('dt.previewable + dd textarea')
		.after(
			$('<div>')
				.addClass('markdown-preview')
				.html('[No Preview]')
		)
		.bind('change keyup', function(){
			var src = $(this).val();
			var preview = src; // Todo: Convert markdown to HTML

			$(this).next('div.markdown-preview').html(preview);
		});
})