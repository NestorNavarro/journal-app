import React from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from './Sidebar';
import { NothingSelecter } from './NothingSelecter';
import { NoteScreen } from '../notes/NoteScreen';

export const JournalScreen = () => {
    const { active } = useSelector(state => state.notes); 
    return (
        <div className="journal__main-conter"> 
            <Sidebar />
  
            <main>
                {
                    (active)
                        ? (<NoteScreen />)
                        : (<NothingSelecter />)
                }        
            </main>
        </div>
    );
}
