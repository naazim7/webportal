import React from 'react'
import NoticeBoard from './NoticeBoard'
import NewsBoard from './NewsBoard'

function NoticeNews() {
    return (
        <>
        <div className='container'>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>

             <NoticeBoard/>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                 <NewsBoard/>

   </div>
            </div>

        </div>
        
        </>
    )
}

export default NoticeNews
