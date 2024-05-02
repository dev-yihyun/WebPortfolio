import React from "react";
import { EmojiBlock } from "../ui/Image";
import { IndexText, IndexTitle } from "../ui/Text";


function IndexBlock() {
    return (<>
        <div className="Area1">
            <div className="IndexLeft">
                <EmojiBlock/>
            </div>
            <div className="IndexRight IndexAni">
                <IndexTitle/>
                <IndexText/>
            </div>
        </div>

    </>)
}
export default IndexBlock;