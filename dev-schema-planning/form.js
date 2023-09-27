import { elements } from "./formElements";

let form = {
  submissionUrl: "https://jsonplaceholder.typicode.com/posts",
  method: "POST",
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
            elements.input
          ]
        },
        {
          component: "Col",
          size: 12,
          childElements: [
            elements.select
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
            elements.alert
          ]
        }
      ]
    },
  ],
  validationMessages: {}
}