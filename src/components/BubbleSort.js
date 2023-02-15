// import { red } from '@mui/material/colors';
// import React,{useEffect, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import BubbleCode from './BubbleCode';
// import BubbleComplexity from './BubbleComplexity';
// import './Visuals.css';

// const BubbleSort = () =>{
//    const myState = useSelector(state => state.updateProps);
//    const dispatch = useDispatch();
//    const [isPreviewShown, setPreviewShown] = useState(false);

//    let arrVal = myState.arrVal.map((item) => item[0]);
//    let ids = myState.arrVal.map((item) => item[1]);


//    const JSCode = `const App = props => {
//       return (
//         <div>
//           <h1> Prism JS </h1>
//           <div>Awesome Syntax Highlighter</div>
//         </div>
//       );
//     };
//     `;

//     const CppCode = `
//       #include<bits/stdc++.h>
//       using namespace std;
//       int main(){
//          printf("HELLo WORLD!");
//          return 0;
//       }
//     `;

//    const solve = () => {
//       setPreviewShown(true);
//       console.log("INTO SOLVE");
//       for(let i = arrVal.length,timer = 0; i > 0;timer += i-1, i--){
//          setTimeout(() => {
//             console.log(timer);
//             for(let j = 1; j < i; j++){
//                setTimeout(() => {
//                   // The childNodes property returns a collection (list) of an elements's child nodes. 
//                   // childNodes[0]->LABEL ABOVE BARS , childNodes[1]->BARS
//                   // To paint affected bars with black color
                  
//                   // After completion recolour bar with original color
//                   setTimeout(() => {
//                      document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
//                      document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = myState.sortingColor;
//                      document.getElementById('ifPart').style.backgroundColor = 'red';
//                   },myState.sortingSpeed-0);
                  
//                   console.log(j);
//                   document.getElementById(ids[j]).childNodes[1].style.backgroundColor = ' black';
//                   document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = 'black';
                  
//                   if(arrVal[j]<arrVal[j-1]){
//                      document.getElementById('ifPart').style.backgroundColor = 'rgb(255, 177, 82)';
//                      document.getElementById('swapPart').style.backgroundColor = 'green';
//                      let temp = arrVal[j];
//                      arrVal[j] = arrVal[j-1];
//                      arrVal[j-1] = temp;    
                     
//                      temp = ids[j];
//                      ids[j] = ids[j-1];
//                      ids[j-1] = temp;
                     
                     
//                      document.getElementById(ids[j]).style.transform = `translateX(${j*35}px)`;
                     
//                      document.getElementById(ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;
                     
//                   }
//                },(j-1)*(myState.sortingSpeed+100));
//                document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 177, 82)';
//             //    },5*(myState.sortingSpeed));
//             }
//          }
//          // ,(timer)*(2000))
//          ,(timer)*(myState.sortingSpeed))
//          // ,(myState.sortingSpeed));
//       }
      
//       setTimeout(() => {
//          // dispatch({
//          //    type:'PLAY_PAUSE',
//          //    play: false
//          // })

//       //    dispatch({
//       //       type:'UPDATE_COLOR',
//       //       // GREEN COLOR ON SUCCESS
//       //       // color: 'rgb(0, 182, 0)'
//       //       color: '#51a954'
//       //       // color: 'green'
//       //    })
//          console.log("KHATAM TATA BYE BYE GOOD BYE GAYA"); 

//       },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.sortingSpeed+50);
//    }
   
//    useEffect(() => {
//       if(myState.sortingAlgorithm==='bubble'){
//          // console.log("INTO BUBBLE SORT.");
//          console.log(myState.play);
//          if(myState.play){
//             console.log("-----------PLAY IS ON------------");
//             solve();
//             // timer();
//          }
//          return(
//             <h1> HELLO JI kaisa??</h1>
//          )
//       }
//    },[myState.play]);

//    return (
//    <>
   

