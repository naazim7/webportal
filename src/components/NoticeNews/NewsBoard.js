import Link from 'next/link'
import React from 'react'
import { CiBellOn } from "react-icons/ci";
function NewsBoard() {
    return (
        <div className='card'>
        <div className='CustomContainer text-center p-1 text-white'><h3>News Board</h3></div>
        <div className='p-2'>

            <div className='border border-secondary m-1 p-1'>
                <Link href='/'><CiBellOn />Intra- Programming Contest Held On CSE Cu</Link>

            </div>
            <div className='border border-secondary m-1 p-1'>
                <Link href='/'><CiBellOn />Biggest Study Tour ever</Link>

            </div>
            <div className='border border-secondary m-1 p-1'>
                <Link href='/'><CiBellOn />Student of CSE CU Joined on Microsoft</Link>

            </div>

            
            <div className='border border-secondary m-1 p-1'>
                <Link href='/'><CiBellOn />Study tour 2024 will be held on 12th April</Link>

            </div>
            <div class="text-center">
<button type="button" class="btn btn-primary"><Link className='text-white' href='/'>View All Notices</Link></button>
</div>
        

        </div>

        
    </div>
    )
}

export default NewsBoard
