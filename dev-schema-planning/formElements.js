export const elements = {
  input: {
    component: "Input",
    title: "First Name",
    name: "first_name",
    defaultValue: "John Doe",
    helpText: "this is tooltip or help text",
    rules: 'required|min:5|max:10',
    props: { 
      placeholder: "Enter your name",
      prefix: "ProfileOutline",
      style: {
        backgroundColor: "blue",
        borderColor: "gray"
      }
    }
  },
  textarea: {
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
  password: {
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
  inputNumber: {
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
  select: {
    component: "Select",
    title: "Select your country",
    name: "country",
    defaultValue: "demo",
    props: {
      options: [
        {
          "label": "demo",
          "value": "demo"
        },
        {
          "label": "demo2",
          "value": "demo2"
        }
      ]
    }
  },
  alert: {
    component: "Alert",
    props: {
      title: "Alert title",
      description: "Alert description",
      style: {
        backgroundColor: "blue",
        borderColor: "gray"
      }
    }
  },
  checkBox: {
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
  radio: {
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

  datePicker: {
    component: "DatePicker",
    label: "yo datepicker",
    name: "datepicker",
    defaultValue: "2015/01/01",
    props: {
      format: "YYYY/MM/DD",
      size: "large",
    }
  },
  rangePicker: {
    component: "RangePicker",
    label: "yo RangePicker",
    name: "RangePicker",
    defaultValue: "2015/01/01",
    props: {
      format: "YYYY/MM/DD",
      size: "large",
    }
  },

  switch: {
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
  upload: {
    component: "Upload",
    buttonText: "upload image",
    icon: "Upload",
    props: {
      accept: "image/*",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", //upload url
    }
  },
  typography: {
    component: "Typography",
    type: "h3", // h1, h2, h3, h4, h5, h6, p
    content: "yo typography",
    props: {
      style: {
        color: "blue"
      }
    }
  },
  button: {
    component: "Button",
    type: "primary", // primary, ghost, dashed, link, text, default
    content: "Submit"
  },
  slider: {
    component: "Slider",
    label: "yo slider",
    name: "slider",
    defaultValue: 30,
    props: {
      min: 1,
      max: 100,
      size: "large",
    }
  },
}