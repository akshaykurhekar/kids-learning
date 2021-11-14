import React, { useEffect, useState } from 'react';
import Puzzle from 'react-image-puzzle';
import Image from '../../../Data/FlowerImg/Bluebell.jpg'

const Index = () => {

const [str,setStr] = useState(" ");
// let str = " ";

    const patter = () =>{
           
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
            const start = '*';
                console.log("String" + str);
                // str = str.concat(" ",start);
                // console.log(start, str1);
                // setStr(str + start);
                setStr(prevState => [...prevState, '*'] );
            }            
        }
    };
    const Finish =  () =>{
        console.log("Good Job..!")
    }
    return (
        <div>
            <p onClick={patter}> Game 2</p>
            
            <Puzzle
            image={Image}
            onDone={Finish}
            size={300}
            level={3}
             />
        </div>
    );
};

export default Index;