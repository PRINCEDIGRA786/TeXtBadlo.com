
const reducee=(state=new Array(),action)=>{
    if(action.type=='addtoCart'){
        let cartproduct={id:action.payload}
        return [...state,cartproduct]
        // return state.push(action.payload)
    }
    else{
        return state
    }
}
export default reducee;