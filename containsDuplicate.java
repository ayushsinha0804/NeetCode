import java.util.*;
public class containsDuplicate{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the length of array: ");
        int len=sc.nextInt();
        int arr[]=new int[len];
        for(int i=0;i<len;i++){
            arr[i]=sc.nextInt();
        }
        if(check(arr)){
            System.out.println("The array contains duplicate elements.");
        }
        else{
            System.out.println("The array doesn't containe duplicate elements.");
        }
        sc.close();
    }
    public static boolean check(int arr[]){
        Set <Integer> se=new HashSet<>();
        for(int i=0;i<arr.length;i++){
            if(se.contains(arr[i])){
                return true;
            }
            se.add(arr[i]);
        }
        return false;
    }
}