'use client';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  const [data, setData] = useState(null);
    

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
              controlPosition: 'left'
            };

            const formBuilder = $('#fb-editor').formBuilder(options);
            formBuilder.actions.setLang('en');

            document.getElementById('getXML').addEventListener('click', function() {
              alert(formBuilder.actions.getData('xml'));
            });
            document.getElementById('getJSON').addEventListener('click', function() {
              alert(formBuilder.actions.getData('json'));
            });
            document.getElementById('getJS').addEventListener('click', function() {
              alert('check console');
              console.log(formBuilder.actions.getData());
              setData(formBuilder.actions.getData());
            });
          });
        } else {
          console.error("jQuery is not loaded properly.");
        }
      }).catch((error) => {
        console.error("Error loading dependencies:", error);
      });
    }
  }, [data]);

  return (
    <div>
      <div id="fb-editor"></div>
      <Button variant="contained" color="primary" id="getXML">Get XML</Button>
      <Button variant="contained" color="secondary" id="getJSON">Get JSON</Button>
      <Button variant="contained" color="success" id="getJS">Get JS</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}