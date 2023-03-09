import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const SelectionCode = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <h1> Code for Selection Sort </h1>

        

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
                    <div style={{marginLeft:'0px'}}> {`void swap(int *xp, int *yp)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int temp = *xp;`} </div>
                    <div style={{marginLeft:'30px'}}> {`*xp = *yp;`} </div>
                    <div style={{marginLeft:'30px'}}> {`*yp = temp;`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`void SelectionSort(int arr[], int n)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int i, j,min_idx;`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (i = 0; i < n - 1; i++)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`min_idx = i;`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (j = i+1; j < n ; j++)`} </div>
                    <div style={{marginLeft:'60px'}}> {`{`} </div>
                    <div style={{marginLeft:'90px'}}> {`if (arr[j] < arr[min_idx])`} </div>
                    <div style={{marginLeft:'120px'}}> {`min_idx = j;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (min_idx!=i)`} </div>
                    <div style={{marginLeft:'90px'}}> {`swap(&arr[min_idx], &arr[i]);`} </div>
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
                    <div style={{marginLeft:'30px'}}> {`SelectionSort(arr, num);`} </div>
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
                    <div style={{marginLeft:'0px'}}> {`public class SelectionSort`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`void SelectionSort(int arr[], int n)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (int i = 0; i < n-1; i++){`} </div>
                    <div style={{marginLeft:'90px'}}> {`int min_idx = i;`} </div>
                    <div style={{marginLeft:'90px'}}> {`for (int j = i+1; j < n; j++)`} </div>
                    <div style={{marginLeft:'120px'}}> {`if (arr[j] > arr[min_idx])`} </div>
                    <div style={{marginLeft:'150px'}}> {`min_idx = j;`} </div>
                    <div style={{marginLeft:'90px'}}> {`int temp = arr[min_idx];`} </div>
                    <div style={{marginLeft:'90px'}}> {`arr[min_idx] = arr[i];`} </div>
                    <div style={{marginLeft:'90px'}}> {`arr[i] = temp;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'30px'}}> {`void printArray(int arr[], int n)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (int i=0; i<n; ++i)`} </div>
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
                    <div style={{marginLeft:'60px'}}> {`SelectionSort ob = new SelectionSort();`} </div>
                    <div style={{marginLeft:'60px'}}> {`ob.SelectionSort(arr, num);`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Sorted array");`} </div>
                    <div style={{marginLeft:'60px'}}> {`ob.printArray(arr,num);`} </div>
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

export default SelectionCode;


/*
// C++ program for implementation of
// selection sort
#include <bits/stdc++.h>
using namespace std;

//Swap function


void selectionSort(int arr[], int n)
{
	int i, j, min_idx;
	// One by one move boundary of
	// unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in
		// unsorted array
		min_idx = i;
		for (j = i+1; j < n; j++)
		{
		if (arr[j] < arr[min_idx])
			min_idx = j;
		}
		// Swap the found minimum element
		// with the first element
		
	}
}

//Function to print an array
void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
	{
	cout << arr[i] << " ";
	cout << endl;
	}
}

// Driver program to test above functions
int main()
{
	int arr[] = {64, 25, 12, 22, 11};
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	cout << "Sorted array: \n";
	printArray(arr, n);
	return 0;
}
// This is code is contributed by rathbhupendra
*/



/*// Java program for implementation of Selection Sort
import java.io.*;
public class SelectionSort
{
	void sort(int arr[])
	{
		int n = arr.length;

		// One by one move boundary of unsorted subarray
		for (int i = 0; i < n-1; i++)
		{
			// Find the minimum element in unsorted array
			int min_idx = i;
			for (int j = i+1; j < n; j++)
				if (arr[j] < arr[min_idx])
					min_idx = j;

			// Swap the found minimum element with the first
			// element
			int temp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = temp;
		}
	}

	// Prints the array
	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i=0; i<n; ++i)
			System.out.print(arr[i]+" ");
		System.out.println();
	}

	// Driver code to test above
	public static void main(String args[])
	{
		SelectionSort ob = new SelectionSort();
		int arr[] = {64,25,12,22,11};
		ob.sort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
}

*/