import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BubbleCode from './BubbleCode';
import BubbleComplexity from './BubbleComplexity';

const BubbleSort = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();
   const [isPreviewShown, setPreviewShown] = useState(false);

   let arrVal = myState.arrVal.map((item) => item[0]);
   let ids = myState.arrVal.map((item) => item[1]);


   const JSCode = `const App = props => {
      return (
        <div>
          <h1> Prism JS </h1>
          <div>Awesome Syntax Highlighter</div>
        </div>
      );
    };
    `;

    const CppCode = `
      #include<bits/stdc++.h>
      using namespace std;
      int main(){
         printf("HELLo WORLD!");
         return 0;
      }
    `;

   const solve = () => {
      setPreviewShown(true);
      console.log("INTO SOLVE");
      for(let i = arrVal.length,timer = 0; i > 0;timer += i-1, i--){
         setTimeout(() => {
            console.log(timer);
            for(let j = 1; j < i; j++){
               setTimeout(() => {
                  // The childNodes property returns a collection (list) of an elements's child nodes. 
                  // childNodes[0]->LABEL ABOVE BARS , childNodes[1]->BARS
                  // To paint affected bars with black color
                  
                  // After completion recolour bar with original color
                  setTimeout(() => {
                     document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
                     document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = myState.sortingColor;
                  },myState.sortingSpeed-0);

                  console.log(j);
                  document.getElementById(ids[j]).childNodes[1].style.backgroundColor = ' black';
                  document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = 'black';

                  if(arrVal[j]<arrVal[j-1]){
                     let temp = arrVal[j];
                     arrVal[j] = arrVal[j-1];
                     arrVal[j-1] = temp;    

                     temp = ids[j];
                     ids[j] = ids[j-1];
                     ids[j-1] = temp;

                     
                     document.getElementById(ids[j]).style.transform = `translateX(${j*35}px)`;
                     
                     document.getElementById(ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;
                        
                  }
               },(j-1)*(myState.sortingSpeed+100));
            //    },5*(myState.sortingSpeed));
            }
         }
         // ,(timer)*(2000))
         ,(timer)*(myState.sortingSpeed))
         // ,(myState.sortingSpeed));
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
         // console.log("KHATAM TATA BYE BYE GOOD BYE GAYA"); 
      },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.sortingSpeed+50);
   }
   
   useEffect(() => {
      if(myState.sortingAlgorithm==='bubble'){
        // console.log("INTO BUBBLE SORT.");
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

   return <>
      {/* {isPreviewShown && <BubbleCode code={CppCode} language="cpp"/>} */}
      {isPreviewShown && <BubbleCode/>}
      {isPreviewShown && <BubbleComplexity/>}
   </>;
}

export default BubbleSort;


// 90 80 70 60 50 40 30 20 10 99