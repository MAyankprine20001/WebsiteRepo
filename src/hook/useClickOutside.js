import { useEffect } from 'react'

// This hook can be used for detecting clicks outside the Opened Menu
export function useClickOutside(ref, onClickOutside){
    useEffect(() => {
        function handleClickOutside(e) {
            if(ref.current && !ref.current.contains(e.target)) {
                onClickOutside();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.addEventListener("mousedown", handleClickOutside);
        }
    }, [ref, onClickOutside]);
}