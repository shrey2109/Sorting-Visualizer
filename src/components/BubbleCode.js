// import React, {useEffect} from "react";
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Prism from 'prismjs';

// const BubbleCode = ({ code, language }) => {
//     const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   useEffect(() => {
//     Prism.highlightAll();
//   });

//     return(
//         <>
//             <h1> Code for Bubble Sort </h1>

        

//         <Box sx={{ width: '100%', typography: 'body1' }}>
//         <TabContext value={value}>
//         {/* <TabContext> */}
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <TabList onChange={handleChange} aria-label="lab API tabs example">
//             {/* <TabList> */}
//                 <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="C++" value="1" />
//                 <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="JAVA" value="2" />
//             </TabList>
//             </Box>

//             <TabPanel value="1"> 
//             {/* <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'790px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="1">  */}
//                 {/* <pre>
//                     <code className="language-js">
//                         #include&lt;bits/stdc++.h&gt;
//                         printf("HELLO WORLD!");
//                     </code>                
//                 </pre> */}

//                 <code className={`language-${language}`}>{code}</code>
                    

//             </TabPanel>

//             <TabPanel value="2"> 
//             {/* <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'790px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="2">  */}

                
//             </TabPanel>
//             <TabPanel value="3"></TabPanel>
//         </TabContext>
//         </Box>

//             <div>
//             <pre>
//                 <code className={`language-css`}>
//                    fjlsdjflk
//                 </code>
//             </pre>
//             </div>
//     </>
//     )
// }

// export default BubbleCode;



















import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const BubbleCode = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <h1> Code for Bubble Sort </h1>

        

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
                    <div style={{marginLeft:'0px'}}> {`void bubbleSort(int arr[], int n)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int i, j;`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (i = 0; i < n - 1; i++)`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (j = 0; j < n - i - 1; j++)`} </div>
                    <div style={{marginLeft:'90px'}}> {`if (arr[j] > arr[j + 1])`} </div>
                    <div style={{marginLeft:'120px'}}> {`swap(arr[j], arr[j + 1]);`} </div>
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
                    <div style={{marginLeft:'30px'}}> {`bubbleSort(arr, num);`} </div>
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
                    <div style={{marginLeft:'0px'}}> {`class BubbleSort`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`void bubbleSort(int arr[], int n)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (int i = 0; i < n-1; i++)`} </div>
                    <div style={{marginLeft:'90px'}}> {`for (int j = 0; j < n-i-1; j++)`} </div>
                    <div style={{marginLeft:'120px'}}> {`if (arr[j] > arr[j+1])`} </div>
                    <div style={{marginLeft:'120px'}}> {`{`} </div>
                    <div style={{marginLeft:'150px'}}> {`int temp = arr[j];`} </div>
                    <div style={{marginLeft:'150px'}}> {`arr[j] = arr[j+1];`} </div>
                    <div style={{marginLeft:'150px'}}> {`arr[j+1] = temp;`} </div>
                    <div style={{marginLeft:'120px'}}> {`}`} </div>
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
                    <div style={{marginLeft:'60px'}}> {`arr[i] = sc.nexInt()`} </div>
                    <div style={{marginLeft:'60px'}}> {`ob.bubbleSort(arr, num);`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Sorted array");`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Sorted array");`} </div>
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

export default BubbleCode;