import React from 'react';
import Qzonepic1 from '../../../assets/qZone1.png';
import Qzonepic2 from '../../../assets/qZone2.png';
import Qzonepic3 from '../../../assets/qZone3.png';
const Qzone = () => {
    return ( <>
        <div className='bg-light  mt-4 ' >
           <h4 className='p-2'>Q-Zone</h4>
          <div className='text-center'>
          <img  src={Qzonepic1} alt="" />
           <img  src={Qzonepic2} alt="" />
           <img  src={Qzonepic3} alt="" />
          </div>
        </div>
        </>
    );
};

export default Qzone;