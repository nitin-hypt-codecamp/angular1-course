(function(){
  'use strict';

  angular.module('ServiceApp',[])
  .controller('ServiceTaxController',ServiceTaxController)
  .controller('NetInvoiceController',NetInvoiceController)
  .service('ServiceTaxCalculationService',ServiceTaxCalculationService);
  // regiter the service to the angular module

  ServiceTaxController.$inject = ['ServiceTaxCalculationService'];
  // inject the service

  // define the conroller
  function  ServiceTaxController(ServiceTaxCalculationService){
    var controller = this;
    controller.amount = 0;
    controller.tax = 0;

    controller.calculateTax = function(){
      ServiceTaxCalculationService.chargeAmount = controller.amount;
      // delegate the business logic to the Service
      controller.tax = ServiceTaxCalculationService.calculateTax();
    }
  }

  NetInvoiceController.$inject = ['ServiceTaxCalculationService'];
  // inject the service
  // define the conroller
  function  NetInvoiceController(ServiceTaxCalculationService){
    var controller = this;
    controller.invoiceAmount = 0;

    controller.getInvoice = function(){
      // delegate the business logic to the Service
      controller.invoiceAmount = ServiceTaxCalculationService.getInvoiceAmount();
    }
  }

  // Service definition function - the service function is used as a constructor
  function ServiceTaxCalculationService(){
    var service = this;
    service.chargeAmount = 0; //net amount, public and shared between controllers
    var tax =  0; //internal to the service, but once set value is retained
    var invoiceAmount = 0;

    service.calculateTax = function(){
      tax = 0.05 * service.chargeAmount;
      return tax;
    }

    service.getInvoiceAmount = function(){
      console.log(tax);
      console.log(service.chargeAmount);
      invoiceAmount = parseFloat(service.chargeAmount) + parseFloat(tax);
       return invoiceAmount;
    }
    
  }

})();
