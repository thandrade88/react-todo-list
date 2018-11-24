import React from 'react'
import If from '../template/if'


export default props => (
    <If test={!props.hide}>
        <button className={'mx-1 btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>

)