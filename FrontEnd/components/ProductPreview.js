import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import Link from 'next/link'

const ProductPreview = ({ product }) => {

    const styleImageProduct = { backgroundImage: `url(${product.picture})` }
    const shippingButton = <img src='/images/icons/ic_shipping.png' srcSet={'/images/icons/ic_shipping@2x.png 2x'} alt="Buscar productos" />;

    return (
        <Link href={`/items/${ product.id }`}>
            <div className='product__preview-box animate__animated animate__fadeIn'>
                <div className='product__info'>
                    <div style={ styleImageProduct } className='product__picture_box'></div>
                    <div>
                        <div className='product__price-box'>
                            <div className='product__price'>
                                <NumberFormat displayType={'text'} value={ Math.trunc(product.price.amount) } thousandSeparator={true} prefix={'$'}/>
                            </div>    
                            { product.free_shipping && shippingButton }
                        </div>
                        <div className='product__tittle'>{ product.title }</div>
                    </div>
                </div>
                <div className="product__ciudad">
                    Ciudad
                </div>
            </div>
        </Link>
    )
}

ProductPreview.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductPreview
