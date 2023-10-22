import Image from 'next/image';
import React,{useState} from 'react'
import {AiOutlineHeart,AiOutlineShoppingCart,AiFillStar,AiOutlineStar} from 'react-icons/ai';

interface IProduct {
    id:number;
    img:string;
    name: string;
    price:number;
    sale: boolean | undefined;
}


const ProductCard = ({id, img, name, price,sale}:IProduct) => {
    const [addProductToCart,setAddtoCart] = useState(0);
 
    const getRating = () => {
        const randomNumber = (min: number,max:number) => {
            return Math.ceil(Math.random() * (max-min) + min);
        };

        switch(randomNumber(0,5)) {
            case 0:
                return (
                    <div className='flex justify-center text-accent pt-4 pb-2'>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
                break;
                case 1:
                    return (
                        <div className='flex justify-center text-accent pt-4 pb-2'>
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </div>
                    );
                    break;
                    case 2:
                        return (
                            <div className='flex justify-center text-accent pt-4 pb-2'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </div>
                        );
                        break;
                        case 3:
                            return (
                                <div className='flex justify-center text-accent pt-4 pb-2'>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                            );
                            break;
                            case 4:
                                return (
                                    <div className='flex justify-center text-accent pt-4 pb-2'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiOutlineStar />
                                    </div>
                                );
                                break;
                                case 5:
                                return (
                                    <div className='flex justify-center text-accent pt-4 pb-2'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                );
                                break;

                default:
                    return <div></div>
        }
    };
 
    return (
    <div className='group cursor-pointer'>
        <div className='relative'>
<Image src={img} alt={name} className='w-full' width={1000} height={1142} />
{
    sale && (<div className='gb-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4'>Sale</div>)
}        
        
        <div className='absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer'>
            <div className='absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2'>
                <div className='bg-white w-[50px] h-[50px] text-[26px] grid place-content-center'>
                    <AiOutlineHeart/>
                </div>
                <div className='bg-white w-[50px] h-[50px] text-[26px] grid place-content-center' onClick={addProductToCart}
                >
                    <AiOutlineShoppingCart/>
                </div>
            </div>
        </div> 
        </div>
{
   getRating() 
}

<h2 className='font-medium pb-3 hover:text-accent'>{name}</h2>
<p className='text-gray-600 font-light'>${price}.00</p>

    </div>
  )
}

export default ProductCard