//    {/* CSS code in Visuals.css */}
//    <div id='codePart'>
//       <div id='ifPart'>
//          <p> if (arr[j] &gt; arr[j + 1]) </p>
//       </div>
//       <div id='swapPart' style={{marginLeft:'30px'}}>
//          <p> swap(arr[j], arr[j + 1]); </p>
//       </div>
//    </div>
//       {/* {isPreviewShown && <BubbleCode code={CppCode} language="cpp"/>} */}
//       {isPreviewShown && <BubbleCode/>}
//       {isPreviewShown && <BubbleComplexity/>}
//    </>
//    );
// }

// export default BubbleSort;


// // 90 80 70 60 50 40 30 20 10 99




























import { red } from '@mui/material/colors';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BubbleCode from './BubbleCode';
import BubbleComplexity from './BubbleComplexity';
import './Visuals.css';

const BubbleSort = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();
   const [isPreviewShown, setPreviewShown] = useState(false);

   let arrVal = myState.arrVal.map((item) => item[0]);
   let ids = myState.arrVal.map((item) => item[1]);

   let count = 0, flag = 0;

   const solve = () => {
      {<div> HELLO HI BYE </div>}
      setPreviewShown(true);
      console.log("INTO SOLVE");
      for(let i = 0; i < arrVal.length; i++){
         // count++; 
         for(let j = 1; j < arrVal.length-i; j++){
                  // The childNodes property returns a collection (list) of an elements's child nodes. 
                  // childNodes[0]->LABEL ABOVE BARS , childNodes[1]->BARS
                  
                  count++
                  setTimeout(() => {
                     console.log("INSIDDE LOOP : " + j);

                     // background-image: linear-gradient(to bottom right, rgb(128, 223, 254), rgb(255, 117, 255));
                     document.getElementById('ifPart').style.backgroundColor = 'rgb(128, 223, 254)';
                     // document.getElementById('ifPart').style.height = '30px';
                     document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                     
                     document.getElementById(ids[j]).childNodes[1].style.backgroundColor = ' black';
                     document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = ' black';
                     setTimeout(() => {
                        if(arrVal[j]<arrVal[j-1]){
                           document.getElementById('ifPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                           document.getElementById('swapPart').style.backgroundColor = 'rgb(128, 223, 254)';

                           let temp = arrVal[j];
                           arrVal[j] = arrVal[j-1];
                           arrVal[j-1] = temp;    
                           
                           temp = ids[j];
                           ids[j] = ids[j-1];
                           ids[j-1] = temp;
                           
                           document.getElementById(ids[j]).style.transform = `translateX(${j*35}px)`;

                           document.getElementById(ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;
                           
                        }
                     // }, (count+flag)*1);
                     }, 100);
                        setTimeout(() => {
                           document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = myState.sortingColor;
                           document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
                        // }, (count+flag)*5);
                        }, 1000);
                  }, (count+flag)*2000);

            }
         
         
      }
      
      setTimeout(() => {
         // dispatch({
         //    type:'PLAY_PAUSE',
         //    play: false
         // })

      //    dispatch({
      //       type:'UPDATE_COLOR',
      //       // GREEN COLOR ON SUCCESS
      //       // color: 'rgb(0, 182, 0)'
      //       color: '#51a954'
      //       // color: 'green'
      //    })
         console.log("KHATAM TATA BYE BYE GOOD BYE GAYA"); 

      },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.sortingSpeed+50);
   }
   
   useEffect(() => {
      if(myState.sortingAlgorithm==='bubble'){
         console.log(myState.play);
         if(myState.play){
            console.log("-----------PLAY IS ON------------");
            solve();
         }
         return(
            <h1> HELLO JI kaisa??</h1>
         )
      }
   },[myState.play]);

   return (
   <>
   

   {/* CSS code in Visuals.css */}
   <div id='codePart'>
      <div id='ifPart'>
         <p> if (arr[j] &gt; arr[j + 1]) </p>
      </div>
      <div id='swapPart' style={{marginLeft:'30px'}}>
         <p> swap(arr[j], arr[j + 1]); </p>
      </div>
   </div>
      {/* {isPreviewShown && <BubbleCode code={CppCode} language="cpp"/>} */}
      {isPreviewShown && <BubbleCode/>}
      {isPreviewShown && <BubbleComplexity/>}
   </>
   );
}

export default BubbleSort;


// 90 80 70 60 50 40 30 20 10 99

// rgb(255, 117, 255),  rgb(128, 223, 254)