import fetch from 'node-fetch'

export async function getProduct(id) {
  const url = `${ process.env.PROTOCOL_MERCADO_LIBRE_API }://${ process.env.HOST_MERCADO_LIBRE_API }:${ process.env.PORT_MERCADO_LIBRE_API }/api/items/${id}`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  return data;
}

export async function getProducts(search) {
  const url = `${ process.env.PROTOCOL_MERCADO_LIBRE_API }://${ process.env.HOST_MERCADO_LIBRE_API }:${ process.env.PORT_MERCADO_LIBRE_API }/api/items?q=${search}`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  return data;
}