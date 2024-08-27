import { useEffect } from "react"

export function useOnclickOutside (ref , handler) {

    useEffect(()=>{
           
       const listener = (events) => {

        if(!ref.current || ref.current.contains(events.target)){
            return ;
        }else{
            handler(events);
        }

       }


        //add Event Listener

        document.addEventListener('mousedown' , listener);
        document.addEventListener('touchstart' , listener)


        return() => {
            document.removeEventListener('mousedown' , listener);
            document.removeEventListener('touchstart' , listener);
            
        }

    } , [ref , handler])



}