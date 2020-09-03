var constants = require('../utils/constants.js');
module.exports = {
  registerClinic: async function(fName, lName, clinicName, email, phoneNo, dob, aadhar, addressLine1, addressLine2, city, pinCode, state, countryCode) {
    console.log("calling contract clinic: ", this);
    app.sdb.lock('clinic.registerClinic@' + email);
    app.sdb.create('Clinic', {
      fName: fName,
      lName: lName,
      clinicName: clinicName,
      email: email,
      phoneNo: phoneNo,
      dob: dob,
      aadhar: aadhar,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      pinCode: pinCode,
      state: state,
      countryCode: countryCode,
      timestamp: this.trs.timestamp,
      transactionId: this.trs.id
    });
  },
  mapClinicUser: async function(clinicId, loginEmail, userEmail, role) {
    console.log("calling contract clinic: ", this);
    app.sdb.lock('clinic.mapClinicUser@' + userEmail );
    app.sdb.create('Clinicuser', {
      clinicId: clinicId,
      loginEmail: loginEmail,
      userEmail: userEmail,
      role: role,
      cOn: new Date().getTime(),
      mOn: new Date().getTime(),
      transactionId: this.trs.id
    });
  },
  mapUsersLevel: async function(clinicId, userEmail, role, certificateType) {
    console.log("calling contract clinic: ", this);
    app.sdb.lock('clinic.mapUsersLevel@' + userEmail );
    app.sdb.create('Level', {
      clinicId: clinicId,
      userEmail: userEmail,
      role: role,
      certificateType: certificateType,
      level: (certificateType == "covid")? 1: 2,
      cOn: new Date().getTime(),
      mOn: new Date().getTime(),
      transactionId: this.trs.id
    });
  }
}
