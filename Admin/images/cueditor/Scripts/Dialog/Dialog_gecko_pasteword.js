var OxObcac=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x22","\x3C$1$3"," ","\x26nbsp;","$1","\x3Ch$1\x3E","\x3C$1\x3E$2\x3C/$1\x3E","\x27"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxObcac[0]]=function (){var iframe=document.getElementById(OxObcac[2])[OxObcac[1]];iframe[OxObcac[5]][OxObcac[4]][OxObcac[3]]=OxObcac[6];iframe[OxObcac[5]][OxObcac[7]]=OxObcac[8];iframe[OxObcac[5]][OxObcac[4]][OxObcac[9]]=true;iframe[OxObcac[5]][OxObcac[4]][OxObcac[11]][OxObcac[10]]=OxObcac[12];iframe[OxObcac[5]][OxObcac[4]][OxObcac[11]][OxObcac[13]]=OxObcac[14];iframe[OxObcac[5]][OxObcac[4]][OxObcac[11]][OxObcac[15]]=OxObcac[16];iframe[OxObcac[5]][OxObcac[4]][OxObcac[11]][OxObcac[17]]=OxObcac[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxObcac[2])[OxObcac[1]];var Ox3fe=iframe[OxObcac[5]][OxObcac[4]][OxObcac[3]];if(Ox3fe&&Ox3fe[OxObcac[19]]>0){editor.PasteHTML(_RemoveWord(Ox3fe));Window_CloseDialog(window);} ;} ;function _RemoveWord(Ox4a4){Ox4a4=Ox4a4.replace(/<[\/]?(base|meta|link|style|font|st1|shape|path|lock|imagedata|stroke|formulas|xml|del|ins|[ovwxp]:\w+)[^>]*?>/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/<!--[\s\S]*?-->/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/\s*MARGIN: 0cm 0cm 0pt\s*;/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/\s*MARGIN: 0cm 0cm 0pt\s*"/gi,OxObcac[20]);Ox4a4=Ox4a4.replace(/\s*TEXT-INDENT: 0cm\s*;/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/\s*TEXT-INDENT: 0cm\s*"/gi,OxObcac[20]);Ox4a4=Ox4a4.replace(/\s*TEXT-ALIGN: [^\s;]+;?"/gi,OxObcac[20]);Ox4a4=Ox4a4.replace(/\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi,OxObcac[20]);Ox4a4=Ox4a4.replace(/\s*FONT-VARIANT: [^\s;]+;?"/gi,OxObcac[20]);Ox4a4=Ox4a4.replace(/\s*tab-stops:[^;"]*;?/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/\s*tab-stops:[^"]*/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi,OxObcac[21]);Ox4a4=Ox4a4.replace(/\s*style="\s*"/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/<SPAN\s*[^>]*>\s* \s*<\/SPAN>/gi,OxObcac[22]);Ox4a4=Ox4a4.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxObcac[6]);Ox4a4=Ox4a4.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxObcac[23]);Ox4a4=Ox4a4.replace(/<SPAN\s*[^>]*><\/SPAN>/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxObcac[21]);Ox4a4=Ox4a4.replace(/<SPAN\s*>(.*?)<\/SPAN>/gi,OxObcac[24]);Ox4a4=Ox4a4.replace(/<\/?\w+:[^>]*>/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/<\!--.*?-->/g,OxObcac[6]);Ox4a4=Ox4a4.replace(/<H\d>\s*<\/H\d>/gi,OxObcac[6]);Ox4a4=Ox4a4.replace(/<(\w[^>]*) language=([^ |>]*)([^>]*)/gi,OxObcac[21]);Ox4a4=Ox4a4.replace(/<(\w[^>]*) onmouseover="([^\"]*)"([^>]*)/gi,OxObcac[21]);Ox4a4=Ox4a4.replace(/<(\w[^>]*) onmouseout="([^\"]*)"([^>]*)/gi,OxObcac[21]);Ox4a4=Ox4a4.replace(/<H(\d)([^>]*)>/gi,OxObcac[25]);Ox4a4=Ox4a4.replace(/<(H\d)><FONT[^>]*>(.*?)<\/FONT><\/\1>/gi,OxObcac[26]);Ox4a4=Ox4a4.replace(/<(H\d)><EM>(.*?)<\/EM><\/\1>/gi,OxObcac[26]);Ox4a4=Ox4a4.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxObcac[24]);Ox4a4=Ox4a4.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxObcac[24]);Ox4a4=Ox4a4.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxObcac[24]);Ox4a4=Ox4a4.replace(/[\\]/gi,OxObcac[20]);Ox4a4=Ox4a4.replace(/[\\]/gi,OxObcac[27]);return Ox4a4;} ;