// go away you dont need to see this

var _$_d3d7=["release v1.1.4","the text prompt during reset finally has a purpose! can you find the secret codes...? (more will be added soon.)","textContent","version","getElementById","Current version: ","log","getItem","setItem","reset","true","almost done..","clear","enter a secret code if you have one... (press cancel if not.)","reset successful. have fun! (if you entered a secret code, it has been applied.)","removeItem","visited","publicTesting","diddy","diddyMode","reload","welcome to sigma clicker \ud83d\udde3\ufe0f to gain sigmas, click the simga in the middle. to buy upgrades.. nvm you prob get the idea. take a looksie at the message after this to see whats unique to this version of sigma clicker!",". notable changes: "," Press OK to continue...","value","user value as of this log: ","valueDisplay","autoClickerCount","autoClickerCost","clickMultiplierCount","clickMultiplierCost","clickMultiplier","keydown","key","Enter","preventDefault","addEventListener","incrementButton","click","upgrade-autoClicker",", Level: ",")","upgrade-clickMultiplier","title"," DIDDYS DIDDLED"," clicked","timeWasted","user seconds wasted as of this log: ","Are you sure you want to reset? You will lose your "," sigmas clicked, "," seconds wasted and all your upgrades.","resetButton","if you edit your value, you are not sigma :C so pls dont ty","warn","src","gigachad","replacement.png","clickedText","Clicked:","godspeed \ud83e\udee1","diddy.png","DIDDYS CLICKED:","oh god diddy mode exists","upgradesName","diddys"];const publicDev=false;const version=_$_d3d7[0];const changes=_$_d3d7[1];document[_$_d3d7[4]](_$_d3d7[3])[_$_d3d7[2]]= version;console[_$_d3d7[6]](_$_d3d7[5]+ version);let storedVersion=localStorage[_$_d3d7[7]](_$_d3d7[3]);localStorage[_$_d3d7[8]](_$_d3d7[3],version);if(localStorage[_$_d3d7[7]](_$_d3d7[9])=== _$_d3d7[10]){alert(_$_d3d7[11]);localStorage[_$_d3d7[12]]();let userValue=prompt(_$_d3d7[13]);alert(_$_d3d7[14]);localStorage[_$_d3d7[15]](_$_d3d7[9]);localStorage[_$_d3d7[8]](_$_d3d7[16],_$_d3d7[10]);localStorage[_$_d3d7[8]](_$_d3d7[3],version);if(userValue=== _$_d3d7[17]){localStorage[_$_d3d7[8]](_$_d3d7[17],_$_d3d7[10])};if(userValue=== _$_d3d7[18]){localStorage[_$_d3d7[8]](_$_d3d7[19],_$_d3d7[10])};location[_$_d3d7[20]]()};if(localStorage[_$_d3d7[7]](_$_d3d7[16])=== null){localStorage[_$_d3d7[8]](_$_d3d7[16],_$_d3d7[10]);localStorage[_$_d3d7[8]](_$_d3d7[3],version);alert(_$_d3d7[21]);location[_$_d3d7[20]]()};if(storedVersion!== version){alert(("Sigma clicker is now on version: "+version+_$_d3d7[22]+changes+_$_d3d7[23]));localStorage[_$_d3d7[8]](_$_d3d7[3],version)};let storedValue=localStorage[_$_d3d7[7]](_$_d3d7[24]);let value=storedValue?parseInt(storedValue):0;console[_$_d3d7[6]](_$_d3d7[25]+ value);document[_$_d3d7[4]](_$_d3d7[26])[_$_d3d7[2]]= value;let autoClickerCount=localStorage[_$_d3d7[7]](_$_d3d7[27])?parseInt(localStorage[_$_d3d7[7]](_$_d3d7[27])):0;let autoClickerCost=localStorage[_$_d3d7[7]](_$_d3d7[28])?parseInt(localStorage[_$_d3d7[7]](_$_d3d7[28])):10;let clickMultiplierCount=localStorage[_$_d3d7[7]](_$_d3d7[29])?parseInt(localStorage[_$_d3d7[7]](_$_d3d7[29])):0;let clickMultiplierCost=localStorage[_$_d3d7[7]](_$_d3d7[30])?parseInt(localStorage[_$_d3d7[7]](_$_d3d7[30])):20;let clickMultiplier=localStorage[_$_d3d7[7]](_$_d3d7[31])?parseInt(localStorage[_$_d3d7[7]](_$_d3d7[31])):1;let autoClickerInterval;document[_$_d3d7[4]](_$_d3d7[37])[_$_d3d7[36]](_$_d3d7[32],(_0x2988)=>{if(_0x2988[_$_d3d7[33]]=== _$_d3d7[34]){_0x2988[_$_d3d7[35]]()}});document[_$_d3d7[4]](_$_d3d7[37])[_$_d3d7[36]](_$_d3d7[38],()=>{value+= clickMultiplier;document[_$_d3d7[4]](_$_d3d7[26])[_$_d3d7[2]]= value;localStorage[_$_d3d7[8]](_$_d3d7[24],value)});function updateUpgradeButtons(){document[_$_d3d7[4]](_$_d3d7[39])[_$_d3d7[2]]= ("Autoclicker (Cost: "+autoClickerCost+_$_d3d7[40]+autoClickerCount+_$_d3d7[41]);document[_$_d3d7[4]](_$_d3d7[42])[_$_d3d7[2]]= ("Click Multiplier (Cost: "+clickMultiplierCost+_$_d3d7[40]+clickMultiplierCount+_$_d3d7[41])}updateUpgradeButtons();function updateTitle(){if(localStorage[_$_d3d7[7]](_$_d3d7[19])=== _$_d3d7[10]){document[_$_d3d7[43]]= ("DIDDY CLICKER | "+value+_$_d3d7[44]);setInterval(updateTitle,1000)}else {document[_$_d3d7[43]]= ("Sigma Clicker | "+value+_$_d3d7[45])};setInterval(updateTitle,1000)}updateTitle();function startAutoClicker(){if(autoClickerInterval){clearInterval(autoClickerInterval)};if(autoClickerCount> 0){autoClickerInterval= setInterval(()=>{value+= clickMultiplier;document[_$_d3d7[4]](_$_d3d7[26])[_$_d3d7[2]]= value;localStorage[_$_d3d7[8]](_$_d3d7[24],value)},1000/ autoClickerCount)}}startAutoClicker();let timeWasted=localStorage[_$_d3d7[7]](_$_d3d7[46])?parseInt(localStorage[_$_d3d7[7]](_$_d3d7[46])):0;document[_$_d3d7[4]](_$_d3d7[46])[_$_d3d7[2]]= timeWasted;console[_$_d3d7[6]](_$_d3d7[47]+ timeWasted);document[_$_d3d7[4]](_$_d3d7[51])[_$_d3d7[36]](_$_d3d7[38],()=>{if(confirm(_$_d3d7[48]+ value+ _$_d3d7[49]+ timeWasted+ _$_d3d7[50])){localStorage[_$_d3d7[12]]();localStorage[_$_d3d7[8]](_$_d3d7[9],_$_d3d7[10]);localStorage[_$_d3d7[8]](_$_d3d7[3],version);location[_$_d3d7[20]]()}});setInterval(()=>{timeWasted++;document[_$_d3d7[4]](_$_d3d7[46])[_$_d3d7[2]]= timeWasted;localStorage[_$_d3d7[8]](_$_d3d7[46],timeWasted)},1000);console[_$_d3d7[53]](_$_d3d7[52]);if(publicDev=== true){document[_$_d3d7[4]](_$_d3d7[55])[_$_d3d7[54]]= _$_d3d7[56];document[_$_d3d7[4]](_$_d3d7[57])[_$_d3d7[2]]= _$_d3d7[58];console[_$_d3d7[53]](_$_d3d7[59])};if(localStorage[_$_d3d7[7]](_$_d3d7[17])=== _$_d3d7[10]){document[_$_d3d7[4]](_$_d3d7[55])[_$_d3d7[54]]= _$_d3d7[56];document[_$_d3d7[4]](_$_d3d7[57])[_$_d3d7[2]]= _$_d3d7[58];console[_$_d3d7[53]](_$_d3d7[59])};if(localStorage[_$_d3d7[7]](_$_d3d7[19])=== _$_d3d7[10]){document[_$_d3d7[4]](_$_d3d7[55])[_$_d3d7[54]]= _$_d3d7[60];document[_$_d3d7[4]](_$_d3d7[57])[_$_d3d7[2]]= _$_d3d7[61];console[_$_d3d7[53]](_$_d3d7[62]);document[_$_d3d7[4]](_$_d3d7[63])[_$_d3d7[2]]= _$_d3d7[64]}