const constants = require('./utils/constants.js');
const TransactionTypes = require('./utils/transaction-types.js');

module.exports = async function () {
  console.log('init belshare dapp')

  var contractObjects = {
      registerClinic: {
          type: TransactionTypes.REGISTER_CLINIC,
          name: "registerClinic",
          location: 'clinic.registerClinic'
      },
      initiateCovidCert: {
          type: TransactionTypes.INITIATE_COVID_CERT,
          name: "initiateCovidCert",
          location: 'patient.initiateCovidCert'
      },
      initiateVaccineCert: {
          type: TransactionTypes.INITIATE_VACCINE_CERT,
          name: "initiateVaccineCert",
          location: 'patient.initiateVaccineCert'
      },
      authorizedPatientRecord: {
          type: TransactionTypes.AUTHORIZED_PATIENT_RECORD,
          name: "authorizedPatientRecord",
          location: 'patient.authorizedPatientRecord'
      },
      approvedPatientRecord: {
          type: TransactionTypes.APPROVED_PATIENT_RECORD,
          name: "approvedPatientRecord",
          location: 'patient.approvedPatientRecord'
      },
      mapClinicUser: {
          type: TransactionTypes.MAP_USER,
          name: "mapClinicUser",
          location: 'clinic.mapClinicUser'
      },
      updateClinicUserStatus: {
          type: TransactionTypes.UPDATE_CLINIC_USER_STATUS,
          name: "updateClinicUserStatus",
          location: 'clinic.updateClinicUserStatus'
      },
      updateClinicMaster: {
          type: TransactionTypes.UPDATE_CLINIC_MASTER,
          name: "updateClinicMaster",
          location: 'clinic.updateClinicMaster'
      },
      updateClinicStatus: {
          type: TransactionTypes.UPDATE_CLINIC_STATUS,
          name: "updateClinicStatus",
          location: 'clinic.updateClinicStatus'
      },
      mapUsersLevel: {
          type: TransactionTypes.MAP_USER_LEVEL,
          name: "mapUsersLevel",
          location: 'clinic.mapUsersLevel'
      }
  }
  console.log("app: ", app.contract);
  for(i in contractObjects){
      app.registerContract(contractObjects[i].type, contractObjects[i].location);
  }
  app.setDefaultFee(constants.fees.defaultFee, constants.defaultCurrency);

  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}
