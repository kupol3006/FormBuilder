'use client';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PublishIcon from '@mui/icons-material/Publish';
import { setData } from './redux/slices/formSlice';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  // const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleOpenPreview = () => {
      // Handle preview action
  };

  const handleOpenPublish = () => {
      // Handle publish action
  };
    

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('jquery').then(($) => {
        window.$ = window.jQuery = $;
        return import('jquery-ui/ui/widgets/sortable');
      }).then(() => {
        return import('formBuilder');
      }).then(() => {
        return import('formBuilder/dist/form-render.min.js');
      }).then(() => {
        if (typeof $ === 'function') {
          $(function() {
            console.log("jQuery is ready!");
  
            const options = {
              showActionButtons: false,
              controlPosition: 'right',
              fieldRemoveWarn: true,
              scrollToFieldOnAdd: true,
              sortableControls: true,
              stickyControls: {
                  enable: true,
                  offset: {
                      top: 20,
                      right: 20,
                      left: 'auto'
                  }
                },
            };
  
            const formBuilder = $('#fb-editor').formBuilder(options);
            console.log("formBuilder initialized:", formBuilder);
            formBuilder.actions.setLang('en');
  
            document.getElementById('getXML').addEventListener('click', function() {
              dispatch(setData(formBuilder.actions.getData('xml')));
              alert(formBuilder.actions.getData('xml'));
              router.push('/Form');
            });
          });
          // Add Bootstrap classes to form elements
          $('#rendered-form').addClass('formbuilder-embedded-bootstrap');
          $('#rendered-form .form-control').addClass('mb-3');
          $('#rendered-form .btn').addClass('btn-primary');
          $('#rendered-form .form-group').addClass('mb-3');
          $('#rendered-form .form-check-input').addClass('mb-3');
          $('#rendered-form .form-check-label').addClass('form-check-label');
          $('#rendered-form .form-select').addClass('mb-3');
          $('#rendered-form .form-label').addClass('mb-3');
          $('#rendered-form .input-group').addClass('mb-3');
          $('#rendered-form .input-group-text').addClass('mb-3');
          $('#rendered-form .form-floating').addClass('mb-3');
          $('#rendered-form .form-range').addClass('mb-3');
          $('#rendered-form .form-switch').addClass('mb-3');
          $('#rendered-form .form-text').addClass('mb-3');
          $('#rendered-form .form-file').addClass('mb-3');
          $('#rendered-form .form-control-plaintext').addClass('mb-3');
          $('#rendered-form .form-control-sm').addClass('mb-3');
          $('#rendered-form .form-control-lg').addClass('mb-3');
          $('#rendered-form textarea').addClass('form-control mb-3');
          $('#rendered-form label').addClass('form-label');
        } else {
          console.error("jQuery is not loaded properly.");
        }
      }).catch((error) => {
        console.error("Error loading dependencies:", error);
      });
    }
  }, []);

  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-[1200px] flex flex-col'>
      <div className="h-[8%] flex justify-between items-center px-0 py-1 border-[1px]">
            <IconButton
                onClick={() => router.push('/Dashboard')}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px]"
            >
                <ArrowBackIcon />
            </IconButton>
            <div className="flex">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px]"
                    id="getXML"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Preview
                </button>
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px]"
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"></path>
                        <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2h-8v-5z"></path>
                    </svg>
                    Save
                </button>
                <button
                    className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-bold py-1 px-2 rounded-md shadow-xl flex items-center"
                    onClick={handleOpenPublish}
                >
                    <PublishIcon className="h-5 w-5 mr-2" />
                    Publish
                </button>
            </div>
        </div>
        <div id="fb-editor"></div>
        {/* <Button variant="contained" color="primary" id="getXML">Get XML</Button> */}
        {/* <Button variant="contained" color="secondary" id="getJSON">Get JSON</Button> */}
        {/* <Button variant="contained" color="success" id="getJS">Get JS</Button> */}
      </div>
    </div>
  );
}