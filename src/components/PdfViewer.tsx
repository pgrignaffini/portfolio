import * as React from 'react';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PdfViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer fileUrl="https://drive.google.com/file/d/1KEMn9R-UtA-xz8WATnYYs5LJqTzeXB57/view?usp=sharing" plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>
    );
};

export default PdfViewer;