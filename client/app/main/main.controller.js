'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.tickets = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('ticket');
      });
    }

    $onInit() {
      this.$http.get('/api/tickets')
        .then(response => {
          this.tickets = response.data;
          this.socket.syncUpdates('ticket', this.tickets);
        });
    }

    addTicket() {
      if (this.newTicket) {
        this.$http.post('/api/tickets', {
          name: this.newTicket
        });
        this.newTicket = '';
      }
    }

    deleteTicket(ticket) {
      this.$http.delete('/api/tickets/' + ticket._id);
    }
  }

  angular.module('redmartApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
