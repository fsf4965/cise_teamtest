import React from 'react';
import '../App.css';

const entryCard = (props) => {
    const  entry  = props.entry;

    return(
        <div className="">
            <div className="">
                <p>{entry.title},{entry.author},{entry.journal},{entry.year},{entry.eprint},{entry.eprinttype},{entry.eprintclass},{entry.pages},{entry.month},{entry.annote}.</p>
            </div>
        </div>
    )
};

export default entryCard;
