require('dotenv').config();

const {response} = require('express');
const axios = require('axios').default;

const author = {
    name: 'Gustavo',
    lastname: "Urzola",
}

const getItems = (req, res = response) => {

    axios.get(`${ process.env.API_MELI_URL }/sites/MLA/search?q=${ encodeURI(req.query.q) }&limit=4`)
    .then((response) => {

        const categories = response.data.filters
            .find( filter => filter.id = 'category')
            .values.map( category => category)[0]
            .path_from_root.map( path => path.name );

        res.json({
            ok: true,
            data: {
                author,
                categories,
                items: response.data.results.map( product => (
                    {
                        id: product.id,
                        title: product.title,
                        price: {
                            currency: product.currency_id, 
                            amount: product.price, 
                            decimals: 0
                        },
                        picture: product.thumbnail,
                        condition: product.condition,
                        free_shipping: product.shipping.free_shipping
                    }
                ))
            }   
        });
    })
    .catch((error) => {
        return res.json({ok:false, data:{}});
    })
}

const getItemById = (req, res = response) => {

    axios.get(`${ process.env.API_MELI_URL }/items/${ req.params.id }`)
    .then( response => {

        axios.get(`${ process.env.API_MELI_URL }/items/${ req.params.id }/description`)
        .then( ({ data }) => {

            console.log(data);

            res.json({
                ok: true,
                data: {
                    author,
                    item: {
                        id: response.data.id,
                        title: response.data.title,
                        price: {
                            currency: response.data.currency_id, 
                            amount: response.data.price, 
                            decimals: ( response.data.price.toString().indexOf('.') > 0 )? 
                                        response.data.price.toString().split('.')[1]: '00',
                        },
                        picture: response.data.pictures[0].url, 
                        condition: response.data.condition, 
                        free_shipping: response.data.shipping.free_shipping,
                        sold_quantity: response.data.sold_quantity, 
                        description: data.plain_text
                    }
                }   
            });
        }).catch(error => {
            return res.json({ok:false, data:{}});
        })

    })
    .catch(error => {
        return res.json({ok:false, data:{}});
    })
}

module.exports = {
    getItems,
    getItemById
}