// write your CatList component here
import { render } from "enzyme"
import React from "react"

const CatList = ({catPics})=> {

    const renderCats = catPics.map(cat =>  <div key={cat.id}><img src={cat.url}/></div>)

    return (
        <div>
            {renderCats}
        </div>
    )

}

export default CatList