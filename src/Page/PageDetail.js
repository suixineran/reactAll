import React from 'react'

function PageDetail(props) {
    // console.log(props)
    return (
        <div>
            <div> 我是PageDetail</div>
            <h2>{props.match.path}</h2>
            {/*<h2>{props.match.url}</h2>*/}
            {/*<h2>{props.match.params.id}</h2>*/}
        </div>
    )
}
export default PageDetail