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

            // Add Bootstrap classes to form elements
            $('#rendered-form').addClass('formbuilder-embedded-bootstrap');
            $('#rendered-form .form-control').addClass('mb-3');
            $('#rendered-form .btn').addClass('btn-primary');
            $('#rendered-form .form-group').addClass('mb-3');
            $('#rendered-form .form-check-input').addClass('mb-3');
            $('#rendered-form .form-check-label').addClass('mb-3');
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
    <div className="container mt-5">
      <textarea id="fb-template" ref={fbTemplateRef} style={{ display: 'none' }} defaultValue={data}></textarea>
      <div className="fb-render"></div>
    </div>
  );
}