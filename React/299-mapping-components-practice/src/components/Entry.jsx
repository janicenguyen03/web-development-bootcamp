import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function createBlock(info) {
    return <Emoji
        key={info.id}
        id={info.id}
        emoji={info.emoji}
        name={info.name}
        meaning={info.meaning}
    />
}

function Entry() {
    return (
        <div>
            <dl className="dictionary">
                {emojipedia.map(createBlock)};
            </dl>
        </div>
    ) 
}

export default Entry;