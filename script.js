// go away you dont need to see this

var _$_1a83=["release v1.1.1","minor changes... new upgrades soon,.,..,.,,.,.,.?","textContent","version","getElementById","Current version: ","log","getItem","setItem","reset","true","clearing local storage again to make sure values actually reset.","clear","all values should be reset now. have fun","removeItem","visited","reload","welcome to sigma clicker \ud83d\udde3\ufe0f to gain sigmas, click the simga in the middle. to buy upgrades.. nvm you prob get the idea. take a looksie at the message after this to see whats unique to this version of sigma clicker!",". notable changes: "," Press OK to continue...","value","user value as of this log: ","valueDisplay","autoClickerCount","autoClickerCost","clickMultiplierCount","clickMultiplierCost","clickMultiplier","click","addEventListener","incrementButton","upgrade-autoClicker",", Level: ",")","upgrade-clickMultiplier","timeWasted","user seconds wasted as of this log: ","Are you sure you want to reset? You will lose your "," sigmas clicked, "," seconds wasted and all your upgrades.","resetButton","if you edit your value, you are not sigma :C so pls dont ty","warn","src","gigachad","replacement.png","clickedText","Clicked:","godspeed \ud83e\udee1"];const publicDev=false;const version=_$_1a83[0];const changes=_$_1a83[1];document[_$_1a83[4]](_$_1a83[3])[_$_1a83[2]]= version;console[_$_1a83[6]](_$_1a83[5]+ version);let storedVersion=localStorage[_$_1a83[7]](_$_1a83[3]);localStorage[_$_1a83[8]](_$_1a83[3],version);if(localStorage[_$_1a83[7]](_$_1a83[9])=== _$_1a83[10]){alert(_$_1a83[11]);localStorage[_$_1a83[12]]();alert(_$_1a83[13]);localStorage[_$_1a83[14]](_$_1a83[9]);localStorage[_$_1a83[8]](_$_1a83[15],_$_1a83[10]);localStorage[_$_1a83[8]](_$_1a83[3],version);location[_$_1a83[16]]()};if(localStorage[_$_1a83[7]](_$_1a83[15])=== null){localStorage[_$_1a83[8]](_$_1a83[15],_$_1a83[10]);localStorage[_$_1a83[8]](_$_1a83[3],version);alert(_$_1a83[17]);location[_$_1a83[16]]()};if(storedVersion!== version){alert(("Sigma clicker is now on version: "+version+_$_1a83[18]+changes+_$_1a83[19]));localStorage[_$_1a83[8]](_$_1a83[3],version)};let storedValue=localStorage[_$_1a83[7]](_$_1a83[20]);let value=storedValue?parseInt(storedValue):0;console[_$_1a83[6]](_$_1a83[21]+ value);document[_$_1a83[4]](_$_1a83[22])[_$_1a83[2]]= value;let autoClickerCount=localStorage[_$_1a83[7]](_$_1a83[23])?parseInt(localStorage[_$_1a83[7]](_$_1a83[23])):0;let autoClickerCost=localStorage[_$_1a83[7]](_$_1a83[24])?parseInt(localStorage[_$_1a83[7]](_$_1a83[24])):10;let clickMultiplierCount=localStorage[_$_1a83[7]](_$_1a83[25])?parseInt(localStorage[_$_1a83[7]](_$_1a83[25])):0;let clickMultiplierCost=localStorage[_$_1a83[7]](_$_1a83[26])?parseInt(localStorage[_$_1a83[7]](_$_1a83[26])):20;let clickMultiplier=localStorage[_$_1a83[7]](_$_1a83[27])?parseInt(localStorage[_$_1a83[7]](_$_1a83[27])):1;let autoClickerInterval;document[_$_1a83[4]](_$_1a83[30])[_$_1a83[29]](_$_1a83[28],()=>{value+= clickMultiplier;document[_$_1a83[4]](_$_1a83[22])[_$_1a83[2]]= value;localStorage[_$_1a83[8]](_$_1a83[20],value)});function updateUpgradeButtons(){document[_$_1a83[4]](_$_1a83[31])[_$_1a83[2]]= ("Autoclicker (Cost: "+autoClickerCost+_$_1a83[32]+autoClickerCount+_$_1a83[33]);document[_$_1a83[4]](_$_1a83[34])[_$_1a83[2]]= ("Click Multiplier (Cost: "+clickMultiplierCost+_$_1a83[32]+clickMultiplierCount+_$_1a83[33])}updateUpgradeButtons();function startAutoClicker(){if(autoClickerInterval){clearInterval(autoClickerInterval)};if(autoClickerCount> 0){autoClickerInterval= setInterval(()=>{value+= clickMultiplier;document[_$_1a83[4]](_$_1a83[22])[_$_1a83[2]]= value;localStorage[_$_1a83[8]](_$_1a83[20],value)},1000/ autoClickerCount)}}startAutoClicker();let timeWasted=localStorage[_$_1a83[7]](_$_1a83[35])?parseInt(localStorage[_$_1a83[7]](_$_1a83[35])):0;document[_$_1a83[4]](_$_1a83[35])[_$_1a83[2]]= timeWasted;console[_$_1a83[6]](_$_1a83[36]+ timeWasted);document[_$_1a83[4]](_$_1a83[40])[_$_1a83[29]](_$_1a83[28],()=>{if(confirm(_$_1a83[37]+ value+ _$_1a83[38]+ timeWasted+ _$_1a83[39])){localStorage[_$_1a83[12]]();localStorage[_$_1a83[8]](_$_1a83[9],_$_1a83[10]);localStorage[_$_1a83[8]](_$_1a83[3],version);location[_$_1a83[16]]()}});setInterval(()=>{timeWasted++;document[_$_1a83[4]](_$_1a83[35])[_$_1a83[2]]= timeWasted;localStorage[_$_1a83[8]](_$_1a83[35],timeWasted)},1000);console[_$_1a83[42]](_$_1a83[41]);if(publicDev=== true){document[_$_1a83[4]](_$_1a83[44])[_$_1a83[43]]= _$_1a83[45];document[_$_1a83[4]](_$_1a83[46])[_$_1a83[2]]= _$_1a83[47];console[_$_1a83[42]](_$_1a83[48])}