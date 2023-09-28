const structures = {
  InformationCard: {
    title: 'Basic Information',
    icon: 'ProfileFill',
    cols: 3,
    styles: {
      marginBottom: 24,
      backgroundColor: '#fff',
    },
    actionsButton: {
      label: 'Edit',
      icon: 'Edit',
      targetComponent: 'Form',
      placement: 'top'
    }
  },
  InformationTable: {
    title: 'Visa Information',
    icon: 'Certificate',
    styles: {
      backgroundColor: '#fff',
    },
    actionsButton: {
      label: 'Add New',
      icon: 'Plus',
      targetComponent: 'Form',
      placement: 'top'
    }
  },
}