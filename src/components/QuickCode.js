import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const QuickCode = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <h1> Code for Quick Sort </h1>

        

        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        {/* <TabContext> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <TabList> */}
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="C++" value="1" />
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="JAVA" value="2" />
            </TabList>
            </Box>

            {/* <TabPanel value="1">  */}
            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'790px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="1"> 
                <code>

                    <div style={{marginLeft:'0px'}}> {`#include<bits/stdc++.h>`} </div>
                    <div style={{marginLeft:'0px'}}> {`using namespace std;`} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`int partition(int arr[], int low, int high)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int pivot = arr[high];`} </div>
                    <div style={{marginLeft:'30px'}}> {`int i = (low - 1);`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (int j = low; j <= high - 1; j++) {`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (arr[j] < pivot) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`i++;`} </div>
                    <div style={{marginLeft:'90px'}}> {`swap(arr[i], arr[j]);`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`swap(arr[i + 1], arr[high]);`} </div>
                    <div style={{marginLeft:'30px'}}> {`return (i + 1);`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`void QuickSort(int arr[], int low, int high)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`if (low < high) {`} </div>
                    <div style={{marginLeft:'60px'}}> {`int pi = partition(arr, low, high);`} </div>
                    <div style={{marginLeft:'60px'}}> {`QuickSort(arr, low, pi - 1);`} </div>
                    <div style={{marginLeft:'60px'}}> {`QuickSort(arr, pi + 1, high);`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`void printArray(int arr[], int size)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int i;`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (i = 0; i < size; i++)`} </div>
                    <div style={{marginLeft:'60px'}}> {`cout << arr[i] << " ";`} </div>
                    <div style={{marginLeft:'30px'}}> {`cout << endl;`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`int main()`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int num;`} </div>
                    <div style={{marginLeft:'30px'}}> {`cout << "Enter Total Numbers : ";`} </div>
                    <div style={{marginLeft:'30px'}}> {`cin >> num`} </div>
                    <div style={{marginLeft:'30px'}}> {`int arr[num];`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (i = 0; i < num; i++)`} </div>
                    <div style={{marginLeft:'60px'}}> {`cin >> arr[i]`} </div>
                    <div style={{marginLeft:'30px'}}> {`QuickSort(arr,0, num-1);`} </div>
                    <div style={{marginLeft:'30px'}}> {`cout << "Sorted array: \n";`} </div>
                    <div style={{marginLeft:'30px'}}> {`printArray(arr, num);`} </div>
                    <div style={{marginLeft:'30px'}}> {`return 0;`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>

                </code>
            </TabPanel>
            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'790px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="2"> 

                <code>
                    <div style={{marginLeft:'0px'}}> {`import java.util.Scanner;`} </div>
                    <div style={{marginLeft:'0px'}}> {`import java.io.*;`} </div>
                    <div style={{marginLeft:'0px'}}> {`public class QuickSort{`} </div>
                    <div style={{marginLeft:'30px'}}> {`static void swap(int[] arr, int i, int j)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`int temp = arr[i];`} </div>
                    <div style={{marginLeft:'60px'}}> {`arr[i] = arr[j];`} </div>
                    <div style={{marginLeft:'60px'}}> {`arr[j] = temp;`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`static int partition(int[] arr, int low, int high)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`	int pivot = arr[high];`} </div>
                    <div style={{marginLeft:'60px'}}> {`	int i = (low - 1);`} </div>
                    <div style={{marginLeft:'60px'}}> {` for (int j = low; j <= high - 1; j++) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`if (arr[j] < pivot) {`} </div>
                    <div style={{marginLeft:'120px'}}> {`i++;`} </div>
                    <div style={{marginLeft:'120px'}}> {`swap(arr, i, j);`} </div>
                    <div style={{marginLeft:'90px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`swap(arr, i + 1, high);`} </div>
                    <div style={{marginLeft:'60px'}}> {`return (i + 1);`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'30px'}}> {`static void QuickSort(int[] arr, int low, int high)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (low < high) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`int pi = partition(arr, low, high);`} </div>
                    <div style={{marginLeft:'90px'}}> {`QuickSort(arr, low, pi - 1);`} </div>
                    <div style={{marginLeft:'90px'}}> {`QuickSort(arr, pi + 1, high);`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'30px'}}> {`static void printArray(int arr[], int n)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (int i=0; i<n; i++)`} </div>
                    <div style={{marginLeft:'90px'}}> {`System.out.print(arr[i] + " ");`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println();`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'30px'}}> {`public static void main(String args[])`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`Scanner sc = new Scanner(System.in);`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Enter Total Number : )`} </div>
                    <div style={{marginLeft:'60px'}}> {`int num = sc.nextInt();`} </div>
                    <div style={{marginLeft:'60px'}}> {`int[] arr = new int[num];`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (i = 0; i < num; i++)`} </div>
                    <div style={{marginLeft:'90px'}}> {`arr[i] = sc.nexInt()`} </div>
                    <div style={{marginLeft:'60px'}}> {`QuickSort(arr,0, num-1);`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Sorted array");`} </div>
                    <div style={{marginLeft:'60px'}}> {`printArray(arr,num);`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>

                </code>
            
            </TabPanel>
            <TabPanel value="3"></TabPanel>
        </TabContext>
        </Box>
    </>
    )
}

export default QuickCode;





/*
// Java implementation of QuickSort
import java.io.*;

class GFG {

	// A utility function to swap two elements
	

	/* This function takes last element as pivot, places
	the pivot element at its correct position in sorted
	array, and places all smaller (smaller than pivot)
	to left of pivot and all greater elements to right
	of pivot 
	
	/* The main function that implements QuickSort
			arr[] --> Array to be sorted,
			low --> Starting index,
			high --> Ending index
	
	
	// Function to print an array
	static void printArray(int[] arr, int size)
	{
		for (int i = 0; i < size; i++)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver Code
	public static void main(String[] args)
	{
		int[] arr = { 10, 7, 8, 9, 1, 5 };
		int n = arr.length;

		quickSort(arr, 0, n - 1);
		System.out.println("Sorted array: ");
		printArray(arr, n);
	}
}

// This code is contributed by Ayush Choudhary
*/