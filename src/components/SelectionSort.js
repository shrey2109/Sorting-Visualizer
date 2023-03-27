import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectionCode from './SelectionCode';
import SelectionComplexity from './SelectionComplexity';
import './Visuals.css';
const SelectionSort = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();
   const [isPreviewShown, setPreviewShown] = useState(false);
   let arrVal = myState.arrVal.map((item) => item[0]);
   let ids = myState.arrVal.map((item) => item[1]);

   const solve = () => {
      let n = arrVal.length;
      setPreviewShown(true);
      for(let i = 0; i < n; i++){

         setTimeout(() => {
         let ind = i;
         document.getElementById(ids[i]).childNodes[1].style.backgroundColor = 'black';
         for(let j = i; j < n; j++){
            setTimeout(() => {
               document.getElementById(ids[j]).childNodes[1].style.backgroundColor = 'black';
            }, 1000);
            if(arrVal[ind] > arrVal[j])
            ind = j;
            setTimeout(() => {
               document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
            }, 1000);
         }
         let temp = arrVal[i];
         arrVal[i] = arrVal[ind];
         arrVal[ind] = temp;
         
         temp = ids[i];
         ids[i] = ids[ind];
         ids[ind] = temp;
         //document.getElementById(ids[i]).childNodes[1].style.backgroundColor = 'black';
         
         document.getElementById(ids[i]).style.transform = `translateX(${i*35}px)`;
         document.getElementById(ids[ind]).style.transform = `translateX(${ind*35}px)`;
         setTimeout(() => {
            document.getElementById(ids[i]).childNodes[1].style.backgroundColor = myState.sortingColor;
            //document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
         // }, (count+flag)*5);
         }, 1500);

         // setTimeout(() => {
         //    document.getElementById(ids[i]).childNodes[1].style.backgroundColor = myState.color;
         // },100);

         },i*2000);
      }

      setTimeout(() => {
         // dispatch({
         //    type:'PLAY_PAUSE',
         //    _play:false
         // })

         // dispatch({
         //    type:'UPDATE_COLOR',
         //    color: 'rgb(0, 182, 0)'
         // })

      },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.sortingSpeed+50);
   };

   useEffect(() => {
      if(myState.sortingAlgorithm==='selection'){
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

   return( <>
      <div id='codePart'>
     <div id='ifPart'>
        <p> if (arr[j] &gt; arr[j + 1]) </p>
     </div>
     <div id='swapPart' style={{marginLeft:'30px'}}>
        <p> swap(arr[j], arr[j + 1]); </p>
     </div>
  </div>
     {/* {isPreviewShown && <SelectionCode code={CppCode} language="cpp"/>} */}
     {isPreviewShown && <SelectionCode/>}
     {isPreviewShown && <SelectionComplexity/>}
   </>);
}

export default SelectionSort;