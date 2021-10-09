(function()
	{
		CKEDITOR.plugins.add( 'toc', {

			// Register the icons. They must match command names.
			icons: 'toc',
			lang: ['de','en', 'ar'],
			// The plugin initialization logic goes inside this method.
			init: function( editor ) {

				// Define the editor command that inserts a timestamp.
				editor.addCommand( 'insertToc', {

					allowedContent: '*[id,name,class]{margin-right}',
					// Define the function that will be fired when the command is executed.
					exec: function( editor )
					{
						//remove already exisiting tocs...
						var tocElements = editor.document.$.getElementsByName("tableOfContents");
						for (var j = tocElements.length; j > 0; j--)
						{
							var oldid = tocElements[j-1].getAttribute("id").toString();
							editor.document.getById(oldid).remove();
						}
						//find all headings
						var list = [],
						nodes = editor.editable().find('h1,h2,h3,h4,h5,h6,');

						if ( nodes.count() == 0 )
						{
							alert( editor.lang.toc.notitles );
							return;
						}
						//iterate over headings
						var tocItems = "";
						for ( var i = 0 ; i < nodes.count() ; i++ )
						{
							var node = nodes.getItem(i),
								//level can be used for indenting. it contains a number between 0 (h1) and 5 (h6).
								level = parseInt( node.getName().substr( 1 ) ) - 1;

							var text = new CKEDITOR.dom.text( CKEDITOR.tools.trim( node.getText() ), editor.document);

							var id="";
							var name="";

							name = text.getText().replace(/[^A-Za-z0-9\u0600-\u06FF\_\-]/g, "+");
							id = 'pa_0' + i;

							//create name-attribute based on id
							node.setAttribute( 'id', id.toString() );
							node.setAttribute( 'name', name.toString() );

							//build toc entries as divs
							tocItems = tocItems + '<div style="margin-right:'+level*40+'px" id="' + id.toString() + '-toc" name="tableOfContents">' + '<a href="#' + id.toString() + '">' + text.getText().toString() + '</a></div>';
						}

						//output toc
						var tocNode = '<div id="show-toc"><p name="tableOfContents" id="main-toc"><b>' + editor.lang.toc.ToC + '</b></p>' + tocItems + '<hr id="hr-toc" name="tableOfContents"/></div>';
						editor.insertHtml(tocNode);
					}
				});

				// Create the toolbar button that executes the above command.
				editor.ui.addButton( 'toc', {
					label: editor.lang.toc.tooltip,
					command: 'insertToc',
					icon: this.path + 'icons/toc.png',
   		         toolbar: 'links'
				});
			}
		}
	)
})
();
