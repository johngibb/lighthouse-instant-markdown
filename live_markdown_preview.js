$(function(){
	$('dt.previewable + dd textarea')
		.after(
			$('<div>')
				.addClass('markdown-preview')
				.html('[No Preview]')
		)
		.bind('change keyup', function(){
			var src = $(this).val();
			var preview = new Showdown.converter().makeHtml(src);

			$(this).next('div.markdown-preview').html(preview);
		});
})