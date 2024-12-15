package com.arrayspartoone;

public class LinearSearch {
    public static void main(String[] args) {
        int[] nums = {2, 4, 6, 8, 10};
        int key = 6;

        int index = LinearSearchAlgo(nums, key);
        System.out.println("Element is found at the index : " + index);
    }

    public static int LinearSearchAlgo(int[] nums, int key) {
        for (int i = 0; i < nums.length; i++) {
            if (key == nums[i]) {
                return i;
            }
        }
        return -1;
    }
}
