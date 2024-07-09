import java.util.*;
public class validAanagrams {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the first string: ");
        String s1=sc.nextLine();
        System.out.println("Enter the second string: ");
        String s2=sc.nextLine();
        if(isValid(s1,s2)){
            System.out.println("The given two strings are anagrams.");
        }
        else{
            System.out.println("The given two strings are not anagrams.");
        }
        sc.close();
    }
    public static boolean isValid(String s1, String s2){
        if(s1.length()!=s2.length()){
            return false;
        }
        int arr[]=new int[26];
        for(int i=0;i<s1.length();i++){
            arr[s1.charAt(i) - 'a']++;
            arr[s2.charAt(i) - 'a']--;
        }
        for(int n:arr){
            if(n!=0){
                return false;
            }
        }
        return true;
    }
}
