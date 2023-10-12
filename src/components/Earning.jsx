import {HiOutlineCurrencyDollar} from 'react-icons/hi2'

const Earning = ()=>{
    return(
        <div className="border border-black w-1/5 bg-white rounded-md h-1/5 justify-center flex items-center p-[5px]" >
        <section className=" w-1/2 h-full p-[5px] flex justify-center items-center">
            <div className='bg-green-200 w-[100px] h-[100px] rounded-[50%] flex justify-center items-center'>
            <HiOutlineCurrencyDollar className='w-[75%] h-[75%] text-green-700'/>
            </div>
        </section>
        <section>
            <h4 className='text-gray-400 text-sm'>Earning</h4>
            <h3 className='text-xl font-bold text-gray-700'>$128k</h3>
            <div>
                <img src="" alt="" />
                <span className='text-sm text-green-500 font-bold'>20%</span>
                <span className='text-sm font-bold text-slate-400'>this month</span>
            </div>
        </section>
        </div>
    );
}

export default Earning;