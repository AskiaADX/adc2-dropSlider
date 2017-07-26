/* standard_single_loop.js */
{% 
Dim i 
Dim j
Dim inputName
Dim currentValue
Dim ar = CurrentQuestion.ParentLoop.Answers
Dim avR = CurrentQuestion.AvailableResponses
Dim allValues = avR[1].inputValue()
Dim allCaptions = avR[1].Caption

For j = 2 to avR.Count
	allValues = allValues + "," + avR[j].inputValue()
    allCaptions = allCaptions + "," + avR[j].Caption
Next

For i = 1 To ar.Count 
	inputName = CurrentQuestion.Iteration(ar[i].Index).InputName()
    currentValue = CurrentQuestion.Iteration(ar[i].Index).inputValue()
	%}
{element : $('#{%= inputName%}'), value : "{%= currentValue%}", allValues : "{%= allValues%}", allCaptions : "{%= allCaptions%}", caption : "{%= ar[i].Caption %}"}{%= On(i < ar.Count, ",", "") %}
{% Next %}