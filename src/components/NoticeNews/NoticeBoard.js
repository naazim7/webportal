import Link from 'next/link'
import React from 'react'
import { CiBellOn } from "react-icons/ci";
function NoticeBoard() {
    return (
        <div className='card'>
            <div className='CustomContainer text-center p-1 text-white'><h3>Notice Board</h3></div>
            <div className='p-2'>

                <div className='border border-secondary m-1 p-1'>
                    <Link href='/'><CiBellOn />Release Order/GO Letter for Dr. Nowshed, Professor, Department of CSE, University of Chittagong</Link>

                </div>
                <div className='border border-secondary m-1 p-1'>
                    <Link href='/'><CiBellOn />6th Semester exam will be held on 7th May</Link>

                </div>
                <div className='border border-secondary m-1 p-1'>
                    <Link href='/'><CiBellOn />Lab Exam of 5th Semester wil be start from 20th April</Link>

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

export default NoticeBoard
