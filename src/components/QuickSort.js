import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuickCode from './QuickCode';
import QuickComplexity from './QuickComplexity';
import './Visuals.css';

const QuickSort = () =>{
   const myState = useSelector(state => state.updateProps);
    const dispatch = useDispatch();
    const [isPreviewShown, setPreviewShown] = useState(false);

    let arrVal = myState.arrVal.map((item) => item[0]);
    let ids = myState.arrVal.map((item) => item[1]);

   const swap = (arr,i,j) => {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
   }

   const partition = (arrVal,ids,l,r,timer) => {
      let pivot = arrVal[r];
      let color = [];
            for (let i = 0; i < 3; i++)
                color.push(Math.floor(Math.random() * 200));

      let j = l-1;
      for (let i = l; i <= r; i++)
      document.getElementById(ids[i]).childNodes[1].style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;

      for(let i = l; i < r; i++){
         if(arrVal[i]<pivot){
            j++;
            swap(arrVal,i,j);
            swap(ids,i,j);
            document.getElementById(ids[i]).style.transform = `translateX(${i*35}px)`;
            document.getElementById(ids[j]).style.transform = `translateX(${j*35}px)`;
         }
      }
      swap(arrVal,r,j+1);
      swap(ids,r,j+1);

      setTimeout(() => {

       //  document.getElementById(ids[j+1]).childNodes[1].style.backgroundColor = 'black';
         setTimeout(() => {
            document.getElementById(ids[j+1]).childNodes[1].style.backgroundColor = myState.color;
         },myState.speed*6-10)

         document.getElementById(ids[r]).style.transform = `translateX(${r*35}px)`;
         document.getElementById(ids[j+1]).style.transform = `translateX(${(j+1)*35}px)`;

      },3000);
      return j+1;
   }

   const quickSort = (arrVal,ids,l,r,timer) => {
      if(l<r){
         let ind = partition(arrVal,ids,l,r,timer);
         quickSort(arrVal,ids,l,ind-1,timer-1);
         quickSort(arrVal,ids,ind+1,r,timer-1);
      }
   }
   
   const solve = () => {
      setPreviewShown(true);
      quickSort(arrVal,ids,0,arrVal.length-1,Math.ceil(Math.log(arrVal.length+1)));

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
   }
   useEffect(() => {
      if(myState.sortingAlgorithm==='quick'){
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

   return (<>
      <div id='codePart'>
      <div id='ifPart'>
         <p> if (arr[j] &gt; arr[j + 1]) </p>
      </div>
      <div id='swapPart' style={{marginLeft:'30px'}}>
         <p> swap(arr[j], arr[j + 1]); </p>
      </div>
   </div>
      {/* {isPreviewShown && <MergeCode code={CppCode} language="cpp"/>} */}
      {isPreviewShown && <QuickCode/>}
      {isPreviewShown && <QuickComplexity/>}
   </>);
}

export default QuickSort;