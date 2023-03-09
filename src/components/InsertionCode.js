
import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const InsertionCode = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <h1> Code for Insertion Sort </h1>

        

        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        {/* <TabContext> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <TabList> */}
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="C++" value="3" />
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="JAVA" value="4" />
            </TabList>
            </Box>

            {/* <TabPanel value="1">  */}
            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'790px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="3"> 
                <code>

                    <div style={{marginLeft:'0px'}}> {`#include<bits/stdc++.h>`} </div>
                    <div style={{marginLeft:'0px'}}> {`using namespace std;`} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`void InsertionSort(int arr[], int n)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int i,key, j;`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (i = 1; i < n ; i++)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`key = arr[i];`} </div>
                    <div style={{marginLeft:'60px'}}> {`j = i-1;`} </div>
                    <div style={{marginLeft:'60px'}}> {`while (j >= 0 && arr[j] > key)`} </div>
                    <div style={{marginLeft:'60px'}}> {`{`} </div>
                    <div style={{marginLeft:'90px'}}> {`arr[j + 1] = arr[j];`} </div>
                    <div style={{marginLeft:'90px'}}> {`j = j - 1;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`arr[j + 1] = key;`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
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
                    <div style={{marginLeft:'30px'}}> {`InsertionSort(arr, num);`} </div>
                    <div style={{marginLeft:'30px'}}> {`cout << "Sorted array: \n";`} </div>
                    <div style={{marginLeft:'30px'}}> {`printArray(arr, num);`} </div>
                    <div style={{marginLeft:'30px'}}> {`return 0;`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>

                </code>
            </TabPanel>
            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'790px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="4"> 

                <code>
                    <div style={{marginLeft:'0px'}}> {`import java.util.Scanner;`} </div>
                    <div style={{marginLeft:'0px'}}> {`public class InsertionSort`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`void InsertionSort(int arr[]){`} </div>
                    <div style={{marginLeft:'60px'}}> {`int n = arr.length;`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (int i = 1; i < n; ++i){`} </div>
                    <div style={{marginLeft:'90px'}}> {`int key = arr[i];`} </div>
                    <div style={{marginLeft:'90px'}}> {`int j = i - 1;`} </div>
                    <div style={{marginLeft:'90px'}}> {`while (j >= 0 && arr[j] > key) {`} </div>
                    <div style={{marginLeft:'120px'}}> {`arr[j+1] = arr[j];`} </div>
                    <div style={{marginLeft:'120px'}}> {`j = j-1;`} </div>
                    <div style={{marginLeft:'90px'}}> {`}`} </div>
                    <div style={{marginLeft:'90px'}}> {`arr[j+1] = key`} </div>
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
                    <div style={{marginLeft:'60px'}}> {`arr[i] = sc.nexInt()`} </div>
                    <div style={{marginLeft:'60px'}}> {`InsertionSort ob = new InsertionSort();`} </div>
                    <div style={{marginLeft:'60px'}}> {`ob.InsertionSort(arr);`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Sorted array");`} </div>
                    <div style={{marginLeft:'60px'}}> {`printArray(arr);`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>

                </code>
            
            </TabPanel>
        </TabContext>
        </Box>
    </>
    )
}

export default InsertionCode;



