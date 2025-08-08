import React from 'react';
import {motion} from 'framer-motion';
const Loader = (OgComponent) => { // Removed TypeScript type annotation for plain JSX
  return (
    <div>
      <OgComponent>
        <motion.div
        className='slide-in'
        initial={{scaleY:0}}
        animate={{scaleY:0}}
        exit={{scaleY:1}}
        transition={{duration:1,ease:[0.22, 1,0.36, 1]}}
        >

        </motion.div>
        <motion.div
        className='slide-in'
        initial={{scaleY:1}}
        animate={{scaleY:0}}
        exit={{scaleY:1}}
        transition={{duration:1,ease:[0.22, 1,0.36, 1]}}
        >

        </motion.div>
      </OgComponent>
    </div>
  );
};

export default Loader;