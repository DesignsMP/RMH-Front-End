var express = require('express');
var router = express.Router();
var Person = require('../controllers/personController');
var Room = require('../controllers/roomController');
var Registration = require('../controllers/registrationController');
var Donation = require('../controllers/donationController');
var Guest = require('../controllers/guestController');
var Patient = require('../controllers/patientController');
var Staff = require('../controllers/staffController');
var Dashboard = require('../controllers/dashboardController');

router.get('/', Dashboard.index); //landing page

//Person Routes
///////////////////////////////////////////////

router.get('/Person/create', Person.person_create_get);

router.post('/Person/create', Person.person_create_post);

router.get('/Person/:id/delete', Person.person_delete_get);

router.post('/Person/:id/delete', Person.person_delete_post);

router.get('/Person/:id/update', Person.person_update_get);

router.post('/Person/:id/update', Person.person_update_post);

router.get('/Person/:id', Person.person_read);

router.get('/Person', Person.person_list)

//Room Routes
///////////////////////////////////////////////
router.get('/Room/create', Room.room_create_get);

router.post('/Room/create', Room.room_create_post);

router.get('/Room/:id/delete', Room.room_delete_get);

router.post('/Room/:id/delete', Room.room_delete_post);

router.get('/Room/:id/update', Room.room_update_get);

router.post('/Room/:id/update', Room.room_update_post);

router.get('/Room/:id', Room.room_read);

router.get('/Room', Room.room_list)

//Registration Routes
///////////////////////////////////////////////

router.get('/Registration/create', Registration.registration_create_get);

router.post('/Registration/create', Registration.registration_create_post);

router.get('/Registration/:id/delete', Registration.registration_delete_get);

router.post('/Registration/:id/delete', Registration.registration_delete_post);

router.get('/Registration/:id/update', Registration.registration_update_get);

router.post('/Registration/:id/update', Registration.registration_update_post);

router.get('/Registration/:id', Registration.registration_read);

router.get('/Registration', Registration.registration_list)

//Donation Routes
///////////////////////////////////////////////

router.get('/Donation/create', Donation.donation_create_get);

router.post('/Donation/create', Donation.donation_create_post);

router.get('/Donation/:id/delete', Donation.donation_delete_get);

router.post('/Donation/:id/delete', Donation.donation_delete_post);

router.get('/Donation/:id/update', Donation.donation_update_get);

router.post('/Donation/:id/update', Donation.donation_update_post);

router.get('/Donation/:id', Donation.donation_read);

router.get('/Donation', Donation.donation_list)

//Guest Routes
///////////////////////////////////////////////

router.get('/Guest/create', Guest.guest_create_get);

router.post('/Guest/create', Guest.guest_create_post);

router.get('/Guest/:id/delete', Guest.guest_delete_get);

router.post('/Guest/:id/delete', Guest.guest_delete_post);

router.get('/Guest/:id/update', Guest.guest_update_get);

router.post('/Guest/:id/update', Guest.guest_update_post);

router.get('/Guest/:id', Guest.guest_read);

router.get('/Guest', Guest.guest_list)

//Patient Routes
///////////////////////////////////////////////

router.get('/Patient/create', Patient.patient_create_get);

router.post('/Patient/create', Patient.patient_create_post);

router.get('/Patient/:id/delete', Patient.patient_delete_get);

router.post('/Patient/:id/delete', Patient.patient_delete_post);

router.get('/Patient/:id/update', Patient.patient_update_get);

router.post('/Patient/:id/update', Patient.patient_update_post);

router.get('/Patient/:id', Patient.patient_read);

router.get('/Patient', Patient.patient_list)

//Staff Routes
///////////////////////////////////////////////

router.get('/Staff/create', Staff.staff_create_get);

router.post('/Staff/create', Staff.staff_create_post);

router.get('/Staff/:id/delete', Staff.staff_delete_get);

router.post('/Staff/:id/delete', Staff.staff_delete_post);

router.get('/Staff/:id/update', Staff.staff_update_get);

router.post('/Staff/:id/update', Staff.staff_update_post);

router.get('/Staff/:id', Staff.staff_read);

router.get('/Staff', Staff.staff_list)

/////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;