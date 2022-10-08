import {useState} from 'react'
import './Product.scss'
import Lightbox from 'react-image-lightbox';
import snicker1 from '../../assets/images/snicker1.jpg'
import snicker2 from '../../assets/images/snicker2.jpg'
import snicker3 from '../../assets/images/snicker3.jpg'
import snicker4 from '../../assets/images/snicker4.jpg'

const images = [
    snicker1,
    snicker2,
    snicker3,
    snicker4
  ];

const Product = () => {
    const [currentUpImg, setCurrentUpImg] = useState(snicker1)
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex,setPhotoIndex] = useState(0)

    const handleClickPreviewImg = () => {
        setIsOpen(true)
        let index = images.findIndex(item => item === currentUpImg)
        setPhotoIndex(index)
        setIsOpen(true)
    }
  return (
<div>
    <div className="product-container">
        <div className="content-left">
          <div className="img-up">
               <img src={currentUpImg} onClick={()=> handleClickPreviewImg()}/>
          </div>
          <div className="img-down">
            <div className="img-small">
               <img src={snicker1}onClick={()=>setCurrentUpImg(snicker1)} className = {currentUpImg=== snicker1 ? "active":""}/>

            </div>
            <div className="img-small">
               <img src={snicker2}onClick={()=>setCurrentUpImg(snicker2)} className = {currentUpImg=== snicker2 ? "active":""}/>

            </div>
            <div className="img-small">
               <img src={snicker3}onClick={()=>setCurrentUpImg(snicker3)} className = {currentUpImg=== snicker3 ? "active":""}/>

            </div>
            <div className="img-small">
               <img src={snicker4}onClick={()=>setCurrentUpImg(snicker4)} className = {currentUpImg=== snicker4 ? "active":""}/>

            </div>
          </div>
        </div>
        <div className="content-right">
           <div className="title">
           Mont Blanc, maastojuoksukengät miehet, Oranssi

           </div>
           <div className="price">
           110€
           </div>
           <div className="size">Size: 40</div>
           <div className="action">
               <label className='quatity'>quantity</label>
               <input type="number" min={1} value={1}/>
               <button className='buy'>+Buy</button>
            </div>
        </div>
    </div>
    {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            animationDuration = {500}
          />
        )}
</div>
  )
}

export default Product