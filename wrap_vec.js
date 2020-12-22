

var range = view.selectionRange();

var selection = view.selectedText();
void view.removeSelectedText();

var new_words = "\\vec{"+selection+"}";
document.editBegin()
document.insertText(new_words);
document.editEnd()



