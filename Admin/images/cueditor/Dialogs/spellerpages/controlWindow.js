var OxOb8fa=["_form","windowType","controlWindow","noSuggestionSelection","- No suggestions -","suggestionList","sugg","evaluatedText","misword","replacementText","txtsugg","undoButton","btnUndo","addSuggestion","clearSuggestions","selectDefaultSuggestion","resetForm","setSuggestedText","enableUndo","disableUndo","","text","options","selectedIndex","value","length","selected","sugg_text","disabled"];function controlWindow(Ox221){this[OxOb8fa[0]]=Ox221;this[OxOb8fa[1]]=OxOb8fa[2];this[OxOb8fa[3]]=OxOb8fa[4];this[OxOb8fa[5]]=this[OxOb8fa[0]][OxOb8fa[6]];this[OxOb8fa[7]]=this[OxOb8fa[0]][OxOb8fa[8]];this[OxOb8fa[9]]=this[OxOb8fa[0]][OxOb8fa[10]];this[OxOb8fa[11]]=this[OxOb8fa[0]][OxOb8fa[12]];this[OxOb8fa[13]]=addSuggestion;this[OxOb8fa[14]]=clearSuggestions;this[OxOb8fa[15]]=selectDefaultSuggestion;this[OxOb8fa[16]]=resetForm;this[OxOb8fa[17]]=setSuggestedText;this[OxOb8fa[18]]=enableUndo;this[OxOb8fa[19]]=disableUndo;} ;function resetForm(){if(this[OxOb8fa[0]]){this[OxOb8fa[0]].reset();} ;} ;function setSuggestedText(){var Ox226=this[OxOb8fa[5]];var Ox8=this[OxOb8fa[9]];var Oxb=OxOb8fa[20];if((Ox226[OxOb8fa[22]][0][OxOb8fa[21]])&&Ox226[OxOb8fa[22]][0][OxOb8fa[21]]!=this[OxOb8fa[3]]){Oxb=Ox226[OxOb8fa[22]][Ox226[OxOb8fa[23]]][OxOb8fa[21]];} ;Ox8[OxOb8fa[24]]=Oxb;} ;function selectDefaultSuggestion(){var Ox226=this[OxOb8fa[5]];var Ox8=this[OxOb8fa[9]];if(Ox226[OxOb8fa[22]][OxOb8fa[25]]==0){this.addSuggestion(this.noSuggestionSelection);} else {Ox226[OxOb8fa[22]][0][OxOb8fa[26]]=true;} ;this.setSuggestedText();} ;function addSuggestion(Ox229){var Ox226=this[OxOb8fa[5]];if(Ox229){var i=Ox226[OxOb8fa[22]][OxOb8fa[25]];var Ox22a= new Option(Ox229,OxOb8fa[27]+i);Ox226[OxOb8fa[22]][i]=Ox22a;} ;} ;function clearSuggestions(){var Ox226=this[OxOb8fa[5]];for(var Ox22c=Ox226[OxOb8fa[25]]-1;Ox22c>-1;Ox22c--){if(Ox226[OxOb8fa[22]][Ox22c]){Ox226[OxOb8fa[22]][Ox22c]=null;} ;} ;} ;function enableUndo(){if(this[OxOb8fa[11]]){if(this[OxOb8fa[11]][OxOb8fa[28]]==true){this[OxOb8fa[11]][OxOb8fa[28]]=false;} ;} ;} ;function disableUndo(){if(this[OxOb8fa[11]]){if(this[OxOb8fa[11]][OxOb8fa[28]]==false){this[OxOb8fa[11]][OxOb8fa[28]]=true;} ;} ;} ;