(function(){
  'use strict';

  angular.module('ProviderApp',[])
  .controller('ServiceTaxController',ServiceTaxController)
  .provider('ServiceTaxProService',ServiceTaxProviderFunction);  // regiter the provider to the angular module
  // .config(Config);
  // register the config to the angular module
  //Guaranteed to execute before any controller, service etc is initialzed

  // Config.$inject =['ServiceTaxProServiceProvider']; //append "Provider" to name
  //Inject the service provider into the Config
  // function Config(ServiceTaxProServiceProvider){
  //   ServiceTaxProServiceProvider.defaults.taxRate = 0.10; //10%  ensures that the taxRate remains 10% till the lifetine of the app
  // }

  // inject the service
  ServiceTaxController.$inject = ['ServiceTaxProService'];
  // define the conroller
  function  ServiceTaxController(ServiceTaxProService){
    var controller = this;
    controller.amount = "";
    controller.tax ="";

    controller.calculateTax = function(){
      // delegate the business logic to the Service
      controller.tax = ServiceTaxProService.calculateTax(controller.amount);
    }
  }

  // Service definition class
  function ServiceTaxCalculation(taxRate){
    var service = this;

    service.calculateTax = function(chargeAmount){
      if(taxRate == undefined) {
        taxRate = 0.05
        console.log('taxrate is undefined');
      }
      return taxRate * chargeAmount;
    }
  }

  function ServiceTaxProviderFunction()
  {
    var provider = this;
    //used for later in the config
    provider.defaults = {
      taxRate : 0.15
    }
    provider.$get = function(){
      var service = new ServiceTaxCalculation(provider.defaults.taxRate);
      return service;
    }
  }

})();
