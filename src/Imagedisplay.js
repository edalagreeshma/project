let Imagedisplay=(props)=>{
    console.log(props.data)
    return(<div>
        <img src={props.data.productimage}alt="img"/>
        <div>{props.data.product_name}</div>
        <div>{props.data.productprice}</div>
        <div>{props.data.productrating}</div>
        <div>{props.data.productdescription}</div>
       

    </div>)
}
export default Imagedisplay