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
              component: "Input",
              title: "First Name",
              name: "first_name",
              defaultValue: "John Doe",
              helpText: "this is tooltip or help text",
              rules: 'required|min:5|max:10',
              props: { // supported props for component
                placeholder: "Enter your name",
                prefix: "ProfileOutline",
                style: {
                  backgroundColor: "blue",
                  borderColor: "gray"
                }
              }
            }
          ]
        },
        {
          component: "Col",
          size: 12,
          childElements: [
            {
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
            }
          ]
        }
      ]
    },
    {
      component: "Row",
      props: {
        gutter: 5 // space between columns
      },
      childElements: [
        {
          component: "Col",
          size: 24,
          childElements: [
            {
              component: "Alert",
              props: { // supported props for component
                title: "Alert title",
                description: "Alert description",
                style: {
                  backgroundColor: "blue",
                  borderColor: "gray"
                }
              }
            }
          ]
        }
      ]
    },
  ],
  validationMessages: {}
}