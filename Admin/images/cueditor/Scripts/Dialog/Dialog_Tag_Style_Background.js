var OxO3ccb=["SetStyle","length","","GetStyle","GetText",":",";","cssText","inp_color","inp_color_Preview","tb_image","btnbrowse","sel_bgrepeat","sel_bgattach","sel_hor","tb_hor","sel_hor_unit","sel_ver","tb_ver","sel_ver_unit","outer","div_demo","onclick","value","disabled","selectedIndex","style","backgroundImage","backgroundColor","backgroundRepeat","backgroundAttachment","backgroundPositionX","options","backgroundPositionY","url(",")","background-image","backgroundPosition","none"];function pause(Ox5e4){var Ox565= new Date();var Ox5e5=Ox565.getTime()+Ox5e4;while(true){Ox565= new Date();if(Ox565.getTime()>Ox5e5){return ;} ;} ;} ;function StyleClass(Ox363){var Ox5e7=[];var Ox5e8={};if(Ox363){Ox5ed();} ;this[OxO3ccb[0]]=function SetStyle(name,Ox289,Ox5ea){name=name.toLowerCase();for(var i=0;i<Ox5e7[OxO3ccb[1]];i++){if(Ox5e7[i]==name){break ;} ;} ;Ox5e7[i]=name;Ox5e8[name]=Ox289?(Ox289+(Ox5ea||OxO3ccb[2])):OxO3ccb[2];} ;this[OxO3ccb[3]]=function GetStyle(name){name=name.toLowerCase();return Ox5e8[name]||OxO3ccb[2];} ;this[OxO3ccb[4]]=function Ox5ec(){var Ox363=OxO3ccb[2];for(var i=0;i<Ox5e7[OxO3ccb[1]];i++){var Ox27d=Ox5e7[i];var p=Ox5e8[Ox27d];if(p){Ox363+=Ox27d+OxO3ccb[5]+p+OxO3ccb[6];} ;} ;return Ox363;} ;function Ox5ed(){var arr=Ox363.split(OxO3ccb[6]);for(var i=0;i<arr[OxO3ccb[1]];i++){var p=arr[i].split(OxO3ccb[5]);var Ox27d=p[0].replace(/^\s+/g,OxO3ccb[2]).replace(/\s+$/g,OxO3ccb[2]).toLowerCase();Ox5e7[Ox5e7[OxO3ccb[1]]]=Ox27d;Ox5e8[Ox27d]=p[1];} ;} ;} ;function GetStyle(Ox2a0,name){return  new StyleClass(Ox2a0.cssText).GetStyle(name);} ;function SetStyle(Ox2a0,name,Ox289,Ox5ee){var Ox5ef= new StyleClass(Ox2a0.cssText);Ox5ef.SetStyle(name,Ox289,Ox5ee);Ox2a0[OxO3ccb[7]]=Ox5ef.GetText();} ;function ParseFloatToString(Oxb){var Ox2fe=parseFloat(Oxb);if(isNaN(Ox2fe)){return OxO3ccb[2];} ;return Ox2fe+OxO3ccb[2];} ;var inp_color=Window_GetElement(window,OxO3ccb[8],true);var inp_color_Preview=Window_GetElement(window,OxO3ccb[9],true);var tb_image=Window_GetElement(window,OxO3ccb[10],true);var btnbrowse=Window_GetElement(window,OxO3ccb[11],true);var sel_bgrepeat=Window_GetElement(window,OxO3ccb[12],true);var sel_bgattach=Window_GetElement(window,OxO3ccb[13],true);var sel_hor=Window_GetElement(window,OxO3ccb[14],true);var tb_hor=Window_GetElement(window,OxO3ccb[15],true);var sel_hor_unit=Window_GetElement(window,OxO3ccb[16],true);var sel_ver=Window_GetElement(window,OxO3ccb[17],true);var tb_ver=Window_GetElement(window,OxO3ccb[18],true);var sel_ver_unit=Window_GetElement(window,OxO3ccb[19],true);var outer=Window_GetElement(window,OxO3ccb[20],true);var div_demo=Window_GetElement(window,OxO3ccb[21],true);btnbrowse[OxO3ccb[22]]=function btnbrowse_onclick(){function Ox4c7(Ox2a6){if(Ox2a6){tb_image[OxO3ccb[23]]=Ox2a6;} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox4c7,tb_image.value,tb_image);} else {editor.ShowSelectImageDialog(Ox4c7,tb_image.value);} ;} ;UpdateState=function UpdateState_Background(){tb_hor[OxO3ccb[24]]=sel_hor_unit[OxO3ccb[24]]=(sel_hor[OxO3ccb[25]]>0);tb_ver[OxO3ccb[24]]=sel_ver_unit[OxO3ccb[24]]=(sel_ver[OxO3ccb[25]]>0);div_demo[OxO3ccb[26]][OxO3ccb[7]]=element[OxO3ccb[26]][OxO3ccb[7]];} ;SyncToView=function SyncToView_Background(){tb_image[OxO3ccb[23]]=element[OxO3ccb[26]][OxO3ccb[27]];FixTbImage();inp_color[OxO3ccb[23]]=element[OxO3ccb[26]][OxO3ccb[28]];inp_color[OxO3ccb[26]][OxO3ccb[28]]=element[OxO3ccb[26]][OxO3ccb[28]];inp_color_Preview[OxO3ccb[26]][OxO3ccb[28]]=element[OxO3ccb[26]][OxO3ccb[28]];sel_bgrepeat[OxO3ccb[23]]=element[OxO3ccb[26]][OxO3ccb[29]];sel_bgattach[OxO3ccb[23]]=element[OxO3ccb[26]][OxO3ccb[30]];sel_hor[OxO3ccb[23]]=element[OxO3ccb[26]][OxO3ccb[31]];sel_hor_unit[OxO3ccb[25]]=0;if(sel_hor[OxO3ccb[25]]==-1){if(ParseFloatToString(element[OxO3ccb[26]].backgroundPositionX)){tb_hor[OxO3ccb[23]]=ParseFloatToString(element[OxO3ccb[26]].backgroundPositionX);for(var i=0;i<sel_hor_unit[OxO3ccb[32]][OxO3ccb[1]];i++){var Ox2aa=sel_hor_unit[OxO3ccb[32]][i][OxO3ccb[23]];if(Ox2aa&&element[OxO3ccb[26]][OxO3ccb[31]].indexOf(Ox2aa)!=-1){sel_hor_unit[OxO3ccb[25]]=i;break ;} ;} ;} ;} ;sel_ver[OxO3ccb[23]]=element[OxO3ccb[26]][OxO3ccb[33]];sel_ver_unit[OxO3ccb[25]]=0;if(sel_ver[OxO3ccb[25]]==-1){if(ParseFloatToString(element[OxO3ccb[26]].backgroundPositionY)){tb_ver[OxO3ccb[23]]=ParseFloatToString(element[OxO3ccb[26]].backgroundPositionY);for(var i=0;i<sel_ver_unit[OxO3ccb[32]][OxO3ccb[1]];i++){var Ox2aa=sel_ver_unit[OxO3ccb[32]][i][OxO3ccb[23]];if(Ox2aa&&element[OxO3ccb[26]][OxO3ccb[33]].indexOf(Ox2aa)!=-1){sel_ver_unit[OxO3ccb[25]]=i;break ;} ;} ;} ;} ;} ;SyncTo=function SyncTo_Background(element){if(tb_image[OxO3ccb[23]]){element[OxO3ccb[26]][OxO3ccb[27]]=OxO3ccb[34]+tb_image[OxO3ccb[23]]+OxO3ccb[35];} else {SetStyle(element.style,OxO3ccb[36],OxO3ccb[2]);} ;try{element[OxO3ccb[26]][OxO3ccb[28]]=inp_color[OxO3ccb[23]]||OxO3ccb[2];} catch(x){element[OxO3ccb[26]][OxO3ccb[28]]=OxO3ccb[2];} ;element[OxO3ccb[26]][OxO3ccb[29]]=sel_bgrepeat[OxO3ccb[23]]||OxO3ccb[2];element[OxO3ccb[26]][OxO3ccb[30]]=sel_bgattach[OxO3ccb[23]]||OxO3ccb[2];element[OxO3ccb[26]][OxO3ccb[37]]=OxO3ccb[2];if(sel_hor[OxO3ccb[25]]>0){element[OxO3ccb[26]][OxO3ccb[31]]=sel_hor[OxO3ccb[23]];} else {if(ParseFloatToString(tb_hor.value)){element[OxO3ccb[26]][OxO3ccb[31]]=ParseFloatToString(tb_hor.value)+sel_hor_unit[OxO3ccb[23]];} else {element[OxO3ccb[26]][OxO3ccb[31]]=OxO3ccb[2];} ;} ;if(sel_ver[OxO3ccb[25]]>0){element[OxO3ccb[26]][OxO3ccb[33]]=sel_ver[OxO3ccb[23]];} else {if(ParseFloatToString(tb_ver.value)){element[OxO3ccb[26]][OxO3ccb[33]]=ParseFloatToString(tb_ver.value)+sel_ver_unit[OxO3ccb[23]];} else {element[OxO3ccb[26]][OxO3ccb[33]]=OxO3ccb[2];} ;} ;} ;function FixTbImage(){var Ox2aa=tb_image[OxO3ccb[23]].replace(/^(\s+)/g,OxO3ccb[2]).replace(/(\s+)$/g,OxO3ccb[2]);if(Ox2aa.substr(0,4).toLowerCase()==OxO3ccb[34]){Ox2aa=Ox2aa.substr(4,Ox2aa[OxO3ccb[1]]-4);} ;if(Ox2aa.substr(Ox2aa[OxO3ccb[1]]-1,1)==OxO3ccb[35]){Ox2aa=Ox2aa.substr(0,Ox2aa[OxO3ccb[1]]-1);} ;if(Ox2aa==OxO3ccb[38]){Ox2aa=OxO3ccb[2];} ;tb_image[OxO3ccb[23]]=Ox2aa;} ;inp_color[OxO3ccb[22]]=inp_color_Preview[OxO3ccb[22]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;