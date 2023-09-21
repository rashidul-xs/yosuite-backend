let form = {
  submissionUrl: "https://jsonplaceholder.typicode.com/posts",
  elements: [
    {
      component: "Row",
      props: {
        gutter: 5 // space between columns
      },
      childElements: [
        {
          component: "Col",
          size: 12,
          childElements: [
            {
              component: "Checkbox",
              label: "yo checkbox",
              name: "checkbox",
              defaultValue: ['Pear'],
              props: {
                disabled: true,
                options: [
                  {
                    label: 'Apple',
                    value: 'apple',
                    disabled: true,
                  },
                  {
                    label: 'Pear',
                    value: 'pear',
                  },
                  {
                    label: 'Orange',
                    value: 'orange',
                    disabled: false,
                  },
                ]
              }
            },
            {
              component: "Radio",
              label: "yo radio",
              name: "radio",
              defaultValue: 'Pear',
              props: {
                disabled: true,
                options: [
                  {
                    label: 'Apple',
                    value: 'apple',
                    disabled: true,
                  },
                  {
                    label: 'Pear',
                    value: 'pear',
                  },
                  {
                    label: 'Orange',
                    value: 'orange',
                    disabled: false,
                  },
                ]
              }
            },
            {
              component: "Input",
              label: "yo input",
              name: "input",
              defaultValue: defaultValue,
              props: {
                placeholder: "yo input",
                size: "large",
                prefix: "prefix",
                allowClear: true, // show clear button
                style: {
                  width: "100%"
                }

              }
            },
            {
              component: "TextArea",
              label: "yo textarea",
              name: "textarea",
              defaultValue: defaultValue,
              props: {
                placeholder: "yo textarea",
                rows: 4,
                style: {
                  width: "100%"
                }

              }
            },
            {
              component: "Password",
              label: "yo password",
              name: "password",
              props: {
                placeholder: "yo textarea",
                allowClear: true, // show clear button
                style: {
                  width: "100%"
                }

              }
            },
            {
              component: "Select",
              label: "yo select",
              name: "select",
              defaultValue: "lucy",
              props: {
                options: [
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ],
                placeholder: "yo select",
                style: { width: 120 },
                allowClear: true, // show clear button
                size: "small",
                mode: "multiple", // multiple select mode
                showSearch: true, // user can search for options
              }
            },
            {
              component: "DatePicker",
              label: "yo datepicker",
              name: "datepicker",
              defaultValue: "2015/01/01",
              props: {
                format: "YYYY/MM/DD",
                size: "large",
              }
            },
            {
              component: "RangePicker",
              label: "yo RangePicker",
              name: "RangePicker",
              defaultValue: "2015/01/01",
              props: {
                format: "YYYY/MM/DD",
                size: "large",
              }
            },
            {
              component: "InputNumber",
              label: "yo InputNumber",
              name: "InputNumber",
              defaultValue: 3,
              props: {
                min: 1,
                max: 10,
                size: "large",
              }
            },
            {
              component: "Switch",
              label: "yo Switch",
              name: "Switch",
              defaultValue: true,
              props: {
                checkedChildren: "0",
                unCheckedChildren: "1",
                size: "large",
              }
            },
            {
              component: "Alert",
              props: {
                message: "yo alert",
                type: "warning",
                closable: true
              }
            },
            {
              component: "Title",
              content: "yo title",
              props: {
                level: 3
              }
            },
            {
              component: "Text",
              content: "yo text",
              props: {
                level: 3
              }
            },
            {
              component: "Upload",
              buttonText: "upload image",
              icon: "Upload",
              props: {
                accept: "image/*",
                action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", //upload url
              }
            },
          ]
        }
      ]
    }
  ]
}
