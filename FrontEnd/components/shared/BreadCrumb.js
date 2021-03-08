import React from 'react'
import PropTypes from 'prop-types'

const BreadCrumb = ({ items }) => {
    const style = {
        breadcrumb: {
            alignItems: 'center',
            display: 'flex',
            height: '20px',
            padding: '10px 0'
        },
        breadcrumbItem:{
            paddingRight: '5px',
        },
        breadcrumbItemBold: {
            fontWeight: 'bold'
        }
    }
    return (
        <div>
            <div style={ style.breadcrumb} className="breadcrumb">
                { items.map( (item, index) => 
                    items.length > (index+1) ?
                    <span key={ item } style={ style.breadcrumbItem }> {item} {'>'} </span>:
                    <span key={ item } style={ style.breadcrumbItemBold }> {item} </span> 
                )}
            </div>
        </div>
    )
}

BreadCrumb.propTypes = {
    items: PropTypes.array.isRequired
}

export default BreadCrumb
