/*
  ~  Copyright 2016 Ripple Foundation C.I.C. Ltd
  ~  
  ~  Licensed under the Apache License, Version 2.0 (the "License");
  ~  you may not use this file except in compliance with the License.
  ~  You may obtain a copy of the License at
  ~  
  ~    http://www.apache.org/licenses/LICENSE-2.0

  ~  Unless required by applicable law or agreed to in writing, software
  ~  distributed under the License is distributed on an "AS IS" BASIS,
  ~  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~  See the License for the specific language governing permissions and
  ~  limitations under the License.
*/
//libs
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import uiBootstrap from 'angular-ui-bootstrap';
import ngRedux from 'ng-redux';
import dirPagination from 'angular-utils-pagination';
import createLogger from 'redux-logger';
import 'angular-loading-bar';
import 'fullcalendar';
import 'angular-ui-calendar';
import 'jquery';

import 'morrisjs';
import 'chart.js';

import 'angular-spinner';
import 'jquery-timepicker-jt';
import 'angular-jquery-timepicker';

//commons
import reducer from './redux/reducer';
import actions from './actions';
import httpMiddleware from './helpers/httpMiddleware';
import Patient from './helpers/patient';

//components 
import ProfileComponent from './rippleui/pages/profile/profile.component';
import HeaderComponent from './rippleui/header-bar/header.component.js';
import PatientsChartsComponent from './rippleui/pages/patients-charts/patients-charts.component';
import PatientsComponent from './rippleui/pages/patients-list/patients.component';
import PatientsSummaryComponent from './rippleui/pages/patient-summary/patients-summary.component';
import PatientsListFullComponent from './rippleui/pages/patients-list-full/patients-list-full.component';
import PatientsSidebarComponent from './rippleui/pages/patients-detail/patients-sidebar.component';
import PatientsBannerComponent from './rippleui/pages/patients-detail/patients-banner.component';
import SearchComponent from './rippleui/search/search.component';
import ReportChartComponent from './rippleui/search/report-chart.component';

import DiagnosesListComponent from './rippleui/pages/diagnoses/diagnoses-list.component';
import DiagnosesCreateComponent from './rippleui/pages/diagnoses/diagnoses-create.component';
import DiagnosesDetailComponent from './rippleui/pages/diagnoses/diagnoses-detail.component';

import AllergiesListComponent from './rippleui/pages/allergies/allergies-list.component';
import AllergiesCreateComponent from './rippleui/pages/allergies/allergies-create.component';
import AllergiesDetailComponent from './rippleui/pages/allergies/allergies-detail.component';

import MedicationsListComponent from './rippleui/pages/medications/medications-list.component';
import MedicationsCreateComponent from './rippleui/pages/medications/medications-create.component';
import MedicationsDetailComponent from './rippleui/pages/medications/medications-detail.component';

import ContactsListComponent from './rippleui/pages/contacts/contacts-list.component';
import ContactsCreateComponent from './rippleui/pages/contacts/contacts-create.component';
import ContactsDetailComponent from './rippleui/pages/contacts/contacts-detail.component';

import VaccinationsListComponent from './rippleui/pages/vaccinations/vaccinations-list.component';
import VaccinationsCreateComponent from './rippleui/pages/vaccinations/vaccinations-create.component';
import VaccinationsDetailComponent from './rippleui/pages/vaccinations/vaccinations-detail.component';

import VitalsListComponent from './rippleui/pages/vitals/vitals-list.component';
import VitalsCreateComponent from './rippleui/pages/vitals/vitals-create.component';
import VitalsDetailComponent from './rippleui/pages/vitals/vitals-detail.component';

import OrdersListComponent from './rippleui/pages/orders/orders-list.component';
import OrdersDetailComponent from './rippleui/pages/orders/orders-detail.component';
import OrdersCreateComponent from './rippleui/pages/orders/orders-create.component';

import ReferralsListComponent from './rippleui/pages/referrals/referrals-list.component';
import ReferralsDetailComponent from './rippleui/pages/referrals/referrals-detail.component';
import ReferralsCreateComponent from './rippleui/pages/referrals/referrals-create.component';

