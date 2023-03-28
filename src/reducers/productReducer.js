export default function productReducer(productState, action) {
  switch(action.type) {
    case 'DELETE_PRODUCT':
      //let filderedArr = productState.filter(product=>(product.id !==action.id))
      //or
      let filteredArr = productState.filter(product => (product.id === action.id) ? false : true)
      return filteredArr
      case 'EDIT_PRODUCT':
        //modify the one object matching the id with the object action.data
        let productCopy = productState.map(product => product.id===action.data.id ? action.data : product)

        return productCopy
    default:
      return productState;
  }
}
