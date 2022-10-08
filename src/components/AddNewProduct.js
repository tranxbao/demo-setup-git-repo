import React, {useState} from 'react'


const AddNewProduct = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
    const [size,setSize] = useState(0)
    const [color,setColor] = useState("")

    const [isShow,setIsShow] = useState(false)

    const handleClickBtn = ()=>{
        let object = {
            name,price,size,color
        } // dieu kien ten key giong value
       let productList = localStorage.getItem("productList")
       if(productList){
         let arr = JSON.parse(productList);
         arr.push(object)
         localStorage.setItem("productList",JSON.stringify(arr))
        }else{
          localStorage.setItem("productList", JSON.stringify([object]))
        }
        setName("")
        setPrice(0)
        setSize(0)
        setColor("")
      }

    const handleIsShow = () =>{
     setIsShow(!isShow)
    }

    
  return (
    <div>
    { isShow === true &&
      <fieldset>
        <legend>
        AddNewProduct
        </legend>
        <div className="input-product">
            <label>Name:</label>
            <input value={name} type="text" onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="input-product">
            <label>Price:</label>
            <input value={price} type="text" onChange={(event)=> setPrice(event.target.value)} />
        </div>
        <div className="input-product">
            <label>Size:</label>
            <input value={size} onChange={(event)=> setSize(event.target.value)} />
        </div>
        <div className="input-product">
            <label>Color:</label>
            <input value={color}  onChange={(event)=> setColor(event.target.value)} />
        </div>
        <div>
            <button onClick={()=>handleClickBtn()}>
                Add Product
            </button>
        </div>
      </fieldset>
      } 
      {isShow === true ? 
        <div onClick={()=> {handleIsShow()}}>Hide this form</div> 
      : <div onClick={()=> {handleIsShow()}}>Show this form</div>
      }
      
      <div>
        List Products:
        <div>
          {localStorage.getItem("productList")}
        </div>
      </div>
     
    </div>
  )
}

export default AddNewProduct