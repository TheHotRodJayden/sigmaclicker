// go away you dont need to see this
var _$_97a8=["release v1","textContent","version","getElementById","Current version: ","log","reset","getItem","true","clearing local storage again to make sure values actually reset.","clear","all values should be reset now. have fun","removeItem","reload","value","user value as of this log: ","valueDisplay","autoClickerCount","autoClickerCost","clickMultiplierCount","clickMultiplierCost","clickMultiplier","click","setItem","addEventListener","incrementButton","upgrade-autoClicker",", Level: ",")","upgrade-clickMultiplier","timeWasted","user seconds wasted as of this log: ","Are you sure you want to reset? You will lose your "," sigmas clicked, "," seconds wasted and all your upgrades.","resetButton","if you edit your value, you are not sigma :C so pls dont ty","warn"];const version=_$_97a8[0];document[_$_97a8[3]](_$_97a8[2])[_$_97a8[1]]= version;console[_$_97a8[5]](_$_97a8[4]+ version);if(localStorage[_$_97a8[7]](_$_97a8[6])=== _$_97a8[8]){alert(_$_97a8[9]);localStorage[_$_97a8[10]]();alert(_$_97a8[11]);localStorage[_$_97a8[12]](_$_97a8[6]);location[_$_97a8[13]]()};let storedValue=localStorage[_$_97a8[7]](_$_97a8[14]);let value=storedValue?parseInt(storedValue):0;console[_$_97a8[5]](_$_97a8[15]+ value);document[_$_97a8[3]](_$_97a8[16])[_$_97a8[1]]= value;let autoClickerCount=localStorage[_$_97a8[7]](_$_97a8[17])?parseInt(localStorage[_$_97a8[7]](_$_97a8[17])):0;let autoClickerCost=localStorage[_$_97a8[7]](_$_97a8[18])?parseInt(localStorage[_$_97a8[7]](_$_97a8[18])):10;let clickMultiplierCount=localStorage[_$_97a8[7]](_$_97a8[19])?parseInt(localStorage[_$_97a8[7]](_$_97a8[19])):0;let clickMultiplierCost=localStorage[_$_97a8[7]](_$_97a8[20])?parseInt(localStorage[_$_97a8[7]](_$_97a8[20])):20;let clickMultiplier=localStorage[_$_97a8[7]](_$_97a8[21])?parseInt(localStorage[_$_97a8[7]](_$_97a8[21])):1;let autoClickerInterval;document[_$_97a8[3]](_$_97a8[25])[_$_97a8[24]](_$_97a8[22],()=>{value+= clickMultiplier;document[_$_97a8[3]](_$_97a8[16])[_$_97a8[1]]= value;localStorage[_$_97a8[23]](_$_97a8[14],value)});function updateUpgradeButtons(){document[_$_97a8[3]](_$_97a8[26])[_$_97a8[1]]= ("Autoclicker (Cost: "+autoClickerCost+_$_97a8[27]+autoClickerCount+_$_97a8[28]);document[_$_97a8[3]](_$_97a8[29])[_$_97a8[1]]= ("Click Multiplier (Cost: "+clickMultiplierCost+_$_97a8[27]+clickMultiplierCount+_$_97a8[28])}updateUpgradeButtons();function startAutoClicker(){if(autoClickerInterval){clearInterval(autoClickerInterval)};if(autoClickerCount> 0){autoClickerInterval= setInterval(()=>{value+= clickMultiplier;document[_$_97a8[3]](_$_97a8[16])[_$_97a8[1]]= value;localStorage[_$_97a8[23]](_$_97a8[14],value)},1000/ autoClickerCount)}}startAutoClicker();let timeWasted=localStorage[_$_97a8[7]](_$_97a8[30])?parseInt(localStorage[_$_97a8[7]](_$_97a8[30])):0;document[_$_97a8[3]](_$_97a8[30])[_$_97a8[1]]= timeWasted;console[_$_97a8[5]](_$_97a8[31]+ timeWasted);document[_$_97a8[3]](_$_97a8[35])[_$_97a8[24]](_$_97a8[22],()=>{if(confirm(_$_97a8[32]+ value+ _$_97a8[33]+ timeWasted+ _$_97a8[34])){localStorage[_$_97a8[10]]();localStorage[_$_97a8[23]](_$_97a8[6],_$_97a8[8]);location[_$_97a8[13]]()}});setInterval(()=>{timeWasted++;document[_$_97a8[3]](_$_97a8[30])[_$_97a8[1]]= timeWasted;localStorage[_$_97a8[23]](_$_97a8[30],timeWasted)},1000);console[_$_97a8[37]](_$_97a8[36])
