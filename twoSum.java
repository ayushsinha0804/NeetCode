import java.util.*;
public class twoSum {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the length of the array: ");
        int len=sc.nextInt();
        System.out.println("Enter the array: ");
        int arr[]=new int[len];
        for(int i=0;i<len;i++){
            arr[i]=sc.nextInt();
        }
        System.out.println("Enter the number to check twoSum: ");
        int num=sc.nextInt();
        if(isTwoSum(arr, num)){
            System.out.println("Yes, such a pair exists.");
        }
        else{
            System.out.println("No such pair exists.");
        }
        sc.close();
    }
    public static boolean isTwoSum(int arr[], int num){
        HashSet<Integer> se=new HashSet<>();
        for(int i=0;i<arr.length;i++){
            se.add(arr[i]);
        }
        for(int i=0;i<arr.length;i++){
            if(se.contains(num-arr[i])){
                return true;
            }
        }
        return false;
    }
}
