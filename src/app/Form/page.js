'use client';
import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import formBuilder from 'formBuilder';
import { useSelector } from 'react-redux';

export default function FormPage() {
  const data = useSelector((state) => state.form.data);
  const fbTemplateRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && data) {
      $(function() {
        console.log("jQuery is ready!");

        $('.fb-render').formRender({
          dataType: 'xml',
          formData: data
        });
      });
    }
  }, [data]);

  return (
    <div>
      <textarea id="fb-template" ref={fbTemplateRef} style={{ display: 'none' }} value={data}></textarea>
      <div className="fb-render"></div>
    </div>
  );
}