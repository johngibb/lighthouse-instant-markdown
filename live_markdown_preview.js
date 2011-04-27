$(function(){
	var converter = new Showdown.converter();
	
	function createDlItem(dtHtml, ddHtml){
		return $('<dt>').html(dtHtml).after(
			$('<dd>').html(ddHtml)
		)
	}
	
	$('dt.previewable + dd textarea').each(function(){
		var previewDiv = $('<div>').addClass('markdown-preview').html('[No Preview]');
		$(this).after(
			createDlItem(
				$('<label>').html('Preview'),
				previewDiv
			)
		)
		.bind('change keyup', function(){
			var src = $(this).val();
			var preview = converter.makeHtml(src);

			previewDiv.html(preview);
		})
	})
});