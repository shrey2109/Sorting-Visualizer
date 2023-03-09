
import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const MergeCode = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <h1> Code for Merge Sort </h1>

        

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

                    <div style={{marginLeft:'0px'}}> {`#include <iostream>`} </div>
                    <div style={{marginLeft:'0px'}}> {`using namespace std;`} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`void merge(int array[], int const left, int const mid,int const right)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`auto const subArrayOne = mid - left + 1;`} </div>
                    <div style={{marginLeft:'30px'}}> {`auto const subArrayTwo = right - mid; `} </div>
                    <div style={{marginLeft:'30px'}}> {`auto *leftArray = new int[subArrayOne],*rightArray = new int[subArrayTwo];`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (auto i = 0; i < subArrayOne; i++)`} </div>
                    <div style={{marginLeft:'60px'}}> {`leftArray[i] = array[left + i];`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (auto j = 0; j < subArrayTwo; j++)`} </div>
                    <div style={{marginLeft:'60px'}}> {`rightArray[j] = array[mid + 1 + j];`} </div>
                    <div style={{marginLeft:'30px'}}> {`auto indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0;`} </div>
                    <div style={{marginLeft:'30px'}}> {`int indexOfMergedArray = left; `} </div>
                    <div style={{marginLeft:'30px'}}> {`while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo]) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];`} </div>
                    <div style={{marginLeft:'90px'}}> {`indexOfSubArrayOne++;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`else {`} </div>
                    <div style={{marginLeft:'90px'}}> {`array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];`} </div>
                    <div style={{marginLeft:'90px'}}> {`indexOfSubArrayTwo++;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`indexOfMergedArray++;`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`while (indexOfSubArrayOne < subArrayOne) {`} </div>
                    <div style={{marginLeft:'60px'}}> {`array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];`} </div>
                    <div style={{marginLeft:'60px'}}> {`indexOfSubArrayOne++;`} </div>
                    <div style={{marginLeft:'60px'}}> {`indexOfMergedArray++;`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`while (indexOfSubArrayTwo < subArrayTwo) {`} </div>
                    <div style={{marginLeft:'60px'}}> {`array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];`} </div>
                    <div style={{marginLeft:'60px'}}> {`indexOfSubArrayTwo++;`} </div>
                    <div style={{marginLeft:'60px'}}> {`indexOfMergedArray++;`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`delete[] leftArray;`} </div>
                    <div style={{marginLeft:'30px'}}> {`delete[] rightArray;`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`void MergeSort(int arr[], int const begin,int const end)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`if (begin >= end)`} </div>
                    <div style={{marginLeft:'60px'}}> {`return; `} </div>
                    <div style={{marginLeft:'30px'}}> {`auto mid = begin + (end - begin) / 2;`} </div>
                    <div style={{marginLeft:'30px'}}> {`mergeSort(array, begin, mid);`} </div>
                    <div style={{marginLeft:'30px'}}> {`mergeSort(array, mid + 1, end);`} </div>
                    <div style={{marginLeft:'30px'}}> {`merge(array, begin, mid, end);`} </div>
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
                    <div style={{marginLeft:'30px'}}> {`MergeSort(arr,0, num-1);`} </div>
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
                    <div style={{marginLeft:'0px'}}> {`public class MergeSort {`} </div>
                    <div style={{marginLeft:'30px'}}> {`void merge(int arr[], int l, int m, int r){`} </div>
                    <div style={{marginLeft:'60px'}}> {`int n1 = m - l + 1;`} </div>
                    <div style={{marginLeft:'60px'}}> {`int n2 = r - m;`} </div>
                    <div style={{marginLeft:'60px'}}> {`int L[] = new int[n1];`} </div>
                    <div style={{marginLeft:'60px'}}> {`int R[] = new int[n2];`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (int i = 0; i < n1; ++i)`} </div>
                    <div style={{marginLeft:'90px'}}> {`L[i] = arr[l + i];`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (int j = 0; j < n2; ++j)`} </div>
                    <div style={{marginLeft:'90px'}}> {`R[j] = arr[m + 1 + j];`} </div>
                    <div style={{marginLeft:'60px'}}> {`int i = 0, j = 0;`} </div>
                    <div style={{marginLeft:'60px'}}> {`int k = l;`} </div>
                    <div style={{marginLeft:'60px'}}> {`while (i < n1 && j < n2) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`if (L[i] <= R[j]) {`} </div>
                    <div style={{marginLeft:'120px'}}> {`arr[k] = L[i];`} </div>
                    <div style={{marginLeft:'120px'}}> {`i++;`} </div>
                    <div style={{marginLeft:'90px'}}> {`}`} </div>
                    <div style={{marginLeft:'90px'}}> {`else {`} </div>
                    <div style={{marginLeft:'120px'}}> {`arr[k] = R[j];`} </div>
                    <div style={{marginLeft:'120px'}}> {`j++;`} </div>
                    <div style={{marginLeft:'90px'}}> {`}`} </div>
                    <div style={{marginLeft:'90px'}}> {`k++;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`while (i < n1) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`arr[k] = L[i];`} </div>
                    <div style={{marginLeft:'90px'}}> {`i++;`} </div>
                    <div style={{marginLeft:'90px'}}> {`k++;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`while (j < n2) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`arr[k] = R[j];`} </div>
                    <div style={{marginLeft:'90px'}}> {`j++;`} </div>
                    <div style={{marginLeft:'90px'}}> {`k++;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {``} </div>
                    <div style={{marginLeft:'30px'}}> {``} </div>
                    <div style={{marginLeft:'30px'}}> {``} </div>
                    <br/>
                    <div style={{marginLeft:'30px'}}> {`void sort(int arr[], int l, int r){`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (l < r) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`int m = l + (r - l) / 2;`} </div>
                    <div style={{marginLeft:'90px'}}> {`sort(arr, l, m);`} </div>
                    <div style={{marginLeft:'90px'}}> {`sort(arr, m + 1, r);`} </div>
                    <div style={{marginLeft:'90px'}}> {`merge(arr, l, m, r);`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'30px'}}> {`static void printArray(int arr[])`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`int n = arr.length`} </div>
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
                    <div style={{marginLeft:'60px'}}> {`MergeSort ob = new MergeSort();`} </div>
                    <div style={{marginLeft:'60px'}}> {`ob.sort(arr,0,arr.length-1);`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Sorted array");`} </div>
                    <div style={{marginLeft:'60px'}}> {`printArray(arr);`} </div>
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

export default MergeCode;






