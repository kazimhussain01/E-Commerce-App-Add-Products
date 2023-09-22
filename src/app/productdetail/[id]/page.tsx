export default function page ( {params} :  {params : {id : string}}) {
    return (
        <div>Product Details Page: {params.id}</div>
    )
}