import ProceduresListComponent from './rippleui/pages/procedures/procedures-list.component';
import ProceduresDetailComponent from './rippleui/pages/procedures/procedures-detail.component';
import ProceduresCreateComponent from './rippleui/pages/procedures/procedures-create.component';

import ResultsListComponent from './rippleui/pages/results/results-list.component';
import ResultsDetailComponent from './rippleui/pages/results/results-detail.component';
import DocumentsListComponent from './rippleui/pages/documents/documents-list.component';
import DocumentsDetailComponent from './rippleui/pages/documents/documents-detail.component';
import AppointmentsListComponent from './rippleui/pages/appointments/appointments-list.component';
import AppointmentsDetailComponent from './rippleui/pages/appointments/appointments-detail.component';
import ImageListComponent from './rippleui/pages/dicom/image-list.component';
import ImageDetailComponent from './rippleui/pages/dicom/image-detail.component';
import EolcareplansListComponent from './rippleui/pages/care-plans/eolcareplans-list.component';
import EolcareplansDetailComponent from './rippleui/pages/care-plans/eolcareplans-detail.component';
import MainComponent from './helpers/main.component';
import HomeSidebarComponent from './rippleui/pages/patients-lookup/home-sidebar.component';

import ClinicalnotesListComponent from './rippleui/pages/clinical-notes/clinicalnotes-list.component';
import ClinicalnotesCreateComponent from './rippleui/pages/clinical-notes/clinicalnotes-create.component';
import ClinicalnotesDetailComponent from './rippleui/pages/clinical-notes/clinicalnotes-detail.component';

import HeightAndWeightListComponent from './rippleui/pages/height-and-weight/heightAndWeight-list.component';
import HeightAndWeightDetailComponent from './rippleui/pages/height-and-weight/heightAndWeight-detail.component';

import GenericMdtListComponent from './rippleui/pages/generic-mdt/generic-mdt-list.component';
import GenericMdtDetailComponent from './rippleui/pages/generic-mdt/generic-mdt-detail.component';
import GenericMdtCreateComponent from './rippleui/pages/generic-mdt/generic-mdt-create.component';

import TransferOfCareListComponent from './rippleui/pages/transfer-of-care/transfer-of-care-list.component';
import TransferOfCareDetailComponent from './rippleui/pages/transfer-of-care/transfer-of-care-detail.component';

import ServiceRequests from './services/serviceRequests.js';

import routeConfig from 'app/index.route';
import 'app/scss/core.scss';
import 'app/directives/index.js';
import 'app/rippleui/pages/personal-notes/index.js';

