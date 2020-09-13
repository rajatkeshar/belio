module.exports = {
    name: 'clinicusers',
    fields: [
      {
        name: 'clinicId',
        type: 'String',
        length: 256,
        index: true,
      },
      {
        name: 'loginEmail',
        type: 'String',
        length: 256,
        index: true
      },
      {
        name: 'userEmail',
        type: 'String',
        length: 256,
        index: true
      },
      {
        name: 'role',
        type: 'String',
        length: 256
      },
      {
        name: 'status',
        type: 'String',
        length: 25,
        default: "active",
        enum: ["active", "inactive"]
      },
      {
        name: 'cOn',
        type: 'Number'
      },
      {
        name: 'mOn',
        type: 'Number'
      },
      {
        name: 'transactionId',
        length: 256,
        type: "String"
      }
    ]
  }
