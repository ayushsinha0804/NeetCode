//to execute the code, paste the code given below in comments to the checker.html file
//<script src="groupAnagrams.js"></script>

let strs=["eat","tea","ate","nat","bat"];
        const anagramMap=new Map();
        for(const word of strs){
            const sortedWord=word.split('').sort().join('');
            if(anagramMap.has(sortedWord)){
                anagramMap.get(sortedWord).push(word);
            }
            else{
                anagramMap.set(sortedWord,[word]);
            }
        }
        document.write (Array.from(anagramMap.values()));
