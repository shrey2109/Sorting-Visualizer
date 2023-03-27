import { red } from '@mui/material/colors';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsertionCode from './InsertionCode';
import InsertionComplexity from './InsertionComplexity';
import './Visuals.css';

const InsertionSort = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();
   const [isPreviewShown, setPreviewShown] = useState(false);

   let arrVal = myState.arrVal.map((item) => item[0]);
   let ids = myState.arrVal.map((item) => item[1]);
   let timer = 0;
   let total_time = 0;
   let timing_map = new Map();
   
   // for(let i = 0; i < arrVal.length; i++){
   //     let j = i+1;
   //     while(j>0 && arrVal[j]<arrVal[j-1]){
   //         let temp = arrVal[j];
   //         arrVal[j] = arrVal[j-1];
   //         arrVal[j-1] = temp;
   //         total_time++;
   //         j--;
   //      }
   //      timing_map.set(i+1,i+1-j);
   //  }
    
   //  arrVal = myState.arrVal.map((item) => item[0]);
   //let count = 0, flag = 0;

   const solve = () => {
    //   {<div> HELLO HI BYE </div>}
       setPreviewShown(true);
      console.log("INTO SOLVE");
    //   for(let i = 0; i < arrVal.length; i++){
    //      // count++; 
    //      for(let j = 1; j < arrVal.length-i; j++){
    //               // The childNodes property returns a collection (list) of an elements's child nodes. 
    //               // childNodes[0]->LABEL ABOVE BARS , childNodes[1]->BARS
                  
    //               count++
    //               setTimeout(() => {
    //                  console.log("INSIDDE LOOP : " + j);

    //                  // background-image: linear-gradient(to bottom right, rgb(128, 223, 254), rgb(255, 117, 255));
    //                  document.getElementById('ifPart').style.backgroundColor = 'rgb(128, 223, 254)';
    //                  // document.getElementById('ifPart').style.height = '30px';
    //                  document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                     
    //                  document.getElementById(ids[j]).childNodes[1].style.backgroundColor = ' black';
    //                  document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = ' black';
    //                  setTimeout(() => {
    //                     if(arrVal[j]<arrVal[j-1]){
    //                        document.getElementById('ifPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
    //                        document.getElementById('swapPart').style.backgroundColor = 'rgb(128, 223, 254)';

    //                        let temp = arrVal[j];
    //                        arrVal[j] = arrVal[j-1];
    //                        arrVal[j-1] = temp;    
                           
    //                        temp = ids[j];
    //                        ids[j] = ids[j-1];
    //                        ids[j-1] = temp;
                           
    //                        document.getElementById(ids[j]).style.transform = `translateX(${j*35}px)`;

    //                        document.getElementById(ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;
                           
    //                     }
    //                  // }, (count+flag)*1);
    //                  }, 100);
    //                     
    //               }, (count+flag)*2000);

    //         }
         
         
    //   }
      
    //   setTimeout(() => {
    //      // dispatch({
    //      //    type:'PLAY_PAUSE',
    //      //    play: false
    //      // })

    //   //    dispatch({
    //   //       type:'UPDATE_COLOR',
    //   //       // GREEN COLOR ON SUCCESS
    //   //       // color: 'rgb(0, 182, 0)'
    //   //       color: '#51a954'
    //   //       // color: 'green'
    //   //    })
    //      console.log("KHATAM TATA BYE BYE GOOD BYE GAYA"); 

    //   },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.sortingSpeed+50);

    
    for(let i = 0; i < arrVal.length-1; i++){
        let ind = i+1;

        while(ind>0 && arrVal[ind]<arrVal[ind-1]){

           let j = ind;

           let temp = arrVal[j];
           arrVal[j] = arrVal[j-1];
           arrVal[j-1] = temp;

           temp = ids[j];
           ids[j] = ids[j-1];
           ids[j-1] = temp;

           let new_ids = [...ids];
           
                    
           
           setTimeout(() => {
            document.getElementById(ids[j]).childNodes[1].style.backgroundColor = ' black';
            document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = ' black';
              document.getElementById(new_ids[j]).style.transform = `translateX(${j*35}px)`;
            //   document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = 'black';
              
              setTimeout(() => {
                 document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = myState.color;
               },10);
               setTimeout(() => {
                 document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = myState.sortingColor;
                 document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
                  //                     // }, (count+flag)*5);
               }, 1000);
               document.getElementById(new_ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;  
               // document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = 'black';
           },timer*2000);

           timer++;
           ind--;
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
   }
    
   }
useEffect(() => {
    if(myState.sortingAlgorithm==='insertion'){
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
      {/* {isPreviewShown && <InsertionCode code={CppCode} language="cpp"/>} */}
      {isPreviewShown && <InsertionCode/>}
      {isPreviewShown && <InsertionComplexity/>}
   </>
   );
}


export default InsertionSort;


/*

import React,{useEffect, useState} from 'react';---
import { useDispatch, useSelector } from 'react-redux';-----

const InsertionSort = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();

   let values = myState.values.map((item) => item[0]);
   let ids = myState.values.map((item) => item[1]);
   let timer = 0;
   let total_time = 0;
   let timing_map = new Map();

   for(let i = 0; i < values.length; i++){
      let j = i+1;
      while(j>0 && values[j]<values[j-1]){
         let temp = values[j];
         values[j] = values[j-1];
         values[j-1] = temp;
         total_time++;
         j--;
      }
      timing_map.set(i+1,i+1-j);
   }

   values = myState.values.map((item) => item[0]);--------------------------------
   
   const solve = () => {
      
      for(let i = 0; i < values.length-1; i++){
            let ind = i+1;

            while(ind>0 && values[ind]<values[ind-1]){

               let j = ind;

               let temp = values[j];
               values[j] = values[j-1];
               values[j-1] = temp;

               temp = ids[j];
               ids[j] = ids[j-1];
               ids[j-1] = temp;

               let new_ids = [...ids];
               
               setTimeout(() => {
                  
                  document.getElementById(new_ids[j]).style.transform = `translateX(${j*11}px)`;
                  document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = 'black';
                  
                  setTimeout(() => {
                     document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = myState.color;
                  },myState.speed-10);
                  
                  document.getElementById(new_ids[j-1]).style.transform = `translateX(${(j-1)*11}px)`;  
               },timer*myState.speed);

               timer++;
               ind--;
            }
      }--------------------------
      
      setTimeout(() => {
         dispatch({
            type:'PLAY_PAUSE',
            _play:false
         })

         dispatch({
            type:'UPDATE_COLOR',
            color: 'rgb(0, 182, 0)'
         })
      },(total_time+1)*myState.speed+50);
   }
   
   useEffect(() => {
      if(myState.algorithm==='insertion'){
         if(myState.play)
            solve();
      }
   },[myState.play]);

   return <></>;
}

export default InsertionSort;*/