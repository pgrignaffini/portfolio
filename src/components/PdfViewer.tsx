import * as React from 'react';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { motion } from 'framer-motion'


const PdfViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
    min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Curriculum vitae</h3>
            <div className='pt-24'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                    <div
                        style={{
                            height: '750px',
                            width: '900px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        <Viewer theme="dark" fileUrl="/main.pdf" plugins={[defaultLayoutPluginInstance]} />
                    </div>
                </Worker>
            </div>
        </motion.div>
    );
};

export default PdfViewer;