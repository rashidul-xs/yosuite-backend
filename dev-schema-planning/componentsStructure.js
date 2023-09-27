const structures = {
  InformationCard: {
    title: 'Basic Information',
    icon: 'ProfileFill',
    cols: 3,
    styles: {
      marginBottom: 24,
      backgroundColor: '#fff',
    },
    actions: [
      {
        label: 'Edit',
        icon: 'Edit',
        targetComponent: 'Form',
        placement: 'topRight'
      }
    ]
  },
  InformationTable: {
    title: 'Visa Information',
    icon: 'Certificate',
    styles: {
      backgroundColor: '#fff',
    },
    actions: [
      {
        label: 'Add New',
        icon: 'Edit',
        targetComponent: 'Form',
        placement: 'bottomRight'
      }
    ]
  },
}