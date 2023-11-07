const structures = {
  InformationCard: {
    title: 'Basic Information',
    icon: 'ProfileFill',
    cols: 3,
    style: {
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
    style: {
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