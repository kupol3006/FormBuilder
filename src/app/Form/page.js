'use client';
import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import formBuilder from 'formBuilder';

export default function FormPage() {
  const formRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure jQuery UI sortable is loaded
      import('jquery-ui/ui/widgets/sortable').then(() => {
        // Initialize formBuilder on the hardcoded form
        const formData = $('#rendered-form').formBuilder({
          disableFields: ['autocomplete'], // Customize as needed
        });

        // Handle form submission
        $('#submit-btn').on('click', function () {
          const formDataJSON = formData.actions.getData('json');
          console.log('Form Data:', formDataJSON);
          // You can also send formDataJSON to your server or handle it as needed
        });
      }).catch((error) => {
        console.error("Error loading jQuery UI sortable:", error);
      });
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sample Form</h2>
      <div id="rendered-form" className="rendered-form formbuilder-embedded-bootstrap">
        <div className="formbuilder-textarea form-group field-textarea-1492616908223">
          <label htmlFor="textarea-1492616908223" className="formbuilder-textarea-label">
            Text Area
          </label>
          <textarea
            className="form-control"
            name="textarea-1492616908223"
            id="textarea-1492616908223"
          ></textarea>
        </div>

        <div className="formbuilder-select form-group field-select-1492616913781">
          <label htmlFor="select-1492616913781" className="formbuilder-select-label">
            Select
          </label>
          <select
            className="form-control"
            name="select-1492616913781"
            id="select-1492616913781"
          >
            <option value="option-1" id="select-1492616913781-0">
              Option 1
            </option>
            <option value="option-2" id="select-1492616913781-1">
              Option 2
            </option>
            <option value="option-3" id="select-1492616913781-2">
              Option 3
            </option>
          </select>
        </div>

        <div className="formbuilder-checkbox-group form-group field-checkbox-group-1492616915392">
          <label htmlFor="checkbox-group-1492616915392" className="formbuilder-checkbox-group-label">
            Checkbox Group
          </label>
          <div className="checkbox-group">
            <div className="formbuilder-checkbox">
              <input
                name="checkbox-group-1492616915392[]"
                id="checkbox-group-1492616915392-0"
                value="option-1"
                type="checkbox"
                checked
              />
              <label htmlFor="checkbox-group-1492616915392-0">Option 1</label>
            </div>
          </div>
        </div>
      </div>
      <button id="submit-btn" className="btn btn-primary mt-3">
        Submit
      </button>
    </div>
  );
}