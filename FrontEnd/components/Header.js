import React from 'react'
import PropTypes from 'prop-types'
import InputGroup from './shared/InputGroup';

const Header = ({ setSearch }) => {

    const images = {
        logo: '/images/logo_ml.png',
        logo2x: '/images/logo_ml@2x.png 2x',
        iconSearch: '/images/Assets/ic_search.png',
        iconSearch2x: '/images/Assets/ic_search@2x.png 2x'
    }

    return (
        <div className="finder__header">
            <div className="base__container">
                <div className="finder__search-box">
                    <img srcSet={ images.logo2x } src={ images.logo } alt="MercadoLibre"></img>
                    <InputGroup setValue={ setSearch } icon={ images.iconSearch } icon2x={ images.iconSearch2x } />
                </div>
            </div>
        </div>
        
    )
}

Header.propTypes = {
    setSearch: PropTypes.func.isRequired
}

export default Header
