package com.arrayspartoone;

public class BinarySearch {
    public static void main(String[] args) {
        int[] nums = {2, 4, 6, 8, 10, 12, 14};
        int key = 8;

        int foundAt = binarySearchAlgorithm(nums, key);
        if (foundAt == -1) {
            System.out.println("Not Found...");
        } else {
            System.out.println("Found at index " + foundAt);
        }
    }

    private static int binarySearchAlgorithm(int[] nums, int key) {
        int start = 0;
        int end = nums.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (nums[mid] == key) {
                return mid;
            }
            if (nums[mid] < key) {
                start = mid + 1;
            }
            if (nums[mid] > key) {
                end = mid - 1;
            }
        }
        return -1;
    }
}