const app = angular
    .module('ripple-ui', [
        uiRouter,
        ngAnimate,
        uiBootstrap,
        ngRedux,
        actions,
        dirPagination,
        'ripple-ui.personal',
        'ripple-ui.directives',
        'angularSpinner',
        'ui.calendar',
        'ui.timepicker',
        'angular-loading-bar'
    ])
    .factory('httpMiddleware', httpMiddleware)
    .factory('Patient', Patient)
    .service('serviceRequests', ServiceRequests)
    .component('profileComponent', ProfileComponent)
    .component('patientsComponent', PatientsComponent)
    .component('headerComponent', HeaderComponent)
    .component('patientsChartsComponent', PatientsChartsComponent)
    .component('patientsSummaryComponent', PatientsSummaryComponent)
    .component('patientsSidebarComponent', PatientsSidebarComponent)
    .component('patientsBannerComponent', PatientsBannerComponent)

    .component('diagnosesListComponent', DiagnosesListComponent)
    .component('diagnosesCreateComponent', DiagnosesCreateComponent)
    .component('diagnosesDetailComponent', DiagnosesDetailComponent)

    .component('allergiesListComponent', AllergiesListComponent)
    .component('allergiesCreateComponent', AllergiesCreateComponent)
    .component('allergiesDetailComponent', AllergiesDetailComponent)

    .component('medicationsListComponent', MedicationsListComponent)
    .component('medicationsCreateComponent', MedicationsCreateComponent)
    .component('medicationsDetailComponent', MedicationsDetailComponent)

    .component('contactsListComponent', ContactsListComponent)
    .component('contactsCreateComponent', ContactsCreateComponent)
    .component('contactsDetailComponent', ContactsDetailComponent)
    
    .component('vaccinationsListComponent', VaccinationsListComponent)
    .component('vaccinationsCreateComponent', VaccinationsCreateComponent)
    .component('vaccinationsDetailComponent', VaccinationsDetailComponent)

    .component('vitalsListComponent', VitalsListComponent)
    .component('vitalsCreateComponent', VitalsCreateComponent)
    .component('vitalsDetailComponent', VitalsDetailComponent)

    .component('ordersListComponent', OrdersListComponent)
    .component('ordersDetailComponent', OrdersDetailComponent)
    .component('ordersCreateComponent', OrdersCreateComponent)

    .component('referralsListComponent', ReferralsListComponent)
    .component('referralsDetailComponent', ReferralsDetailComponent)
    .component('referralsCreateComponent', ReferralsCreateComponent)


    .component('proceduresListComponent', ProceduresListComponent)
    .component('proceduresDetailComponent', ProceduresDetailComponent)
    .component('proceduresCreateComponent', ProceduresCreateComponent)

    .component('patientsListFullComponent', PatientsListFullComponent)
    .component('resultsListComponent', ResultsListComponent)
    .component('resultsDetailComponent', ResultsDetailComponent)
    .component('documentsListComponent', DocumentsListComponent)
    .component('documentsDetailComponent', DocumentsDetailComponent)
    .component('appointmentsListComponent', AppointmentsListComponent)
    .component('appointmentsDetailComponent', AppointmentsDetailComponent)
    .component('imageListComponent', ImageListComponent)
    .component('imageDetailComponent', ImageDetailComponent)
    .component('eolcareplansListComponent', EolcareplansListComponent)
    .component('eolcareplansDetailComponent', EolcareplansDetailComponent)
    .component('mainComponent', MainComponent)
    .component('homeSidebarComponent', HomeSidebarComponent)
    .component('searchComponent', SearchComponent)
    .component('reportChartComponent', ReportChartComponent)

    .component('clinicalnotesListComponent', ClinicalnotesListComponent)
    .component('clinicalnotesCreateComponent', ClinicalnotesCreateComponent)
    .component('clinicalnotesDetailComponent', ClinicalnotesDetailComponent)

    .component('heightAndWeightListComponent', HeightAndWeightListComponent)
    .component('heightAndWeightDetailComponent', HeightAndWeightDetailComponent)
    
    .component('genericMdtListComponent', GenericMdtListComponent)
    .component('genericMdtDetailComponent', GenericMdtDetailComponent)
    .component('genericMdtCreateComponent', GenericMdtCreateComponent)
    
    .component('transferOfCareListComponent', TransferOfCareListComponent)
    .component('transferOfCareDetailComponent', TransferOfCareDetailComponent)
    .config(routeConfig)
    .config(function (paginationTemplateProvider) {
        paginationTemplateProvider.setString(require('./rippleui/pagination/dirPagination.tpl.html'));
    })
    .config(['$ngReduxProvider', $ngReduxProvider => {
        const middleware = ['httpMiddleware'];

        if (process.env.NODE_ENV === 'development') {
            middleware.push(createLogger({
                level: 'info',
                collapsed: true
            }));
        }

        $ngReduxProvider.createStoreWith(reducer, middleware);
    }])
    .config(['cfpLoadingBarProvider', cfpLoadingBarProvider => {
        cfpLoadingBarProvider.includeSpinner = false;
    }])
    .filter('formatNHSNumber', function() {
        return function(number) {
            if (number === undefined) {
                return;
            }

            return number.slice(0,3) + " " + number.slice(3,6) + " " + number.slice(6);
        };
    })
    .filter('formatMoment', function() {
        return function(date) {
            var m = moment(date);
            return m.format('h:mma');
        };
    });
console.log('app start');