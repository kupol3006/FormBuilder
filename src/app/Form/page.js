'use client';
import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export default function FormPage() {
  const data = useSelector((state) => state.form.data);
  const fbTemplateRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && data) {
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

            $('.fb-render').formRender({
              dataType: 'xml',
              formData: data
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
      <textarea id="fb-template" ref={fbTemplateRef} style={{ display: 'none' }} defaultValue={data}></textarea>
      <div className="fb-render"></div>
    </div>
  );
}