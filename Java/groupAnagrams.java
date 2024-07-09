package Java;
import java.util.*;
public class groupAnagrams {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number of strings: ");
        int len=sc.nextInt();
        String arr[]=new String[len];
        for(int i=0;i<len;i++){
            arr[i]=sc.next();
        }
        List<List<String>> res = new ArrayList<>();
        res=groupAnagram(arr);
        System.out.println(res);
        sc.close();
    }
    public static List<List<String>> groupAnagram(String arr[]){
        Map<String, List<String>> map = new HashMap<>();
        
        for (String word : arr) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String sortedWord = new String(chars);
            
            if (!map.containsKey(sortedWord)) {
                map.put(sortedWord, new ArrayList<>());
            }
            
            map.get(sortedWord).add(word);
        }
        
        return new ArrayList<>(map.values());
    }
}
