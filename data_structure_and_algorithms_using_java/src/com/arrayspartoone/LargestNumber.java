package com.arrayspartoone;

public class LargestNumber {
    public static void main(String[] args) {
        int[] arr = {1, 2, 6, 3, 5};

        System.out.println(LargestNumberAlgo(arr));
    }

    public static int LargestNumberAlgo(int[] arr) {
        int largest = Integer.MIN_VALUE;

        for (int i : arr) {
            if (largest < i) {
                largest = i;
            }
        }

        return largest;
    }
}
